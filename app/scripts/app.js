var Emberwp = window.Emberwp = Ember.Application.create();

Emberwp.BASE_URL = "http://localhost/wordpress";
Emberwp.NULL_START = true;
Emberwp.TRANS_SWITCH = false;
Emberwp.IS_PAGES = false;


/* Order and include as you please. */
require('scripts/controllers/*');
require('scripts/store');
require('scripts/models/*');
require('scripts/routes/*');
require('scripts/components/*');
require('scripts/views/*');
require('scripts/router');
