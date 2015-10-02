var app = angular.module('mvmsPcApp', ['ngMaterial']);
app.config(function($mdThemingProvider, $mdIconProvider) {
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
    $mdIconProvider
})
app.controller('pcController', function($scope, $http) {
    var toRFC3339String = function(dateString) {
        function pad(n) { return n < 10 ? '0' + n : n }

        return dateString.getUTCFullYear() + '-'
            + pad(dateString.getUTCMonth() + 1) + '-'
            + pad(dateString.getUTCDate()) + 'T'
            + pad(dateString.getUTCHours()) + ':'
            + pad(dateString.getUTCMinutes()) + ':'
            + pad(dateString.getUTCSeconds()) + 'Z'
    }

    var url = 'https://www.googleapis.com/calendar/v3/calendars/3hjfsttq8ceskr9l5s8omgt2o0%40group.calendar.google.com/events/4n7sslhfu87jo4lm3mfa6d2jlo/instances?maxResults=1&timeMin=' + toRFC3339String(new Date()) + '&fields=items(start)&singleEvents=true&key=AIzaSyCmqAoSy-W7dKQgDtmwLZW6l0kz0KPoJdw';

    $http.get(url)
        .success(function(response){

        $scope.nextMeeting = new Date(response.items[0].start.dateTime);
        var currentDate = new Date();

        Date.daysBetween = function(date1, date2) {
            var one_day=1000*60*60*24;
            var date1_ms = date1.getTime();
            var date2_ms = date2.getTime();
            var difference_ms = date2_ms - date1_ms;
            return Math.round(difference_ms/one_day);
        }

        $scope.daysUntil = Date.daysBetween(currentDate, $scope.nextMeeting);
    })
    $scope.executives = [
      {
        name: 'Ronak Shah',
        title: 'Head',
        description: 'Currently a 10th grader at Westview High School, Ronak is the founder and head of MVMS Programming Club. Ronak is a passionate programmer who codes in Java, C++, Swift, HTML, CSS, and Javascript. You can contact Ronak at ronak.manish.shah@gmail.com',
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
      },
      {
        name: 'Evan Thurston',
        title: 'Advanced Instructor',
        description: 'Currently an 8th grader at Mesa Verde Middle School, Evan is a fantastic programmer who mainly works in HTML, CSS, Javascript, Swift, and Unity C#. You can contact Evan at evanthurston@gmail.com',
        pic: 'res/images/horse_head.jpg'
      },
      {
        name: 'Assafi Cohen-Arazi',
        title: 'Beginner Instructor',
        description: "Currently an 8th grader at Mesa Verde Middle School, Assafi works hard at what he does. Boasting skills in Javascript, Assafi can write powerful programs in minutes. You can contact Assafi somewhere I don't know because he is a scrub",
        pic: 'res/images/horse_head.jpg'
      }
    ]
    $scope.resources = [
        {
            name: 'Codecademy',
            link: 'https://www.codecademy.com/learn',
            description: "A wonderful learning site, Codecademy gives you all the resources you need to do some really cool things. If you want to start learning a new language, Codecademy is a great place to start if they have your language",
            pic: 'res/images/codecademyLogo.png'
        },
        {
            name: 'JsFiddle',
            link: 'http://jsfiddle.net/',
            description: "JsFiddle is an online IDE that supports HTML, CSS, Javascript, and many plugins for those languages. We often use JsFiddle in class because of it's simplicity",
            pic: 'res/images/jsfiddleLogo.png'
        },
        {
            name: 'Codepen',
            link: 'http://codepen.io/',
            description: 'Codepen is an online IDE that suppots HTML, CSS, Javascript, and many plugins for those languages. While we usually use JsFiddle in class, to share your code, you should use Codepen as the layout is simpler, at least that is what the general concensus is.',
            pic: 'res/images/codepen.png'
        },
        {
            name: 'Google',
            link: 'https://www.google.com/',
            description: 'Google is a great place to find answers to questions you may have. A fantastic application very few know of, usually if you type your problem into Google.com, you can find your answer. Magic!',
            pic: 'res/images/google_logo.png'
        }
    ];
});
app.directive('instructorCards', function() {
    return {
        restrict: 'EA',
        template: '<div layout="row" layout-sm="column" layout-align="space-around end" layout-align="space-around center" layout-margin layout-padding style="text-align: center;" layout-wrap><md-card ng-repeat="executive in executives" class="bg-teal-def md-whiteframe-z1" flex="30" flex-sm="95" flex-md="45"><md-button aria-label="Executive picture" class="md-raised"><img class="md-card-image" ng-src="{{ executive.pic }}"></md-button><md-card-content><h2 class="md-headline">{{ executive.name }}</h2><md-button aria-label="Instructor title" class="md-raised">{{ executive.title }}</md-button><p class="md-subhead">{{ executive.description }}</p></md-card-content></md-card></div>'

    }
});
