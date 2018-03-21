app.controller('addUserController', ['$scope','$rootScope', '$state', 'addUserDetails',   function($scope, $rootScope, $state, addUserDetails)  {
	   //---------------------------------------------------------------------------------
        $scope.companyIDList         		= $rootScope.companyIDList;
        $scope.templateDataArray            = $rootScope.allUserData;


   $scope.logout = function() 
        {
            $state.transitionTo('login');
        }   
       $scope.backbtn = function() 
        {
            $state.transitionTo('adminpage.subpage');
        } 
   
  /*  var onError = function() {
          $scope.loginerror 		= true;
             $scope.error 			= "Unable to validate the credentials, please try again later.";
       };
     var onComplete = function(result) {
          $scope.userdetails 		= result;           
       };
  addUserDetails.getaddUserDetails().then(onComplete, onError); */
   
       var password = document.getElementById("password"),
           confirm_password = document.getElementById("confirm_password");

        function validatePassword(){
            if(password.value != confirm_password.value) {
        confirm_password.setCustomValidity("Passwords Don't Match");
            } else {
                confirm_password.setCustomValidity('');
            }
        }

        password.onchange = validatePassword;
        confirm_password.onkeyup = validatePassword;
   
}]);