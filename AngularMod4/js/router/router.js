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
        controller: 'CategoriesController as CatCtrl',
        resolve: {
            categories: ['MenuDataService', function (MenuDataService){
                return MenuDataService.getAllCategories();
            }]
        }
    })

    .state('items-view', {
        url:'/items/{shortName}',
        templateUrl:'templates/items.main.html',
        controller: 'ItemsController as ItemsCtrl',
        params:{
            shortName: null,
        },
        resolve:{
            items: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService){
                return MenuDataService.getItemsForCategories($stateParams.shortName);
            }]
        }
    })
}
})();