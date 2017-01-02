(function () {
    "use strict";
    
    angular.module("ShoppingListCheckOff", [])
    .controller("ToBuyController", BuyCtrl)
    .controller("AlreadyBoughtController", BoughtCtrl)
    .service("ShoppingListCheckOffService", ShoppingService);
    
    BuyCtrl.$inject = ["ShoppingListCheckOffService"];
    function BuyCtrl(ShoppingListCheckOffService) {
        this.toBuyList = ShoppingListCheckOffService.toBuyList;
        this.buyFromList = function (index) {
            ShoppingListCheckOffService.buyItem(index);
        }
    }
    
    BoughtCtrl.$inject = ["ShoppingListCheckOffService"];
    function BoughtCtrl(ShoppingListCheckOffService) {
        this.boughtList = ShoppingListCheckOffService.boughtList;
    }
    
    function ShoppingService() {
        this.toBuyList = [
            {
                name: "cookies",
                quantity: 10
            },
            {
                name: "chips",
                quantity: 5
            },
            {
                name: "chocolate",
                quantity: 8
            },
            {
                name: "carrots",
                quantity: 2
            },
            {
                name: "vegetables",
                quantity: 3
            },
            {
                name: "sausages",
                quantity: 6
            }
        ];
        this.boughtList = [];
        this.buyItem = function (index) {
            var removed = this.toBuyList.splice(index, 1);
            this.boughtList.push(removed[0]);
        }
    }
})();