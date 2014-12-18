/**
 * Created by fasty on 17/12/14.
 */

Template.export.events({
    'click #add' : function(e,t){
        $('#makeExport').modal('show');
    }
});

Template.listExport.helpers({
    listExport : function(){
        var partner = Partner.findOne({partner : 'customers'});
        return partner.lists;
    },
    tanggal : function(date) {
        var d = date.getDate();
        var m = date.getMonth() + 1;
        var y = date.getFullYear();
        return '' + (d <= 9 ? '0' + d : d) + '-' + (m<=9 ? '0' + m : m) + '-' + y;
    }
});

Template.makeExport.helpers({
    listProduct : function(){
        var stock = Stock.findOne({bahan : 'bahanJadi'});
        return stock.lists;
    },
    listCustomer : function(){
        var partner = Partner.findOne({partner : 'customers'});
        return partner.lists;
    }
});

Template.makeExport.events({
    'click #save' : function(e,t){
        var customer = t.find('#customer').value;
        var expList = [];

        $('.qty').each(function(){
            var qty = parseInt($(this).val());
            if( qty > 0){
                expList.push({
                    name : $(this).attr('id'),
                    qty : qty
                });
            }
        });

        var exp = {
            _id : new Mongo.ObjectID,
            export : expList,
            created : new Date()
        };

        Meteor.call('makeExport', customer, exp, function(err){
            if(!err){
                $('#makeExport').modal('hide');
                toastr.success('Data telah disimpan');
            }else{
                toastr.error('Error');
            }
        })
    }
});