export default function navigationCtrl($state, states, $rootScope){
    'ngInject';

    var $ctrl = this;

    $ctrl.name = "Nav Section"

    $ctrl.state = $state;
    $ctrl.navItems = states.mainNav;

    $rootScope.$on('$stateChangeStart', function () {
        var stateTemp = $state;
        var statetestplz = 'test';
        console.log('test');
    })
};