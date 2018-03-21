//Method 1:
var CreatePageController = (function() { 
   function CreatePageController($scope, $rootScope, $state, $stateParams) {

    $scope.userData = $rootScope.userData;
    $scope.logout = function() 
   {
       $state.transitionTo('login');
   }

}
return CreatePageController;
}());