(function(){
'use strict';

angular.module('data').service('MenuDataService', MenuDataService);

function MenuDataService (){
    var MDService = this;

    MDService.getAllCategories  = function (){
        var promise = $http({
            method:'GET',
            url:'https://davids-restaurant.herokuapp.com/categories.json'
        }).then(function(response){
            return response.data;
        })

        return promise;
    }

    MDService.getItemsForCategories = function (shortName){
        //
    }
}
})();