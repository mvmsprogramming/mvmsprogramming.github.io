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
    $http.get('https://www.googleapis.com/calendar/v3/calendars/3hjfsttq8ceskr9l5s8omgt2o0%40group.calendar.google.com/events/4n7sslhfu87jo4lm3mfa6d2jlo/instances?maxResults=1&fields=items(start)&singleEvents=true&key=AIzaSyCmqAoSy-W7dKQgDtmwLZW6l0kz0KPoJdw')
    .success(function(response){
      var nextDateOrig = response.items[0].start.dateTime;
      var nextDateP1 = nextDateOrig.substring(0, 8);
      var nextDateP2 = (nextDateOrig.substring(8, 10)) - 7;
      var nextDateP3 = nextDateOrig.substring(10, 25);
      $scope.nextMeeting = nextDateP1 + nextDateP2 + nextDateP3;
      var nextMeetDateString = response.items[0].start.dateTime;
      var yr = nextMeetDateString.substring(0, 4);
      var mon = nextMeetDateString.substring(5, 7);
      var mo = mon - 1;
      var day = nextMeetDateString.substring(8, 10);
      var da = day - 7;
      var mi = nextMeetDateString.substring(11, 13);
      var se = nextMeetDateString.substring(14, 16);
      var ms = nextMeetDateString.substring(17, 19);
      var nextMeetDate = new Date(yr, mo, da, mi, se, ms);
      var currentDate = new Date();
      Date.daysBetween = function( date1, date2 ) {
        var one_day=1000*60*60*24;
        var date1_ms = date1.getTime();
        var date2_ms = date2.getTime();
        var difference_ms = date2_ms - date1_ms;
        return Math.round(difference_ms/one_day);
      }
      $scope.daysUntil = Date.daysBetween(currentDate, nextMeetDate);
    });
    // $scope.instructors = [
    //   {
    //     name: 'Ronak Shah';
    //     title: 'dank memer';
    //     description: 'd a n k m e m e s';
    //     pic: 'res/images/ronak.png'
    //   }
    // ]
  });
