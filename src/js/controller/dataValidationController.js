app.controller('DataValidationController', ['$scope','$rootScope', '$state','$stateParams', 'homepageDetails', function($scope, $rootScope, $state, $stateParams, homepageDetails)  {
	   //---------------------------------------------------------------------------------
        $scope.userData         			= $rootScope.userData;
        $scope.isAdminUser      			= $scope.userData.role === "admin" ? true : false;

        //---------------------------------------------------------------------------------
        //Logout
        //
        $scope.templateDataArray = null;
        var onComplete = function(data) 
        {   
			var homepageData = $rootScope.blnMockData===true?data[0] :data.data;
			
            $scope.templateDataArray    		= homepageData.templatepageSeeAlso;
        };

        var onError = function() 
        {
            alert('onError')
        };
        //---------------------------------------------------------------------------------
        //Service call to get data from service
        //praveen
        homepageDetails.getHomePageDetails().then(onComplete, onError);
}]);