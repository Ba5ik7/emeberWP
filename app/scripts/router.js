Emberwp.Router.map(function () {
    // Add your routes here
    this.resource('page', { path: '/page/:page_id' });

    this.resource('post', { path: '/post/:post_id' });

    this.route('posts');

    this.route("areyoulosted", { path: "*path"});

});
