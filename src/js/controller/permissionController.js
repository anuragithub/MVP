app.controller('PermissionProcessController', ['$scope','$rootScope','$http', '$state','$stateParams','Upload','ngDialog', function($scope, $rootScope, $http, $state, $stateParams,Upload, ngDialog)  
{
	var uploadURL 	= "";
	var compid 		= $scope.userData.cmpID;
	if($rootScope.blnMockData)
	{
		uploadURL = 'https://angular-file-upload-cors-srv.appspot.com/upload';
	}
	else
	{
		uploadURL ='ManagePermissionGroupCreationServlet';
	}
	$scope.resetVariables =function()
	{
		$scope.emailuploadStatus= false;
        $scope.reultEmailMsg = false;	
        $scope.reultEmailMsgErr = false;
	}
	//--------------------------------------------------------------------------------
	//open dialog box Success Factor credentials..
	//
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
			$scope.uploadPermissionFiles($scope.file, value);
		});
	}
	//
	 //Upload Email Auto Process// to be moved to pop-up
	$scope.uploadPermissionFiles = function(file, value) {
	   $scope.f = file;
	   
	   if (file) {
		   $scope.emailuploadStatus= true;
		   $scope.reultEmailMsg = false;
		   $scope.reultEmailMsgErr = false;

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
            $scope.resDataFilePath = response.data.resDataFilePath;
           	$scope.resDataFile = response.data.resDataFile;
           	$scope.resDataRptFilePath  = response.data.resDataRptFilePath;
           	$scope.resDataRptFile = response.data.resDataRptFile;
           	$scope.resCode = response.data.resCode;
            
			$scope.getResultFiles(value);
		   }, function (response) {
			   $scope.errorMsg = response.data.resCode + ': ' + response.data.resDes;
			   
			   $scope.emailuploadStatus= false;
			   $scope.reultEmailMsg = false;
			   $scope.reultEmailMsgErr = true;
		   });
	   }   
	}
	//
	//
	$scope.getResultFiles = function(value) 
     {
		//alert('then getResultFiles = ' + value.username + value.password);
         return $http.get('src/js/model/templatepage.json').then(function(response) {
                $scope.emailuploadStatus= false;
                $scope.reultEmailMsg = true;
                $scope.reultEmailMsgErr = false;
                return response.data;
         });
     }
}]);