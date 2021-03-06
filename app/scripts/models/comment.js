Emberwp.Comment = DS.Model.extend({

    post: DS.attr('number'),
    
    content: DS.attr('string'),

    status: DS.attr('string'),
    
    type: DS.attr('string'),
    
    parent: DS.attr('number'),

    author: DS.attr('object'),

    date: DS.attr('string'),

    date_tz: DS.attr('string'),
    
    date_gmt: DS.attr('string'),

    meta: DS.attr('object')
  
});


Emberwp.CommentAdapter = DS.RESTAdapter.extend({
    
    findAll: function(store, type, record) {

        var _promise = new Ember.RSVP.Promise(function(resolve, reject) {
        
            jQuery.ajax({
        
                type: 'GET',
        
                url: Emberwp.BASE_URL + 'wp-json/posts/' + Emberwp.CURRENT_POST_ID + '/comments/',
        
                dataType: 'json',
        
            }).then(function(data) {

                var tempStr = JSON.stringify(  data );

                tempStr = '{ "comment" : ' + tempStr + '}';

                data = JSON.parse(tempStr);
        
                Ember.run(null, resolve, data);
        
                }, function(jqXHR) {
        
                jqXHR.then = null; // tame jQuery's ill mannered promises
        
                Ember.run(null, reject, jqXHR);
        
            })
        
        });

        return _promise;
    }

});

