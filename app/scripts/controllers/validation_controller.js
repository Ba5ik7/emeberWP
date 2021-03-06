Emberwp.ValidationController = Ember.ObjectController.extend({

    passwordReg : /^(?=.*[0-9])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*.,<>~`\}\{\[\]\+\=\-\_\(\)\"\'\:\;\?\/]{2,32}$/,

    emailReg : /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,

    userNameValid : false,
    
    emailValid : false,
    
    passwordValid : false,
    
    confirmPasswordValid : false,

    whatToValidate: null,

    userNameTxt: null,

    emailTxt:null,

    passwordTxt:null,

    confirmPasswordTxt: null,

    userNameObserver: function() {

        this.userNameValid = this.get('userNameTxt') != "" ? true : false;

        this.userNameValid ? $('#username').removeClass('bad-value').addClass('good-value') : $('#username').removeClass('good-value').addClass('bad-value');
    
    }.observes('userNameTxt'),

    emailObserver: function() {

        this.emailValid = this.emailReg.test( this.get('emailTxt'))  ? true : false;

        this.emailValid ? $('#userEmail').removeClass('bad-value').addClass('good-value') : $('#userEmail').removeClass('good-value').addClass('bad-value');

    }.observes('emailTxt'),

    passwordObserver: function() {

        this.passwordValid = this.passwordReg.test( this.get('passwordTxt')) ? true : false;

        this.passwordValid ? $('#password').removeClass('bad-value').addClass('good-value') : $('#password').removeClass('good-value').addClass('bad-value');
    
    }.observes('passwordTxt'),

    confirmPasswordObserver: function() {

        this.confirmPasswordValid = this.get('confirmPasswordTxt') == this.get('passwordTxt') ? true : false;

        this.confirmPasswordValid ? $('#confirmPassword').removeClass('bad-value').addClass('good-value') : $('#confirmPassword').removeClass('good-value').addClass('bad-value');
    
    }.observes('confirmPasswordTxt'),

    actions: {

        emailTip:function(){
            toastr.info('Please use a valid email.');
        },
        usernameTip:function(){
            toastr.info('Use any name you would like to.');
        },
        passwordTip:function(){
            toastr.info('Password must contain an upper case letter, a number and, 5 to 33 characters');
        },

        checkUsernameTip: function(){
            if (this.userNameValid) {
                toastr.success('Alright champ, that <strong>user name</strong> checks out.');
            } else{
                toastr.error('Sorry, that is not a valid <strong>user name</strong>.');
            };
        },
        checkEmailTip: function(){
            if (this.emailValid) {
                toastr.success('Alright champ, that <strong>email</strong> checks out.');
            } else{
                toastr.error('Sorry, that is not a valid <strong>email</strong>.');
            };
        },
        checkPasswordTip: function(){
            if (this.passwordValid) {
                toastr.success('Alright champ, that <strong>password</strong> checks out.');
            } else{
                toastr.error('Sorry, that is not a valid <strong>password</strong>.');
            };
        },
        checkConfirmPasswordTip: function(){
            if (this.confirmPasswordValid) {
                toastr.success('Alright champ, the <strong>passwords</strong> mtach.');
            } else{
                toastr.error('Sorry, the <strong>passwords</strong> do not match.');
            };
        },

        forgotPassword: function(){

            this.resetForm();

            this.send('openModal', 'forgot', 'validation');

        },

        signUp: function(){

            this.resetForm();

            this.send('openModal', 'signup', 'validation');

        },

        signIn: function(){

            this.resetForm();

            this.send('openModal', 'signin', 'validation');

        },

        submit: function(){

            var _this = this;

            this.store.init();

            Emberwp.LOGIN_TYPE = this.whatToValidate;

            if ( this.whatToValidate == 'signin' ) {

                if ( this.emailValid && this.passwordValid ) {

                    console.log("signin preFlight");

                }else{
                    toastr.warning('Sorry, the form is not complete');
                };
            };

            if (this.whatToValidate == 'signup') {

                if ( this.userNameValid && this.emailValid && this.confirmPasswordValid && this.passwordValid ) {

                    this.get('store').findAll('nonce').then(function(data){

                        _this.get('store').filter('nonce', function(record) {

                            Emberwp.USER_OBJ.nonce = record.get('nonce');

                            Emberwp.USER_OBJ.userNameTxt = _this.get('userNameTxt');

                            Emberwp.USER_OBJ.emailTxt = _this.get('emailTxt');

                            Emberwp.USER_OBJ.passwordTxt  = _this.get('passwordTxt');

                            _this.get('store').findAll('user_session').then(function(data){

                                _this.get('store').filter('user_session', function(record) {

                                    if(record.get('status') == 'error'){

                                        toastr.clear();

                                        toastr.warning( record.get('error')  );

                                    } else {

                                        $('#logIn').css('display', 'none');

                                        console.log("");

                                        window.storagejs.setItem( 'user_session', '{ "cookie" : ' + JSON.stringify(  record.get('cookie') ) + '}'  ); 

                                        _this.send('closeModal');
                                    }
                                });
                            });
                        });
                    });

                }else {

                    toastr.clear();

                    toastr.warning('Sorry, the form is not complete');
                };
            };

            if (this.whatToValidate == 'forgot') {

                if ( this.emailValid ) {

                    Emberwp.USER_OBJ.emailTxt = _this.get('emailTxt');

                    _this.get('store').findAll('user_session').then(function(data){

                        _this.get('store').filter('user_session', function(record) {

                            toastr.clear();

                            toastr.warning( record.get('error')  );

                            _this.resetForm();

                            _this.send('closeModal');
                        });
                    });

                }else{
                    toastr.warning('Sorry, the form is not complete');
                };
            };
        }
    },

    resetForm: function(){

        toastr.clear();

        this.whatToValidate = '';

        this.userNameTxt = '';

        this.emailTxt = '';

        this.passwordTxt = '';

        this.confirmPasswordTxt = '';

        this.userNameValid = false;

        this.userNameValid = false;

        this.emailValid = false;

        this.passwordValid = false;

        this.confirmPasswordValid = false;
    }
});