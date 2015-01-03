Emberwp.PostRoute = Ember.Route.extend({

    postID: null,

    model: function(params) {

        var self = this;

        Emberwp.CURRENT_POST_ID  = params.post_id;

        return this.store.filter('post', function(item){
                 
                 if (item.id == Emberwp.CURRENT_POST_ID ) {

                    return item;
                };
        });
    },


    renderTemplate: function(controller, model) {

        this.render("post", {
        
            outlet: "centercontent",
          
            into: "application"
        
        });

    }
});
