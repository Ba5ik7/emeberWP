Emberwp.PostsView = Ember.View.extend({


    templateName: 'pages/posts',

    didInsertElement: function() {
         $('article').css({ opacity: '0', transform: 'scale(0.7)' });
    },

    animateIn : function (done) {
       TweenMax.staggerTo("article", .5, {force3D:true, opacity:'1',  scale:'1' }, .3, done);
    },

    animateOut : function (done) {
        TweenMax.staggerTo("article", .3, {force3D:true,  opacity:'0',  right:'50' }, .3, done);
    }
});