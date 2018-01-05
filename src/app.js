import angular from "angular";
import uiRouter from "@uirouter/angularjs";
import ocLazyLoad from "oclazyload";

import "./assets/less/main.less";

import AppRouting from "./configs/app.routing";

import LoginComponent from "./components/login/login.component";

angular.module("rankmi", [uiRouter, ocLazyLoad])
    .component("login", LoginComponent)
    .config(AppRouting);