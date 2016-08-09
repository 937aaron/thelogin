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

  }
  $scope.loginShowFunc = function(){
    $scope.loginShow= true;
    $scope.signUpShow= false;
  }
  $scope.validateLogin = function(){
    var loginUser = {
      username: $scope.loginUsername,
      password: $scope.loginPassword
    }
    for (var i = 0; i < users.length; i++){
      if(loginUser.username === users[i].username && loginUser.password === users[i].password){
        console.log("success")
      }
      else {
        console.log("nope")
        console.log(users)
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
      console.log('this username is taken')
      return 'error'
    }
    else if(signUpUser.password != signUpUser.password_confirmation){
      console.log('these passwords dont match')
      return 'error'
    }
    else if (signUpUser.password.length < 8){
      console.log('your password is too short');
      return 'error'
    }
    //else if (signUpUser.password )
    else{
      console.log('ok');
    }
  }
    // console.log("hello")
  }
})
