import {navigationComponent} from './navigation.component';
import controller from './navigation.controller';

export default angular.module('layout.navigation', [])
    .controller('navigationCtrl', controller)
    .component('lzNavigation', navigationComponent)
    .name;