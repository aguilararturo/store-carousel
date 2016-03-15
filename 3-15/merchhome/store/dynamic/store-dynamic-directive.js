'use strict'
  var storeHomeMod = angular.module("HindaApp.store", []);
storeHomeMod.directive('storeDynamic', function () {
        return {
            restrict: 'E',
            templateUrl: "merchhome/store/dynamic/store-dynamic.tpl.html",
            scope: {
                store: "=",
                openStore: "&",
                store-align:"="
            }
        }
    });
