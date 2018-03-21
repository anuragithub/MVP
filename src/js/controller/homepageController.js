app.controller('HomePageController', ['$scope','$rootScope', '$state', function($scope, $rootScope, $state)  {
	   //---------------------------------------------------------------------------------
        $scope.userData         			= $rootScope.userData;
        $scope.isAdminUser      			= $scope.userData.role === "admin" ? true : false;

        //--------------------------------------------------------------------------------------------------------
        //Logout
        //
        $scope.logout = function() 
        {
            $state.transitionTo('login');
        }
		$scope.processAutoClick = function()
        {
            $state.transitionTo('home.processauto.emailprocess');
        }
        $scope.workbooktoXML = function()
		{
			$state.transitionTo('home.workbktoxml');
		}
}]);