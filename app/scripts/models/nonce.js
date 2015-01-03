Emberwp.Nonce = DS.Model.extend({

    status: DS.attr('string'),

    controller: DS.attr('string'),

    method: DS.attr('string'),

    nonce: DS.attr('string')

});

Emberwp.NonceAdapter = DS.RESTAdapter.extend({

    findAll: function(store, type, record) {

        var _promise = new Ember.RSVP.Promise(function(resolve, reject) {
        
            jQuery.ajax({
        
                type: 'GET',
        
                url: Emberwp.BASE_URL + 'get_nonce/?controller=user&method=register',
        
                dataType: 'json',
        
            }).then(function(data) {

                data.id = 1;

                var tempStr = JSON.stringify(  data );

                tempStr = '{ "nonce" : [' + tempStr + ']}';

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