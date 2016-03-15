'use strict'
  var storeHomeMod = angular.module("HindaApp.store", []);
storeHomeMod.directive('storeSection', function () {
        return {
            restrict: 'E',
            templateUrl: "merchhome/store/store-section.tpl.html",
            scope: {
                product: "=",
                wishListAction: "&",
                openProduct: "&",
            }
        }
    });
