import {headerComponent} from './header.component';
import headerCtrl from './header.controller';

export default angular.module('layout.header', [])
    .controller('headerCtrl', headerCtrl)
    .component('lzHeader', headerComponent)
    .name;