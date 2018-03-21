app.controller('editUserController', ['$scope','$rootScope', '$state', '$filter', 'editUserDetails',  function($scope, $rootScope, $state, $filter, editUserDetails)  {
	   //---------------------------------------------------------------------------------
         $scope.userData         			= $rootScope.userData;
         $scope.companyIDList         		= $rootScope.companyIDList;
         $scope.templateDataArray           = $rootScope.allUserData;
     
      // var object_by_id = $filter('filter')($scope.templateDataArray, {userID: 2 })[0];   
 //   alert(object_by_id);
    $scope.object_by_id = $filter('filter')($scope.templateDataArray, {userID: 2 })[0]; 
    
     $scope.backbtn = function() 
        {
            $state.transitionTo('adminpage.subpage');
        } 

   $scope.logout = function() 
        {
            $state.transitionTo('login');
        }                                     

}]);