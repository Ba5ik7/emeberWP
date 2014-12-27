toastr.options = {   "closeButton": false,   "debug": false,   "progressBar":
true,   "positionClass": "toast-bottom-center",   "onclick": null,
"showDuration": "300",   "hideDuration": "1000",   "timeOut": "5000",
"extendedTimeOut": "1000",   "showEasing": "swing",   "hideEasing": "linear",
"showMethod": "fadeIn",   "hideMethod": "fadeOut" }

var Emberwp = window.Emberwp = Ember.Application.create();

Emberwp.BASE_URL = "http://localhost/wordpress";
Emberwp.NULL_START = true;
Emberwp.TRANS_SWITCH = false;
Emberwp.IS_PAGES = false;
Emberwp.CURRENT_POST_ID = 0;


/* Order and include as you please. */
require('scripts/controllers/*');
require('scripts/store');
require('scripts/models/*');
require('scripts/routes/*');
require('scripts/components/*');
require('scripts/views/*');
require('scripts/router');
