(function () {
    "use strict";

    var merchHomeControllerMod = angular.module("HindaApp.MerchHome", ["HindaApp.Models.Participant"]);

    /**
     * @class MerchHomeController
     * @author Purna Annapureddy
     * @desc Controller logic for Merchandise Home Page
     */
    merchHomeControllerMod.controller("MerchHomeController", function ($scope, participantModel, $uibModalStack, localStorageService) {

        /**
         * @function init
         * @author Purna Annapureddy
         * @memberof MerchHomeController
         * @desc Controller Intialization
         */
        (function () {
            $scope.user = (participantModel.getParticipant()) ? participantModel.getParticipant().displayName : "";
            $uibModalStack.dismissAll();
            localStorageService.remove('selectedCategories');
            localStorageService.remove('selectedPromotion');
        })();

        $scope.wellcome = {
            title: 'Wellcome to merchandise home page',
            description: 'Make your dreams true',
            image: "src/assets/wellcomeImg.jpg"
        };

        //console.log($scope.wellcome);
    });
})();