/**
 * Created by fasty on 10/12/14.
 */

Session.setDefault('bahan', false);

Template.stock.events({
    'click .addModal' : function(e,t){
        var bahan = e.currentTarget.id;
        Session.set('bahan', bahan);
        $('#modalAdd').modal('show');
    }
});

Template.modalAdd.events({
    'click #save' : function(e,t){
        var name = t.find('#name').value;
        var unit = t.find('#unit').value;
        var stock = t.find('#stock').value;
        var bahan = Session.get('bahan');

        var list = {
            name : name,
            unit : unit,
            qty : parseInt(stock)
        };

        Meteor.call('updateBahan', bahan, list, function (err) {
            if(err){
                toastr.error(err.message);
            }else{
                toastr.success('Data telah disimpan');
                $('#modalAdd').modal('hide');
            }
        });

    }
});