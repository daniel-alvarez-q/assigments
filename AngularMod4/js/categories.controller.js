(function(){
'use strict';

angular.module('MenuApp').controller('CategoriesController', CategoriesController);

CategoriesController.$inject = ['MenuDataService'];

function CategoriesController(MenuDataService){
    var ctrl = this;

    var getItems = MenuDataService.getAllCategories().then(function (response){
        ctrl.getItems = response;
        console.log(ctrl.getItems);
    });

    
}

})();