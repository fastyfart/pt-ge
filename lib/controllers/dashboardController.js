/**
 * Created by fasty on 09/12/14.
 */

dashboardController = appController.extend({
    template : 'dashboard',
    data : function(){
        return {
            title : 'Dashboard'
        }
    },
    action : function () {
        this.render();
    }
});