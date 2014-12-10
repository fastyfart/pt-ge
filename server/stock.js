Meteor.methods({
    updateBahan : function(bahan, list){
        Stock.upsert({bahan : bahan}, { $push : {lists : list}}, function(err){
            if(err){
                return err.message;
            }else{
                return true;
            }
        })
    }
});