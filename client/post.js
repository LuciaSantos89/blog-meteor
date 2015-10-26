Template.post.events({
	'click .cancel-post':function(){
		console.log("aqui si");
	},
	'submit form': function(event) {
		console.log(event);
        event.preventDefault();
        PostsList.insert({
            title: "title",
            body: "body",
            tags: "tag1, tag2",
            createdAt: new Date()
        });
        /*var playerNameVar = event.target.playerName.value;
        Meteor.call('insertPlayerData', playerNameVar);*/
        console.log(window);
        window.location.pathname = "/postsList"
    }
});