function display(){
    var c=localStorage.length+1;
    var name = document.getElementById('productname').value;
	var desc = document.getElementById('desc').value;
	var q = document.getElementById('qlyt').value;
	var price = document.getElementById('price').value;
	var mfd =  document.getElementById('mfd').value;
	var exp = document.getElementById('exp').value;
	var pic = document.getElementById('img').value;
	var obj = {"name" : name, "description" : desc, "quality" : q, "price" : price, "manufactured" : mfd, "expiry" : exp, "picture" : pic};
	
	localStorage.setItem(c, JSON.stringify(obj));
	add();
    
}

function add(){
    document.getElementById('row').innerHTML="";
    for(let i=0; i<localStorage.length; i++){
		var key = localStorage.key(i);
		var val = JSON.parse(localStorage.getItem(key));
		document.getElementById('row').innerHTML += '<div class="column"><div class="card"><img src="1.jpg" style="width="10px"><h1>' + val["name"] + '</h1><p>Quality : ' + val["quality"] + '</p><p class="price">Price : &#x20b9;' + val["price"] + '</p><p>Manufactured on : ' + val["manufactured"] + '</p><p>Best Before : ' + val["expiry"] + '</p><p>' + val["description"] + '</p><p><button>Add to Cart</button></p></div></div>';
	}
}
// window.onload = function(){
//     add();
// }