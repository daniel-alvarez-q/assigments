(function(){
'use strict';

angular.module('MenuApp').controller('CategoriesController', CategoriesController);

CategoriesController.$inject = ['MenuDataService', 'categories'];

function CategoriesController(MenuDataService, categories){
    var ctrl = this;
    ctrl.getItems = categories;
    console.log(ctrl.getItems)
}

})();