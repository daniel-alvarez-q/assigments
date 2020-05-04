(function(){
    'use strict';

    angular.module("lunchReview", [])
    .controller("inputReview", check);

    check.$inject = ["$scope", "$filter"];

    function check ($scope, $filter){
        $scope.list;
        $scope.message;
        $scope.status = {
            "color" : "black",
        };


        $scope.checkInput = function (){
            if($scope.list === undefined || $scope.list=== ""){
                $scope.message = "Please enter data first, don't try to fool me";
                $scope.status = {
                    "color" : "red",
                }
                $scope.inputStatus = {
                    "border-color" : "red",
                }
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
            $scope.inputStatus = {
                "border-color" : "green",
            };
            $scope.status = {
                "color" : "green",
            };
        };
    } 

})();

