Meteor.publish('usersData', function() {
    return Meteor.users.find();
});

Meteor.publish('stock', function () {
    return Stock.find();
});

Meteor.publish('partner', function () {
    return Partner.find();
});