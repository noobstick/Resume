import {homeComponent} from './home.component';
import ctrl from './home.controller';

export default angular.module('layout.navigation.home',[])
    .component('lzHome', homeComponent)
    .controller('homeCtrl', ctrl)
    .name;