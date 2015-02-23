'use strict';

angular.module('pokerestimateApp')
.controller('RetrospectiveCtrl', function ($scope, socket, $location, userService, $routeParams, $modal) {
  $scope.init = function(){
    $scope.currentUser = userService.getUser(); //get user name and type
    $scope.url         = $location.$$absUrl;// Url to share with the team
    $scope.sessionId   = $routeParams.id;
    $scope.inputMode   = {};
    $scope.newEntry    = {};

    if(userService.getUser().username){
      socket.emit('joinSession', {roomId: $scope.sessionId, username: $scope.currentUser.username, type: $scope.currentUser.type, sessionType: 'retrospective'});
    }else{
      //open modal to ask for username and type when user joins
      $scope.userType = "player"; //default option in modal
      var modalInstance = $modal.open({templateUrl: 'app/templates/modals/username.html', keyboard:false, scope: this});
      modalInstance.result.then(function (data) {
        $scope.currentUser = {username: data.username, type: data.userType};
        socket.emit('joinSession', {roomId: $scope.sessionId, username: data.username, type: data.userType, sessionType: 'retrospective'});
      });
    }

    socket.on('joinedSession',    $scope.listeners.onJoinedSession);
    socket.on('updateUsers',      $scope.listeners.onUpdateUsers);
    socket.on('errorMsg',         $scope.listeners.onError);
    socket.on('reveal',           $scope.listeners.onReveal);
    socket.on('hide',             $scope.listeners.onHide);
    socket.on('newEntry',         $scope.listeners.onNewEntry);
    socket.on('entryUpdated',     $scope.listeners.onEntryUpdated);
    socket.on('moveCurrentEntry', $scope.listeners.onMoveCurrentEntry);
    socket.on('openEntry',        $scope.listeners.onOpenEntry);
    socket.on('closeEntry',       $scope.listeners.onCloseEntry);
  };

  $scope.add = function(type){
    if($scope.newEntry[type]){
      var entry = {text: $scope.newEntry[type], username: $scope.currentUser.username, userId: $scope.currentUser.id};
      $scope.session[type].push(entry);
      socket.emit('newEntry', {id: $scope.sessionId, entry: entry, type: type});
      $scope.newEntry[type] = "";
    }
  };

  $scope.remove = function(type, entry){
    $scope.session[type] =  _.without($scope.session[type], entry);
  };

  $scope.edit = function(type, entry){
    $scope.editEntry = entry.text;
    var modalInstance = $modal.open({templateUrl: 'app/templates/modals/entry.html', keyboard:false, scope: this});
    modalInstance.result.then(function (data) {
      entry.text = data.editEntry;
    });
  };

  $scope.update = function(entry){
    socket.emit('updateEntry', {id: $scope.sessionId, entry: entry});
  };

  $scope.openEntry = function(entry){
    socket.emit('openEntry', {id: $scope.sessionId, entry: entry});
    $scope.editEntry = entry;
    var modalInstance = $modal.open({templateUrl: 'app/templates/modals/showEntry.html', keyboard:false, scope: this});

    modalInstance.result.then(function (data) {
      socket.emit('closeEntry', {id: $scope.sessionId});
    });
  };

  $scope.setCopyMsg = function(msg){
    $scope.copyMsg = msg;
  };

  $scope.toggleRead = function(entry){
    entry.read = !entry.read;
    $scope.update(entry);
  };

  $scope.toggleInputMode = function(type){
    $scope.inputMode[type] = !$scope.inputMode[type];
  };

  $scope.toggleReviewMode = function(){
    $scope.reviewMode = !$scope.reviewMode;
    if($scope.reviewMode){
      socket.emit('reveal', {id: $scope.sessionId});
    }else{
      socket.emit('hide', {id: $scope.sessionId});
    }
  };

  function getRetrospectiveData(data){
    return {good: hideText(data.good), bad: hideText(data.bad), improvements: hideText(data.improvements)}
  };

  function hideText(data){
    var entry;
    return _.map(data, function(value){
      if(value.userId != $scope.currentUser.id){
        entry = _.clone(value);
        entry.text = '________ (' + entry.username + ')';
        return entry;
      }else{
        return value;
      }
    }) || [];
  };

  $scope.next = function(entry){

    var indexG = _.indexOf($scope.session.good, entry) ;
    var indexB = _.indexOf($scope.session.bad, entry)
    var indexI = _.indexOf($scope.session.improvements, entry);

    if(indexG != -1 && $scope.session.good[indexG + 1]){
      $scope.editEntry = $scope.session.good[indexG + 1];
      socket.emit('moveCurrentEntry', {id: $scope.sessionId, type: 'good', index: indexG + 1});
    }

    if(indexB != -1 && $scope.session.bad[indexG + 1]){
      $scope.editEntry = $scope.session.bad[indexB + 1];
      socket.emit('moveCurrentEntry', {id: $scope.sessionId, type: 'bad', index: indexB + 1});
    }

    if(indexI != -1 && $scope.session.improvements[indexG + 1]){
      $scope.editEntry = $scope.session.improvements[indexI + 1];
      socket.emit('moveCurrentEntry', {id: $scope.sessionId, type: 'improvements', index: indexB + 1});
    }
  };

  $scope.previous = function(entry){
    var indexG = _.indexOf($scope.session.good, entry) ;
    var indexB = _.indexOf($scope.session.bad, entry)
    var indexI = _.indexOf($scope.session.improvements, entry);

    if(indexG != -1 && $scope.session.good[indexG - 1]){
      $scope.editEntry = $scope.session.good[indexG - 1];
      socket.emit('moveCurrentEntry', {id: $scope.sessionId, type: 'good', index: indexG - 1});
    }

    if(indexB != -1 && $scope.session.good[indexB - 1]){
      $scope.editEntry = $scope.session.good[indexB - 1];
      socket.emit('moveCurrentEntry', {id: $scope.sessionId, type: 'bad', index: indexB - 1});
    }

    if(indexI != -1 && $scope.session.good[indexI - 1]){
      $scope.editEntry = $scope.session.good[indexI - 1];
      socket.emit('moveCurrentEntry', {id: $scope.sessionId, type: 'improvements', index: indexB - 1});
    }
  };

  //remove user from room when they leave the page
  $scope.$on('$locationChangeStart', function (event, next, current) {
    socket.emit('leaveSession');
  });

  $scope.listeners = {
    onJoinedSession: function (data){
      // Set previous data from room
      $scope.currentUser.id  = data.id;
      $scope.session = data.session;
      console.log("yeeep", data);
    },

    onUpdateUsers:  function (data){
      $scope.players = data.players;
      $scope.moderators = data.moderators;
      //Need this to update player list when they vote
      $scope.currentUser = _.findWhere(_.union(data.players, data.moderators), {id: $scope.currentUser.id});
    },

    onNewEntry:  function(data){
      $scope.session[data.type].push({text: "________ (" + data.username + ")", disabled: true});
    },

    onReveal: function(data){
      $scope.session = data.session;
      $scope.reviewMode = true;
    },

    onHide: function(data){
      //$scope.session = data.session;
      $scope.reviewMode = false;
      $scope.session  = getRetrospectiveData($scope.session);
    },

    onOpenEntry: function(data){
      $scope.editEntry = data.entry;
      $scope.entryModal = $modal.open({templateUrl: 'app/templates/modals/showEntry.html', keyboard:false, scope: $scope});
    },

    onCloseEntry: function(data){
      $scope.entryModal.close();
    },

    onMoveCurrentEntry: function(data){
      $scope.editEntry = $scope.session[data.type][data.index];
    },

    onEntryUpdated: function(e){
      var o = _.pick($scope.session, 'good', 'bad', 'improvements');
      var a = _.union(o.good, o.bad, o.improvements);
      var entry = _.findWhere(a, {text: e.text});
      entry.text = e.text;
      entry.read = e.read;
      if($scope.editEntry.text == e.text){
        $scope.editEntry.read = e.read;
      }
    },

    onError: function(){
      var modalInstance = $modal.open({templateUrl: 'app/templates/modals/error.html', keyboard:false});
      modalInstance.result.then(function () {
        $location.path("/");
      });
    }
  };
});