app.controller('LoginPageController', ['$scope','$rootScope', '$state', '$stateParams', 'loginDetails', function($scope, $rootScope, $state, $stateParams, loginDetails)  
{
	$scope.loginerror 		= false;
	$rootScope.blnMockData 	= true;
    $rootScope.companyIDList = [];
	//--------------------------------------------------------------------------
    $scope.validateUser = function(data)
	{
       var loginDatalength = data.length;
       var validUser = false;
       for(var i=0;i<loginDatalength;i++){
          $scope.role = data[i].role;
          if(($scope.username === data[i].username && $scope.password === data[i].password) && data[i].role === "tooladmin")
          {
             validUser = true;
             break;
          }
          else if(($scope.username === data[i].username && $scope.password === data[i].password) && data[i].role === "admin")
          {
             validUser = true;
             break;
          }
          else if(($scope.username === data[i].username && $scope.password === data[i].password) && data[i].role === "user")
          {
             validUser = true;
             break;
          }
       
          else{
             validUser = false;
          }
       }
       if(validUser){
          return data[i];
       }
       else{
          return null;
       }
    }
	//--------------------------------------------------------------------------
    $scope.formSubmit = function(){
       var onComplete = function(data) {
          var loginpageData    = data[0].user;
          $rootScope.allUserData = loginpageData; 
          $rootScope.companyIDList = data[0].companyIDList;
           
          var userData = $scope.validateUser(loginpageData);
          if(userData === null){
             $scope.loginerror 		= true;
             $scope.error 			= "Invalid credentails!! Please enter correct username and/or password.";
          }else{
			 $scope.loginerror		= false;
             $rootScope.userData 	= userData;
             $scope.error 			= '';
             $scope.username 		= '';
             $scope.password 		= '';
             $scope.role 			= '';
			 //---------------------------------------
			 //check the type of role 
			 //---------------------------------------
             if(userData.role === "tooladmin"){
                 $state.transitionTo('adminpage.subpage'); 
             }
             else if((userData.role === "admin") ||(userData.role === "user")){
                $state.transitionTo('home.datavalidation');
             }
           
          }
       };
	   //--------------------------------------------------------------------------
       var onError = function() {
          $scope.loginerror 		= true;
             $scope.error 			= "Unable to validate the credentials, please try again later.";
       };
       loginDetails.getLoginDetails().then(onComplete, onError);
    }
}]);