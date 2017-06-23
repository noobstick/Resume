import {navigationComponent} from './navigation.component';
import controller from './navigation.controller';
import contact from './contact/contact.module';
import about from './about/about.module';

export default angular.module('layout.navigation', 
    [
        contact,
        about
    ])
    .controller('navigationCtrl', controller)
    .component('lzNavigation', navigationComponent)
    .name;