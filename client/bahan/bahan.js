/**
 * Created by fasty on 10/12/14.
 */

Meteor.subscribe('stock');

Template.bahanMentah.helpers({
   listBahanMentah : function(){
       return Stock.find({bahan : 'bahanMentah'});
   }
});

Template.bahanOlah.helpers({
   listBahanOlah : function(){
       return Stock.find({bahan : 'bahanOlah'});
   }
});

Template.bahanJadi.helpers({
   listBahanJadi: function(){
       return Stock.find({bahan : 'bahanJadi'});
   }
});