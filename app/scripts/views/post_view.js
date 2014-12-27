Emberwp.PostView = Ember.View.extend({

    templateName: 'pages/post',

    didInsertElement: function() {
        $('article').css({ opacity: '0', transform: 'scale(0.7)' });
        $('div h1:first-child').css({ opacity: '0'});
        $('article div div').css({ opacity: '0'});
        $('.featured-image').css({ opacity: '0', transform: 'scale(0.7)' });

        $(window).on('scroll', $.proxy(this.didScroll, this));
    },

    animateIn : function (done) {
        var tl = new TimelineMax();
        tl.to("article", .5, {force3D:true, opacity:'1',  scale:'1' , ease:Sine.easeIn})
        .to(".featured-image", .5, {force3D:true, opacity:'1',  scale:'1', ease:Sine.easeIn })
        .staggerTo([ 'div h1:first-child', 'article div div'], .5, {force3D:true, opacity:'1', ease:Sine.easeIn }, .3);
    },

    animateOut : function (done) {

         this.get('controller').send('clearRecords');

        $(window).off('scroll', $.proxy(this.didScroll, this));

         var tl = new TimelineMax({onComplete:done});
         tl.staggerTo([ 'div h1:first-child', 'article div div'], .3, {force3D:true, opacity:'0', ease:Sine.easeOut  }, .2)
        .to(".featured-image", .3, {force3D:true, opacity:'0',  scale:'0.7', ease:Sine.easeOut })
        .to("article", .3, {force3D:true, opacity:'0', ease:Sine.easeOut });
        
    },

    didScroll: function(){
        
        if (this.isScrolledToBottom()) {
        
            this.get('controller').send('getMore');
        
        }
    },
 
    isScrolledToBottom: function(){
        
        var distanceToViewportTop = ( $(document).height() - $(window).height() );
        
        var viewPortTop = $(document).scrollTop();

        if (viewPortTop === 0) {
        
            return false;
        
        }

        return (viewPortTop - distanceToViewportTop === 0);
    }
});