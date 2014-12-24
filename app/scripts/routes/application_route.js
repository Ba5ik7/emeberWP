Emberwp.ApplicationRoute = Ember.Route.extend({

    actions: {

        error: function(error, transition) {

            // Manage your errors
            Ember.onerror(error);

            // substate implementation when returning `true`
            return true;
        },

        openModal: function(modalName, controllerName, content) {

            if ( typeof controllerName != 'undefined') {

                this.controllerFor(controllerName).set('content',content);
                
                var controller = this.controllerFor(controllerName);
                
                return this.render( modalName, {
                
                    into: 'application',
                
                    outlet: 'modal',

                    controller: controller
                 
                }); 
            }

            return this.render( modalName, {
            
                into: 'application',
            
                outlet: 'modal'
             
            }); 
        },

        closeModal: function() {
            
            return this.disconnectOutlet({
            
                outlet: 'modal',
            
                parentView: 'application'
            
            });
        }


    },

    model: function(model) {

        var self = this;
    
        return new Em.RSVP.Promise(function (resolve, reject) {
    
            new Em.RSVP.hash({

                pages : self.store.find('pages'),
                
                posts : self.store.find('posts')
                
            }).then(function (results) {

                resolve({

                    pages: results.pages,
                    
                    posts: results.posts
               
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