Emberwp.PostsView = Ember.View.extend({

    templateName: 'pages/posts',

    didInsertElement: function() {
         $('summary').css({ opacity: '0', transform: 'scale(0.7)' });
    },

    animateIn : function (done) {
       TweenMax.staggerTo("summary", .5, {force3D:true, opacity:'1',  scale:'1', ease:Sine.easeIn }, .3, done);
    },

    animateOut : function (done) {
        TweenMax.staggerTo("summary", .3, {force3D:true,  opacity:'0',  right:'50', ease:Sine.easeOut }, .3, done);
    }
});