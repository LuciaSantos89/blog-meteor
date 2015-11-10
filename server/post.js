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
        PostsList.update({
            _id: postId
        }, post);
    },
    'publishPost': function(postId) {
        PostsList.update({
            _id: postId
        }, {
            $set : {
                draft: false
            }
        });
    },
    'insertComment': function(comment, postId) {
        PostsList.update({
            _id: postId
        }, {
            $addToSet: {
                comments: comment
            }
        });
    }
});