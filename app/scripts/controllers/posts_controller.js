Emberwp.PostsController = Ember.ArrayController.extend({

    actions: {

        goToPost: function (id){

            console.log("YOOOOOOOOOO BITCH");

            this.transitionToRoute('post', id);

        }
    }
});