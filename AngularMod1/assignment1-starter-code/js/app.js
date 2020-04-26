(function(){
    'use strict';

    angular.module("lunchReview", [])
    .controller("inputReview", check);

    check.$inject = ["$scope"];

    function check ($scope){
        $scope.list;
        $scope.message;

        $scope.checkInput = function (){
            if($scope.list === undefined || $scope.list=== ""){
                $scope.message = "Please enter data first, don't try to fool me";
            }else{
                $scope.processInput();
            };
        };

        $scope.processInput = function (){
            var lunchElements = $scope.list.split(',');
            var counter = 0;
            for(var i = 0; i<lunchElements.length; i++){
                lunchElements[i] = lunchElements[i].trim();
                if (lunchElements[i] != "" ){
                    counter ++;
                }
            };
            $scope.createMessage(lunchElements, counter);
        };

        $scope.createMessage = function(a, c){
            console.log(a);
            console.log(c);
            if(c > 3){
                $scope.message = "Too much! Take it easy";
            }else{
                $scope.message = "Enjoy your meal!";
            };
        };
    }

})();

