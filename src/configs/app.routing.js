import forEach from "lodash/forEach";

export default function ($stateProvider, $urlRouterProvider) {
    "ngInject";
    $urlRouterProvider.otherwise("login");
    $urlRouterProvider.when("", "login");
    let states = [
        {
            name: "login",
            url: "/login",
            component: "login"
        },
        {
            name: "home.**",
            url: "/home",
            lazyLoad: $transition$ => {
                let $ocLazyLoad = $transition$.injector().get("$ocLazyLoad");
                return import("../modules/home/home.module").then(module => {
                    $ocLazyLoad.inject(module.default);
                });
            }
        }
    ];

    forEach(states, state => {
        $stateProvider.state(state);
    });
}