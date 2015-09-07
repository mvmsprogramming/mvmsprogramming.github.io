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
      $scope.nextMeeting = response.items[0].start.dateTime;
      var nextMeetDateString = response.items[0].start.dateTime;
      var yr = nextMeetDateString.substring(0, 4);
      var mon = nextMeetDateString.substring(5, 7);
      var mo = mon - 1;
      var da = nextMeetDateString.substring(8, 10);
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
    })
    $scope.instructors1 = [
      {
        name: 'Ronak Shah',
        title: 'Head',
        description: 'Currently a 10th grader at Westview High School, Ronak is the founder and head of MVMS Programming Club. Ronak is a passionate programmer who codes in Java, C++, HTML, CSS, and Javascript. You can contact Ronak at ronakshahultimate@gmail.com',
        pic: 'res/images/horse_head.jpg'
      },
      {
        name: 'Gunner Spencer',
        title: 'Head',
        description: 'Currently an 9th grader at Westview High School, Gunner is a seasoned programmer specializinng in HTML, CSS, and Javascript. You can contact Gunner at gunn686@gmail.com',
        pic: 'res/images/horse_head.jpg'
      },
      {
        name: 'Michael Lababera',
        title: 'President',
        description: 'Currently an 8th grader at Mesa Verde Middle School, Michael is a great programmer teaching mostly HTML and CSS. Along with being an amazing programmer, Michael is very mature and has great leadership, and consequently he is currently the head of management as well as being an instructor. You can contact Michael at Michael.jlabarbera@gmail.com',
        pic: 'res/images/horse_head.jpg'
      }
    ]
    $scope.instructors2 = [
      {
        name: 'Evan Thurston',
        title: 'Instructor',
        description: 'Currently an 8th grader at Mesa Verde Middle School, Evan is a fantastic programmer who mainly works in HTML, CSS, Javascript, Swift, and Unity C#. You can contact Evan at evanthurston@gmail.com',
        pic: 'res/images/horse_head.jpg'
      },
      {
        name: 'Assafi Cohen-Arazi',
        title: 'Instructor',
        description: "Currently an 8th grader at Mesa Verde Middle School, Assafi works hard at what he does. Boasting skills in Javascript, Assafi can write powerful programs in minutes. You can contact Assafi somewhere I don't know because he is a scrub",
        pic: 'res/images/horse_head.jpg'
      }
    ];
  });
