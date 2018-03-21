(function() {
    var adminDetails = function($http, $rootScope) {
        var getAdminDetails = function() {
        	return $http.get('src/js/model/admindetails.json').then(function(response) {
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
            getAdminDetails: getAdminDetails              
        }
    }
    app.factory('adminDetails', adminDetails);   
}());
