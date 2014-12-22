Emberwp.LoadingRoute = Ember.Route.extend({
  
  renderTemplate: function() {
  
    this.render('modals/loading', {
  
      outlet: 'loading',
  
      into: 'application'
  
    });
  }
});