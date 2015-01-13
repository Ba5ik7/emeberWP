Emberwp.ExperimentsView = Ember.View.extend({

    templateName: 'pages/experiments',

    didInsertElement: function() {
         $('img').css({ opacity: '0', transform: 'scale(0.7)' });


        TweenLite.set(".cardWrapper", {perspective:800});
        TweenLite.set(".card", {transformStyle:"preserve-3d"});
        TweenLite.set(".back", {rotationY:-180});
        TweenLite.set([".back", ".front"], {backfaceVisibility:"hidden"});

         $(".cardWrapper").hover(
              function() {
                TweenLite.to($(this).find(".card"), 1.2, {rotationY:180, ease:Back.easeOut});
              },
              function() {
                TweenLite.to($(this).find(".card"), 1.2, {rotationY:0, ease:Back.easeOut});  
              }
            );
    },

    animateIn : function (done) {
       TweenMax.staggerTo("img", .5, {opacity:'1',  scale:'1', ease:Sine.easeIn }, .3, done);
    },

    animateOut : function (done) {
        TweenMax.staggerTo("img", .3, {opacity:'0',  right:'50', ease:Sine.easeOut }, .3, done);
    }
});