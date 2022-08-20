const btn=document.querySelectorAll("button");//select all buttons
btn.forEach(function(button,index){
    button.addEventListener("click",function(event){{
	var btnItem=event.target//select the button that was clicked
	var product=btnItem.parentElement
	var productImg=product.querySelector("img").src
	var productName=product.querySelector("H1").innerText
	var productPrice=product.querySelector("span").innerText
	addCart(productImg,productName,productPrice)
	// lấy thông tin của sản phẩm (lấy tên, hình và giá)
}})
})
function addCart(productImg,productName,productPrice){
	var addtr = document.createElement("tr")
	var cartItem = document.querySelectorAll("tbody tr")
	for (var i=0;i<cartItem.length;i++){
		var productT=document.querySelectorAll(".title")
		if (productT[i].innerHTML==productName){
			alert("Product already in cart")
			return
			// kiểm tra nếu sản phẩm có trong giỏ hàng chưa
		}
	}
	var trcontent='<tr><td style="display: flex;align-items:center;"><img style="width:70px" src="'+productImg+'" alt=""><span class="title">'+productName+'</span></td><td><p><span class="prices">'+productPrice+'</span><sup>đ</sup></p></td><td><input style="width:30px;outline:none;" type="number" value="1" min="1"></td><td style="cursor:pointer;"><span class="cart-delete">Xóa</span></td></tr>'
	addtr.innerHTML=trcontent
	var cartTable = document.querySelector("tbody")
	cartTable.append(addtr)
	// cho sản phẩm vào table
	carttotal()
	deleteCart()
}
//-------------------total price---------------------
function carttotal(){
	var cartItem = document.querySelectorAll("tbody tr")
	var totalC= 0
	for ( var i=0;i<cartItem.length;i++){
		var inputValue = cartItem[i].querySelector("input").value
		var productPrice = cartItem[i].querySelector(".prices").innerHTML
		totalA = inputValue*productPrice
		totalC += totalA
	}
	var cartTotalA = document.querySelector(".price-total span")
	var cartPrice = document.querySelector(".cart-icon span")
	cartTotalA.innerHTML=totalC.toLocaleString('de-DE')
	cartPrice.innerHTML=totalC.toLocaleString('de-DE')
	inputchange()
}
//-------------------delete product---------------------
function deleteCart(){
	var cardItem = document.querySelectorAll("tbody tr")
	for (var i=0;i<cardItem.length;i++){
		var productT=document.querySelectorAll(".cart-delete")
		productT[i].addEventListener("click",function(event){
			var cartDelete=event.target
			var cartitemR = cartDelete.parentElement.parentElement
			cartitemR.remove()
			carttotal()
		})
	}
}
function inputchange(){
	var cartItem = document.querySelectorAll("tbody tr")
	for (var i=0;i<cartItem.length;i++){
		var inputValue = cartItem[i].querySelector("input")
		inputValue.addEventListener("change",function(){
			carttotal()
		})
	}
}
const cartbtn=document.querySelector(".fa-times")
const cartshow = document.querySelector(".fa-shopping-cart")
cartshow.addEventListener("click",function(){
	document.querySelector(".cart").style.right = "0px"
})
cartbtn.addEventListener("click",function(){
	document.querySelector(".cart").style.right = "-100%"
//document.querySelector(".cart").style.right = "-100%" nghia la khi click vao nut xoa thi cart se bi an
})