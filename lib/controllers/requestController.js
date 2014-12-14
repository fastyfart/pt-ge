/**
 * Created by fasty on 12/12/14.
 */

requestController = appController.extend({
    template : 'request',
    waitOn : function(){
        return [
            Meteor.subscribe('request'),
            Meteor.subscribe('stock'),
            Meteor.subscribe('partner')
        ]
    },
    data : function(){
        return {
            title : 'Permintaan'
        }
    },
    action : function(){
       this.render();
    }
});