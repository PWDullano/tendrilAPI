app.controller('mainController', ['$scope', '$http', function($scope, $http) {

  var token = 'YW5kcmV3Lndvb2RAdGVuZHJpbC5jb206cGFzc3dvcmQ='
  $http.defaults.headers.common['Authorization'] = 'Basic ' + token;


  $scope.info = function() {
    $http({
      method: 'GET',
      app_id: '19643fe2',
      app_key: '9b10e452f785b5f1e3ea6c2567d0416b',
      url: 'https://dpu-ten-web.tendril-connect.com/api/rest/user/current-user',
      headers: {
        'Authorization': 'Basic YW5kcmV3Lndvb2RAdGVuZHJpbC5jb206cGFzc3dvcmQ=',
        'Accept': 'application/json'
      },

      dataType: 'json'
    }).then(function(result) {
      console.log("Inside the then function")
      console.log(result);
    })
  }


}])


// curl -v -H "Authorization:Basic YW5kcmV3Lndvb2RAdGVuZHJpbC5jb206cGFzc3dvcmQ="
// -H "Accept:application/json" -H "app_id:19643fe2" -H "app_key:9b10e452f785b5f1e3ea6c2567d0416b"
// -X GET "https://dpu-ten-web.tendril-connect.com/api/rest/user/current-user"

// $http({method: 'GET', url: 'www.google.com/someapi', headers: {
//     'Authorization': 'Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ=='}
// });
