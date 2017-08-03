'use strict';
angular
  .module("myApp")
  .service('authService', ['$http', '$q', '$state', 'localStorageService', function ($http, $q, $state, localStorageService) {

  var serviceBase = "http://localhost:3000/"

  var _authentication = {
    isAuth: false,
    userName: "",
    useRefreshTokens: false
  };

  this.login = function (loginData) {
    // var data = "grant_type=password&username=" + loginData.userName + "&password=" + loginData.password;
    //
    // if (loginData.useRefreshTokens) {
    //     data = data + "&client_id=" + ngAuthSettings.clientId;
    // }
    //
    // var deferred = $q.defer();
    //
    // var req = {
    //     method: 'POST',
    //     url: serviceBase + 'token',
    //     headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    //     data: data
    // };
    //
    // $http(req)
    //   .then(function (response) {
    //     if (true) {
    //       localStorageService.set('authorizationData', { token: response.data.access_token, userName: loginData.userName, refreshToken: response.refresh_token, useRefreshTokens: true });
    //       _fillAuthData()
    //     }
    //     else {
    //       localStorageService.set('authorizationData', { token: response.data.access_token, userName: loginData.userName, refreshToken: "", useRefreshTokens: false });
    //     }
    //     _authentication.isAuth = true;
    //     _authentication.userName = loginData.userName;
    //     _authentication.useRefreshTokens = true;
    //
    //     deferred.resolve(response);
    //     $state.go('app.lessons');
    //   },
    //   function (err, status) {
    //     logOut();
    //     deferred.reject(err);
    //   });
    //
    // return deferred.promise;
  };

  this.logOut = function () {
    // localStorageService.remove('authorizationData');
    //
    // _authentication.isAuth = false;
    // _authentication.userName = "";
    // _authentication.useRefreshTokens = false;
  };

  // grabs and fills auth data to made accessible everywhere
  this.fillAuthData = function () {
    //
    // var authData = localStorageService.get('authorizationData');
    // console.log("first" ,authData);
    // if (authData) {
    //   console.log("second");
    //   _authentication.hasInfo = authData.hasInfo;
    //   _authentication.isAdmin = authData.isAdmin;
    //   _authentication.studentId = authData.studentId;
    //   _authentication.isAuth = true;
    //   _authentication.userName = authData.userName;
    //   _authentication.useRefreshTokens = authData.useRefreshTokens;
    // }
    //
    // if (!_authentication.hasInfo) {
    //   $http.get(serviceBase + 'api/account/getauthinfo').then(function(response){
    //     var aData = localStorageService.get('authorizationData');
    //
    //     aData.hasInfo = true;
    //     aData.isAdmin = response.data.isAdmin;
    //     aData.studentId = response.data.id;
    //
    //     localStorageService.set('authorizationData', aData);
    //
    //     _authentication.hasInfo = true;
    //     _authentication.isAdmin = response.data.isAdmin;
    //     _authentication.studentId = response.data.id;
    //   });
    // }

  };

}]);
