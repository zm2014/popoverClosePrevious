(function () {
	'use strict';

	angular
        .module('popoverDemo')
        .controller('mainCtrl', [mainCtrl]);

	function mainCtrl() {

		var vm = this;

		vm.myPopover = {

			isOpen: [],

			open: function isOpen(i) {
				if (vm.items.length > 0) {
					vm.myPopover.isOpen = fillArrayWith(vm.items.length, false);
				}
				vm.myPopover.isOpen[i] = true;
			}
		};

		function fillArrayWith(n, value) {
			var arr = Array.apply(null, Array(n));
			return arr.map(function () {
				return value;
			});
		}

		vm.items = [
		{
		    "id": 1,
		    "name": "First item",
		    "description": "First description."
		},
		{
			"id": 2,
			"name": "Second item",
			"description": "Second description."
		},
		{
			"id": 3,
			"name": "Third item",
			"description": "Third description."
		},
		{
			"id": 4,
			"name": "Forth item",
			"description": "Forth description."
		}
		];
	}
}());