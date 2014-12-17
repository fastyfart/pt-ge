/**
 * Created by fasty on 14/12/14.
 */

productionController = appController.extend({
    template : 'production',
    waitOn : function(){
        return Meteor.subscribe('stock');
    },
    data : function(){
        return {
            title : 'Produksi'
        }
    },
    action : function(){
        this.render();
    }
});