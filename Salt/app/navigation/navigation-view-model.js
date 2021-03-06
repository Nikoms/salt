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
}, {
    "title": "Spots",
    "moduleName": "components/spotView/spotView",
    "icon": "\ue0e9"
}, {
    "title": "Countries",
    "moduleName": "components/countryView/countryView",
    "icon": "\ue0dc"
}, {
    "title": "About",
    "moduleName": "components/aboutView/aboutView",
    "icon": "\ue0de"
}, {
    "title": "Users 2",
    "moduleName": "components/userView/userView",
    "icon": "\ue0e4"
}];

navigationViewModel.set('menuItems', menuItems);
navigationViewModel.set('backButtonHidden', true);

module.exports = navigationViewModel;