import forEach from "lodash/forEach";

export default function ($stateProvider, $urlRouterProvider) {
    "ngInject";
    $urlRouterProvider.otherwise("/rkm-test");
    $urlRouterProvider.when("", "/rkm-test");
    let states = [
        {
            name: "main",
            url: "/rkm-test",
            component: "main"
        }
    ];

    forEach(states, state => {
        $stateProvider.state(state);
    });
}