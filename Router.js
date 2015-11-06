Router.configure({
    waitOn: function() {
        return [
            Meteor.subscribe('PostsList')
        ];
    }
});

Router.onBeforeAction(function() {
    var currentUser = Meteor.userId();
    if (currentUser) {
        this.next();
    } else {
        Router.go("admin/login");
    }
}, {
    only: ['/admin', '/admin/post', '/admin/user', '/admin/post/:_id']
});

Router.route('/admin', {
    layoutTemplate: 'adminLayout',
    template: 'listPost',
    data: {
        user: function() {
            return Meteor.user();
        },
        posts: function() {
            return PostsList.find();
        }
    }
});

Router.route('/admin/login', function() {
    this.layout('adminLayout');
    this.render('login');
});

Router.route('/admin/register', function() {
    this.layout('adminLayout');
    this.render('register');
});

Router.route('/admin/post', function() {
    this.layout('adminLayout');
    this.render('post');
});

Router.route('/admin/post/:_id', {
    layoutTemplate: 'adminLayout',
    data: function() {
        return {
            post: PostsList.findOne({
                _id: this.params._id
            })
        };
    },
    action: function() {
        this.render('post');
    }

});


Router.route('/', function() {
    this.layout('layout');
    this.render('postsList', {
        data: function() {
            return {
                posts: PostsList.find({}, {
                    sort: {
                        comments: 1
                    }
                })
            }
        }
    });
});

Router.route('/post/:_id', function() {
    this.layout('layout');
    this.render('readPost', {
        data: function() {
            return {
                post: PostsList.findOne({
                    _id: this.params._id
                }),
                relatedPosts: PostsList.find({
                    tags: "post"
                })
            }
        }
    });
});

Router.route('/tag', function() {
    this.layout('layout');
    this.render('postsList', {
        data: function() {
            var tag = this.params.hash;
            return {
                posts: PostsList.find({
                    tags: tag
                })
            }
        }
    });
});