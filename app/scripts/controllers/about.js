'use strict';

/**
 * @ngdoc function
 * @name angularChartsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularChartsApp
 */
angular.module('angularChartsApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
