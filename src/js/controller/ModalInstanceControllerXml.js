app.controller('modalControllerXml', ['$scope', 'Upload', '$timeout','$http','$rootScope', '$state','$stateParams', function ($scope, Upload, $timeout, $http, $rootScope, $state,$stateParams) {
	$scope.emailuploadStatus= false;
    $scope.reultEmailMsg = false;
    $scope.reultEmailMsgErr = false;
	$scope.templateName = $stateParams.templateName;
	$scope.blnCompare = $stateParams.blnCompareFiles === "true" ? true : false;
	 
	var uploadURL = "";
	if($rootScope.blnMockData)
		{
			uploadURL = 'https://angular-file-upload-cors-srv.appspot.com/upload';
		}
	else
		{
			uploadURL ='WorkbookToXMLCreationServlet';
		}
	//
	$scope.resetVariables =function()
	{
		$scope.emailuploadStatus= false;
    	$scope.reultEmailMsg = false;	
    	$scope.reultEmailMsgErr = false;
	}
    //Upload Email Auto Process for comparing files//
	$scope.uploadEmailProcess = function(file, compareFile) {
	   var files = [];
	   if(file)
		   files.push(file);
	   if(compareFile)
		   files.push(compareFile);
	   
	   $scope.files = files;
	   var compid = $scope.userData.cmpID;
	   var tempNme = $scope.templateName;

	   if (files && files.length) {
		   $scope.emailuploadStatus= true;
		   $scope.reultEmailMsg = false;
           $scope.reultEmailMsgErr = false;

		   file.upload = Upload.upload({
				method: 'POST',
			   	url:	uploadURL,
			   	data: 	{files: files},
				params: {usercmpid: compid,
					tempName: tempNme}
		   });

		   file.upload.then(function(response) {
			// file is uploaded successfully
            $scope.resDataFilePath = response.data.resDataFilePath;
           	$scope.resDataFile = response.data.resDataFile;
           	$scope.resDataRptFilePath  = response.data.resDataRptFilePath;
           	$scope.resDataRptFile = response.data.resDataRptFile;
           	$scope.resCode = response.data.resCode;
            
			$scope.getResultFiles();
			
		   }, function (response) {
			   $scope.errorMsg = response.data.resCode + ': ' + response.data.resDes;
			   $scope.emailuploadStatus= false;
               $scope.reultEmailMsg = false;
               $scope.reultEmailMsgErr = true;
		   });
	   }   
	}

     $scope.getResultFiles = function() 
     {
         return $http.get('src/js/model/templatepage.json').then(function(response) {
                $scope.emailuploadStatus= false;
                $scope.reultEmailMsg = true;
                
                $scope.reultEmailMsgErr = false;
                return response.data;
         });
     }
}]);