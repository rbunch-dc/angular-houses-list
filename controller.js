
    angular.module('houseList1', []).controller('housesListCtrl', housesListCtrl);

    function housesListCtrl($scope) {

    	$scope.houses = [];

    	var index = 0;

    	$scope.addHouse = function(){
    		$scope.houses.push(houses[index++])
    	}

    	$scope.enableAdd = function(){
    		index < houses.length;
    	}

    }

angular.module('houseList', []).controller('siteEditCtrl', siteEditCtrl);

	function siteEditCtrl($scope) {
	  $scope.houses = houses;
	  $scope.startAdd = startAdd;
	  $scope.cancel = cancel;
	  $scope.add = add;
	  $scope.startEdit = startEdit;
	  $scope.save = save;
	  $scope.startRemove = startRemove;
	  $scope.remove = remove;
	  $scope.getSelected = getSelected;

	  var selected = -1;
	  setView('list');

	  function setView(view) {
	    $scope.view = view;
	  }

	  function startAdd() {
	    $scope.houseBox = '';
	    setView('add');
	  }

	  function cancel() {
	    setView('list');
	  }

	  function add() {
	    $scope.houses.push({
	      name: $scope.houseBox
	    });
	    setView('list');
	  }

	  function startEdit(index) {
	    selected = index;
	    $scope.houseBox = $scope.houses[index];
	    setView('edit');
	  }

	  function save() {
	    $scope.houses[selected] = $scope.houseBox;
	    setView('list');
	  }

	  function startRemove(index) {
	    selected = index;
	    setView('delete');
	  }

	  function remove() {
	    $scope.houses.splice(selected, 1);
	    setView('list');
	  }

	  function getSelected() {
	    return houses[selected].name;
	  }
}

angular.module('houseList2', ['ngRoute'])
  .controller('adminCtrl', AdminCtrl)
  .config(function ($routeProvider) {
    $routeProvider.when('/locations', {
    	// alert("hello!!");
      templateUrl: 'views/listHouses.html'
    });
    $routeProvider.when('/sites', {
      templateUrl: 'views/sites.html'
    });
    $routeProvider.otherwise({
      templateUrl: 'views/main.html'
    });
  });

function AdminCtrl($scope) {
	$scope.view = 'list';

}