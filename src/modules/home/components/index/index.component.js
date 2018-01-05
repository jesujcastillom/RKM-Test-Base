import IndexTemplate from "./index.component.html";

class IndexComponent{
    /* @ngInject */
    constructor($log){
        this.$log = $log;
    }
}

export default {
    template: IndexTemplate,
    controller: IndexComponent
}