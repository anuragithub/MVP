app.controller('AdminPageController', ['$scope','$rootScope', '$state', 'adminDetails',  function($scope, $rootScope, $state)  {
	   //---------------------------------------------------------------------------------
        $scope.userData         			= $rootScope.userData;
        $scope.templateDataArray            = $rootScope.allUserData;
        //$scope.templateDataArray = null;
       
        //---------------------------------------------------------------------------------
        //Service call to get data from service
        //
      //  adminDetails.getAdminDetails().then(onComplete, onError);
        //--------------------------------------------------------------------------------------------------------
        //Logout
        //
        $scope.logout = function() 
        {
            $state.transitionTo('login');
        }
        
        $scope.addUser = function() 
        {
            $state.transitionTo('adminpage.adduser');
        } 
        
        $scope.editUser = function() 
        {
            $state.transitionTo('adminpage.edituser');
        } 
        
        
        //delete row start here
        $scope.remove = function(){
        var newDataList=[];
        angular.forEach($scope.templateDataArray,function(v){
        if(!v.isDelete){
            newDataList.push(v);
        }
        });    $scope.templateDataArray=newDataList;
        }; 

        $scope.add = function() 
        {
            $state.transitionTo('home.adminpage.adduser');
        } 

         //delete row ends here
         $scope.showMe = false;
    $scope.disFunc = function() {
       // $scope.showMe = !$scope.showMe;      
    $scope.showMe = true;       
    }
        
   //model popup delete user 
// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
    
//close btn
var clsbtn = document.getElementById("clsbtn");    
clsbtn.onclick = function() { modal.style.display = "none";}   

var canbtn = document.getElementById("canbtn");
    canbtn.onclick = function() {modal.style.display="none"; }

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
// model popup delete user end
    
}]);

