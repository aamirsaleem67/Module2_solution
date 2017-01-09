(function()
{
    angular.module('ShoppingListCheckOff',[])
    .controller('ToBuyController',BuyController)
    .controller('AlreadyBoughtController',BoughtController)
    .service('checkOffListService',ListService);

    BuyController.$inject = ['checkOffListService'];
    function BuyController(ser)
    {
     var stock = this;
     stock.buyItems = ser.getItems();
     stock.removeFromStock = function (index)
     {
               ser.removeFromBuyList(index);
     };

    }
BoughtController.$inject = ['checkOffListService'];
function BoughtController(ser)
{
   var userStock=this;
   userStock.boughtItems = ser.getboughtItems();
    userStock.removeFromBoughtList=function(index)
    {
            ser.removeFromUserStock(index);
    }
}

function ListService()
{
    
    var service =this;
    var items2=[];
  var items1 = [
{
    name: "cookies",
    quantity: 10
},
{
    name:"bottles",
    quantity: 20
},
{
name: "chips bags",
quantity: 25

},
{
    name:"sweet",
    quantity: "2kg"
},
{
    name:"milk",
    quantity: "10kg"
}




  ];

  service.getItems= function()
  {  
          return items1;
  };
service.getboughtItems =function()
{
    return items2;

};
  service.removeFromBuyList=function(index)
  {
        
            item= items1.splice(index,1);
          
           var myitem = {
            name: item[0].name,
            quantity: item[0].quantity
           };
           addItemtoboughtList(myitem);
  };
function addItemtoboughtList(tempitem)
{
  
        items2.push(tempitem);
        //console.log(items2[0].quantity);
};

service.removeFromUserStock=function(index)
{

 item= items2.splice(index,1);
          
           var myitem = {
            name: item[0].name,
            quantity: item[0].quantity
           };
           console.log(item[0].name);
           addItemtobuyList(myitem);
};

function addItemtobuyList(tempitem)
{
    items1.push(tempitem);

}

}

})();