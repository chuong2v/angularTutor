angular.module("tutorApp"
   ,["tutorApp.Tutors", "tutorApp.Classes", 
   "tutorApp.Filters", "tutorApp.Subjects",
   "tutorApp.Grades",
   'angularUtils.directives.dirPagination'])
.controller("searchCtrl", 
  function($scope, ClassServices,
   TutorServices, SubjectServices,
   GetSubjectServices){
  $scope.pageNo=0;
  $scope.pageSz=2;
  $scope.Math = window.Math;
  $scope.getSubjectById = GetSubjectServices.getSubjectById;

  $scope.searchSubject = function(subject_id){
    var temp = ClassServices.classes.concat(TutorServices.tutors);
    console.log("length: " + temp.length);
    console.log("id:" + subject_id);
    $scope.result = [];
    for (var i = temp.length - 1; i >= 0; i--) {
      console.log("index: "+ temp[i].subject_ids.indexOf(subject_id));
      if(temp[i].subject_ids.indexOf(subject_id) >= 0)
        $scope.result.push(temp[i]);
    };
  };

   $scope.saveTemp = function(tutor){
    $scope.tempTutor = tutor;
    // alert(tutor.name);
  }

  $scope.search = function(text){
    text=angular.lowercase(text);
    $scope.result = ClassServices.classes.concat(
        TutorServices.tutors);
    if(text){     
      var temp;
      // alert($scope.result.length);
      // $scope.result = $scope.result.search($scope.searchText);
      for (var i = $scope.result.length - 1; i >= 0; i--) {
        temp = $scope.result[i];
        if(temp.title)
        { 
          if(temp.title.toLowerCase().search(text)==-1
            && temp.address.toLowerCase().search(text)==-1)
            $scope.result.splice(i, 1);
        }else if(temp.name){
          if(temp.name.toLowerCase().search(text)==-1
            && temp.address.toLowerCase().search(text)==-1            
            && temp.job.toString().toLowerCase().search(text) ==-1)
            $scope.result.splice(i, 1);
        }
      };
    } 
  };
});
