Emberwp.SigninView = Ember.View.extend({

    templateName: 'modals/signin',

    didInsertElement: function() {

        this.get('controller').set('whatToValidate', 'signin');

         $('.modal').css({ opacity: '0',  'transform-origin':'top', transform:'rotateX(-90deg)', top:'-300px' });
    },

    animateIn : function (done) {
       TweenMax.to('.modal-overlay', .3, {opacity:'1'});
       TweenMax.to(".modal", .3, {css:{rotationX:0, opacity:'1',  scale:'1', top:0,}, transformPerspective:1200, ease:Sine.easeIn, onComplete:done });
    },

    animateOut : function (done) {
        TweenMax.to('.modal-overlay', .3, {opacity:'0'});
        TweenMax.to(".modal", .3, {css:{top:-300, opacity:'0', rotationX:-100}, transformPerspective:1200, ease:Sine.easeInt, onComplete:done});
    }
});