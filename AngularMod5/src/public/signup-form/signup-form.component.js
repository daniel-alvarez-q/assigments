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

formController.$inject = ['$rootScope'];

function formController ($rootScope){
    var ctrl = this;
    var user = {};
    var itemStatus;
    ctrl.signUp = function (){
        ctrl.retrieveItem({shortName: ctrl.menuNumber.toUpperCase()}).then(function (response){
            if(response.status == 500){
                ctrl.menu_item = 'Error! Menu element does not exist' 
            }else{
                user.firstName = ctrl.firstName;
                user.lastName = ctrl.lastName;
                user.email = ctrl.email;
                user.phone = ctrl.phone;
                user.menuNumber = ctrl.menuNumber;   
                ctrl.menu_item = ctrl.retrieveItem({shortName: ctrl.menuNumber.toUpperCase()}) 
                ctrl.storeUser({userModel: user});
            }
         })
    };

    ctrl.retrieveMenuItem = function (){
         ctrl.retrieveItem({shortName: ctrl.menuNumber.toUpperCase()}).then(function (response){
            if(response.status == 500){
                ctrl.menu_item = 'Error! Menu element does not exist' 
            }else{
                ctrl.menu_item = response;
            }
         })
         
    }

    $rootScope.$on('MenuService:menuItemSearch', function(event, data){
        if(data.response === false){
            console.log('Failure was catched successfully', event)
            itemStatus = false;
        };
        if(data.response === true){
            console.log('Success was catched correctly', event)
            itemStatus = true;
        };
    })
}

})();