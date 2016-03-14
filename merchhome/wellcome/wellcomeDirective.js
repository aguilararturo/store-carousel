(function () {
  "use strict";
    
  var merchHomeMod = angular.module("HindaApp.wellcome", []);
  /**
  * @class categoryNavbar
  * @author Tyler Stewart
  * @desc Directive for category dropdown in top nav bar
  */
  merchHomeMod.directive("merchWellcome", function () {
      return {
          restrict: "E",
          templateUrl: 'merchhome/wellcome/wellcome.tpl.html',
          scope: {
              wellcome: '=',
              wellcomeClick:'&'
          }

    };
  });
})();
