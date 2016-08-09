var theLogin = angular.module('theLogin', []);
theLogin.controller('theLoginController',function($scope){
  $scope.loginShow = true;
  $scope.signUpShow = false;
  var users = [{
    username: 'user1',
    password: 'Huntertwo2'
  },{
    username: 'user2',
    password: 'Huntertwo2'
  }
]
  $scope.signUpShowFunc = function(){
    $scope.loginShow = false;
    $scope.signUpShow= true;
    $scope.failLogin = false;
    $scope.successLogin= false;

  }
  $scope.loginShowFunc = function(){
    $scope.loginShow= true;
    $scope.signUpShow= false;
    $scope.failUsername = false;
    $scope.failPasswordMatch = false;
    $scope.failPasswordShort = false;
    $scope.successSignUp = false;
  }
  $scope.validateLogin = function(){
    var loginUser = {
      username: $scope.loginUsername,
      password: $scope.loginPassword
    }
    for (var i = 0; i < users.length; i++){
      if(loginUser.username === users[i].username && loginUser.password === users[i].password){
        // console.log("success")
        $scope.succesUser = loginUser.username;
        $scope.successLogin= true;
        $scope.failLogin = false;
        return 'success'
      }
      else {
        // console.log("nope")
        // console.log(users)
        $scope.failLogin = true;
        $scope.successLogin= false;
        return 'fail'
      }
    }
  }
  $scope.validateSignUp = function(){
    var signUpUser = {
      username: $scope.signUpUsername,
      password: $scope.signUpPassword,
      password_confirmation: $scope.signUpConfirmPassword
    }
    for (var i = 0; i < users.length; i++){
    if (signUpUser.username === users[i].username){
      // console.log('this username is taken')
      $scope.failUsername = true;
      $scope.failPasswordMatch = false;
      $scope.failPasswordShort = false;
      $scope.successSignUp = false;
      return 'error'
    }
    else if(signUpUser.password != signUpUser.password_confirmation){
      // console.log('these passwords dont match')
      $scope.failPasswordMatch = true;
      $scope.failUsername = false;
      $scope.failPasswordShort = false;
      $scope.successSignUp = false;
      return 'error'
    }
    else if (signUpUser.password.length < 8){
      // console.log('your password is too short');
      $scope.failPasswordShort = true;
      $scope.failPasswordMatch = false;
      $scope.failUsername = false;
      $scope.successSignUp = false;
      return 'error'
    }
    //else if (signUpUser.password )
    else{
      $scope.successSignUp = true;
      $scope.failPasswordShort = false;
      $scope.failPasswordMatch = false;
      $scope.failUsername = false;
      users.push(signUpUser);
      // console.log('ok');
      return 'success'
    }
  }
    // console.log("hello")
  }
})
