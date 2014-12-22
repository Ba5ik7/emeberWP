Emberwp.PageRoute = Ember.Route.extend({
    
    model: function( params ) {

        return this.store.find('pages', params.page_id);

    },

    renderTemplate: function(controller, model) {


        this.render("page", {
        
            outlet: "centercontent",
          
            into: "application"
        
        });

    }
});
