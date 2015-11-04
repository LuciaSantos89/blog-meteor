Template.adminLayout.events({
    'click .button-collapse': function() {
        $(".button-collapse").sideNav();
    },
    'click .logout': function(event) {
        event.preventDefault();
        Meteor.logout();
        Router.go('admin');
    }
});