Emberwp.ApplicationController = Ember.ObjectController.extend({

    menuOpen: false,

    currentPathDidChange: function() {

        path = this.get('currentPath');

        if (path  != 'page') {
            Emberwp.IS_PAGES = false;
            Emberwp.NULL_START = true;
        }
    
        //window.document.title = path;
    
    }.observesBefore('currentPath'),


    actions: {

        toggleMenu: function() {

            this.menuOpen = !this.menuOpen;
            
            if (this.menuOpen) {

                $('#ham').addClass('open');

                $('#closeMenus').addClass('open');

            } else {

                $('#ham').removeClass('open');

                $('#closeMenus').removeClass('open');
            
            }
            
            $('#search-btn').prop('checked', false);
        },

        closeMenu: function() {

            if (this.menuOpen){

                this.menuOpen = false
                
                $('#ham').removeClass('open');

                $('#closeMenus').removeClass('open');

            }

            $('#search-btn').prop('checked', false);
        }
    }
});