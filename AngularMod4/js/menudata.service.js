(function(){
'use strict';

angular.module('data').service('MenuDataService', MenuDataService);

MenuDataService.$inject = ['$http']

function MenuDataService ($http){
    var MDService = this;

    MDService.getAllCategories  = function (){
        var promise = $http({
            method:'GET',
            url:'https://davids-restaurant.herokuapp.com/categories.json'
        }).then(function(response){
            return response.data;
        });

        return promise;
    }

    MDService.getItemsForCategories = function (shortName){
        var promise = $http({
            method:'GET',
            url:'https://davids-restaurant.herokuapp.com/menu_items.json',
            params:{
                category: shortName,
            }
        }).then(function(response){
            return response.data;
        });

        return promise;
        
    }
}
})();