(function (){
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.factory('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

function ToBuyController (ShoppingListCheckOffService){
    var tb = this;
    var sl = ShoppingListCheckOffService;

    console.log(sl);
    tb.items = sl.tbArray;
    tb.boughtItem = function (i){
        var item = {};
        item.name = tb.items[i].name;
        item.quantity = tb.items[i].quantity;
        sl.abArray.push(item);
        tb.items.splice(i,1);
    }

    tb.listStatus = function (){
        if(tb.items.length == 0){
            return true;
        }else{
            return false;
        }
    }
};

function AlreadyBoughtController (ShoppingListCheckOffService){
    var sp = ShoppingListCheckOffService;
    console.log(sp);
    var ab = this;
    ab.items = sp.abArray;
    ab.listStatus = function (){
        if(ab.items.length == 0){
            return true;
        }else{
            return false;
        }
    }
    
};

function ShoppingListCheckOffService(){

    var factory = {};

    factory.tbArray = [
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
    factory.abArray = [];

    factory.accessTbArray = function (){
        return tbArray;
    }

    factory.accessAbArray = function (){
        return abArray;
    }

    factory.pushIntoAbArray = function (itemName, itemQuantity){
        var item = {};
        item.name = itemName;
        item.quantity = itemQuantity;
        abArray.push(item);
    }

    factory.removeFromTbArray = function (index){
        tbArray.splice(index, 1);
    }

    return factory;
};

})();