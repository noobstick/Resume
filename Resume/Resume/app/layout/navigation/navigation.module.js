import {navigationComponent} from './navigation.component';
import controller from './navigation.controller';
import contact from './contact/contact.module';

export default angular.module('layout.navigation', 
    [
        contact
    ])
    .controller('navigationCtrl', controller)
    .component('lzNavigation', navigationComponent)
    .name;