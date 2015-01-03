Emberwp.UserSession = DS.Model.extend({

    status: DS.attr('string'),
    
    error: DS.attr('string'),

    cookie: DS.attr('string'),
    
    user_id: DS.attr('string')
  
});

Emberwp.UserSessionAdapter = DS.RESTAdapter.extend({

    findAll: function(store, type, record) {

        var url = "";

        console.log("Emberwp.LOGIN_TYPE", Emberwp.LOGIN_TYPE);

        if (Emberwp.LOGIN_TYPE == 'forgot')
            url = Emberwp.BASE_URL + 'user/retrieve_password/?user_login=' + Emberwp.USER_OBJ.emailTxt;

        if (Emberwp.LOGIN_TYPE == 'signup')
            url = Emberwp.BASE_URL + 'user/register/?username=' + Emberwp.USER_OBJ.userNameTxt + '&email=' + Emberwp.USER_OBJ.emailTxt + '&nonce=' + Emberwp.USER_OBJ.nonce + '&display_name=' + Emberwp.USER_OBJ.userNameTxt + '&user_pass=' + Emberwp.USER_OBJ.passwordTxt;
        
        if (Emberwp.LOGIN_TYPE == 'signin')
            url = Emberwp.BASE_URL + 'user/register/?username=' + Emberwp.USER_OBJ.userNameTxt + '&email=' + Emberwp.USER_OBJ.emailTxt + '&nonce=' + Emberwp.USER_OBJ.nonce + '&display_name=' + Emberwp.USER_OBJ.userNameTxt + '&user_pass=' + Emberwp.USER_OBJ.passwordTxt;
        

        var _promise = new Ember.RSVP.Promise(function(resolve, reject) {
        
            jQuery.ajax({
        
                type: 'GET',
        
                url: url,

                dataType: 'json',
        
            }).then(function(data) {

                    data.id = 1;

                    var tempStr = JSON.stringify(  data );

                    tempStr = '{ "user_session" : [' + tempStr + '] }';

                    data = JSON.parse(tempStr);
            
                    Ember.run(null, resolve, data);
        
                }, function(jqXHR) {
            
                    jqXHR.then = null;
            
                    Ember.run(null, reject, jqXHR);
            })
        });

        return _promise;
    }
});