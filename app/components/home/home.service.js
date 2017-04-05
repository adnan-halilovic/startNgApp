// Home Service -> ngResource
var app = angular.module('myApp');
app.factory('MyService', function($resource) {
  var data = $resource(
  	usersRest, // Variable from api.endpoints.js
  	{user: '@user'}, 
  	{ 
      
  		update: { 
				method: 'PUT'
			},

      remove: {
        method: 'DELETE'
      }
	  }
  );
  return data;
});