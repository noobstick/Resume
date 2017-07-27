import {navigationComponent} from './navigation.component';
import controller from './navigation.controller';
import contact from './contact/contact.module';
import about from './about/about.module';
import home from './home/home.module';

export default angular.module('layout.navigation', 
    [
        contact,
        about,
        home
    ])
    .controller('navigationCtrl', controller)
    .component('lzNavigation', navigationComponent)
    .name;