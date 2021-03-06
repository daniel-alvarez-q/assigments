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
        templateUrl : 'templates/founddirective.html',
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
    NarrowCtrl.error = false;
    NarrowCtrl.searchItem = function (){
        if (NarrowCtrl.userInput === undefined || NarrowCtrl.userInput == ""){
            NarrowCtrl.error = true;
        }else{
            var promise = MenuSearchService.getMatchedMenuItems(NarrowCtrl.userInput.toLowerCase());
            promise.then(function(response){
                if (response.length == 0){
                    NarrowCtrl.error = true;
                }else{
                    NarrowCtrl.error = false;
                };
                NarrowCtrl.found = response;
            });
        }  
    }
    NarrowCtrl.removeItem = function(i){
        NarrowCtrl.found.splice(i, 1);
    }
};


function MenuSearchService($http){
    this.getMatchedMenuItems = function (searchTerm){
        var promise =  $http({
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
        console.log(promise);
        return promise;
        };
}

})();


