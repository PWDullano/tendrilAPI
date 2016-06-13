app.controller('mainController', ['$scope', '$http', function($scope, $http) {
  $scope.info = function() {
    $http({
      method: 'GET',
      app_id: '19643fe2',
      app_key: '9b10e452f785b5f1e3ea6c2567d0416b',
      url: 'https://dev-program.tendrildemo.com:443/api/rest/user/current-user',
      dataType: 'json'
    }).then(function(result) {
      console.log(result);
    })
  }

}])
