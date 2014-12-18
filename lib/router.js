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

Router.route('/stock',{
    name : 'stock',
    controller : 'stockController'
});

Router.route('/partner',{
    name : 'partner',
    controller : 'partnerController'
});

Router.route('/order', {
    name : 'order',
    controller : 'orderController'
});

Router.route('/request', {
    name : 'request',
    controller : 'requestController'
});

Router.route('/production', {
    name : 'production',
    controller : 'productionController'
});

Router.route('/export', {
    name : 'export',
    controller : 'exportController'
});