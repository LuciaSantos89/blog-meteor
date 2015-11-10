var imageUrl = "";

Template.post.events({
    'keypress #postTags': function(event) {
        if (event.keyCode == 32) {
            if ($.trim(event.target.value).length > 0) {
                tags = Session.get('tags');
                tags.push($.trim(event.target.value));
                Session.set('tags', tags);
                event.target.value = "";
            }
        }
    },
    'click .delete-tag': function(event) {
        var indexTag = tags.indexOf(event.target.parentNode.id);
        tags.splice(indexTag, 1);
        Session.set('tags', tags);
    },
    'click .cancel-post': function() {
        Router.go('admin');
    },
    'submit form ': function(event) {
        event.preventDefault();
        post = {
            title: event.target.postTitle.value,
            body: $('#bodyPost').editable('getHTML'),
            tags: Session.get('tags'),
            imageUrl: imageUrl,
            draft:event.target.draft.checked,
            createdAt: new Date(),
            createdBy: Meteor.user().username
        };
        var postId = Router.current().params._id;
        if (postId) {
            Meteor.call('updatePost', post, postId);
        } else {
            Meteor.call('insertPost', post);
        }
        Router.go('admin');
    }
});

Template.post.helpers({
    tags: function() {
        return Session.get('tags');
    },
    myCallbacks: function() {
        return {
            finished: function(index, fileInfo, context) {
                imageUrl = fileInfo.url;
                $('html').find('.uploadPhoto .imgPreview').attr("src", imageUrl);
            }
        }
    }
});

Template.post.rendered = function() {
    if(this.data){
        var postBody = this.data.post.body;
        this.data.post.tags ? Session.set('tags',this.data.post.tags) : Session.set('tags',[]);
    }else{
        Session.set('tags',[])
    }
    
    $(document).ready(function() {
        $('#bodyPost').editable({
            inlineMode: false
        });
        if (postBody) {
            $('#bodyPost').editable('setHTML', postBody)
        } else {
            console.log("notengo");
        }
    });
}