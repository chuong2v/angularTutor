angular.module("tutorApp.Subjects",['tutorApp.Tutors'])
.controller("SubjectCtrl", 
  function($scope, $http, SubjectServices,
    TutorServices, GetSubjectServices){
  $http.get("resources/subjects.json")
  .success(function(data){
    $scope.subjects = angular.fromJson(data);
    SubjectServices.subjects = $scope.subjects;
  });

  $scope.searchTutor = function(id){
    $scope.tempSubject = GetSubjectServices.getSubjectById(id);
    $scope.subjectTutorsList = [];
    var index = parseInt(id,10);
    for (var i = TutorServices.tutors.length - 1; i >= 0; i--) {
      if((TutorServices.tutors[i].subject_ids.indexOf(index)) >= 0){
        $scope.subjectTutorsList.push(TutorServices.tutors[i]);
      }
    }
  } 
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