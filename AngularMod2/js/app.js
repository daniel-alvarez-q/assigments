(function (){
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

function ToBuyController (ShoppingListCheckOffService){
    var tb = this;
    tb.items = ShoppingListCheckOffService.accessTbArray();

    tb.broughtItem = function (i){
        ShoppingListCheckOffService.pushIntoAbArray(tb.items[i].name, tb.items[i].quantity);
        ShoppingListCheckOffService.removeFromTbArray(i);
    }

    tb.listStatus = function (){
        if (tb.items.length == 0){
            return true;
        }else{
            return false;
        }
    }
};

function AlreadyBoughtController (ShoppingListCheckOffService){
    var ab = this;

    ab.items = ShoppingListCheckOffService.accessAbArray();

    ab.listStatus = function (){
        if(ab.items.length === 0){
            return true;
        }else{
            return false;
        }
    }
};

function ShoppingListCheckOffService(){
    var checkoff = this;
    var tbArray = [
        {
            name: 'potatoes',
            quantity: 10
        },
        {
            name: 'tomatoes',
            quantity: 15
        },
        {
            name: 'apples',
            quantity: 4
        },
        {
            name: 'watermelons',
            quantity: 2
        },
        {
            name: 'snacks',
            quantity: 8
        }
    ];
    var abArray = [];

    checkoff.accessTbArray = function (){
        return tbArray;
    }

    checkoff.accessAbArray = function (){
        return abArray;
    }

    checkoff.pushIntoAbArray = function (itemName, itemQuantity){
        var item = {};
        item.name = itemName;
        item.quantity = itemQuantity;
        abArray.push(item);
    }

    checkoff.removeFromTbArray = function (index){
        tbArray.splice(index, 1);
    }
};

})();