import angular from "angular";
import uiRouter from "@uirouter/angularjs";
import ngAnimate from "angular-animate";
import uiBootstrap from "angular-ui-bootstrap";

import "./assets/less/main.less";

import AppRouting from "./configs/app.routing";

import MainComponent from "./components/main/main.component";
import ForceModalComponent from "./components/force-modal/force-modal.component";

angular.module("rankmi", [uiRouter, ngAnimate, uiBootstrap])
	.component("main", MainComponent)
	.component("forceModal", ForceModalComponent)
	.config(AppRouting);