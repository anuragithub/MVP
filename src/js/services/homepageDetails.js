(function() {
	var homepageDetails = function($http, $rootScope) {
		var compid = $rootScope.userData.cmpID;
		var getHomePageDetails = function() {
			if ($rootScope.blnMockData) {
				return $http.get('src/js/model/templatepage.json', {
					params : {
						companyid : compid
					}
				}).then(function(response) {
					return response.data;
				});
			} else {
				return $http({
					url : 'DataValidationHomeTilesServlet',
					method : "GET",
					params : {
						comp_id : compid
					}
				});
			}
		}
		
		return {
			getHomePageDetails : getHomePageDetails
		}
	}
	app.factory('homepageDetails', homepageDetails);
}());
