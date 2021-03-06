'use strict';

angular.module('pokerestimateApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'btford.socket-io',
  'mm.foundation',
  'ngClipboard',
  'config'
])
.config(function ($routeProvider, ngClipProvider, ENV) {
  ngClipProvider.setPath("bower_components/zeroclipboard/dist/ZeroClipboard.swf");

  $routeProvider
  .when('/', {
    templateUrl: 'app/main/main.html',
    controller: 'MainCtrl'
  })
  .when('/sessions/:id', {
    templateUrl: 'app/pointing/session.html'
  })
  .when('/retrospectives/:id', {
    templateUrl: 'app/retrospective/retrospective.html'
  })
  .when('/voteValues', {
    templateUrl: 'app/voteValues/voteValues.html'
  });

  if(ENV.name !== 'test'){
    $(document).ready(function() {
      new WOW({ callback: animationCB }).init();
    });
  }
});

function animationCB(box){
  setTimeout(function(){
    $(box).removeClass('fadeInUp');
  }, 2000);
};

