Emberwp.PostsRoute = Ember.Route.extend({

    model: function() {

        return this.store.all('posts');

    },

    renderTemplate: function() {
        
        this.render("posts", {
        
            outlet: "centercontent",
          
            into: "application"
        
        });

    }
});
