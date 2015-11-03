Router.route('admin', {
    data:{
       user: function(){return Meteor.user()} 
    },
    onBeforeAction: function() {
        var currentUser = Meteor.userId();
        if (currentUser) {
            this.render('admin');
        } else {
            Router.go("admin/login");
        }
    }

});

Router.route('admin/post', function() {
    this.render('post');
});

Router.route('/', function() {
    this.layout('layout');
    this.render('postsList');
});

Router.route('post/:_id', function() {
    this.layout('layout');
    this.render('readPost', {
        data: function() {
            return PostsList.findOne({
                _id: this.params._id
            });
        }
    });
});

Router.route('admin/login', function() {
    this.render('login');
});

Router.route('admin/register', function() {
    this.render('register');
});