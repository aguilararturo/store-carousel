'use strict'
  var storeHomeMod = angular.module("HindaApp.store", []);
storeHomeMod.directive('storeStatic', function () {
        return {
            restrict: 'E',
            templateUrl: "merchhome/store/static/store-static.tpl.html",
            scope: {
                store: "=",
                openStore: "&",
                store-align:"="
            }
        }
    });
