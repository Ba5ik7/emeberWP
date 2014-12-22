Emberwp.Pages = DS.Model.extend({

    title: DS.attr('string'),
    
    status: DS.attr('string'),

    type: DS.attr('string'),
    
    author: DS.attr('object'),
    
    content: DS.attr('string'),
    
    parent: DS.attr('number'),

    link: DS.attr('string'),

    date: DS.attr('string'),

    modified: DS.attr('string'),
    
    format: DS.attr('string'),

    slug: DS.attr('string'),
     
    guid: DS.attr('string'),

    excerpt: DS.attr('string'),

    menu_order: DS.attr('number'),

    comment_status: DS.attr('string'),
    
    ping_status: DS.attr('string'),
    
    sticky: DS.attr('boolean'),
    
    date_tz: DS.attr('string'),
    
    date_gmt: DS.attr('string'),
    
    modified_tz: DS.attr('string'),
    
    modified_gmt: DS.attr('string'),
    
    meta: DS.attr('object'),
    
    featured_image: DS.attr('string'),
    
    terms: DS.attr('object')
});

Emberwp.PageSerializer = DS.JSONSerializer.extend({

    primaryKey: 'ID',

});


Emberwp.PageAdapter = DS.RESTAdapter.extend({

    namespace: 'wp-json/pages',

    host: Emberwp.BASE_URL,

    //Takes the records name out of the call
    buildURL : function(record, suffix, id){

            var url;
            
            return this._super(url);
    },

    //tells ember to fuck off when forming the URL 
    pathForType: function(type) {

        return type;
    }

});
