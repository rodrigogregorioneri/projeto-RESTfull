(function(){
    'use strict'

    angular
    .module('sossego')
    .controller('pipaController', pipaController);

    pipaController.$inject = ['pipaAPI', '$scope'];

    function pipaController(pipaAPI, $scope){
        $scope.crud = function(pipa){
            pipaAPI.crud(pipa).success(function(data){
                localStorage.setItem('token', data);
            });

        }

        $scope.sair = function(){
            localStorage.removeItem('token');
        }

    }
})()