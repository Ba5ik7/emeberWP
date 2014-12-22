Emberwp.Posts = DS.Model.extend({

    title: DS.attr('string'),

    author: DS.attr('object'),

    comment_status: DS.attr('string'),

    content: DS.attr('string'),

    date: DS.attr('string'),

    date_gmt: DS.attr('string'),

    date_tz: DS.attr('string'),

    excerpt: DS.attr('string'),

    featured_image: DS.attr('string'),

    format: DS.attr('string'),

    guid: DS.attr('string'),

    link: DS.attr('string'),

    menu_order: DS.attr('number'),

    meta: DS.attr('object'),

    modified: DS.attr('string'),

    modified_gmt: DS.attr('string'),

    modified_tz: DS.attr('string'),

    parent: DS.attr('number'),

    ping_status: DS.attr('string'),

    slug: DS.attr('string'),

    status: DS.attr('string'),

    sticky: DS.attr('boolean'),

    terms: DS.attr('object'),

    title: DS.attr('string'),

    type: DS.attr('string')
});

Emberwp.PostSerializer = DS.JSONSerializer.extend({

    primaryKey: 'ID',

});


Emberwp.PostAdapter = DS.RESTAdapter.extend({

    namespace: 'wp-json/posts',

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
