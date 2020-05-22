(function(){
"use strict";

angular.module('public').controller('UserViewController', UserViewController);

UserViewController.$inject = ['UserSubscriptionService'];

function UserViewController(UserSubscriptionService){
    var ctrl = this;
    
    

    ctrl.$onInit = function (){
        ctrl.user = UserSubscriptionService.returnUser();
    }
    
}
})();