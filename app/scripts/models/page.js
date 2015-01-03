Emberwp.Page = DS.Model.extend({

    attachments: DS.attr('object'),
    
    author: DS.attr('object'),
    
    categories: DS.attr('object'),

    children: DS.attr('object'),

    comment_count: DS.attr('number'),
    
    comment_status: DS.attr('string'),
    
    comments: DS.attr('object'),
    
    content: DS.attr('string'),
    
    custom_fields: DS.attr('object'),
    
    date: DS.attr('string'),

    excerpt: DS.attr('string'),

    modified: DS.attr('string'),
    
    slug: DS.attr('string'),

    status: DS.attr('string'),
    
    tags: DS.attr('object'),

    title: DS.attr('object'),
    
    title_plain: DS.attr('object'),
    
    type: DS.attr('string'),

    url: DS.attr('string')
});

Emberwp.PageAdapter = DS.RESTAdapter.extend({
    
    findAll: function(store, type, record) {

        var _promise = new Ember.RSVP.Promise(function(resolve, reject) {
        
            jQuery.ajax({
        
                type: 'GET',
        
                url: Emberwp.BASE_URL + 'get_page_index/',
        
                dataType: 'json',
        
            }).then(function(data) {

                delete data.status;
        
                Ember.run(null, resolve, data);
        
                }, function(jqXHR) {
        
                jqXHR.then = null;
        
                Ember.run(null, reject, jqXHR);
        
            })  
        });

        return _promise;
    }
});
