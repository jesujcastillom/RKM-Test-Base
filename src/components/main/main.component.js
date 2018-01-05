import MainTemplate from "./main.component.html";

class MainComponent {
	/* @ngInject */
	constructor($log, $uibModal) {
		this.$log = $log;
		this.$uibModal = $uibModal;
	}

	$onInit() {
		this.$uibModal.open({
			component: "forceModal",
			backdrop: "static"
		});
	}
}

export default {
	template: MainTemplate,
	controller: MainComponent
}