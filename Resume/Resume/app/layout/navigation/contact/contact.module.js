import template from './contact.html';

export default angular.module('layout.navigation.contact', [])
    .config(function($stateProvider){
        'ngInject';
        var state = {
            state: 'Contact',
            config: {
                template: template,
                url: '/contact',
                title: 'Contact'
            }
        }
        $stateProvider.state(state.state, state.config);
    })
    .name;
