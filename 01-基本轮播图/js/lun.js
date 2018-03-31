window.onload = function() {
	var container = document.querySelector('.container');
	var bannerWidth = container.offsetWidth;
	var ulBox = container.querySelector('ul');

	var ol = container.children[2]
	var arr = container.children[0];
	var arrLeft = arr.children[0];
	var arrRight = arr.children[1];
	var suo;
	var ulchil = ulBox.children.length;
	for (var i = 0; i < ulBox.children.length; i++) {
		var liol = document.createElement('li');
		liol.innerText = i + 1;
		ol.appendChild(liol);

	}
	ol.children[0].className = 'current';

};