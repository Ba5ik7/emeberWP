Emberwp.GoogleMapComponent = Ember.Component.extend({

    insertMap: function() {
        
        var container = $(".map-canvas");

        console.log("this", container);

        var options = {
            
            center: new google.maps.LatLng(this.get("latitude"), this.get("longitude") ),
            
            zoom: 17,
            
            mapTypeId: google.maps.MapTypeId.ROADMAP,

            height: 500,

            width:500
        
        };

        new google.maps.Map(container[0], options);
    
    }.on('didInsertElement')


    
});