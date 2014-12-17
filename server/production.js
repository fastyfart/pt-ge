/**
 * Created by fasty on 17/12/14.
 */

Meteor.methods({
    'makeProduction' : function(bahan, col){
        Stock.update({bahan : bahan}, { $push : {production : col}});
    },
    'updateQtyStock' : function(nameBahan, inc){
        Stock.update({'lists.name' : nameBahan}, {$inc : {'lists.$.qty' : -inc }});
    }
});