window.onload = function() {
	var container = document.querySelector("#container");
	var arrBox = document.querySelector("#arr");
	var arrLeft = document.querySelector("#arrLeft");
	var arrRight = document.querySelector("#arrRight");
	var ulBox = container.children[0];
	var olBox = container.children[2];
	var timer = null;

	for (var i = 0; i < ulBox.children.length; i++) {
		var olLi = document.createElement("li");
		olLi.innerText = i + 1;
		olBox.appendChild(olLi);
	}
	olBox.children[0].className = "current"

	//1.0 小点注册事件和排他
	for (var i = 0; i < olBox.children.length; i++) {
		olBox.children[i].index = i;
		olBox.children[i].onmouseenter = function() {
			paiTa(this, ulBox.children[this.index])
			num = this.index;
		}
	}

	//2.0 鼠标经过盒子显示左右箭头  和点击事件
	//
	container.onmouseenter = function() {
		clearInterval(timer)
		arrBox.style.opacity = "1";
	}
	container.onmouseleave = function() {
		arrBox.style.opacity = "0";
		timer = setInterval(arrRight.onclick, 1000)
	}

	var num = 0;
	arrRight.onclick = function() {
		num++;
		if(num > ulBox.children.length - 1) {
			num = 0;
		}
		paiTa(olBox.children[num], ulBox.children[num])
	}

	arrLeft.onclick = function() {
		num--;
		if(num < 0) {
			num = ulBox.children.length - 1;
		}
		paiTa(olBox.children[num], ulBox.children[num])
	}

	timer = setInterval(arrRight.onclick, 1000)

	function paiTa(arg1, arg2) {
		for (var i = 0; i < olBox.children.length; i++) {
			olBox.children[i].removeAttribute("class")
			animate(ulBox.children[i], {"opacity" : 0})
		}
		arg1.className = "current";
		animate(arg2, {"opacity" : 1})
	}
}