Emberwp.Comments = DS.Model.extend({

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

Emberwp.CommentSerializer = DS.JSONSerializer.extend({

    primaryKey: 'ID',

});


Emberwp.CommentAdapter = DS.RESTAdapter.extend({

    host: Emberwp.BASE_URL,

    //Takes the records name out of the call
    buildURL : function(record, suffix, id){

            var url = 'wp-json/posts/' + Emberwp.CURRENT_POST_ID + '/comments/';
            
            return this._super(url);
    },

    //tells ember to fuck off when forming the URL 
    pathForType: function(type) {

        return type;
    }
});
