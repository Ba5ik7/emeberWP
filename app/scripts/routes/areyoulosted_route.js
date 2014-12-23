Emberwp.AreyoulostedRoute = Ember.Route.extend({
    
    beforeModel: function() {
    
        this.transitionTo('posts');
    
    }
});