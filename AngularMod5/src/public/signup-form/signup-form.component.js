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
         ctrl.retrieveItem({shortName: ctrl.menuNumber.toUpperCase()}).then(function (response){
            console.log('Data at form view controller ', response);
            if(response.status == 500){
                ctrl.menu_item = 'Error! Menu element does not exist' 
            }else{
                ctrl.menu_item = response;;
            }
         })
         
    }
}

})();