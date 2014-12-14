/**
 * Created by fasty on 12/12/14.
 */

Template.request.helpers({
    listCustomer : function(){
        var p = Partner.findOne({partner : 'customers'});
        return p.lists;
    },
    listProduct : function(){
        var s = Stock.findOne({bahan : 'bahanJadi'});
        return s.lists;
    }
});

Template.request.events({
    'click #add' : function(e,t){
        $(".pageSlide").addClass("open");
        $('#add').addClass('hide');
    },
    'click #save' : function(e,t){
        var customer =t.find('#customer').value;
        var product = t.find('#product').value;
        var qty = t.find('#qty').value;

        Meteor.call('makeRequest', {
            customer : customer,
            product : product,
            qty : qty
        }, function(err){
            if(err){
                toastr.error(err);
            }else{
                toastr.success('Data telah disimpan');
                $(".pageSlide").removeClass('open').addClass("closed");
                $('#add').removeClass('hide').addClass('show');
            }
        })
    }
});

Template.listRequest.helpers({
    listRequest : function(){
        return Request.find();
    },
    tanggal : function(date) {
        var d = date.getDate();
        var m = date.getMonth() + 1;
        var y = date.getFullYear();
        return '' + (d <= 9 ? '0' + d : d) + '-' + (m<=9 ? '0' + m : m) + '-' + y;
    }
});