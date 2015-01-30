/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

'use strict';

var MainPage = function() {
  this.container = element(by.css('.main-content'));
  this.form = this.container.element(by.css('form[name="startSessionForm"]'));

  this.usernameInput = this.container.element(by.model('username'));
  this.startBtn = this.form.element(by.css('button'));

  this.usernameText = element(by.css('h5.ng-binding'));;

  this.userList = element.all(by.repeater('user in users'));
  this.userRow = element(by.repeater('user in users').row(0));

  this.shareLink = element.all(by.css('.share a')).first();
  this.numbers = element(by.repeater('vote in voteValues').row(0));
  this.number = element(by.repeater('vote in voteValues').row(0).column('vote'));

  this.statics = element(by.css('.statics'));
  this.staticsList = element.all(by.repeater('(point, votes) in points'));
  this.staticsRow = element(by.repeater('(point, votes) in points').row(0));

  this.descriptionInput = element(by.model('description'));

  this.usernameInput_ = this.container.element(by.model('username_'));
  this.sessionIdInput = this.container.element(by.model('sessionId'));
  this.joinBtn = this.container.element(by.css('form[name="joinSessionForm"] button'));

  this.clearBtn = element(by.buttonText('Clear Votes'));
  this.showBtn = element(by.buttonText('Show Votes'));
  this.goBtn = element(by.buttonText('Go ->'));

  this.modal = element(by.css('.reveal-modal'));
  this.usernameModalInput = this.modal.element(by.model('username'));
  this.modalBtn = this.modal.element(by.buttonText('OK'));
};

module.exports = new MainPage();

