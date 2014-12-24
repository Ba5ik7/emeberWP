Emberwp.ValidationController = Ember.ObjectController.extend({

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

        this.validate();
    
    }.observes('userName'),

    emailObserver: function() {

        this.validate();

    }.observes('email'),

    passwordObserver: function() {

        this.validate();
    
    }.observes('password'),

    confirmPasswordObserver: function() {

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

            console.log("signin made it");

            if ( this.emailValid && this.passwordValid ) {

                console.log("signin preFlight");

            };
        };

        if (this.whatToValidate == 'signup') {

            console.log("signup made it");

            if ( this.userNameValid && this.emailValid && this.confirmPasswordValid ) {

                console.log("signin preFlight");

            };
        };

        if (this.whatToValidate == 'forgot') {

            console.log("forgot made it");

            if ( this.emailValid ) {

                console.log("signin preFlight");

            };
        };
    },

    resetForm: function(){

        this.whatToValidate = '';

        this.userName = '';

        this.email = '';

        this.password = '';

        this.confirmPassword = '';

        userNameValid = false;

        userNameValid = false;

        emailValid = false;

        passwordValid = false;

        confirmPasswordValid = false;

    }
});