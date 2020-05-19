(function(){
'use strict';

angular.module('MenuApp').controller('ItemsController', ItemsController);

ItemsController.$inject = ['MenuDataService', '$stateParams'];

function ItemsController(MenuDataService, $stateParams){
    var ctrl = this;
    ctrl.shortName = $stateParams.shortName;

    var getItems = MenuDataService.getItemsForCategories(ctrl.shortName).then(function (response){
        ctrl.items = response.menu_items;
    });
};

})();