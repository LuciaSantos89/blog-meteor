Template.readPost.helpers({
    'relatedPosts': function() {
        tags = this.post.tags;
        return PostsList.find({
            draft: false,
            tags: {
                $in : tags
            },
            _id: {
                $ne: this.post._id
            }
        })
    }
});