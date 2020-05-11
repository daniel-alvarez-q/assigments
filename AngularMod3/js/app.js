(function (){
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', foundItems);

NarrowItDownController.$inject = ['MenuSearchService'];
MenuSearchService.$inject = ['$http'];

function foundItems(){
    var ddo = {
        restrict : 'E',
        templateUrl : '/templates/founddirective.html',
        scope : {
            items : "=foundItems",
            remove: "&onRemove"
        },
        controller: FoundItemsDirectiveController,
        controllerAs: 'directiveCtrl',
        bindToController: true
    };
    return ddo;
}

function FoundItemsDirectiveController (){
    var directiveCtrl = this;
}

function NarrowItDownController(MenuSearchService){
    var NarrowCtrl = this;
    NarrowCtrl.userInput = "";
    NarrowCtrl.searchItem = function (){
        if (NarrowCtrl.userInput === undefined || NarrowCtrl.userInput == ""){
            console.log("Hey! This is empty")
        }else{
            var promise = MenuSearchService.getMatchedMenuItems(NarrowCtrl.userInput.toLowerCase());
            promise.then(function(response){
                NarrowCtrl.found = response;
                console.log(NarrowCtrl.found);
            });
        }  
    }
    NarrowCtrl.removeItem = function(i){
        NarrowCtrl.found.splice(i, 1);
    }
};


function MenuSearchService($http){
    this.getMatchedMenuItems = function (searchTerm){
        return $http({
                method: 'GET',
                url: 'https://davids-restaurant.herokuapp.com/menu_items.json'
                }).then(function(response){
                    var filter = [];
                    for(var item of response.data.menu_items){
                        if (item.description.toLowerCase().includes(searchTerm)){
                            filter.push(item);
                        }
                    }
                    return filter;
                }).catch(function(error){
                    console.log(error);
                });
                };
}

})();


