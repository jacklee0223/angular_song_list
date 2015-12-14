app.factory('songs', ['$http', function($http) {
  return $http.get('json/songsData.json')
            .success(function(data) {
              return data;
            })
            .error(function(err) {
              return err;
            });
}]);
