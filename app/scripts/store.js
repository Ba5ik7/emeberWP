Emberwp.ApplicationAdapter = DS.FixtureAdapter;

Emberwp.ObjectTransform = DS.Transform.extend({

    serialize: function(deserialized) {

        return deserialized;
    
    },

    deserialize: function(serialized) {
    
        return serialized;
    
    }
});

