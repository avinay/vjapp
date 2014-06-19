angular.module('ionicApp', ['ionic'])

.config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('menu', {
      url: "/menu",
      abstract: true,
      templateUrl: "menu.html",
      controller: 'MenuCtrl'
    })
    .state('menu.tabs', {
      url: "/tab",
      views: {
        'menuContent' :{
          templateUrl: "tabs.html"
        }
      }
    })
    .state('menu.tabs.buttons', {
      url: "/buttons",
      views: {
        'buttons-tab': {
          templateUrl: "buttons.html",
          controller: 'ButtonsTabCtrl'
        }
      }
    })
    .state('menu.tabs.list', {
      url: "/list",
      views: {
        'list-tab': {
          templateUrl: "list.html",
          controller: 'ListCtrl'
        }
      }
    })
	.state('menu.tabs.lehenges', {
      url: "/lehenges",
      views: {
        'list-tab': {
          templateUrl: "lehenges.html"
        }
      }
    })
	.state('menu.tabs.salwars', {
      url: "/salwars",
      views: {
        'list-tab': {
          templateUrl: "salwars.html"
        }
      }
    })
    .state('menu.tabs.item', {
      url: "/item",
      views: {
          'item-tab': {
          templateUrl: "item.html"
        }
      }
    })
   .state('menu.tabs.exedash', {
       url: "/exedash",
       views: {
           'exedash-tab': {
               templateUrl: "exedash.html"
           }
       }
   })
    .state('menu.tabs.prodlis', {
        url: "/prodlis",
      views: {
          'list-tab': {
            templateUrl: "prodlis.html",
			controller: 'dataCtrl'
        }
      }
    })
	.state('menu.tabs.lehengas1', {
        url: "/lehengas1",
      views: {
          'list-tab': {
            templateUrl: "lehengas1.html"
        }
      }
    })
	.state('menu.tabs.salwars1', {
        url: "/salwars1",
      views: {
          'list-tab': {
            templateUrl: "salwars1.html"
        }
      }
    })
	.state('menu.tabs.prodlis1', {
        url: "/prodlis1",
      views: {
          'list-tab': {
            templateUrl: "prodlis1.html"
        }
      }
    })
	.state('menu.tabs.prod1', {
        url: "/prod1",
      views: {
          'list-tab': {
            templateUrl: "prod1.html"
			
        }
      }
    })
	.state('menu.tabs.prod2', {
        url: "/prod2",
      views: {
          'list-tab': {
            templateUrl: "prod2.html"
        }
      }
    })
	.state('menu.tabs.prod3', {
        url: "/prod3",
      views: {
          'list-tab': {
            templateUrl: "prod3.html"
			
        }
      }
    })
	.state('menu.tabs.prod4', {
        url: "/prod4",
      views: {
          'list-tab': {
            templateUrl: "prod4.html"
        }
      }
    })
	.state('menu.tabs.prod5', {
        url: "/prod5",
      views: {
          'list-tab': {
            templateUrl: "prod5.html"
        }
      }
    })
	.state('menu.tabs.prod6', {
        url: "/prod6",
      views: {
          'list-tab': {
            templateUrl: "prod6.html"
        }
      }
    })
	.state('menu.tabs.prod7', {
        url: "/prod7",
      views: {
          'list-tab': {
            templateUrl: "prod7.html"
        }
      }
    })
	.state('menu.tabs.prod8', {
        url: "/prod8",
      views: {
          'list-tab': {
            templateUrl: "prod8.html"
        }
      }
    })
	.state('menu.tabs.prod9', {
        url: "/prod9",
      views: {
          'list-tab': {
            templateUrl: "prod9.html"
        }
      }
    })
    .state('menu.keyboard', {
      url: "/keyboard",
      views: {
        'menuContent': {
          templateUrl: "keyboard.html"
        }
      }
    })
    .state('menu.slidebox', {
      url: "/slidebox",
      views: {
        'menuContent': {
          templateUrl: "slidebox.html",
          controller: 'SlideboxCtrl'
        }
      }
    })
    .state('menu.wedding', {
      url: "/wedding",
      views: {
        'menuContent': {
          templateUrl: "wedding.html"
        }
      }
    })
	.state('menu.about', {
      url: "/about",
      views: {
        'menuContent': {
          templateUrl: "about.html"
        }
      }
    });

  $urlRouterProvider.otherwise("menu/tab/buttons");

})
.controller('ListCtrl', function ($scope) {

  $scope.data = {
    showDelete: false
  };

  $scope.itemButtons = [
    {
      text: 'Delete',
      type: 'button-assertive',
      onTap: function (item) {
        alert('Delete Item: ' + item.id + ' ?');
      }
    }
  ];

  $scope.onItemDelete = function (item) {
    $scope.items.splice($scope.items.indexOf(item), 1);
  };

  $scope.items = [
    {
      id: 1
    },
    {
      id: 2
    },
    {
      id: 3
    },
    {
      id: 4
    },
    {
      id: 5
    },
    {
      id: 6
    },
    {
      id: 7
    },
    {
      id: 8
    },
    {
      id: 9
    },
    {
      id: 10
    }
  ];

})

.controller('ButtonsTabCtrl', function ($scope, $ionicPopup, $ionicActionSheet, $ionicModal) {
    $scope.showPopup = function () {
     $ionicPopup.alert({
       title: 'Popup',
       content: 'This is ionic popup alert!'
     });
    };
    $scope.showActionsheet = function () {
        $ionicActionSheet.show({
          titleText: 'Ionic ActionSheet',
          buttons: [
            {
              text: 'Facebook'
            },
            {
              text: 'Twitter'
            },
          ],
          destructiveText: 'Delete',
          cancelText: 'Cancel',
          cancel: function () {
            console.log('CANCELLED');
          },
          buttonClicked: function (index) {
            console.log('BUTTON CLICKED', index);
            return true;
          },
          destructiveButtonClicked: function () {
            console.log('DESTRUCT');
            return true;
          }
        });
    };
    $ionicModal.fromTemplateUrl('modal.html', function (modal) {
        $scope.modal = modal;
      }, {
        animation: 'slide-in-up'
      });
})

.controller('SlideboxCtrl', function($scope, $ionicSlideBoxDelegate) {
  $scope.nextSlide = function() {
    $ionicSlideBoxDelegate.next();
  }             
}) 

.controller('dataCtrl', function($scope) {
  
  Parse.initialize("xJecl7wfn75gJngmLqt41D08I4JhM82oWJ4IY50O", "kIR9rHnAHkgfL1jJhozNpQSoPH8xD4wY3LVcUI0k");
  var User = Parse.Object.extend("beaukart");

  function getTodos() {
	  //alert("ss");
    var query = new Parse.Query(User);
    query.find({
      success: function(results) {
        $scope.$apply(function() {
          $scope.users = results.map(function(obj) {
            return {username: obj.get("prod_name"), email: obj.get("prod_category"), parseObject: obj};
          });
        });
      },
      error: function(error) {
        alert("Error: " + error.code + " " + error.message);
      }
    });
  }

  getTodos();
  
})              

.controller('MenuCtrl', function($scope, $ionicSideMenuDelegate, $ionicModal) {
  $scope.toggleLeft = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };
              
  $ionicModal.fromTemplateUrl('modal.html', function (modal) {
    $scope.modal = modal;
  }, {
    animation: 'slide-in-up'
  });
 })

  
 .controller('AppCtrl', function() {

  ionic.Platform.ready(function() {

  });

 });
              
              