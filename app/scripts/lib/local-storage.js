var storagejs = window.storagejs = {
    /* INIT */
    init: function(minutes) {
        this.clear();
    },

    /* PUBLIC METHODS */
    verify: function(){
        for (var arg in arguments) {
            if(!localStorage.getItem(arguments[arg])){
                window.location.href = Pages.INDEX;
                return;
            }
        }
    },

    get: function(){
        var session = {};
        if(arguments.length !== 0){ //get values of given arguments.
            for (var arg in arguments){
                try{
                    session[arguments[arg]]  = JSON.parse(localStorage.getItem(arguments[arg]));
                }
                catch(e){
                    session[arguments[arg]]  = localStorage.getItem(arguments[arg]);
                }
            }
        }
        else{ //if not receive any arguments returns all session values.
            for (var i = localStorage.length - 1; i >= 0; i--) {
                try{
                    session[localStorage.key(i)] = JSON.parse(localStorage.getItem(localStorage.key(i)));
                }
                catch(e){
                    session[localStorage.key(i)] = localStorage.getItem(localStorage.key(i));
                }
            }
        }
        return session;
    },

    getItem: function(key){
        if(key){
            try{
                return JSON.parse(localStorage.getItem(key));
            }
            catch(e){
                return localStorage.getItem(key);
            }
        }
    },

    updateItem: function(key, value, groupName){
        var sesion;
        if(groupName){
            session = this.get(groupName);
            session[groupName][key] = value;
            localStorage.setItem(groupName, JSON.stringify(session[groupName]));
        }
        else{
            session = this.get(key);
            session[key] = value;
            localStorage.setItem(key, JSON.stringify(session[key]));
        }
    },

    setItem: function(key, value){
        if(typeof value === 'object'){
            value = JSON.stringify(value);
        }
        localStorage.setItem(key, value);
    },

    removeItem: function(key){
        localStorage.removeItem(key);
    },

    clear: function(){
        localStorage.clear();
    }
};