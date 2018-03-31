window.onload = function() {
	
	//1, 获取最大的盒子
	var container = document.querySelector(".container");
	var arrRight = document.querySelector("#arrRight");
	var arrLeft = document.querySelector("#arrLeft");
	var arr = container.children[0];
	var ulBox = container.children[1];
	var olBox = container.children[2];
	var bannerWidth = container.offsetWidth;
	var count = ulBox.children.length;
	

	for (var i = 0; i < ulBox.children.length; i++) {
		var olLi = document.createElement('li');
		olLi.innerText = i + 1;
		olBox.appendChild(olLi)
	}
	olBox.children[0].className = "current";

	// 1.0 鼠标经过小盒子，移动轮播图
	for (var i = 0; i < olBox.children.length; i++) {
		olBox.children[i].index = i;
		olBox.children[i].addEventListener("mouseover", function() {
           for (var i = 0; i < olBox.children.length; i++) {
           	  olBox.children[i].removeAttribute("class")
           }
           this.className = "current";
           //移动的距离： this.index * bannerWidth
           animate(ulBox, {
           		"left" : -this.index * bannerWidth
           	})

           num = this.index;
           console.log
		}, false)
	}

	// 2.0 点击左右箭头, 移动轮播图
	container.onmouseover = function() {
		clearInterval(timer);
		arr.style.display = "block"
	}
	container.onmouseout = function() {
		arr.style.display = "none";
		timer = setInterval(arrRight.onclick, 1000)
	}
	var num = 0;

	arrRight.onclick = function() {
       num++;
       if(num > count) {
       	 num = 1;
       	 ulBox.style.left = 0;
       }

       animate(ulBox, {
           		"left" : -num * bannerWidth
           	})
       // 小点排他
       for (var i = 0; i < olBox.children.length; i++) {
           	  olBox.children[i].removeAttribute("class")
           }

        if (num == count) {
        	olBox.children[0].className = "current";
        }else {
        	olBox.children[num].className = "current";
        }
    }
	/*arrLeft.addEventListener("click", function() {
       num--;

       if(num < 0) {
       	 num = count - 1;
       	 ulBox.style.left = -count * bannerWidth + "px";
       }

       animate(ulBox, {
           		"left" : -num * bannerWidth
           	})
       for (var i = 0; i < olBox.children.length; i++) {
           	  olBox.children[i].removeAttribute("class")
           }
        if (num == count - 1) {
        	olBox.children[count - 1].className = "current";
        }else {
        	olBox.children[num].className = "current";
        }
	}, false)
  
	// 自动轮播
	var timer = setInterval(arrRight.onclick, 1000)

	var firstLi = ulBox.children[0].cloneNode(true);
	ulBox.appendChild(firstLi);*/

}	