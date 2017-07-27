import angular from 'angular';
import bootstrap from 'angular-ui-bootstrap';
import router from 'angular-ui-router';
import layout from './layout/layout.module';
import widgets from './widget/constants/constants.module';



angular.module('app', [
    router,
    bootstrap,
    layout,
    widgets
]).config(function($stateProvider){

    var states = [
        {
            name: 'Home',
            url: '/',
            component: 'lzHome'
        },
        {
            name: 'Contact',
            url: '/contact',
            component: 'lzContact'
        },
        {
            name: 'About',
            url: '/about',
            component: 'lzAbout'
        }
    ]

    states.forEach(function(state){
        $stateProvider.state(state)            
    });
});