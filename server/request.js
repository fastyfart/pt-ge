/**
 * Created by fasty on 12/12/14.
 */

Meteor.methods({
    makeRequest : function(doc){
        Request.insert({
            customer : doc.customer,
            product : doc.product,
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