'use strict';
var menuItems,
    observable = require('data/observable'),
    navigationViewModel = new observable.Observable();

menuItems = [{
    "title": "Logged Home",
    "moduleName": "components/loggedHomeView/loggedHomeView",
    "icon": "\ue0dd"
}, {
    "title": "My kites",
    "moduleName": "components/kiteView/kiteView",
    "icon": "\ue0d6"
}];

navigationViewModel.set('menuItems', menuItems);
navigationViewModel.set('backButtonHidden', true);

module.exports = navigationViewModel;