'use strict'
  var storeHomeMod = angular.module("HindaApp.store", []);
storeHomeMod.directive('productItem', function () {
        return {
            restrict: 'E',
            templateUrl: "merchhome/product/product-item.tpl.html",
            scope: {
                product: "=",
                wishListAction: "&",
                openProduct: "&",
            }
        }
    });
