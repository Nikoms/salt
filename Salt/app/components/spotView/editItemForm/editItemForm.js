'use strict';

var helpers = require('../../../utils/widgets/helper'),
    // additional requires
    dataService = require('../../../dataProviders/backendServices'),
    Observable = require('data/observable').Observable,
    viewModel = new Observable({}),
    context;

function goBack() {
    helpers.navigate({
        moduleName: 'components/spotView/itemDetails/itemDetails',
        context: context
    });
}

function onRequestSuccess() {

    context.name = viewModel.get('spotName');

    context.description = viewModel.get('description');

    // refresh edited properties

    goBack();
}

function onRequestFail(err) {
    alert(JSON.stringify(err));
    return err;
}

exports.onCancelTap = function onCancelTap() {
    goBack();
};

exports.onSaveTap = function onSaveTap() {
    var data = dataService.data('spots');

    data.updateSingle({

            name: viewModel.get('spotName'),

            description: viewModel.get('description'),

            // save properties

            Id: viewModel.get('id')
        })
        .then(onRequestSuccess.bind(this))
        .catch(onRequestFail.bind(this));
};

function onNavigatedTo(args) {
    context = args.object.navigationContext;

    viewModel.set('id', context.Id);

    viewModel.set('spotName', context.name);

    viewModel.set('description', context.description);

    // read properties

}
exports.onNavigatedTo = onNavigatedTo;

// additional functions
function pageLoaded(args) {
    var page = args.object;

    helpers.platformInit(page);

    page.bindingContext = viewModel;

    // additional pageLoaded
}

// START_CUSTOM_CODE_spotViewModel
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_spotViewModel
exports.pageLoaded = pageLoaded;