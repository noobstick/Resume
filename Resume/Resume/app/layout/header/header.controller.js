export default function headerCtrl(uibDateParser){
    'ngInject';

    var $ctrl = this;

    $ctrl.name = "Resume";

    $ctrl.updateTitle = function(){
        $ctrl.name = $ctrl.title;
    }

};