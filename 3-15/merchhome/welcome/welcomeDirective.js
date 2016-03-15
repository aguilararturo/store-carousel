(function () {
  "use strict";

  var merchHomeMod = angular.module("HindaApp.welcome", []);
  /**
  * @class categoryNavbar
  * @author Tyler Stewart
  * @desc Directive for category dropdown in top nav bar
  */
  merchHomeMod.directive("merchandiseWelcome", function () {
      return {
          restrict: "E",
          templateUrl: 'merchhome/welcome/welcome.tpl.html',
          scope: {
              wellcome: '=',
              wellcomeClick:'&'
          }

    };
  });
})();
