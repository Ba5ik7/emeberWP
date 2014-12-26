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
                toastr.error('Sorry pal, that is not a valid <strong>user name</strong>.');
            };
        },
        checkEmailTip: function(){
            if (this.emailValid) {
                toastr.success('Alright champ, that <strong>email</strong> checks out.');
            } else{
                toastr.error('Sorry pal, that is not a valid <strong>email</strong>.');
            };
        },
        checkPasswordTip: function(){
            if (this.passwordValid) {
                toastr.success('Alright champ, that <strong>password</strong> checks out.');
            } else{
                toastr.error('Sorry pal, that is not a valid <strong>password</strong>.');
            };
        },
        checkConfirmPasswordTip: function(){
            if (this.confirmPassword) {
                toastr.success('Alright champ, the <strong>passwords</strong> mtach.');
            } else{
                toastr.error('Sorry pal, the <strong>passwords</strong> do not match.');
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

            if ( this.whatToValidate == 'signin' ) {

                if ( this.emailValid && this.passwordValid ) {

                    console.log("signin preFlight");

                }else{
                    toastr.warning('Sorry, the form is not complete');
                };
            };

            if (this.whatToValidate == 'signup') {

                if ( this.userNameValid && this.emailValid && this.confirmPasswordValid && this.passwordValid ) {

                    console.log("signup preFlight");

                }else {
                    toastr.warning('Sorry, the form is not complete');
                };
            };

            if (this.whatToValidate == 'forgot') {

                if ( this.emailValid ) {

                    console.log("forgot preFlight");

                }else{
                    toastr.warning('Sorry, the form is not complete');
                };
            };
        }
    },

    resetForm: function(){

        this.whatToValidate = '';

        this.userName = '';

        this.email = '';

        this.password = '';

        this.confirmPassword = '';

        this.userNameValid = false;

        this.userNameValid = false;

        this.emailValid = false;

        this.passwordValid = false;

        this.confirmPasswordValid = false;

    }

});