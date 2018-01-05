import angular from "angular";
import uiRouter from "@uirouter/angularjs";

import HomeRouting from "./configs/home.routing";

import HomeIndexComponent from "./components/index/index.component";

export default angular.module("rankmi.home", [uiRouter])
    .component("homeIndex", HomeIndexComponent)
    .config(HomeRouting)
    .name;