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
    "title": "About",
    "moduleName": "components/aboutView/aboutView",
    "icon": "\ue0de"
}, {
    "title": "Countries",
    "moduleName": "components/countryView/countryView",
    "icon": "\ue0dc"
}];

navigationViewModel.set('menuItems', menuItems);
navigationViewModel.set('backButtonHidden', true);

module.exports = navigationViewModel;