angular.module("tutorApp.Tutors",
  ["tutorApp.Filters", "tutorApp.Grades"])
.controller("TutorsCtrl", 
  function($scope, $http, 
    TutorServices, SubjectServices,
    GetSubjectServices,
    GradeServices, GetGradeServices){

  $http.get("resources/tutors.json")
  .success(function(data){
    $scope.tutorsList = angular.fromJson(data);
    TutorServices.tutors = $scope.tutorsList;
  });

  $scope.page=0;
  $scope.pageSize=6;
  $scope.Math = window.Math;
  $scope.grades = GradeServices.grades;

  $scope.getGradeById = GetGradeServices.getGradeById;
  $scope.getSubjectById = GetSubjectServices.getSubjectById;

  $scope.newTutor = function(tutor){
    if(tutor){
      // $scope.tutorsList.push(tutor);
      TutorServices.tutors.push(tutor);
      // console.log(tutor.name);
      $scope.newtutor = undefined;
    }
  }

  $scope.saveTemp = function(tutor){
    $scope.tempTutor = tutor;
    // alert(tutor.name);
  }

  $scope.saveSubject = function(subject_id){
    $scope.tempSubject = SubjectServices
                    .getSubjectById(subject_id);

  }
})
.service('TutorServices', function(){
  var tutorsList = [];
  return {
    tutors: tutorsList
  }
});
