import temp from './header.html';
import ctrl from './header.controller';

export let headerComponent = {
    bindings: {
        //inputs
        title: '@',
    },
    template: temp,
    controller: ctrl
}