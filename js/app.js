var app = angular.module('mvmsPcApp', ['ngMaterial'])
  .config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('teal', {
          'default': '500',
          'hue-1': '300',
          'hue-2': '700',
          'hue-3': 'A100'
      })
      .accentPalette('red', {
        'default': '500',
        'hue-1': '300',
        'hue-2': '700',
        'hue-3': 'A100'
      });

  })
  .controller('pcController', function($scope, $http) {
    $http.get('https://www.googleapis.com/calendar/v3/calendars/3hjfsttq8ceskr9l5s8omgt2o0%40group.calendar.google.com/events/4n7sslhfu87jo4lm3mfa6d2jlo/instances?maxResults=1&timeMin=2015-09-06T15%3A30%3A00-07%3A00&fields=items(start%2Csummary)&key=AIzaSyCmqAoSy-W7dKQgDtmwLZW6l0kz0KPoJdw')
    .success(function(response){$scope.nextMeeting = response;});
    // $scope.instructors = [
    //   {
    //     name: 'Ronak Shah';
    //     title: 'dank memer';
    //     description: 'd a n k m e m e s';
    //     pic: 'res/images/ronak.png'
    //   }
    // ]
  });
