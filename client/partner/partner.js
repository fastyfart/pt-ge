/**
 * Created by fasty on 11/12/14.
 */

Session.setDefault('partner', false);

Template.partner.events({
    'click .addModal' : function(e,t){
        var partner = e.currentTarget.id;
        Session.set('partner', partner);
        $('#modalAddPartner').modal('show');
    }
});

Template.modalAddPartner.events({
    'click #save' : function(e,t){
        var partner = Session.get('partner');
        var name = t.find('#name').value;
        var address = t.find('#address').value;
        var phone = t.find('#phone').value;

        Meteor.call('upsertPartner', partner, {
            name : name,
            address : address,
            phone : phone
        }, function(err){
            if(err){
                toastr.error(err.message);
            }else{
                toastr.success('Data telah disimpan');
                $('#modalAddPartner').modal('hide');
            }
        })
    }
});

Template.listCustomers.helpers({
    listCustomers : function () {
        return Partner.find({partner : 'customers'});
    }
});

Template.listSuppliers.helpers({
    listSuppliers : function () {
        return Partner.find({partner : 'suppliers'});
    }
});