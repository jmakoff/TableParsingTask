var app = angular.module('myTestApp', []);

app.controller('menuCtrl', ['$scope', '$http',
    function ($scope, $http) {
        $http.get('https://jsonplaceholder.typicode.com/users').then(function (response) {
            $scope.users = response.data
        })
        $scope.username
        $scope.propertyName = 'name';
        $scope.reverse = true;
        $scope.nameReg = /\w/;
        $scope.phoneReg = /[\+\(]{0,2}\d{1,4}[\.\-\s\(\)]*\d{1}[\.\-\s\(\)]*\d{1}[\.\-\s\(\)]*\d{1}[\.\-\s\(\)]*\d{1}[\.\-\s\(\)]*\d{1}[\.\-\s\(\)]*\d{1}[\.\-\s\(\)]*\d{1}[\.\-\s\(\)]*\d{1}[\.\-\s\(\)]*\d{1}[\.\-\s\(\)]*\d{1}/
        $scope.websiteReg = /^([0-9\w+]+\.+[\w+]{2,15})/
        $scope.sendUser = function () {

            $scope.users.push({/*lets find inputs with the pureJS*/
                'id': $scope.users.length + 1,
                'name': document.getElementById('inputName').value,
                'username': document.getElementById('username').value,
                'email': document.getElementById('email').value,
                'phone': document.getElementById('phone').value,
                'address': {
                    'street': document.getElementById('address.street').value,
                    'suite': document.getElementById('address.suite').value,
                    'city': document.getElementById("address.city").value,
                    'zipcode': document.getElementById('address.zipcode').value
                },
                'website': document.getElementById('website').value,
                'company': {
                    'name': document.getElementById('company.name').value,
                    'catchPhrase': document.getElementById('company.catchPhrase').value,
                    'bs': document.getElementById('company.description').value
                }
            })
            var form = document.getElementsByName('sendForm')[0]
            form.reset()/*clean after yourself*/


        }


        $scope.sortBy = function (propertyName) {
            $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
            $scope.propertyName = propertyName;
        };

    }
])
app.directive('modalDialog', function () {
    return {
        restrict: 'E',
        scope: {
            show: '='
        },
        replace: true, // Replace with the template below
        transclude: true, // we want to insert custom content inside the directive
        link: function (scope, element, attrs) {
            scope.dialogStyle = {};
            if (attrs.width)
                scope.dialogStyle.width = attrs.width;
            if (attrs.height)
                scope.dialogStyle.height = attrs.height;
            scope.hideModal = function () {
                scope.show = false;
            };
            scope.send = function () {

                scope.show = false;
            }

        },
        template: "<div class='ng-modal' ng-show='show'><div class='ng-modal-overlay' ng-click='hideModal()'></div><div class='ng-modal-dialog' ng-style='dialogStyle'><div class='ng-modal-close' ng-click='hideModal()'>X</div><div class='ng-modal-dialog-content' ng-transclude></div></div></div>"
    };
});

app.controller('modalCtrl', ['$scope', function ($scope) {
    $scope.modalShown = false;
    $scope.toggleModal = function () {
        $scope.modalShown = !$scope.modalShown;
    }

    /*$scope.sendUser = function () {
     $scope.users.push({'id':$scope.users.length+2, 'name': $scope.})
     console.log($scope.name.value )


     }*/

}]);




