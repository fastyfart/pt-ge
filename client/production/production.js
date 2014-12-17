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

        //var prod = [];
        var prodList = [];
        //prod.push({_id : new Mongo.ObjectID});
        $('.qty').each(function(){

            prodList.push({
                name : $(this).attr('id'),
                qty : $(this).val()
            });
        });

        var prod = {
            _id : new Mongo.ObjectID,
            production : prodList,
            created : new Date()
        };

        Meteor.call('makeProduction', bahan, prod, function(err){
            console.log(err);
        });
        console.log(prod);

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
        console.log(stock.production);
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
        console.log(stock.production);
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
        console.log(stock.production);
        return stock.production;
    },
    tanggal : function(date) {
        var d = date.getDate();
        var m = date.getMonth() + 1;
        var y = date.getFullYear();
        return '' + (d <= 9 ? '0' + d : d) + '-' + (m<=9 ? '0' + m : m) + '-' + y;
    }
});