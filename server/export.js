/**
 * Created by fasty on 18/12/14.
 */

Meteor.methods({
    'makeExport' : function(customer, exportList){
        Partner.update({'lists.name' : customer}, {$push : {'lists.$.export' : exportList}});
    }
});