(function() {
    var loginDetails = function($http, $rootScope) {
        var getLoginDetails = function() {
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
            getLoginDetails: getLoginDetails              
        }
    }
    app.factory('loginDetails', loginDetails);   
}());
