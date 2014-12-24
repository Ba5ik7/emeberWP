Emberwp.ValidationController = Ember.ObjectController.extend({

    passwordReg : /^(?=.*[0-9])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*.,<>~`\}\{\[\]\+\=\-\_\(\)\"\'\:\;\?\/]{2,32}$/,

    emailReg : /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,

    userNameValid : false,
    
    emailValid : false,
    
    passwordValid : false,
    
    confirmPasswordValid : false,

    whatToValidate: null,

    userName: null,

    email:null,

    password:null,

    confirmPassword: null,

    userNameObserver: function() {

        this.userNameValid = this.get('userName') != "" ? true : false;

        this.validate();
    
    }.observes('userName'),

    emailObserver: function() {

        this.emailValid = this.emailReg.test( this.get('email'))  ? true : false;

        this.validate();

    }.observes('email'),

    passwordObserver: function() {

        this.passwordValid = this.passwordReg.test( this.get('password')) ? true : false;

        this.validate();
    
    }.observes('password'),

    confirmPasswordObserver: function() {

        this.confirmPasswordValid = this.get('confirmPassword') == this.get('password') ? true : false;

        this.validate();
    
    }.observes('confirmPassword'),

    actions: {

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

        }
    },

    validate: function(){

        if ( this.whatToValidate == 'signin' ) {

            if ( this.emailValid && this.passwordValid ) {

                console.log("signin preFlight");

            };
        };

        if (this.whatToValidate == 'signup') {

            if ( this.userNameValid && this.emailValid && this.confirmPasswordValid && this.passwordValid ) {

                console.log("signup preFlight");

            };
        };

        if (this.whatToValidate == 'forgot') {

            if ( this.emailValid ) {

                console.log("forgot preFlight");

            };
        };
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