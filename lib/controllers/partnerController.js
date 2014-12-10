/**
 * Created by fasty on 10/12/14.
 */

partnerController = appController.extend({
    template : 'partner',
    data : function(){
        return  {
            title : 'Partner'
        }
    },
    waitOn : function () {
        return Meteor.subscribe('partner');
    },
    action : function(){
        this.render();
    }
});