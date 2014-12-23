Emberwp.ApplicationView = Ember.View.extend({

    didInsertElement: function() {
        
            $('nav ul li').css('margin-top', '-50px');
    },

    animateIn : function (done) {
            TweenMax.staggerTo("nav ul li", .5, {force3D:true,  marginTop:'0', ease:Back.easeOut }, .1, done);
    },

    animateOut : function (done) {
        done();
    }
});