Emberwp.PageView = Ember.View.extend({

    templateName: 'pages/page',

    contentDidChange: function() {
        _this = this;
        if(Emberwp.IS_PAGES) {
            if(Emberwp.TRANS_SWITCH){
                setTimeout(function() {
                    TweenMax.to("#body-text", .5, {force3D:true, opacity:'1',  scale:'1'})
                }, 150);
                
            } else if (!Emberwp.NULL_START  ){
                TweenMax.to($('#body-text') , .1, {force3D:true, opacity:'0',  scale:'.1'});
            }
            Emberwp.TRANS_SWITCH = !Emberwp.TRANS_SWITCH;
        };
    }.observesBefore( 'controller.content' ),

    didInsertElement: function() {
        Emberwp.NULL_START = false;
        Emberwp.IS_PAGES = true;

        $('#body-text').css({ opacity: '0', transform: 'scale(0.7)' });
    },

    animateIn : function (done) {
        TweenMax.to("#body-text", .5, {force3D:true, opacity:'1',  scale:'1' , onComplete:done});
    },

    animateOut : function (done) {
        TweenMax.to("#body-text", .5, {force3D:true, opacity:'0',  scale:'.7', onComplete:done});
    }
});