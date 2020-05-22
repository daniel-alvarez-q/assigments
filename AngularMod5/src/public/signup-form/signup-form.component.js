(function(){
"use strict";

angular.module('public').component('signupForm', {
    templateUrl: 'src/public/signup-form/signup-form.html',
    controller: formController,
});

formController.$inject = ['UserSubscriptionService'];

function formController (UserSubscriptionService){
    var ctrl = this;
    var user = {};
    ctrl.signUp = function (){
        user.firstName = ctrl.firstName;
        user.lastName = ctrl.lastName;
        user.email = ctrl.email;
        user.phone = ctrl.phone;
        user.menuNumber = ctrl.menuNumber;      
        console.log("User data obtained from form: ", user);
        UserSubscriptionService.createUser(user);
    };
}

})();