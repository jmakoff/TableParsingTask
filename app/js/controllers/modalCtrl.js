app.controller('modalCtrl', ['$scope', function ($scope) {      /*controller for modal tab*/
    $scope.modalShown = false;
    $scope.toggleModal = function () {
        $scope.modalShown = !$scope.modalShown;
    }
}]);