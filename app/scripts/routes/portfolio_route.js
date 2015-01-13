Emberwp.PortfolioRoute = Ember.Route.extend({

   // model: function(model) {

   //      var self = this;
    
   //      return new Em.RSVP.Promise(function (resolve, reject) {
    
   //          new Em.RSVP.hash({

   //              experiment : self.store.findAll('experiment')
                
   //          }).then(function (results) {

   //              resolve({

   //                  experiment: results.experiment
               
   //              }, function (error){

   //                  console.log("error on call", error);

   //              });
   //          });
   //      });
   //  },


    renderTemplate: function() {
        
        this.render("portfolio", {
        
            outlet: "centercontent",
          
            into: "application"
        
        });

    }
});
