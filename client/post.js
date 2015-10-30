var tags = []
Session.setDefault('tags', tags);
var imageUrl="";

Template.post.events({
    'keypress #postTags': function(event) {
        if (event.keyCode == 32) {
            if ($.trim(event.target.value).length > 0) {
                tags.push(event.target.value);
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
        console.log("aqui si");
    },
    'submit form': function(event) {
        console.log(Session.get('tags'));
        event.preventDefault();
        PostsList.insert({
            title: event.target.postTitle.value,
            body: event.target.postBody.value,
            tags: tags,
            imageUrl: imageUrl,
            createdAt: new Date()
        });
        /*var playerNameVar = event.target.playerName.value;
        Meteor.call('insertPlayerData', playerNameVar);*/
        window.location.pathname = "/"
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
                console.log($('.upload-control.done'));
                $('.upload-control.done').remove();
            }
        }
    }
});