Emberwp.PageView = Ember.View.extend({

    templateName: 'pages/page',

    contentDidChange: function() {

        _this = this;

        if(Emberwp.TRANS_SWITCH){
           
            setTimeout(function() {
                
                _this.animateIn();

            }, 250);
            
        } else if (!Emberwp.NULL_START  ){
        
            this.animateOut();

        }
        
        Emberwp.TRANS_SWITCH = !Emberwp.TRANS_SWITCH;

    }.observes( 'controller.content' ),

    didInsertElement: function() {
        Emberwp.NULL_START = false;
        Emberwp.IS_PAGES = true;
    },

    willAnimateIn : function () {
        
        $( '#body-text' ).addClass('startScaleContent');
    
    },

    animateIn : function (done) {
       
       $( '#body-text' ).addClass('showScaleContent');
       
       TweenMax.to( $('.center-content h2'), .2, {css:{marginLeft:0,  scale:1}} );
    },

    animateOut : function (done) {
        
        $( '#body-text' ).removeClass('showScaleContent');
        
        TweenMax.to( $('.center-content h2'), .2, {css:{marginLeft:250, scale:2}} );

        if (!Emberwp.IS_PAGES )
            done();
    }
});