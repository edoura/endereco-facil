angular.module("myapp", [])
.controller("cepController", function($scope, $http) {

    $scope.endereco = {};

    $scope.endereco.doClick = function(item, scope) {

        var responsePromise = $http.get("http://api.postmon.com.br/cep/"+ $scope.cep);

        responsePromise.success(function(data, status, headers, config) {
            $scope.endereco = data;
        });
        responsePromise.error(function(data, status, headers, config) {
            alert("Confira os numeros digitados.");
        });
    }
});