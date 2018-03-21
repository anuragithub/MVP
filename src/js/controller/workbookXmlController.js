app.controller('WorkbookXMLController', ['$scope','$rootScope', '$state','$stateParams', 'workbookDetails', function($scope, $rootScope, $state, $stateParams, workbookDetails)  {
	   //---------------------------------------------------------------------------------
        $scope.userData         			= $rootScope.userData;
 
        //---------------------------------------------------------------------------------
        //Logout
        //
        $scope.templateDataArray = null;
        var onComplete = function(data) 
        {
			var homepageData = $rootScope.blnMockData===false?data[0] :data.data;
			
            $scope.templateDataArray    		= homepageData.templatepageSeeAlso;
        };
        var onError = function() 
        {
            alert('onError')
        };
        //---------------------------------------------------------------------------------
        //Service call to get data from service
        //
        workbookDetails.getWorkbookDetails().then(onComplete, onError);
}]);