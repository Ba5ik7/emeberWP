Emberwp.IndexRoute = Ember.Route.extend({

    beforeModel: function(){

        this.transitionTo('posts');

    }

});