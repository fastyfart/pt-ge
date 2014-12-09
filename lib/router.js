/**
 * Created by fasty on 09/12/14.
 */

Router.configure({
    controller : 'appController',
    layoutTemplate : 'layout',
    loadingTemplate : 'loading'
});

Router.route('/',{
    name : 'dashboard',
    controller : 'dashboardController'
});