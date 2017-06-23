import {aboutComponent} from './about.component';
import ctrl from './about.controller';

export default angular.module('layout.navigation.about', [])
    .controller('aboutCtrl', ctrl)
    .component('lzAbout', aboutComponent)
    .name;