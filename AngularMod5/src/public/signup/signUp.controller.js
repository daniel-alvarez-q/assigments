(function(){
"use strict";

angular.module('public').controller('SignUpController', SignUpController);

SignUpController.$inject = ['UserSubscriptionService'];

function SignUpController (UserSubscriptionService){
    var ctrl = this;

    ctrl.saveUser = function (userModel){
        UserSubscriptionService.createUser(userModel);
    }
}

})();