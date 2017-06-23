import {contactComponent} from './contact.component';
import controller from './contact.controller';

//export default angular.module('layout.navigation.contact', [])
//    .config(function($stateProvider){
//        'ngInject';
//        var state = {
//            state: 'Contact',
//            config: {
//                template: template,
//                url: '/contact',
//                title: 'Contact'
//            }
//        }
//        $stateProvider.state(state.state, state.config);
//    })
//    .name;

export default angular.module('layout.navigation.contact', [])
    .controller('contactCtrl', controller)
    .component('lzContact', contactComponent)
    .name;
