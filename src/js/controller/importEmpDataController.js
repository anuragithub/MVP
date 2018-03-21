app.controller('ImportEmpDataController', ['$scope','$rootScope','$http', '$state','$stateParams','Upload','ngDialog', function($scope, $rootScope, $http, $state, $stateParams,Upload, ngDialog)
{
		//------------------------------------------------------------------------------
		//variables
		//
		var compid 				= $scope.userData.cmpID;
		var uploadURL 			= "";
		$scope.fileList 		= [];
		$scope.models 			= {selected: null,lists: {"list": []}};
	    $scope.empTempSelected 	= false;//boolean to display next steps on submit button click (ng-show)
	    $scope.uploadProgress 	= false;// animation show for upload process
	    
		if($rootScope.blnMockData)
		{
			uploadURL = 'https://angular-file-upload-cors-srv.appspot.com/upload';
		}
		else
		{
			uploadURL ='ManagePermissionGroupCreationServlet';
		}
		//------------------------------------------------------------------------------
	    //Function to reset the variables
	    //------------------------------------------------------------------------------
		$scope.resetVariables =function()
		{
			$scope.empTempSelected= false;
	        $scope.uploadProgress = false;	
		}
	    //------------------------------------------------------------------------------
	    //Function to update the model data based on the files selected
	    //------------------------------------------------------------------------------
	    $scope.updateFileList = function()
	    {
	        var fileArrayLength = $scope.file.length;
	         for (var i = 0; i < $scope.file.length; i++) 
	         {
	              var fileobj = $scope.file[i];
	             $scope.models.lists.list.push({label:$scope.file[i].name, relatedFile:fileobj });
	         }
	         $scope.empTempSelected = true;
	    }
		//------------------------------------------------------------------------------
		//Function to remove item from the list and model on Delete icon click
		//------------------------------------------------------------------------------
		$scope.removeItem = function(item)
		{
		    var index= $scope.models.lists.list.indexOf(item)
		    $scope.models.lists.list.splice(index,1); 
		}
		//--------------------------------------------------------------------------------
		//open dialog box Success Factor credentials..
		//--------------------------------------------------------------------------------
		$scope.openSFDialog = function() 
		{
			ngDialog.openConfirm({
				template: 'src/views/process_auto/SFDialog.html',
				controller:'modalControler',
				scope: $scope,
				closeByDocument: true,
				closeByEscape: true,
				showClose: true,
				height:250,
				width: 350
			}).then(function(value) {
				$scope.uploadEmpFiles($scope.files, value);
			});
		}
		//--------------------------------------------------------------------------------
		//Upload Employee details templates//
		//--------------------------------------------------------------------------------
		$scope.uploadEmpFiles = function(file, value) {
			$scope.uploadProgress 	= true;
			$scope.f = file;
		   
		   if (file) {
			   file.upload = Upload.upload({
					method: 'POST',
				   	url:	uploadURL,
				   	data: 	{file: file},
					params: {
						usercmpid: compid,
						sfUserID: value.username,
						sfUserPwd: value.password}
			   });

			   file.upload.then(function(response) {
					// file is uploaded successfully
					$scope.getResultFiles(value);
			   }, function (response) {
				   $scope.errorMsg = response.data.resCode + ': ' + response.data.resDes;
			   });
		   }   
		}
		//
}]);
