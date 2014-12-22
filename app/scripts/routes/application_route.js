Emberwp.ApplicationRoute = Ember.Route.extend({

    model: function(model) {

        var self = this;
    
        return new Em.RSVP.Promise(function (resolve, reject) {
    
            new Em.RSVP.hash({

                pages : self.store.find('pages')
                
            }).then(function (results) {

                resolve({

                    pages: results.pages
                                   
                }, function (error){

                    console.log("error on call", error);

                });
            });
        });
    },

    renderTemplate: function(model ){

        this.render();
    }
});
