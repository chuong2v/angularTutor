angular.module("tutorApp.Grades", [])
.controller("GradesCtrl", function($scope, $http, GradeServices){
  $http.get("resources/grades.json")
  .success(function(data){
    $scope.grades = angular.fromJson(data);    
    GradeServices.grades = $scope.grades;
  });
})
.service("GradeServices", function(){
  var gradesList = [];  
  return{
    grades: gradesList
  }
})
.service('GetGradeServices', function(GradeServices){
  var getGradeById = function(id){
    console.log("here:" + GradeServices.grades.length);
    for (var i = GradeServices.grades.length - 1; i >= 0; i--) {
      
      if (GradeServices.grades[i].id == id)
        return GradeServices.grades[i];
    };
    return undefined;
  };
  return{
    getGradeById: getGradeById
  }
});