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

Template.makeProduction.events({
   'click #save' : function(e,t){
        var bahan = Session.get('trackBahan');

        var prodList = [];

        $('.qty').each(function(){
            var qty = parseInt($(this).val());
            if( qty > 0){
                prodList.push({
                    name : $(this).attr('id'),
                    qty : qty
                });
            }
        });

        var prod = {
            _id : new Mongo.ObjectID,
            production : prodList,
            created : new Date()
        };

        Meteor.call('makeProduction', bahan, prod, function(err){
            if(!err){
                prodList.forEach(function(val){
                    Meteor.call('updateQtyStock', val.name, val.qty);
                });
                $('#modalMakeProduction').modal('hide');
                toastr.success('data telah disimpan');
            }else{
                toastr.error('Error...');
            }
        });

   }
});

Template.production.rendered = function(){

};

Template.productionBahanMentah.events({

});

Template.productionBahanMentah.helpers({
    listBahan : function(){
        var bahan = Session.get('trackBahan');
        var stock = Stock.findOne({bahan : bahan});

        return stock.production;
    },
    tanggal : function(date) {
        var d = date.getDate();
        var m = date.getMonth() + 1;
        var y = date.getFullYear();
        return '' + (d <= 9 ? '0' + d : d) + '-' + (m<=9 ? '0' + m : m) + '-' + y;
    }
});

Template.productionBahanOlah.helpers({
    listBahan : function(){
        var bahan = Session.get('trackBahan');
        var stock = Stock.findOne({bahan : bahan});

        return stock.production;
    },
    tanggal : function(date) {
        var d = date.getDate();
        var m = date.getMonth() + 1;
        var y = date.getFullYear();
        return '' + (d <= 9 ? '0' + d : d) + '-' + (m<=9 ? '0' + m : m) + '-' + y;
    }
});

Template.productionBahanJadi.helpers({
    listBahan : function(){
        var bahan = Session.get('trackBahan');
        var stock = Stock.findOne({bahan : bahan});

        return stock.production;
    },
    tanggal : function(date) {
        var d = date.getDate();
        var m = date.getMonth() + 1;
        var y = date.getFullYear();
        return '' + (d <= 9 ? '0' + d : d) + '-' + (m<=9 ? '0' + m : m) + '-' + y;
    }
});