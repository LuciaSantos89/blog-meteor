Template.login.events({
    'click .register': function(event) {
        Router.go("/admin/register");
    },
    'submit form': function(event) {
        event.preventDefault();
        var email = event.target.email.value;
        var password = event.target.password.value;
        //Meteor.call('loginUsers',email, password);

        Meteor.loginWithPassword(email, password, function(error) {
            if (error) {
                console.log(error); // Output error if registration fails
            } else {
                Router.go("admin"); // Redirect user if registration succeeds
            }
        });
    }
});
Template.register.events({
    'submit form': function(event) {
        event.preventDefault();
        user = {
            username: event.target.username.value,
            password: event.target.password.value,
            email: event.target.email.value
        };
        //Meteor.call('registerUsers', user);
        Accounts.createUser(user, function(error) {
            if (error) {
                console.log(error); // Output error if registration fails
            } else {
                 // Redirect user if registration succeeds
            }
        });
        Router.go("admin");
    }
});

Template.admin.events({
	'click .logout':function(event){
		Meteor.logout();
	}
});