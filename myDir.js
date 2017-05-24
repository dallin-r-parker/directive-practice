app.directive('myDir', function () {
	return {
		templateUrl: './dir.tmpl.html',
		controller: function($scope) {
				$scope.addItem = function (newItem) {
					$scope.list.push({
						name: newItem
					})
					$scope.newItem = ''
				};

				$scope.removeItem = function(item) {
					$scope.list.splice($scope.list.indexOf(item), 1);
				}
		},
		scope: {
			list: '=',
			title: '@'
		}
	}
});