var app = angular.module("myShoppingList", []); 
app.controller("myCtrl", function($scope) {
    $scope.products = [{"name":"Milk", "quantity":"0"}, {"name":"Bread","quantity":"0"}, {"name":"Cheese","quantity":"0"}];
    $scope.addItem = function () {
        $scope.errortext = "";
        if (!$scope.nameProduct) {return;}        
        if ($scope.products.indexOf($scope.nameProduct) == -1) {
            $scope.products.push({name:$scope.nameProduct, quantity:$scope.productQuantity});
        } else {
            $scope.errortext = "The item is already in your shopping list.";
        }
		
		
		$scope.products.push({name:$scope.nameProduct, quantity:$scope.productQuantity});
		$scope.nameProduct = "";
		$scope.productQuantity = "";
    }
    $scope.removeItem = function (x) {
        $scope.errortext = "";    
        $scope.products.splice(x, 1);
    }
	
	$scope.increaseItem = function(item){
		item.quantity++;
	}
	
	$scope.decreaseItem = function(item){
		if (item.quantity > 0) {
			item.quantity--;
		}
	}
});