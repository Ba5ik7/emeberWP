Emberwp.ApplicationController = Ember.ObjectController.extend({

    currentPathDidChange: function() {

        path = this.get('currentPath');

        console.log("and the path is ", path);

        if (path  == 'page') {
            Emberwp.IS_PAGES = false;
            Emberwp.NULL_START = true;
        }
    
        window.document.title = path;
    
    }.observesBefore('currentPath')

});

