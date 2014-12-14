/**
 * Created by fasty on 11/12/14.
 */

Meteor.methods({
    upsertPartner : function(partner, doc){
        Partner.upsert({partner : partner}, { $push : {
            lists : doc
        }}, function(err){
            if(err){
                return err;
            }else{
                return true;
            }
        })
    }
});