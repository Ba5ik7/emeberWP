Emberwp.PostsRoute = Ember.Route.extend({

    model: function() {

        return this.store.all('post');

    },

    renderTemplate: function() {
        
        this.render("posts", {
        
            outlet: "centercontent",
          
            into: "application"
        
        });

    }
});
