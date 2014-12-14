/**
 * Created by fasty on 11/12/14.
 */


Template.order.helpers({
    listSupplier : function(){
        var t = Partner.findOne({partner : 'suppliers'});
        return t.lists;
    },
    listBahanMentah : function(){
        var s = Stock.findOne({bahan : 'bahanMentah'});
        return s.lists;
    }
});

Template.order.events({
    'click #add' : function(e,t){
        $(".pageSlide").addClass("open");
        $('#add').addClass('hide');
    },
    'click #save' : function(e,t){
        var supplier = t.find('#supplier').value;
        var bahanMentah = t.find('#bahanMentah').value;
        var qty = t.find('#qty').value;

        Meteor.call('makeOrder',{
            supplier : supplier,
            bahanMentah : bahanMentah,
            qty : qty
        }, function (err) {
            if(err){
                toastr.error('Error');
            }else{
                toastr.success('Data telah disimpan');
                $(".pageSlide").removeClass("open").addClass("closed");
                $('#add').removeClass('hide').addClass('show');
            }
        })

    }
});

Template.listOrder.helpers({
    listOrder : function(){
        return Order.find();
    },
    tanggal : function(date) {
        var d = date.getDate();
        var m = date.getMonth() + 1;
        var y = date.getFullYear();
        return '' + (d <= 9 ? '0' + d : d) + '-' + (m<=9 ? '0' + m : m) + '-' + y;
    },
    cekStatus : function(status){
        console.log(status);
        if(status   ){
            return 'Ok';
        }else{
            return 'Pending';
        }
    }
});
