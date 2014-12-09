/**
 * Created by fasty on 10/12/14.
 */

Template.login.events({
    'click #login' : function(e,t){
        var username = t.find('#username').value;
        var password = t.find('#password').value;

        Meteor.loginWithPassword(username, password, function(err){
            if(err){
                toastr.error(err.message);
            }else{
                toastr.success('Login sukses');
            }
        });
    }
});