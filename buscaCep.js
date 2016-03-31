angular.module("myapp", [])
.controller("MyController", function($scope, $http) {

    $scope.buscaEndereco = {};

    $scope.buscaEndereco.doClick = function(item, scope) {

        var responsePromise = $http.get("http://api.postmon.com.br/cep/"+ $scope.cep);

        responsePromise.success(function(data, status, headers, config) {
            $scope.buscaEndereco = data;
        });
        responsePromise.error(function(data, status, headers, config) {
            alert("Confira os numeros digitados.");
        });
    }
});