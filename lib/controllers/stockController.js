stockController = appController.extend({
    template : 'stock',
    data : function () {
        return {
            title : 'Data Stok'
        }
    },
    waitOn : function(){
        return Meteor.subscribe('stock');
    },
    action : function(){
        this.render();
    }
});