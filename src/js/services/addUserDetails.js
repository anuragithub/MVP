(function() {
    var addUserDetails = function($http, $rootScope) {
        var getaddUserDetails = function() {
        	return $http.get('src/js/model/userdetails.json').then(function(response) {
				return response.data;
			});
        }
        return {
            getaddUserDetails: getaddUserDetails     
        }
    }
    app.factory('addUserDetails', addUserDetails);   
}());
