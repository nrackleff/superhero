var rankingAppModule = angular.module('rankingApp', []);

rankingAppModule.controller('ListController', function($scope) {

	// Creating the initial list of items 
	$scope.items = [
		{title: 'Iron Man', score: 10},
		{title: 'The Incredible Hulk', score: 5},
		{title: 'Captain America', score: 7},
	];

	$scope.newItem = '';

	// Default to sorting by score - assumes highest score should be at the top of list to start.
	$scope.predicate = '-score';

	// Add a new item to the list
	$scope.addItem = function () {
		var newItem = $scope.newItem.trim();

		// Check to see if anything is in the field
		if (!newItem.length) {
			return;
		}

		// Add to list
		$scope.items.push({
			title: newItem,
			score: 0
		});

		// Reset newItem to empty
		$scope.newItem = '';
	};
});