import {contactComponent} from './contact.component';
import controller from './contact.controller';

export default angular.module('layout.navigation.contact', [])
    .controller('contactCtrl', controller)
    .component('lzContact', contactComponent)
    .name;
