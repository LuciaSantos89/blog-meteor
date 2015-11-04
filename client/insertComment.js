Template.insertComment.events({
	'submit form':function (event) {
		event.preventDefault();
		var postId = Router.current().params._id;
		var name = event.target.name.value;
		var email =event.target.email.value;
		var body = event.target.comment.value;
		comment = {
			name:name,
			email:email,
			body:body,
			createdAt:new Date()
		}
		Meteor.call('insertComment',comment, postId);
	}
});