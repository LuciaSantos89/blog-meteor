Router.route('/');
Router.route('/admin', function  () {
	this.render('admin');
});

Router.route('/post', function  (algo) {
	this.render('post');
});

Router.route('/postsList', function  (algo) {
	this.render('postsList');
});