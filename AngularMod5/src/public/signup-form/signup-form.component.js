(function(){
"use strict";

angular.module('public').component('signupForm', {
    templateUrl: 'src/public/signup-form/signup-form.html',
    controller: formController,
    bindings:{
        storeUser : '&',
        retrieveItem : '&'
    }
});

function formController (){
    var ctrl = this;
    var user = {};
    ctrl.signUp = function (){
        user.firstName = ctrl.firstName;
        user.lastName = ctrl.lastName;
        user.email = ctrl.email;
        user.phone = ctrl.phone;
        user.menuNumber = ctrl.menuNumber;   
        ctrl.menu_item = ctrl.retrieveItem({shortName: ctrl.menuNumber})   
        ctrl.storeUser({userModel: user});
    };

    ctrl.retrieveMenuItem = function (){
         ctrl.retrieveItem({shortName: ctrl.menuNumber}).then(function (response){
            console.log('Data at form view controller ', response);
            ctrl.menu_item = response;
         })
         
    }
}

})();