Template.admin.events({
    'click .button-collapse': function() {
        $(".button-collapse").sideNav();
    },
    'click .logout': function(event) {
        event.preventDefault();
        Meteor.logout();
        Router.go('admin');
    }
});

Template.admin.helpers({
    'user': function() {
        console.log(Meteor.user())
        return Meteor.user();
    },
    'posts': function() {
        return PostsList.find();
    }
});

Template.register.events({
    'submit form': function(event) {
        event.preventDefault();
        user = {
            username: event.target.name.value,
            password: event.target.password.value,
            email: event.target.email.value
        }

        var resp = Accounts.createUser(user);
        Router.go('admin');
    }
});

Template.login.events({
    'submit form': function(event) {
        event.preventDefault();
        var emailVar = event.target.email.value;
        var passwordVar = event.target.password.value;
        Meteor.loginWithPassword(emailVar, passwordVar);
    }
});