(function() {
	var workbookDetails = function($http, $rootScope) {
		var compid = $rootScope.userData.cmpID;
		var getWorkbookDetails = function() {
			if (true) {
				return $http.get('src/js/model/workbookpagedetails.json', {
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
			getWorkbookDetails : getWorkbookDetails
		}
	}
	app.factory('workbookDetails', workbookDetails);
}());
