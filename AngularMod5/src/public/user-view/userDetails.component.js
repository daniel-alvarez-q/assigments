(function(){
"use strict";

angular.module('public').component('showUser', {
    templateUrl: 'src/public/user-view/userDetails.html',
    bindings:{
        userModel : '<'
    },
    controller : UserDetailsController,
})

function UserDetailsController(){
    var ctrl = this;

    ctrl.$onInit = function(){
        ctrl.userDetails = ctrl.userModel;
        console.log(ctrl.userDetails);
    }
    
}

})();