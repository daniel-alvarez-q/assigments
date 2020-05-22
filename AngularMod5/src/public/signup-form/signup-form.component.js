(function(){
"use strict";

angular.module('public').component('signupForm', {
    templateUrl: 'src/public/signup-form/signup-form.html',
    controller: formController,
});


function formController (){
    var ctrl = this;
    var user = {};
    ctrl.signUp = function (){
        user.firstName = ctrl.firstName;
        user.lastName = ctrl.lastName;
        user.email = ctrl.email;
        user.phone = ctrl.phone;      
        console.log(user);
    };

}

})();