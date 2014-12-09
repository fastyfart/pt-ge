/**
 * Created by fasty on 09/12/14.
 */

Template.adminSetup.events({
    'click #save' : function (e,t) {
        var username = t.find('#username').value;
        var password = t.find('#password').value;
        var password_confirm = t.find('#password_confirm').value;

        if(password === password_confirm){
            Accounts.createUser({
                username : username,
                password : password
            }, function (err){
                if(!err){
                    toastr.success('Akun admin telah dibuat');
                }else{
                    toastr.error('Errot');
                }
            })
        }else{
            toastr.error('Password konfirm tidak cocok!');
        }
    }
});