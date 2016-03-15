
    "use strict";

  var merchHomeMod = angular.module("HindaApp.welcome", []);

    merchHomeMod.controller("welcomeController", function ($scope) {

        $scope.welcome = {
            title: 'Welcome to merchandise home page',
            description: 'Make your dreams true',
            image: "src/assets/wellcomeImg.jpg"
        };

        //console.log($scope.wellcome);
    });
