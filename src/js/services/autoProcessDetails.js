(function() {
    var autoProcessDetails = function($http, $rootScope) {
        
        var compid = $rootScope.userData.cmpID;

        var getAutoProcessDetails = function() {
            return $http.get('src/js/model/processtemplates.json',{params:{companyid: compid}}).then(function(response) {
                return response.data;
            }); 
			
        }
        return {
            getAutoProcessDetails: getAutoProcessDetails                
        }
    }
    app.factory('autoProcessDetails', autoProcessDetails);    
}());