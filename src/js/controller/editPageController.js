app.controller('EditPageController', ['$scope','$rootScope', '$state','$stateParams', 'editpageDetails', function($scope, $rootScope, $state, $stateParams, editpageDetails)  {
	   //---------------------------------------------------------------------------------
        $scope.userData  = $rootScope.userData;
        $scope.isAdminUser  = $scope.userData.role === "admin" ? true : false;
        $scope.EditTemplateName = $stateParams.EditTemplateName;
        $scope.disbaleDateList = true;
 
        //---------------------------------------------------------------------------------
        //Logout
        //
        $scope.templateDataArray = null;
        var onComplete = function(data) 
        {   
			$scope.homepageData = $rootScope.blnMockData===true?data[0] :data.data;
                //$scope.editData = homepageData.BasicInformation;
                //$scope.editData = homepageData.DataType;
        };

        var onError = function() 
        {
            alert('onError')
        };
        //---------------------------------------------------------------------------------
        //Service call to get data from service
        //praveen
        editpageDetails.geteditpageDetails().then(onComplete, onError);

        $scope.changeDataType = function(rowdata) 
        {
            if(rowdata.datatype==="Date")
	        	{
	            	$scope.rowdata.disableDateFormat = false;
	        	}
            else
            	{
            	$scope.rowdata.disableDateFormat = true;
            	}
        }

        $scope.update = function(homepageData) 
        {
            console.log("update");
            $scope.homepageData.RowInformation = angular.copy(homepageData);
            alert('updatedata');
        }
}]);