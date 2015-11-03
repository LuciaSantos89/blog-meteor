Meteor.publish('PostsList', function() {
    return PostsList.find();
});

Meteor.methods({
    'insertPost': function(post) {
        PostsList.insert(post);
    },
    'removePost': function(postId) {
        PostsList.remove({
            _id: postId
        });
    },
    'updatePost': function(post, postId) {
        PostsList.update(postId, post);
    }
});