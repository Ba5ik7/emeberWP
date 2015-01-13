Emberwp.Profolio = DS.Model.extend({

    attachments: DS.attr('object'),
    
    author: DS.attr('object'),
    
    categories: DS.attr('object'),
    
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

    thumbnail: DS.attr('string'),

    thumbnail_images: DS.attr('object'),

    thumbnail_size: DS.attr('string'),
    
    title: DS.attr('object'),
    
    title_plain: DS.attr('object'),
    
    type: DS.attr('string'),

    url: DS.attr('string')
});

Emberwp.ProfolioAdapter = DS.RESTAdapter.extend({

    findAll: function(store, type, record) {

        var _promise = new Ember.RSVP.Promise(function(resolve, reject) {
        
            jQuery.ajax({
        
                type: 'GET',
        
                url: Emberwp.BASE_URL + 'get_category_posts/?id=4',
        
                dataType: 'json',
        
            }).then(function(data) {

                delete data.status;
                delete data.count;
                delete data.pages;
                delete data.category;

                data =  '{ "experiment" : ' + JSON.stringify(data.posts) + '}';

                data = jQuery.parseJSON( data);
        
                Ember.run(null, resolve, data);
        
                }, function(jqXHR) {
        
                jqXHR.then = null;
        
                Ember.run(null, reject, jqXHR);
        
            })
        });

        return _promise;
    }
});
