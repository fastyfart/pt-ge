/**
 * Created by fasty on 14/12/14.
 */

Session.setDefault('trackBahan', 'bahanMentah');

Template.production.events({
    'click #add' : function(e,t){
        $('#modalMakeProduction').modal('show');
    },
    'click .trackBahan' : function(e,t){
        id = e.currentTarget.id;
        Session.set('trackBahan', id);
    },
    'click #save' : function(e,t){

    }
});

Template.production.helpers({
    trackBahan : function () {
        return Session.get('trackBahan');
    }
});

Template.makeProduction.helpers({
    listBahan : function(){
        var bahan = Session.get('trackBahan');
        var stock = Stock.findOne({bahan : bahan});
        return stock.lists;
    }
});

Template.production.rendered = function(){

};

Template.productionBahanMentah.events({

});