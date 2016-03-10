'use strict';

storeApp.controller("productCtrl", function ($scope) {

  console.log("entro al ctrl");

  $scope.products=[
    {
      id:0,
      title:'algun product',
      image:
      'https://scorecardrewards-qa.hinda.com/cdn/images/Release/Hinda_HiRes/487.jpg',
      points:2500
    },
    {
      id:1,
      title: 'producto 2 el mejor',
      image:'http://lorempixel.com/601/300/',
      points:3500
    },
    {
      id:2,
      title: 'producto 3 algo es algo',
      image:'https://scorecardrewards-qa.hinda.com/cdn/images/Release/Hinda_HiRes/1541.jpg',
      points:4000
    },
    {
      id:3,
      title: 'producto 2 el mejor',
      image:'http://lorempixel.com/603/300/',
      points:3500
    },
    {
      id:4,
      title: 'producto 2 el mejor',
      image:'http://lorempixel.com/604/300/',
      points:3500
    }
  ];
  console.log("Prods");
  console.log($scope.products);

  $scope.slides=[
    {
      id:1,
      image:'http://lorempixel.com/601/300/',
      text:'beautiful pic '
    },
    {
      id:2,
      image:'http://lorempixel.com/602/300/',
      text:'beautiful pic '
    },  {
      id:3,
      image:'http://lorempixel.com/603/300/',
      text:'beautiful pic '
    }
  ];

  $scope.myInterval = 5000;
  $scope.noWrapSlides = false;
  $scope.active = 0;

  console.log("slides test");
  console.log($scope.slides);
});
