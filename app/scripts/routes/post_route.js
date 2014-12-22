Emberwp.PostRoute = Ember.Route.extend({

    model: function() {

        return this.store.find('posts');

    },

    renderTemplate: function() {
        
        this.render("post", {
        
            outlet: "centercontent",
          
            into: "application"
        
        });

    }
});
