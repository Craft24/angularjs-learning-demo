angular.module("personApp", []).controller("personCtrl", function($scope) {
    $scope.persons = [
        { name: "hanlong", city: "zhengzhou", born: "1988" },
        { name: "nishui", city: "zhoukou", born: "1987" },
        { name: "nishuihanlong", city: "zhengzhou", born: "1987" }
    ]
});