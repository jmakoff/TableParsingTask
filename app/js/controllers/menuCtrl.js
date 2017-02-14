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
        $scope.mailReg = /\S+@\S+\.\S+/;
        $scope.phoneReg = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/
        $scope.websiteReg = /(https?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})/
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







