import forEach from "lodash/forEach";

export default function ($stateProvider) {
    "ngInject";
    let states = [
        {
            name: "home",
            url: "/",
            component: "homeIndex"
        }
    ];

    forEach(states, state => {
        $stateProvider.state(state);
    })
}