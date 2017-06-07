export default function headerCtrl(uibDateParser){
    'ngInject';

    var $ctrl = this;

    $ctrl.name = "Yo bruh";
    $ctrl.format = 'yyyy/MM/dd';
    $ctrl.date = new Date();

    $ctrl.updateTitle = function(){
        $ctrl.name = $ctrl.title;
    }

};