// const { checkout } = require("../../controllers/productController");

deleteProduct=(id)=>{
   
    const url="/product/delete/"+id;
   const xhr=new XMLHttpRequest();
   xhr.open('DELETE',url,true);
   xhr.onload=function(){
    if(xhr.readyState===4||xhr.status===200)
    {
        alert('product deleted');
        window.location.reload();
    }
    else
    {
         alert('error occured');
         window.location.reload();
    }
   }
   xhr.send(null);
}
deleteType=(id)=>{
   
    const url="/type/"+id;
   const xhr=new XMLHttpRequest();
   xhr.open('DELETE',url,true);
   xhr.onload=function(){
    if(xhr.readyState===4||xhr.status===200)
    {
        alert('type deleted');
        window.location.reload();
    }
    else
    {
         alert('error occured');
         window.location.reload();
    }
   }
   xhr.send(null);
}
getPrice=(id)=>{
   
    const url="/product/getprice/"+id;
   const xhr=new XMLHttpRequest();
   xhr.open('DELETE',url,true);
   xhr.onload=function(){
    if(xhr.readyState===4||xhr.status===200)
    {
        alert('type deleted');
        window.location.reload();
    }
    else
    {
         alert('error occured');
         window.location.reload();
    }
   }
   xhr.send(null);
}
getCost=(element)=>{
   var id= document.getElementById("product").value; 
   var options = element.selectedOptions  
   document.getElementById("name").value=options[0].innerText;
   if(id != "0"){
    const url="/bill/getprice/"+id;
   const xhr=new XMLHttpRequest();
   xhr.open('GET',url,true);
   xhr.onload=function(){
    if(xhr.readyState===4||xhr.status===200)
    {
        const result=JSON.parse(xhr.responseText);
        document.getElementById("cost").value=result.product.cost;
        calculatePrice();
    }
    else
    {
         alert('error occured');
         window.location.reload();
    }
   }
   xhr.send(null);
}
else
{
    document.getElementById("cost").value="";
}
}
calculatePrice=()=>{
   var cost= document.getElementById("cost").value;
   var quantity= document.getElementById("quantity").value;
   document.getElementById("price").value= parseInt(cost) * parseInt(quantity);
 }
 deleteBill=(id)=>{
   
    const url="/bill/"+id;
   const xhr=new XMLHttpRequest();
   xhr.open('DELETE',url,true);
   xhr.onload=function(){
    if(xhr.readyState===4||xhr.status===200)
    {
        alert('item deleted');
        window.location.reload();
    }
    else
    {
         alert('error occured');
         window.location.reload();
    }
   }
   xhr.send(null);
}

getProductById=(id)=>{
     const url="/product/"+id;
    const xhr=new XMLHttpRequest();
    xhr.open('GET',url,true);
    xhr.onload=function(){
     if(xhr.readyState===4||xhr.status===200)
     {
         const result=JSON.parse(xhr.responseText);
         document.getElementById("updateid").value=result.product.id;
            document.getElementById("updatename").value=result.product.name;
            document.getElementById("updatetype").value=result.product.type;
            document.getElementById("updatecost").value=result.product.cost;
     }
     else
     {
          alert('error occured');
          window.location.reload();
     }
    }
    xhr.send(null);
 }
 getTypeById=(id)=>{
    const url="/type/"+id;
   const xhr=new XMLHttpRequest();
   xhr.open('GET',url,true);
   xhr.onload=function(){
    if(xhr.readyState===4||xhr.status===200)
    {
        const result=JSON.parse(xhr.responseText);
        document.getElementById("updateid").value=result.type.id;
           document.getElementById("updatename").value=result.type.name;
    }
    else
    {
         alert('error occured');
         window.location.reload();
    }
   }
   xhr.send(null);
}
getBillById=(id)=>{
    const url="/bill/"+id;
   const xhr=new XMLHttpRequest();
   xhr.open('GET',url,true);
   xhr.onload=function(){
    if(xhr.readyState===4||xhr.status===200)
    {
        const result=JSON.parse(xhr.responseText);
        document.getElementById("billId").value=result.product.id;
           var el = document.getElementById("product");
for(var i=0; i<el.options.length; i++) {
  if ( el.options[i].text == result.product.productname ) {
    el.selectedIndex = i;
    break;
  }
}
           document.getElementById("cost").value=result.product.cost;
           document.getElementById("quantity").value=result.product.quantity;
           document.getElementById("price").value=result.product.price;
        }
    else
    {
         alert('error occured');
         window.location.reload();
    }
   }
   xhr.send(null);
}

checkOutBill=()=>{
    const url="/bill/checkout";
   const xhr=new XMLHttpRequest();
   xhr.open('post',url,true);
   xhr.onload=function(){
    if(xhr.readyState===4||xhr.status===200)
    {
        alert('Checkedout Successfully');
        window.location.reload();
    }
    else
    {
         alert('error occured');
         window.location.reload();
    }
   }
   xhr.send(null);
}
deleteTransaction=(id)=>{
    const url="/transactions/"+id;
   const xhr=new XMLHttpRequest();
   xhr.open('DELETE',url,true);
   xhr.onload=function(){
    if(xhr.readyState===4||xhr.status===200)
    {
        alert('item deleted');
        window.location.reload();
    }
    else
    {
         alert('error occured');
         window.location.reload();
    }
   }
   xhr.send(null);
}