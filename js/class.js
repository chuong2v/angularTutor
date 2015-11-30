angular.module("tutorApp.Classes",[])
.controller("ClassesCtrl", 
  function($scope, $http, ClassServices){

  $http.get("resources/classes.json")
  .success(function(data){
    $scope.classes = angular.fromJson(data);
    ClassServices.classes = $scope.classes;    
  });

  $scope.newClass = function(item){
    if(item){      
      item.id = $scope.classes.length;
      $scope.classes.push(item);
      $scope.item = undefined;
    }
  }
})
.service('ClassServices', function(){
  var classesList = [];
  return {
    classes: classesList
  } 
});
