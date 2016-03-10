'use strict'
storeApp.directive('productDetail', function () {
    console.log("entro direct");
        return {
            restrict: 'E',
            templateUrl: "/product/productItem.html",
            scope: {
                product: "=",
                wishListAction: "&",
                openProduct: "&",
            }
        }
    });
