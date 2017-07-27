export default function headerCtrl(uibDateParser){
    'ngInject';

    var $ctrl = this;

    $ctrl.updateTitle = function(){
        $ctrl.name = $ctrl.title;
    }

};