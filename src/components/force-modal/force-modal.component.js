import ForceModalTemplate from "./force-modal.component.html";

class ForceModalComponent {
	/* @ngInject */
	constructor($log, $timeout) {
		this.$log = $log;
		this.$timeout = $timeout;
	}

	$onInit() {
		this.$timeout(() => this.close(), 2000);
	}
}

export default {
	template: ForceModalTemplate,
	controller: ForceModalComponent,
	bindings: {
		close: "&"
	}
}