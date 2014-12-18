/**
 * Created by fasty on 17/12/14.
 */

exportController = appController.extend({
    template : 'export',
    data : function(){
        return {
            title : 'Export'
        }
    },
    waitOn : function(){
        return [
            Meteor.subscribe('stock'),
            Meteor.subscribe('partner')
        ]
    },
    action : function(){
        this.render();
    }
});