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
  });
