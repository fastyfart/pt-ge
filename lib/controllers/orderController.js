/**
 * Created by fasty on 11/12/14.
 */

orderController = appController.extend({
    template : 'order',
    waitOn : function(){
        return [
            Meteor.subscribe('order'),
            Meteor.subscribe('partner'),
            Meteor.subscribe('stock')
        ];
    },
    data : function(){
        return {
            title : 'Order'
        }
    },
    action : function(){
        this.render();
    }
});