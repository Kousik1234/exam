// On clicking remove button the item should be removed from DOM as well as localstorage.

var data=JSON.parse(localStorage.getItem("cofee")) || [];
console.log(data)
display(data)
function display(data){
   data.forEach(function(element,index){
       var box=document.createElement("div");

       var typecofee=document.createElement("h3");
       typecofee.innerText=element.type_coffe;

       var image=document.createElement("img");
       image.setAttribute("src",element.image);

       var price=document.createElement("h3");
       price.innerText=element.price;

       var remove_coffee=document.createElement("button");
       remove_coffee.innerText="remove coffee"

       remove_coffee.addEventListener("click",function(){
           dltfun(element,index)
       });
      box.append(type,image,price,remove_coffee);
   });

    function dltfun(element,index,array){
        window.location.reload()
        data.splice(index,1);
        localStorage.setiten("cofee",JSON.stringify(data))
        var item=localStorage.getItem("cofee");
        display(item);
    }

}
