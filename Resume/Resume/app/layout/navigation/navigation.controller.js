export default function navigationCtrl($state, states){
    'ngInject';

    var $ctrl = this;

    $ctrl.name = "Nav Section"

    $ctrl.state = $state;
    $ctrl.navItems = states.mainNav;
};