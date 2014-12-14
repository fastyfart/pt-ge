Meteor.publish('usersData', function() {
    return Meteor.users.find();
});

Meteor.publish('stock', function () {
    return Stock.find();
});

Meteor.publish('partner', function () {
    return Partner.find();
});

Meteor.publish('order', function () {
    return Order.find();
});

Meteor.publish('request', function () {
    return Request.find();
});

Meteor.publish('production', function(){
    return Production.find();
});