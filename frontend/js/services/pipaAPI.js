(function(){
    'use strict'

    angular
    .module('sossego')
    .factory('pipaAPI', pipaAPI);
    pipaAPI.$inject = ['$http']
    function pipaAPI($http){
        var _crud = function(pipa){
            return $http.post('http://127.0.0.1:5000/api/v1/pipas');
        };
        return{
            crud: _crud
        }
    }
})()