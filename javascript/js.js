function display_nav_block(nav) {
	nav_child=nav.firstElementChild;
	navlitext=nav_child.innerHTML;
	nav2='所有商品';
	switch	(navlitext){
		case "所有商品":
		navHide=document.getElementById('nav_hide_1');
		navHide.style.display="block";
		break;
		case "冬季热卖":
		navHide=document.getElementById('nav_hide_2');
		navHide.style.display="block";
		break;
		case "春季新品":
		navHide=document.getElementById('nav_hide_3');
		navHide.style.display="block";
		break;
		case "羽绒服":
		navHide=document.getElementById('nav_hide_4');
		navHide.style.display="block";
		break;
		case "大衣":
		navHide=document.getElementById('nav_hide_5');
		navHide.style.display="block";
		break;
		case "卫衣":
		navHide=document.getElementById('nav_hide_6');
		navHide.style.display="block";
		break;
		case "长袖衬衫":
		navHide=document.getElementById('nav_hide_7');
		navHide.style.display="block";
		break;
		case "长袖T恤":
		navHide=document.getElementById('nav_hide_8');
		navHide.style.display="block";
		break;
		case "夹克":
		navHide=document.getElementById('nav_hide_9');
		navHide.style.display="block";
		break;
		case "针织衫/毛衫":
		navHide=document.getElementById('nav_hide_10');
		navHide.style.display="block";
		break;
		case "休闲裤":
		navHide=document.getElementById('nav_hide_11');
		navHide.style.display="block";
		break;
		case "牛仔裤":
		navHide=document.getElementById('nav_hide_12');
		navHide.style.display="block";
		break;
		case "西服":
		navHide=document.getElementById('nav_hide_13');
		navHide.style.display="block";
		break;
		case "配饰":
		navHide=document.getElementById('nav_hide_14');
		navHide.style.display="block";
		break;
		default:
		alert('系统出错！请刷新页面');
	}
}
function display_nav_none(nav) {
	nav_child=nav.firstElementChild;
	navlitext=nav_child.innerHTML;
	nav2='所有商品';
	switch	(navlitext){
		case "所有商品":
		navHide=document.getElementById('nav_hide_1');
		navHide.style.display="none";
		break;
		case "冬季热卖":
		navHide=document.getElementById('nav_hide_2');
		navHide.style.display="none";
		break;
		case "春季新品":
		navHide=document.getElementById('nav_hide_3');
		navHide.style.display="none";
		break;
		case "羽绒服":
		navHide=document.getElementById('nav_hide_4');
		navHide.style.display="none";
		break;
		case "羽绒服":
		navHide=document.getElementById('nav_hide_4');
		navHide.style.display="none";
		break;
		case "大衣":
		navHide=document.getElementById('nav_hide_5');
		navHide.style.display="none";
		break;
		case "卫衣":
		navHide=document.getElementById('nav_hide_6');
		navHide.style.display="none";
		break;
		case "长袖衬衫":
		navHide=document.getElementById('nav_hide_7');
		navHide.style.display="none";
		break;
		case "长袖T恤":
		navHide=document.getElementById('nav_hide_8');
		navHide.style.display="none";
		break;
		case "夹克":
		navHide=document.getElementById('nav_hide_9');
		navHide.style.display="none";
		break;
		case "针织衫/毛衫":
		navHide=document.getElementById('nav_hide_10');
		navHide.style.display="none";
		break;
		case "休闲裤":
		navHide=document.getElementById('nav_hide_11');
		navHide.style.display="none";
		break;
		case "牛仔裤":
		navHide=document.getElementById('nav_hide_12');
		navHide.style.display="none";
		break;
		case "西服":
		navHide=document.getElementById('nav_hide_13');
		navHide.style.display="none";
		break;
		case "配饰":
		navHide=document.getElementById('nav_hide_14');
		navHide.style.display="none";
		break;

		default:
		alert('系统出错！请刷新页面');
	}
}
function img_block(name) {
	nametext=name.innerHTML;
	switch	(nametext){
		case "1":
		imgHide=document.getElementById('carousel_img1');
		imgHide.src="images/16.jpg";
		break;
		case "2":
		imgHide=document.getElementById('carousel_img1');
		imgHide.src="images/17.jpg";
		break;
		case "3":
		imgHide=document.getElementById('carousel_img1');
		imgHide.src="images/18.jpg";
		break;
	}
}