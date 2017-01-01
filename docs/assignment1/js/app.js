(function () {
    "use strict";
    angular.module("LunchCheck", []).controller("LunchCheckController", lunchCtrl);
    lunchCtrl.$inject = ["$scope"];
    function lunchCtrl($scope) {
        $scope.dishes = "";
        $scope.munch = "";
        $scope.inputStyle = "";
        $scope.messageStyle = "";
        $scope.checkLunch = function () {
            var dishes = $scope.dishes.split(",");
            for (var i = dishes.length - 1; i >= 0; i--) {
                if (dishes[i].trim() == ""
                    || dishes[i].toLowerCase().startsWith("cookie")) {
                    dishes.splice(i, 1);
                }
            }
            switch (dishes.length) {
                case 0: 
                    $scope.munch = "Please enter data first";
                    $scope.inputStyle = "border-color: #FF0000;"
                    $scope.messageStyle = "color: #FF0000;"
                    break;
                case 1:
                case 2:
                case 3:
                    $scope.munch = "Enjoy!";
                    $scope.inputStyle = "border-color: #00FF00;"
                    $scope.messageStyle = "color: #00FF00;"
                    break;
                default:
                    $scope.munch = "Too much!";
                    $scope.inputStyle = "border-color: #FFFF33;"
                    $scope.messageStyle = "background-color: #FFFF33;"
            }
        }
    }
})();