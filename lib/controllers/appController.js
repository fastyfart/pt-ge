/**
 * Created by fasty on 09/12/14.
 */

appController = RouteController.extend({

    onBeforeAction : function(){
        if(Meteor.userId()){
            this.next();
        }else{
            if(Meteor.users.find().count() === 0){
                this.render('adminSetup');
            }else{
                this.render('login');
            }
        }
    }
});