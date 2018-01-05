import LoginTemplate from "./login.component.html";

class LoginComponent {
    /* @ngInject */
    constructor($log, $state) {
        this.$log = $log;
        this.$state = $state;
    }

    login() {
        this.user.username = this.user.username.toLowerCase();
        this.$log.log("going home");
        this.$state.go("home");
    }
}

export default {
    template: LoginTemplate,
    controller: LoginComponent
}