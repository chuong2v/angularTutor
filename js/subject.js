angular.module("tutorApp.Subjects",[])
.controller("SubjectCtrl", 
  function($scope, $http, SubjectServices){
  $http.get("resources/subjects.json")
  .success(function(data){
    $scope.subjects = angular.fromJson(data);
    SubjectServices.subjects = $scope.subjects;
  })  
})
.service("SubjectServices", function(){
  this.subjectsList = [];
  return {
    subjects: this.subjectsList
  }
})
.service('GetSubjectServices', function(SubjectServices){
  this.getSubjectById = function(id){
    for (var i = SubjectServices.subjects.length - 1; i >= 0; i--) {
      if(SubjectServices.subjects[i].id == id)
        return SubjectServices.subjects[i];
    };
    return undefined;
  }
})
.filter("SubjectFilter", function(){
  return function(input, subject_id){
    var out = [];
    for (var i = input.length - 1; i >= 0; i--) {
      if(input[i].subject_ids.indexOf(subject_id)>=0)
        out.push(input[i]);
    };
    return out;
  }
});