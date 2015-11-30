angular.module("tutorApp.Filters", [])
.filter("PaginationFilter", function(){
  return function(input, page, pageSize){
    // console.log(page +"  -  " + pageSize);
    if(input)
      return input.slice(page*pageSize, (page+1)*pageSize);   
  }
});