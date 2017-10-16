export default function aboutCtrl($state){
    'ngInject';

    var $ctrl = this;

    $ctrl.test = $state;

    console.log('abbout test');
}