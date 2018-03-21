(function() {
    var editpageDetails = function($http, $rootScope) {
        var geteditpageDetails = function() {
        	return $http.get('src/js/model/editpagetemplate.json').then(function(response) {
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
				//to do praveen //
				//call the service to fetch the credentials here//
			}*/
            
        }
        return {
            geteditpageDetails: geteditpageDetails              
        }
    }
    app.factory('editpageDetails', editpageDetails);   
}());
