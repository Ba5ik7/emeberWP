Emberwp.PostRoute = Ember.Route.extend({

    postID: null,

    model: function(params) {

        var self = this;

        self.postID = params.post_id;

        return this.store.filter('posts', function(item){
                 
                 if (item.id == self.postID) {

                    return item;
                };
        });
    },


    renderTemplate: function() {
        
        this.render("post", {
        
            outlet: "centercontent",
          
            into: "application"
        
        });

    }
});
