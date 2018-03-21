(function() {
    var editUserDetails = function($http, $rootScope) {
        var geteditUserDetails = function() {
        	return $http.get('src/js/model/userdetails.json').then(function(response) {
				return response.data;
			});
        	
        	
			/*if($rootScope.blnMockData)
			{
				return $http.get('src/js/model/userdetails.json').then(function(response) {
					return response.data;
				});
			}
			else
			{
				//to do //
				//call the service to fetch the credentials here//
			}*/
            
            
        }
        return {
            geteditUserDetails: geteditUserDetails     
        }
    }
    app.factory('editUserDetails', editUserDetails);   
}());
