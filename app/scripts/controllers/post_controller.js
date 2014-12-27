Emberwp.PostController = Ember.ArrayController.extend({

    firstLoad: true,

    actions: {

        getMore:function(){

            if (this.firstLoad){

                this.firstLoad = false;

                this.set('loadingMore', true);

                this.set('comments',  this.store.find('comments') );

                Emberwp.Comments.on('didLoad', this.set('loadingMore', false));

            };
        },

        clearRecords:function(){
            
            this.firstLoad = true;

            this.store.findAll('comments').then(function(record){
                record.content.forEach(function(rec) {
                    Ember.run.once(this, function() {

                        rec.unloadRecord();
                    
                    });
                }, this);
            });

        }
    }
});