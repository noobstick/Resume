import angular from 'angular';
import layout from './layout/layout.module';
import bootstrap from 'angular-ui-bootstrap';
import router from 'angular-ui-router';

angular.module('app', [
    router,
    bootstrap,
    layout
]);