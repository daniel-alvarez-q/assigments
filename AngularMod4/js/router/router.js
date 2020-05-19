(function(){
'use strict';

angular.module('MenuApp').config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

function RoutesConfig($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');
    $stateProvider

    .state('home', {
        url:'/',
        templateUrl:'templates/home.html',
    })

    .state('categories-view', {
        url: '/categories',
        templateUrl: 'templates/categories.main.html',
        controller: 'CategoriesController as CatCtrl'
    })

    .state('items-view', {
        url:'/items/{shortName}',
        templateUrl:'templates/items.main.html',
        controller: 'ItemsController as ItemsCtrl',
        params:{
            shortName: null,
        }
    })
}
})();