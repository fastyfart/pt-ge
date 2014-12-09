Meteor.publish('usersData', function() {
    return Meteor.users.find();
});