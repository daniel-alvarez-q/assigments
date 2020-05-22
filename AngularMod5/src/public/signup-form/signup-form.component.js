(function(){
"use strict";

angular.module('public').component('signupForm', {
    templateUrl: 'src/public/signup-form/signup-form.html',
    controller: formController,
    bindings:{
        storeUser : '&',
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
        ctrl.storeUser({userModel: user});
    };
}

})();