'user strict'

app.factory('BulletinService',['$http','$q','$rootScope',function($http,$q,$rootScope)
{
	var baseurl='http://localhost:8083/avatar/'

		return {
		fetchAllBulletin: function()
			{
				return $http.get(baseurl + "/allbulletins").then(function (response) 
				{	
					return response.data;
				},
				function(errResponse)
				{
					console.error('Error while fetching Bulletins' + errResponse);
					deferred.reject(errResponse);
				}
			);
	 },
	 
	 createNewBulletin : function (bulletin)
  	 {
  		  return $http.post(baseurl + '/addbulletin/', bulletin).then(function (response) 
  		  {
  			  return response.data;
  		  },
  	      function(errResponse)
  	      {
  	           console.error('Error while creating bulletin');
  	           return $q.reject(errResponse);
  	      });
  	  }  	  
	}
  }
]);