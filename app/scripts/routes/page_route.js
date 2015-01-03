Emberwp.PageRoute = Ember.Route.extend({
    
    model: function( params ) {

        return this.store.find('page', params.page_id);

        // var self = this;

        // self.postID = params.page_id

        // return this.store.filter('pages', function(item){

        //          if (item.id == self.postID) {

        //             return item;
        //         };
        // });
    },

    renderTemplate: function(controller, model) {

        this.render("page", {
        
            outlet: "centercontent",
          
            into: "application"
        
        });

    }
});
