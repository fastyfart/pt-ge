/**
 * Created by fasty on 11/12/14.
 */

Meteor.methods({
    makeOrder : function(doc){
        Order.insert({
            supplier : doc.supplier,
            bahanMentah : doc.bahanMentah,
            qty : doc.qty,
            created : new Date()
        }, function(err){
            if(err){
                return err.message;
            }else{
                return true;
            }
        })
    }
});