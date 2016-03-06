angular.module("a1pd", ['ngRoute']);

angular.module("a1pd")
    .config(['$routeProvider',function ($routeProvider) {
        $routeProvider
            .when("/", { templateUrl: "../views/home.html", controller: "IndexController", title: "A1 Professional Designs", menuFlagGlobalValue: 1 })
            .when("/about", { templateUrl: "../views/about.html", controller: "IndexController", title: "About | A1 Professional Designs", menuFlagGlobalValue: 2 })
            .when("/products-and-services", { templateUrl: "../views/products-and-services.html", controller: "IndexController", title: "Products and Services | A1 Professional Designs", menuFlagGlobalValue: 3 })
            .when("/contact", { templateUrl: "../views/contact.html", controller: "IndexController", title: "Contact | A1 Professional Designs", menuFlagGlobalValue: 4 })
            .otherwise({templateUrl:""});
    }]);

angular.module("a1pd").run(['$location', '$rootScope', function ($location, $rootScope) {
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        $rootScope.pageTitle = current.$$route.title;
        $rootScope.menuFlagGlobal = current.$$route.menuFlagGlobalValue;
    });
}]);

angular.module("a1pd")
    .controller("IndexController", ['$scope', function ($scope) {
    }]);

angular.module("a1pd")
    .controller("MenuController", ['$scope', function ($scope) {
        $scope.mobileToggleFlag = false;
        $scope.setMobileToggle = function () {
            $scope.mobileToggleFlag = ($scope.mobileToggleFlag == true ? false : true);
        };
        $scope.menuFlag = 1;
        $scope.setMenuFlag = function (x) {
            $scope.menuFlag = x;
        };
    }]);

angular.module("a1pd")
    .controller("ProductsController", ['$scope', '$location', '$anchorScroll', function ($scope, $location, $anchorScroll) {
        $scope.scrollTo = function (id) {
            $location.hash(id);
            $anchorScroll();
        }
    }]);

angular.module("a1pd")
    .controller("AppCtrl",['$rootScope', function ($rootScope) {
        return $rootScope.$on('$routeChangeSuccess', (function () {
            return function (event, current, previous) {
                return $rootScope.pageTitle = $route.current.title;
            };
        }));
    }]);
