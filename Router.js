Router.route('/admin', function() {
    this.render('admin');
});

Router.route('/admin/post', function() {
    this.render('post');
});

Router.route('/', function() {
    this.layout('layout');
    this.render('postsList');
});

Router.route('/post/:_id', function() {
    this.layout('layout');
    this.render('readPost', {
        data: function() {
            return PostsList.findOne({
                _id: this.params._id
            });
        }
    });
});