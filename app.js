angular.module("ShoppingListCheckOff", [])
  .controller("ToBuyController", ToBuyController)
  .controller("AlreadyBoughtController", AlreadyBoughtController)
  .service("ShoppingListCheckOffService", ShoppingListCheckOffService);

  var shoppingList1 = [
                       {
                       	
                      	name: "shirts",
                      	quantity: "2"
                      },

                      {
                      	
                      	name: "jeans",
                      	quantity: "5"
                      },

                      {
                      	
                      	name: "T-shirst",
                      	quantity: "6"
                      },
                      {
                      
                      	name: "shoes",
                      	quantity: "2"
                      },

                      {
                     
                      	name: "shocks",
                      	quantity: "5"
                      }


              ];

    var shoppingList2 = [];

    
    

    ToBuyController.$inject = ['ShoppingListCheckOffService'];

     function ToBuyController(ShoppingListCheckOffService) {
     	var buy = this;
     	buy.shoppingList1 = shoppingList1;
       

     	buy.removeItem = function(shoppingList1Index){
     		 
     		ShoppingListCheckOffService.removeItem(shoppingList1Index);

        if(shoppingList1.length===0){
      
          buy.message ="Everything is bougth!";
        }
     		
     	};
      
    


     }

     AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

     function AlreadyBoughtController(ShoppingListCheckOffService){
  
     	var bought = this;

     	bought.shoppingList2 = ShoppingListCheckOffService.getItems();
      
       bought.isItem = function(){

        var count= bought.shoppingList2.length ;
        if(count > 0)
          {
            return false
          }
          else
          {

          return true;
        
          }

      
      };
     }

     function ShoppingListCheckOffService(){

     	var service = this;
      
     	service.removeItem = function(shoppingList1Index){
     		 
        var i = shoppingList1.splice(shoppingList1Index, 1);
     		
     		shoppingList2.push(i[0]);


      
     	};

    
     	service.getItems = function(){
     		
     		return shoppingList2;
     	}
     }
     


