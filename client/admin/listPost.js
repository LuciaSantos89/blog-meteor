Template.listPost.events({
    'click .delete-post': function(event) {
        var postId = event.target.parentNode.parentNode.id;
        Meteor.call('removePost', postId);
    },
    'click .publish': function(event) {
        var postId = event.target.parentNode.parentNode.id;
        Meteor.call('publishPost', postId);
    },
});