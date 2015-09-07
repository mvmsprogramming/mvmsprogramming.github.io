app.directive('instructor', function() {
	return {
  	restrict: 'E',
    scope: {
      human: '='
    },
    templateUrl: './directives/instructorCard.html'
  };
});
