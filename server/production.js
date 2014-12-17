/**
 * Created by fasty on 17/12/14.
 */

Meteor.methods({
    'makeProduction' : function(bahan, col){
        console.log(bahan);
        Stock.update({bahan : bahan}, { $push : {production : col}});
    }
});