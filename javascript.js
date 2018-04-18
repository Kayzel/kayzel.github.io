/*
1. Сделать бэкграунд кнопки градиент; +
2. При работе с ховером и активом отображать изменения в окне кнопки а не при наведении;
   При прекращении работы с данными вкладками отображать полноценную работу;+
3. Добавить вебкит моз и аналоги;
4. Готовый набор кнопок;
5. Добавить непрозрачность кнопки; +
6. Не показывать селекторы если они пустые; + 
7. Выбор шрифтов;+
8. Прозрачный шрифт и разновидности бэкграунда шрифта;
9. Градиент рамки.
10. Плавный переход, транзитион ляляля;
11. градиент текста, 
12. Размер и цвет заднего фона. Нельзя сделать ширину и высоту в инпут текст с 10 до 200 самому
13. Отсутвует переключение кнопок при цвете и градиента смена ссостоятия и тени.
14. Использование своего кода.
15. При написании имени класса на русском, пропадает вискас и не возвращается!!!
Цвета:
Палитра 1: #F7F9F8   #D6E7E0   #E74F78   #5EDAB6   #289EA8

баги
иконка, если сначала написать класс а потом юрл, происходит ошибка. +
задний фон картинки, не сохраняется на активе тип цвета +
иконка, не подгоняются размеры иконки +

инпут текст, проблема при удалении цыфр +
ипут текст, проблема с минусами. +

пробема с сохранением двух и трех мерным разворотом +Ё
Я испортил UnderLine в Font Style.
*/
var block = document.getElementById('wh1skasGenerator');
var blockHover = document.getElementById('wh1skasGeneratorHover');
var blockActive = document.getElementById('wh1skasGeneratorActive');
var blockStandart = document.getElementById('wh1skasGeneratorStandart');
var textButton = document.getElementById('textButton');

var bruL1 = document.getElementById('inp1');
var bruR1 = document.getElementById('inp2');
var brbL1 = document.getElementById('inp3');
var brbR1 = document.getElementById('inp4');

var brL1 = document.getElementById('inp11');
var brL2 = document.getElementById('inp22');
var brL3 = document.getElementById('inp33');
var brL4 = document.getElementById('inp44');

var borderWidth = document.getElementById('borderWidth');
var borderWidth2 = document.getElementById('borderWidth2');
var borderColor = document.getElementById('borderColor');

var sdvigX = document.getElementById('sdvigX');
var sdvigXInp = document.getElementById('sdvigXInp');
var sdvigY = document.getElementById('sdvigY');
var sdvigYInp = document.getElementById('sdvigYInp');
var blur = document.getElementById('blur');
var blurInp = document.getElementById('blurInp');
var whidblur = document.getElementById('whidblur');
var whidblurInp = document.getElementById('whidblurInp');
var boxShadowColor = document.getElementById('boxShadowColor');
var shadowSide = document.getElementById('shadowInset');

var widthItem = document.getElementById('width');
var widthItem2 = document.getElementById('width2');
var heightItem = document.getElementById('height');
var heightItem2 = document.getElementById('height2');
var sizeColor = document.getElementById('sizeColor');

var fontSizeRange = document.getElementById('fontSizeRange');
var fontSizeText = document.getElementById('fontSizeText');

var textShadowLabel = document.getElementById('textShadowLabel');
var textShadowWrapper = document.getElementById('textShadowWrapper');

var firstColor = document.getElementById('firstColor');
var secondColor = document.getElementById('secondColor');

var firstColorfont = document.getElementById('firstColorfont');
var secondColorFont = document.getElementById('secondColorFont');

var htmltag = document.getElementById('htmltag');
var codgener = document.getElementById('codgener');

var opacityRange = document.getElementById('opacityRange');
var opacityText = document.getElementById('opacityText');

var fontShadowRangeX = document.getElementById('fontShadowRangeX');
var fontShadowTextX = document.getElementById('fontShadowTextX');
var fontShadowRangeY = document.getElementById('fontShadowRangeY');
var fontShadowTextY = document.getElementById('fontShadowTextY');
var fontShadowRangeBlur = document.getElementById('fontShadowRangeBlur');
var fontShadowTextBlur = document.getElementById('fontShadowTextBlur');
var fontShadowColor = document.getElementById('fontShadowColor');

var leftFontShadowRangeX = document.getElementById('leftFontShadowRangeX');
var leftFontShadowTextX = document.getElementById('leftFontShadowTextX');
var leftFontShadowRangeY = document.getElementById('leftFontShadowRangeY');
var leftFontShadowTextY = document.getElementById('leftFontShadowTextY');
var leftFontShadowRangeBlur = document.getElementById('leftFontShadowRangeBlur');
var leftFontShadowTextBlur = document.getElementById('leftFontShadowTextBlur');
var leftFontShadowColor = document.getElementById('leftFontShadowColor');

var rightFontShadowRangeX = document.getElementById('rightFontShadowRangeX');
var rightFontShadowTextX = document.getElementById('rightFontShadowTextX');
var rightFontShadowRangeY = document.getElementById('rightFontShadowRangeY');
var rightFontShadowTextY = document.getElementById('rightFontShadowTextY');
var rightFontShadowRangeBlur = document.getElementById('rightFontShadowRangeBlur');
var rightFontShadowTextBlur = document.getElementById('rightFontShadowTextBlur');
var rightFontShadowColor = document.getElementById('rightFontShadowColor');

var styleFont = document.getElementById('styleFontLable');

var backgroundRangeID = document.getElementById('backgroundRangeID');
var backgroundTextID = document.getElementById('backgroundTextID');
/*
		celectStandartInput.checked = false;
		celectHoverInput.checked = false;
		celectActiveInput.checked = false;
*/

var borderRadiusStyle = true;
var borderRadiusStyleActiv = true;
function myFunctionBR(){

	brL1.value = bruL1.value;
	brL2.value = bruR1.value;
	brL3.value = brbL1.value;
	brL4.value = brbR1.value;



	if(celectStandartInput.checked){
	 	blockStandart.style.borderRadius = brL1.value+'px '+ brL2.value+'px '+ brL3.value+'px '+ brL4.value+'px';
	 	if(borderRadiusStyle){
	 		blockHover.style.borderRadius = brL1.value+'px '+ brL2.value+'px '+ brL3.value+'px '+ brL4.value+'px';
	 	} 
	 	if(borderRadiusStyleActiv){
	 		blockActive.style.borderRadius = brL1.value+'px '+ brL2.value+'px '+ brL3.value+'px '+ brL4.value+'px';
	 	}
	} else if(celectHoverInput.checked){
	 	blockHover.style.borderRadius = brL1.value+'px '+ brL2.value+'px '+ brL3.value+'px '+ brL4.value+'px';
	 	borderRadiusStyle = false;
	} else if(celectActiveInput.checked){
	 	blockActive.style.borderRadius = brL1.value+'px '+ brL2.value+'px '+ brL3.value+'px '+ brL4.value+'px';
	 	borderRadiusStyleActiv = false;
	}

	//var baba = block.getAttribute('border-Radius');
	//var baba = getComputedStyle(blockStandart, baba).borderRadius;
	//console.log(blockStandart.style.borderRadius);
	//console.log(blockStandart.getAttribute('border-Radius'));
	// block.style.borderRadius = brL1.value+'px '+ brL2.value+'px '+ brL3.value+'px '+ brL4.value+'px';
	saveSetting('save', 'borderRadius');
	GradientRange(bruL1);
	GradientRange(bruR1);
	GradientRange(brbL1);
	GradientRange(brbR1);
	timeCod();
}

function borderText(Val){
	if(Val.value == '') return;
	if(Val.value == ' '){ Val.value = ''; return;}else{myFunctionBRText();}
}
function borderTL(){borderText(brL1);}
function borderTR(){borderText(brL2);}
function borderBR(){borderText(brL3);}
function borderBL(){borderText(brL4);}
/*
var brL1 = document.getElementById('inp11');
var brL2 = document.getElementById('inp22');
var brL3 = document.getElementById('inp33');
var brL4 = document.getElementById('inp44');
*/


function myFunctionBRText(){

	bruL1.value = brL1.value;
	bruR1.value = brL2.value;
	brbL1.value = brL3.value;
	brbR1.value = brL4.value;
	myFunctionBR();
}
var firstHeWe = true;
var secondHeWe = true;

//var heightwidth = true;

function myFunctionSize(){
    
    var rezbr = document.getElementById('rezbr');
	widthItem.max = rezbr.offsetWidth - 20;

	widthItem2.value = widthItem.value;
	heightItem2.value = heightItem.value;
	
	if(celectStandartInput.checked){
		blockStandart.style.height = heightItem.value+'px';
	 	blockStandart.style.width = widthItem.value+'px';
	 	if(firstHeWe){
	 		blockHover.style.height = heightItem.value+'px';
			blockHover.style.width = widthItem.value+'px';
	 	}if(secondHeWe){
	 		blockActive.style.height = heightItem.value+'px';
			blockActive.style.width = widthItem.value+'px';
	 	}
	} else if(celectHoverInput.checked){
		blockHover.style.height = heightItem.value+'px';
		blockHover.style.width = widthItem.value+'px';
		firstHeWe = false;
	} else if(celectActiveInput.checked){
		blockActive.style.height = heightItem.value+'px';
		blockActive.style.width = widthItem.value+'px';
		secondHeWe = false;
	}
	saveSetting('save', 'sizeButton');
	GradientRange(widthItem);
	GradientRange(heightItem);
	//heightwidth = false;
 	timeCod();
}
function boxSizenr(Val){
	if(Val.value == '') return;
	if(Val.value == ' '){ Val.value = ''; return;}else{myFunctionSizeText();}
}
function myTextWidth(){boxSizenr(widthItem2);}
function myTextHeight(){boxSizenr(heightItem2);}


function myFunctionSizeText(){
	var rezbr = document.getElementById('rezbr');

	widthItem.max = rezbr.offsetWidth - 20;

	widthItem.value = widthItem2.value;
	heightItem.value = heightItem2.value;

myFunctionSize();
}
var firstBackground = true;
var secondBackground = true;
function myFunctionBackgroundColor(){

	if(celectStandartInput.checked){
		blockStandart.style.background = sizeColor.value;
		if(firstBackground){
		blockHover.style.background = sizeColor.value;
		}
		if(secondBackground){
		blockActive.style.background = sizeColor.value;
		}
	} else if(celectHoverInput.checked){
		blockHover.style.background = sizeColor.value;
		firstBackground = false;
		fLg = false;
	} else if(celectActiveInput.checked){
		blockActive.style.background = sizeColor.value;
		secondBackground = false;
		sLg = false;
	}
	saveSetting('save', 'backColor');
	timeCod();
}
/*
typeLinerGradient
firstColor
secondColor

backgroundRangeID
backgroundTextID

backgroundRCPO
backgroundTCPO
backgroundRCPT
backgroundTCPT
*/

var bRCPO = document.getElementById('backgroundRCPO');
var bTCPO = document.getElementById('backgroundTCPO');
var bRCPT = document.getElementById('backgroundRCPT');
var bTCPT = document.getElementById('backgroundTCPT');

var fLg = true;
var sLg = true;

function myFunctionBackgroundGradient(){

	backgroundTextID.value = backgroundRangeID.value;
	bTCPO.value = bRCPO.value;
	bTCPT.value = bRCPT.value;
	if(celectStandartInput.checked){
		blockStandart.style.background = 'linear-gradient('+backgroundRangeID.value+'deg, '+firstColor.value+' '+bRCPO.value+'%,'+secondColor.value+' '+bRCPT.value+'%)';
		if(fLg){
			blockHover.style.background = 'linear-gradient('+backgroundRangeID.value+'deg, '+firstColor.value+' '+bRCPO.value+'%,'+secondColor.value+' '+bRCPT.value+'%)';
		}if(sLg){
			blockActive.style.background = 'linear-gradient('+backgroundRangeID.value+'deg, '+firstColor.value+' '+bRCPO.value+'%,'+secondColor.value+' '+bRCPT.value+'%)';
		}
	} else if(celectHoverInput.checked){
		blockHover.style.background = 'linear-gradient('+backgroundRangeID.value+'deg, '+firstColor.value+' '+bRCPO.value+'%,'+secondColor.value+' '+bRCPT.value+'%)';
		fLg = false;
		firstBackground = false;
	} else if(celectActiveInput.checked){
		blockActive.style.background = 'linear-gradient('+backgroundRangeID.value+'deg, '+firstColor.value+' '+bRCPO.value+'%,'+secondColor.value+' '+bRCPT.value+'%)';
		sLg = false;
		secondBackground = false;
	}
	saveSetting('save', 'bGradient');
	GradientRange(backgroundRangeID);
	GradientRange(bRCPO);
	GradientRange(bRCPT);
	timeCod();
}

var firstImgFlag = true;
var secondImgFlag = true;

// var backImagePosX = document.getElementById('backImagePosX');
// var backImagePosY = document.getElementById('backImagePosY');
// var backImageSizeX = document.getElementById('backImageSizeX');
// var backImageSizeY = document.getElementById('backImageSizeY');
//	widthItem2.value = widthItem.value;
//	heightItem2.value = heightItem.value;
var imgTextBackground = document.getElementById('imgTextBackground');
function myFunctionBackgroundImg(){

	var img = new Image();
img.onload = function() {
//var stat = this.width>=this.height? this.width : this.height;
	var wih = this.width;
	var hih = this.height;
 // console.log(this.width + 'x' + this.height);
//  console.log(wih + 'x' + hih);
  
  	if(this.width > widthItem.value){
  		wih = widthItem.value;
  		wih = widthItem.value;
  	}if(this.height > heightItem.value){
  		hih = heightItem.value;
  		hih = heightItem.value;
  	}
  	backImageSizeX.value = wih;
	backImageSizeY.value = hih;

	backImageSizeXT.value = wih;
	backImageSizeYT.value = hih;
	imgSize();
	GradientRange(backImageSizeX);
	GradientRange(backImageSizeY);	
//	console.log(wih + 'x' + hih);
}
img.src = imgTextBackground.value;

	if(celectStandartInput.checked){
		blockStandart.style.backgroundImage = 'url('+imgTextBackground.value+')';
		if(firstImgFlag){
			blockHover.style.backgroundImage = 'url('+imgTextBackground.value+')';
		}if(secondImgFlag){
			blockActive.style.backgroundImage = 'url('+imgTextBackground.value+')';
		}
	} else if(celectHoverInput.checked){
		blockHover.style.backgroundImage = 'url('+imgTextBackground.value+')';
		firstImgFlag = false;
	} else if(celectActiveInput.checked){
		blockActive.style.backgroundImage = 'url('+imgTextBackground.value+')';
		secondImgFlag = false;
	}
	
	imgRepeat('no-repeat');
	timeCod();
}
var fid = sid = true;
function imgDeath(){

	if(celectStandartInput.checked){
		blockStandart.style.backgroundImage = 'none';
		if(fid){
			blockHover.style.backgroundImage = 'none';
		}if(sid){
			blockActive.style.backgroundImage = 'none';
		}
	} else if(celectHoverInput.checked){
		blockHover.style.backgroundImage = 'none';
		fid = false;
	} else if(celectActiveInput.checked){
		blockActive.style.backgroundImage = 'none';
		sid = false;
	}
	imgTextBackground.value = '';
	backImageSizeX.value = '0';
	backImageSizeY.value = '0';
	backImageSizeXT.value = '0';
	backImageSizeYT.value = '0';
	backImagePosX.value = '0';
	backImagePosY.value = '0';
	backImagePosXT.value = '0';
	backImagePosYT.value = '0';
	GradientRange(backImagePosX);
	GradientRange(backImagePosY);
	GradientRange(backImageSizeX);
	GradientRange(backImageSizeY);
	
	timeCod();
}

var backImagePosX = document.getElementById('backImagePosX');
var backImagePosY = document.getElementById('backImagePosY');
var backImagePosXT = document.getElementById('backImagePosXT');
var backImagePosYT = document.getElementById('backImagePosYT');
var fPosImg = true;
var sPosImg = true;

function imgPos(){
	backImagePosXT.value = backImagePosX.value;
	backImagePosYT.value = backImagePosY.value;
	if(celectStandartInput.checked){
		blockStandart.style.backgroundPosition = backImagePosX.value+'px '+backImagePosY.value+'px';
		if(fPosImg){
			blockHover.style.backgroundPosition = backImagePosX.value+'px '+backImagePosY.value+'px';
		}if(sPosImg){
			blockActive.style.backgroundPosition = backImagePosX.value+'px '+backImagePosY.value+'px';
		}
	} else if(celectHoverInput.checked){
		blockHover.style.backgroundPosition = backImagePosX.value+'px '+backImagePosY.value+'px';
		fPosImg = false;
	} else if(celectActiveInput.checked){
		blockActive.style.backgroundPosition = backImagePosX.value+'px '+backImagePosY.value+'px';
		sPosImg = false;
	}
	//saveSetting('save', 'bGradient');
	GradientRange(backImagePosX);
	GradientRange(backImagePosY);
	saveSetting('save', 'bimg');
	timeCod();
}
function boxPosImgBG(Val){
	if(Val.value == '' || Val.value == '-') return;
	if(Val.value == ' '){ Val.value = ''; return;}else{imgPosText();}
}
function imgPosTextL(){boxPosImgBG(backImagePosXT);}
function imgPosTextR(){boxPosImgBG(backImagePosYT);}


function imgPosText(){

	backImagePosX.value = backImagePosXT.value;
	backImagePosY.value = backImagePosYT.value;
	imgPos();
}

var backImageSizeX = document.getElementById('backImageSizeX');
var backImageSizeY = document.getElementById('backImageSizeY');
var backImageSizeXT = document.getElementById('backImageSizeXT');
var backImageSizeYT = document.getElementById('backImageSizeYT');
var fSizeImg = true;
var sSizeImg = true;

function imgSize(){
	backImageSizeXT.value = backImageSizeX.value;
	backImageSizeYT.value = backImageSizeY.value;

	if(celectStandartInput.checked){
		blockStandart.style.backgroundSize = backImageSizeX.value+'px '+backImageSizeY.value+'px';
		if(fSizeImg){
			blockHover.style.backgroundSize = backImageSizeX.value+'px '+backImageSizeY.value+'px';
		}if(sSizeImg){
			blockActive.style.backgroundSize = backImageSizeX.value+'px '+backImageSizeY.value+'px';
		}
	} else if(celectHoverInput.checked){
		blockHover.style.backgroundSize = backImageSizeX.value+'px '+backImageSizeY.value+'px';
		fSizeImg = false;
	} else if(celectActiveInput.checked){
		blockActive.style.backgroundSize = backImageSizeX.value+'px '+backImageSizeY.value+'px';
		sSizeImg = false;
	}
	//saveSetting('save', 'bGradient');
	GradientRange(backImageSizeX);
	GradientRange(backImageSizeY);
	saveSetting('save', 'bimg');
	timeCod();
}

function boxSizeImgBGS(Val){
	if(Val.value == '') return;
	if(Val.value == ' '){ Val.value = ''; return;}else{imgSizeText();}
}
function imgSizerTextL(){boxSizeImgBGS(backImageSizeXT);}
function imgSizerTextR(){boxSizeImgBGS(backImageSizeYT);}

function imgSizeText(){
	backImageSizeX.value = backImageSizeXT.value;
	backImageSizeY.value = backImageSizeYT.value;
	
	imgSize();
}


var fIR = sIR = true;
function imgRepeat(par){

	if(celectStandartInput.checked){
		blockStandart.style.backgroundRepeat = par;
		if(fIR){
			blockHover.style.backgroundRepeat = par;
		}if(sIR){
			blockActive.style.backgroundRepeat = par;
		}
	} else if(celectHoverInput.checked){
		blockHover.style.backgroundRepeat = par;
		fIR = false;
	} else if(celectActiveInput.checked){
		blockActive.style.backgroundRepeat = par;
		sIR = false;
	}
	//saveSetting('save', 'bGradient');
	timeCod();
}

function myFunctionIconClass(){

	classIcon.value = returnClass(classIcon.value);// : 'iconButton';
	classIconText = classIcon.value;
		if(!iconFlag){
		console.log('1');
		return;}
	if(classIconText != ''){
		//classIcon.value = classIconText;
	}else{
		classIcon.value = '';
		classIconText = 'iconButton';
	}
	myFunctionCheckedTag();
	timeCod();
}

var inputUrlIcon = document.getElementById('inputUrlIcon');
var classIcon = document.getElementById('classIcon');
var classIconText = 'iconButton';
var img = [];
var iconFlag = false;
var iconTag = '';
var iconS = iconH = iconA = '';
var indexIconSize;
function myFunctionIconUrl(){
	

	//classIconText = classIcon.value != '' ? returnClass(classIcon.value) : 'iconButton';
	if(classIcon.value != ''){
		classIconText = classIcon.value;
	}
	if(inputUrlIcon.value == ''){
		delIcon();
		return;
	}else if(inputUrlIcon.value == ' '){
		inputUrlIcon.value = '';
		delIcon();
		return;
	}
	

	sizeIconUrl();
	
	img[0] = document.createElement('img');
	img[0].setAttribute('src', inputUrlIcon.value);
	img[0].className = 'iconButton';
	

	img[1] = document.createElement('img');
	img[1].setAttribute('src', inputUrlIcon.value);
	img[1].setAttribute('id', 'iconButton1');
	//img[1].className = classIconText;

	img[2] = document.createElement('img');
	img[2].setAttribute('src', inputUrlIcon.value);
	img[2].setAttribute('id', 'iconButton2');
	//img[2].className = classIconText;

	img[3] = document.createElement('img');
	img[3].setAttribute('src', inputUrlIcon.value);
	img[3].setAttribute('id', 'iconButton3');
	//img[3].className = classIconText;

    //console.log(block.children[0].getAttribute('src'));
    if(block.children[0].getAttribute('src') != null){
    	block.removeChild(block.children[0]);
    	blockStandart.removeChild(blockStandart.children[0]);
    	blockHover.removeChild(blockHover.children[0]);
    	blockActive.removeChild(blockActive.children[0]);
    };

	block.insertBefore(img[0], block.children[0]);

	blockStandart.insertBefore(img[1], blockStandart.children[0]);

	blockHover.insertBefore(img[2], blockHover.children[0]);

	blockActive.insertBefore(img[3], blockActive.children[0]);

	iconTag = document.getElementsByClassName('iconButton')[0];
	iconS = document.getElementById('iconButton1');
	iconH = document.getElementById('iconButton2');
	iconA = document.getElementById('iconButton3');
	
	iconFlag = true;
	sizeImgIcon();
	myFunctionCheckedTag();
	timeCod();
}

function sizeImgIcon(){
	console.log(indexIconSize);
	iconS.style.width = indexIconSize+'px';
	iconS.style.height = indexIconSize+'px';

	iconH.style.width = indexIconSize+'px';
	iconH.style.height = indexIconSize+'px';

	iconA.style.width = indexIconSize+'px';
	iconA.style.height = indexIconSize+'px';
}
var divOpenSettingIcon = document.getElementsByClassName('divOpenSettingIcon')[0];
function sizeIconUrl(){
	divOpenSettingIcon.style.display = 'block';
			var img = new Image();
	img.onload = function() {
	//this.width>=this.height? this.width : this.height;
	if(this.width>this.height){
		indexIconSize = widthItem.value > this.width? widthItem.value - this.width : this.width - widthItem.value;
		indexIconSize = this.width - indexIconSize; 
	}else{
		indexIconSize = heightItem.value > this.height? heightItem.value - this.height : this.height - heightItem.value;
		
		indexIconSize = this.height - indexIconSize; 
	}
	console.log(indexIconSize);
	sizeImgIcon();
	timeCod();
	 	this.height = indexIconSize;
	  	this.width = indexIconSize;

		var wih = indexIconSize;
		var hih = indexIconSize;
	 // console.log(this.width + 'x' + this.height);
	  console.log(wih + 'x' + hih);

	  	// if(this.width > widthItem.value){
	  	// 	wih = widthItem.value;
	  	// 	wih = widthItem.value;
	  	// }if(this.height > heightItem.value){
	  	// 	hih = heightItem.value;
	  	// 	hih = heightItem.value;
	  	// }

	  	iconSetting[2].value = wih;
	  	iconSetting[3].value = hih;
	  	iconSettingT[2].value = wih;
		iconSettingT[3].value = hih;
		
		GradientRange(iconSetting[2]);
		GradientRange(iconSetting[3]);	
		console.log(wih + 'x' + hih);
	}
	img.src = inputUrlIcon.value;
}

function delIcon(){
	inputUrlIcon.value = '';
	divOpenSettingIcon.style.display = 'none';
	if(block.children[0].getAttribute('src') != null){
    	block.removeChild(block.children[0]);
    	blockStandart.removeChild(blockStandart.children[0]);
    	blockHover.removeChild(blockHover.children[0]);
    	blockActive.removeChild(blockActive.children[0]);
    }
    iconFlag = false;
    myFunctionCheckedTag();
    timeCod();
}

var iconSetting = document.getElementsByClassName('iconSetting');
var iconSettingT = document.getElementsByClassName('iconSettingT');
var ficon = sicon = true;
function iconPos(){//sI

	iconSettingT[0].value = iconSetting[0].value;
	iconSettingT[1].value = iconSetting[1].value;

	// iconTag[1].style.left = iconSetting[0].value+'px';
	// iconTag[1].style.top = iconSetting[1].value+'px';

	if(celectStandartInput.checked){
		iconS.style.left = iconSetting[0].value+'px';
		iconS.style.top = iconSetting[1].value+'px';
		if(ficon){
			iconH.style.left = iconSetting[0].value+'px';
			iconH.style.top = iconSetting[1].value+'px';
		}if(sicon){
			iconA.style.left = iconSetting[0].value+'px';
			iconA.style.top = iconSetting[1].value+'px';
		}
	} else if(celectHoverInput.checked){
		iconH.style.left = iconSetting[0].value+'px';
		iconH.style.top = iconSetting[1].value+'px';
		ficon = false;
	} else if(celectActiveInput.checked){
		iconA.style.left = iconSetting[0].value+'px';
		iconA.style.top = iconSetting[1].value+'px';
		sicon = false;
	}


	GradientRange(iconSetting[0]);
	GradientRange(iconSetting[1]);

	timeCod();

}

function iconTextTest(Val){
	if(Val.value == '') return;
	if(Val.value == ' '){ Val.value = ''; return;}else{iconPosText();}
}
function iconTextTrTd0(){iconTextTest(iconSettingT[0]);}
function iconTextTrTd1(){iconTextTest(iconSettingT[1]);}

function iconPosText(){

	iconSetting[0].value = iconSettingT[0].value;
	iconSetting[1].value = iconSettingT[1].value;

	iconPos();
}
var fISize = sISize = true;
function iconSize(){

	iconSettingT[2].value = iconSetting[2].value;
	iconSettingT[3].value = iconSetting[3].value;

	if(celectStandartInput.checked){
		iconS.style.width = iconSetting[2].value+'px';
		iconS.style.height = iconSetting[3].value+'px';
		if(fISize){
			iconH.style.width = iconSetting[2].value+'px';
			iconH.style.height = iconSetting[3].value+'px';
		}if(sISize){
			iconA.style.width = iconSetting[2].value+'px';
			iconA.style.height = iconSetting[3].value+'px';
		}
	} else if(celectHoverInput.checked){
		iconH.style.width = iconSetting[2].value+'px';
		iconH.style.height = iconSetting[3].value+'px';
		fISize = false;
	} else if(celectActiveInput.checked){
		iconA.style.width = iconSetting[2].value+'px';
		iconA.style.height = iconSetting[3].value+'px';
		sISize = false;
	}

	//iconTag[1].style.width = iconSetting[2].value+'px';
	//iconTag[1].style.height = iconSetting[3].value+'px';

	GradientRange(iconSetting[2]);
	GradientRange(iconSetting[3]);

	timeCod();

}
function iconTextTest2(Val){
	if(Val.value == '') return;
	if(Val.value == ' '){ Val.value = ''; return;}else{iconSizeText();}
}
function iconTextTrTd2(){iconTextTest2(iconSettingT[2]);}
function iconTextTrTd3(){iconTextTest2(iconSettingT[3]);}

function iconSizeText(){

	iconSetting[2].value = iconSettingT[2].value;
	iconSetting[3].value = iconSettingT[3].value;

	iconSize();
}
function boxSizenrBGT(Val){
	if(Val.value == '') return;
	if(Val.value == ' '){ Val.value = ''; return;}else{myFunctionBackgroundGradientText();}
}
function myTextDegBG(){boxSizenrBGT(backgroundTextID);}
function myTextPercentL(){boxSizenrBGT(bTCPO);}
function myTextPercentR(){boxSizenrBGT(bTCPT);}


function myFunctionBackgroundGradientText(){
	backgroundRangeID.value = backgroundTextID.value;
	bRCPO.value = bTCPO.value;
	bRCPT.value = bTCPT.value;
	myFunctionBackgroundGradient();
}

var textButtonStandart = document.getElementById('textButtonStandart');
var textButtonHover = document.getElementById('textButtonHover');
var textButtonActive = document.getElementById('textButtonActive');
function myFunction4(){
	var rezbr = document.getElementById('rezbr');
	widthItem.max = rezbr.offsetWidth - 20;

	var textButtonFont = document.getElementById('textButtonFont');
	var texter = textButtonFont.value != ''? textButtonFont.value : 'Кнопка';
 		textButton.innerHTML = texter;
 		textButtonStandart.innerHTML = texter;
 		textButtonHover.innerHTML = texter;
 		textButtonActive.innerHTML = texter;
 	
 	myFunctionCheckedTag();
 	timeCod();	
}

var firstBoxShadow = true;
var secondBoxShadow = true;
var inset= '';
function myFunctionBS(){
	sdvigXInp.value = sdvigX.value;
	sdvigYInp.value = sdvigY.value;
	blurInp.value = blur.value;
	whidblurInp.value = whidblur.value;

	if(shadowSide.checked){
		inset = 'inset';
	}else{
		inset = '';
	}

	if(celectStandartInput.checked){
		blockStandart.style.boxShadow = sdvigX.value+'px '+sdvigY.value+'px '+blur.value+'px '+whidblur.value+'px '+boxShadowColor.value+' '+inset;
		if(firstBoxShadow){
			blockHover.style.boxShadow = sdvigX.value+'px '+sdvigY.value+'px '+blur.value+'px '+whidblur.value+'px '+boxShadowColor.value+' '+inset;
		}if(secondBoxShadow){
			blockActive.style.boxShadow = sdvigX.value+'px '+sdvigY.value+'px '+blur.value+'px '+whidblur.value+'px '+boxShadowColor.value+' '+inset;
		}
	} else if(celectHoverInput.checked){
		blockHover.style.boxShadow = sdvigX.value+'px '+sdvigY.value+'px '+blur.value+'px '+whidblur.value+'px '+boxShadowColor.value+' '+inset;
		firstBoxShadow = false;
	} else if(celectActiveInput.checked){
		blockActive.style.boxShadow = sdvigX.value+'px '+sdvigY.value+'px '+blur.value+'px '+whidblur.value+'px '+boxShadowColor.value+' '+inset;
		secondBoxShadow = false;
	}
	saveSetting('save', 'bsh');
	GradientRange(sdvigX);
	GradientRange(sdvigY);
	GradientRange(blur);
	GradientRange(whidblur);
	timeCod();
}

function boxShadowTextTest(Val){
	if(Val.value == '') return;
	if(Val.value == ' '){ Val.value = ''; return;}else{myFunctionBSText();}
}

function boxShadowTextF(){boxShadowTextTest(sdvigXInp);}
function boxShadowTextS(){boxShadowTextTest(sdvigYInp);}
function boxShadowTextT(){boxShadowTextTest(blurInp);}
function boxShadowTextFo(){boxShadowTextTest(whidblurInp);}

function myFunctionBSText(){
	if(sdvigXInp.value == '-' || sdvigYInp.value == '-' || whidblurInp.value == '-') return;
	sdvigX.value = sdvigXInp.value;
	sdvigY.value = sdvigYInp.value;
	blur.value = blurInp.value;
	whidblur.value = whidblurInp.value;
	myFunctionBS();

}

var firstFontSize = true;
var secondFontSize = true;
function myFunctionFontSize(){
	console.log('ga')
	fontSizeText.value = fontSizeRange.value;
	if(celectStandartInput.checked){
		blockStandart.style.fontSize = fontSizeRange.value+'px';
		if(firstFontSize){
			blockHover.style.fontSize = fontSizeRange.value+'px';
		}if(secondFontSize){
			blockActive.style.fontSize = fontSizeRange.value+'px';
		}
	} else if(celectHoverInput.checked){
		blockHover.style.fontSize = fontSizeRange.value+'px';
		firstFontSize = false;
	} else if(celectActiveInput.checked){
		blockActive.style.fontSize = fontSizeRange.value+'px';
		secondFontSize = false;
	}
	saveSetting('save', 'Fsz');
	GradientRange(fontSizeRange);
	timeCod();
}
function myFunctionFontSize2(){
	if(fontSizeText.value == '') return;
	if(fontSizeText.value == ' ') {fontSizeText.value = ''; return;}

	fontSizeRange.value = fontSizeText.value;
	myFunctionFontSize();
}
var firstFontColor = true;
var secondFontColor = true;
/*
textButtonStandart.style.background = 'linear-gradient('+fontRangeID.value+'deg, '+firstColorfont.value+' '+fontRCPO.value+'%, '+secondColorFont.value+' '+fontRCPT.value+'%)';
textButtonHover.style.background = 'linear-gradient('+fontRangeID.value+'deg, '+firstColorfont.value+' '+fontRCPO.value+'%, '+secondColorFont.value+' '+fontRCPT.value+'%)';
textButtonHover.style.WebkitBackgroundClip = 'text';
textButtonHover.style.WebkitTextFillColor = 'transparent';
blockHover.style.color = 'none';
textButtonActive.style.background = 'linear
*/
var textColorСhoiceS = textColorСhoiceH = textColorСhoiceA = '';
function myFunctionFontColor(){
	var fontColor = document.getElementById('fontColor');
	myFunctionCheckedTag();
	if(celectStandartInput.checked){
		blockStandart.style.color = fontColor.value;
		textButtonStandart.style.background = '';
		textButtonStandart.style.WebkitBackgroundClip = '';
		textButtonStandart.style.WebkitTextFillColor = '';
		textColorСhoiceS = 'inherit';
		if(firstFontColor){
			blockHover.style.color = fontColor.value;
			textButtonHover.style.background = '';
			textButtonHover.style.WebkitBackgroundClip = '';
			textButtonHover.style.WebkitTextFillColor = '';
			textColorСhoiceH = 'inherit';
		}if(secondFontColor){
			blockActive.style.color = fontColor.value;
			textButtonActive.style.background = '';
			textButtonActive.style.WebkitBackgroundClip = '';
			textButtonActive.style.WebkitTextFillColor = '';
			textColorСhoiceA = 'inherit';
		}
	} else if(celectHoverInput.checked){
		blockHover.style.color = fontColor.value;
		textButtonHover.style.background = '';
		textButtonHover.style.WebkitBackgroundClip = '';
		textButtonHover.style.WebkitTextFillColor = '';
		textColorСhoiceH = 'inherit';
		firstFontColor = false;
		firstTG = false;
	} else if(celectActiveInput.checked){
		blockActive.style.color = fontColor.value;
		textButtonActive.style.background = '';
		textButtonActive.style.WebkitBackgroundClip = '';
		textButtonActive.style.WebkitTextFillColor = '';
		textColorСhoiceA = 'inherit';
		secondFontColor = false;
		secondTG = false;
	}
	if(textColorСhoiceS == 'inherit' && textColorСhoiceH == 'inherit' && textColorСhoiceA == 'inherit') flagTextGrad = false;
	saveSetting('save', 'Fcol');
	timeCod();
}
/*
var firstTG = secondTG = true;
firstColorfont
secondColorFont
typeLinerGradientFont

fontRangeID
fontTextID

fontRCPO
fontTCPO
fontRCPT
fontTCPT

var textButtonStandart = document.getElementById('textButtonStandart');
var textButtonHover = document.getElementById('textButtonHover');
var textButtonActive = document.getElementById('textButtonActive');

blockStandart.style.background = 'linear-gradient('+backgroundRangeID.value+'deg, '+firstColor.value+' '+bRCPO.value+'%,'+secondColor.value+' '+bRCPT.value+'%)';
		if(fLg){
blockHover.style.background = 'linear-gradient('+backgroundRangeID.value+'deg, '+firstColor.value+' '+bRCPO.value+'%,'+secondColor.value+' '+bRCPT.value+'%)';
		}if(sLg){
blockActive

*/
var fontRangeID = document.getElementById('fontRangeID');
var fontTextID = document.getElementById('fontTextID');

var fontRCPO = document.getElementById('fontRCPO');
var fontTCPO = document.getElementById('fontTCPO');
var fontRCPT = document.getElementById('fontRCPT');
var fontTCPT = document.getElementById('fontTCPT');

var flagTextGrad = false;
var firstTG = secondTG = true;
function myFunctionFontGradient(){
	flagTextGrad = true;
	myFunctionCheckedTag();
	//действует на все состояния кнопки
	fontTextID.value = fontRangeID.value;
	fontTCPO.value = fontRCPO.value;
	fontTCPT.value = fontRCPT.value;
	if(celectStandartInput.checked){
		textButtonStandart.style.background = 'linear-gradient('+fontRangeID.value+'deg, '+firstColorfont.value+' '+fontRCPO.value+'%, '+secondColorFont.value+' '+fontRCPT.value+'%)';
 	    textButtonStandart.style.WebkitBackgroundClip = 'text';
 	    textButtonStandart.style.WebkitTextFillColor = 'transparent';
 	    textColorСhoiceS = 'transparent';
		if(firstTG){
			textButtonHover.style.background = 'linear-gradient('+fontRangeID.value+'deg, '+firstColorfont.value+' '+fontRCPO.value+'%, '+secondColorFont.value+' '+fontRCPT.value+'%)';
			textButtonHover.style.WebkitBackgroundClip = 'text';
	 	    textButtonHover.style.WebkitTextFillColor = 'transparent';
			textColorСhoiceH = 'transparent';
		}if(secondTG){
			textButtonActive.style.background = 'linear-gradient('+fontRangeID.value+'deg, '+firstColorfont.value+' '+fontRCPO.value+'%, '+secondColorFont.value+' '+fontRCPT.value+'%)';
			textButtonActive.style.WebkitBackgroundClip = 'text';
	 	    textButtonActive.style.WebkitTextFillColor = 'transparent';
			textColorСhoiceA = 'transparent';
		}
	} else if(celectHoverInput.checked){
		textButtonHover.style.background = 'linear-gradient('+fontRangeID.value+'deg, '+firstColorfont.value+' '+fontRCPO.value+'%, '+secondColorFont.value+' '+fontRCPT.value+'%)';
		textButtonHover.style.WebkitBackgroundClip = 'text';
 	    textButtonHover.style.WebkitTextFillColor = 'transparent';
		textColorСhoiceH = 'transparent';
 	    firstTG = false;
 	    firstFontColor = false;
	} else if(celectActiveInput.checked){
		textButtonActive.style.background = 'linear-gradient('+fontRangeID.value+'deg, '+firstColorfont.value+' '+fontRCPO.value+'%, '+secondColorFont.value+' '+fontRCPT.value+'%)';
		textButtonActive.style.WebkitBackgroundClip = 'text';
 	    textButtonActive.style.WebkitTextFillColor = 'transparent';
		textColorСhoiceA = 'transparent';
 	    secondTG = false;
 	    secondFontColor = false;
	}
	saveSetting('save', 'textGradient');
	GradientRange(fontRangeID);
	GradientRange(fontRCPO);
	GradientRange(fontRCPT);
	timeCod();



	// 	textButtonStandart.style.background = 'linear-gradient('+fontRangeID.value+'deg, '+firstColorfont.value+' '+fontRCPO.value+'%, '+secondColorFont.value+' '+fontRCPT.value+'%)';
	// 	textButtonStandart.style.WebkitBackgroundClip = 'text';
 // 	    textButtonStandart.style.WebkitTextFillColor = 'transparent';
	// timeCod(); var firstFontColor = true;var secondFontColor = true;
}

function textGradientFunc(Val){
	if(Val.value == '') return;
	if(Val.value == ' '){ Val.value = ''; return;}else{myFunctionFontGradientText();}
}

function textGradDeg(){textGradientFunc(fontTextID);}
function textGradFirst(){textGradientFunc(fontTCPO);}
function textGradSecond(){textGradientFunc(fontTCPT);}

function myFunctionFontGradientText(){
	fontRangeID.value = fontTextID.value;
	fontRCPO.value = fontTCPO.value;
	fontRCPT.value = fontTCPT.value;
	myFunctionFontGradient();
}
var intupColorRACF = document.getElementById('intupColorRACF');
var inputGradientRACF = document.getElementById('inputGradientRACF');
var selectorColorOpen = document.getElementById('selectorColorOpen');
var gradientFont = document.getElementsByClassName('gradientFont')[0];
var colorBackground = document.getElementById('colorBackground');
var sizeColorDiv = document.getElementById('sizeColorDiv');
var gradientSelect = document.getElementsByClassName('gradientSelect')[0];
var colorGradient = document.getElementById('colorGradient');
var shadowOne = document.getElementById('shadowOne');
var shadowTwo = document.getElementById('shadowTwo');
var shadowbutton1 = document.getElementById('shadowbutton1');
var shadowbutton2 = document.getElementById('shadowbutton2');
var colorImage = document.getElementById('colorImage');

var rotateInput = document.getElementById('rotateInput');
var rotateDiv = document.getElementById('rotateDiv');
var scaleInput = document.getElementById('scaleInput');
var scaleDiv = document.getElementById('scaleDiv');
var skewInput = document.getElementById('skewInput');
var skewDiv = document.getElementById('skewDiv');
var divImageBackground = document.getElementById('divImageBackground');


function openBlockNone(){
	// if(intupColorRACF.checked){
	// 	selectorColorOpen.style.display = 'block';
	// 	gradientFont.style.display = 'none';
//	} else
	//  if(inputGradientRACF.checked){
	// 	gradientFont.style.display = 'block';
	// 	selectorColorOpen.style.display = 'none';
	// }
	if(colorBackground.checked){
		sizeColorDiv.style.display = 'block';
		gradientSelect.style.display = 'none';
		divImageBackground.style.display = 'none';
	}else if(colorGradient.checked){
		gradientSelect.style.display = 'block';
		sizeColorDiv.style.display = 'none';
		divImageBackground.style.display = 'none';
	}else if(colorImage.checked){
		divImageBackground.style.display = 'block';
		sizeColorDiv.style.display = 'none';
		gradientSelect.style.display = 'none';
	}

	saveSetting('save', 'openSHW');
}

//rotateInput scaleInput skewInput rotate2D rotate3D scale2D scale3D

var rotate2D = document.getElementById('rotate2D');
var rotate3D = document.getElementById('rotate3D');
var divRotate = document.getElementsByClassName('divRotate');
var scale2D = document.getElementById('scaleInput');
var scale3D = document.getElementById('scale3D');
var scaleDivClass = document.getElementsByClassName('scaleDiv');

function openTransform(){
	if(rotateInput.checked){
		rotateDiv.style.display = 'block';
	}else{
		rotateDiv.style.display = 'none';
	}if(scaleInput.checked){
		scaleDiv.style.display = 'block';
	}else{
		scaleDiv.style.display = 'none';
	}if(skewInput.checked){
		skewDiv.style.display = 'block';
	}else{
		skewDiv.style.display = 'none';
	}

	if(rotate2D.checked){
		divRotate[0].style.display = 'block';
		divRotate[1].style.display = 'none';
	}else if(rotate3D.checked){
		divRotate[1].style.display = 'block';
		divRotate[0].style.display = 'none';
	}
	if(scale2D.checked){
		scaleDivClass[0].style.display = 'block';
		//scaleDivClass[1].style.display = 'none';
	}else{ //if(scale3D.checked){
		//scaleDivClass[1].style.display = 'block';
		scaleDivClass[0].style.display = 'none';
	}

	saveSetting('save', 'openSHW');
}

function shadowFontWindow(){
	if(shadowOne.checked){
		shadowbutton1.style.display = 'block';
		shadowbutton2.style.display = 'none';
	} else if(shadowTwo.checked) {
		shadowbutton2.style.display = 'block';
		shadowbutton1.style.display = 'none';
	}
	//if(textShadowLabel.checked){
		saveSetting('save', 'openSHW');
	//}

}

// textClassName.onkeypress = function(event){

// 	console.log(event);
// 	if(textClassName.value.length<=1){
// 		console.log(event.keyCode);
// 		if(event.keyCode>=65 && event.keyCode<=90 || event.keyCode>=97 && event.keyCode<=122){
// 			return true;
// 		} else{
// 			return false;
// 		}
// 	}else{
// 		if(event.keyCode>=65 && event.keyCode<=90 || event.keyCode>=97 && event.keyCode<=122 || event.keyCode>=48 && event.keyCode<=57){
// 			return true;
// 		} else{
// 			return false;
// 		}
// 	}
// }

function blockColorFont(){

	if(intupColorRACF.checked){
		selectorColorOpen.style.display = 'block';
		gradientFont.style.display = 'none';
	}else if(inputGradientRACF.checked){
		selectorColorOpen.style.display = 'none';
		gradientFont.style.display = 'block';
	}

}

function returnClass(par){
	var usl = '';
	
	if(par == ' ' || par == '') {
		return '';
	}
	//'wh1skasGenerator'
	par = par.replace(/[^A-Za-z0-9]/g, "");
	for (var i = 0; i <= textClassName.value.length; i++) {
		usl = par.search( /[0-9]/i );
		if(usl == 0){
			par = par.replace(/[0-9]/, "");
		} else{
			//textClassName.value = par;
			return par;
		}
		
	}

	textClassName.value = par;
	return par;
}

var classNameHTML = '';
var textButtonFonter = '';
var imgTag = '';

function myFunctionCheckedTag(){
	var textButtonFont = document.getElementById('textButtonFont');
	var textClassName = document.getElementById('textClassName');
	
		//classNameHTML = returnClass(textClassName.value);
		
		classNameHTML = returnClass(textClassName.value);
		if(classNameHTML != ''){
			textClassName.value = classNameHTML
		}else{
			textClassName.value = '';
			classNameHTML = 'wh1skasGenerator';
		}
		textButtonFonter = textButtonFont.value != '' ? textButtonFont.value : 'Кнопка';
		//'wh1skasGenerator';
		//iconFlag classIconText = classIcon.value inputUrlIcon.value
		

		if(iconFlag){
			imgTag = '<img class="'+classIconText+'" src="'+inputUrlIcon.value+'">';
		}else{
			imgTag = '';
		}
		var tagspan = tagtuspan = '';
		if(flagTextGrad){
			tagspan = '<span>';
			tagtuspan = '</span>'
		}else{
			tagspan = tagtuspan = '';
		}
	//classNameHTML = classNameHTML.replace(/[^A-Za-z1-9]/g, "");
	//classNameHTML = classNameHTML.replace(/[^A-Za-z/, "");
	// if(inputGradientRACF.checked){
	// 	htmltag.value = 'HTML Тег\n<button id="wh1skasGenerator" title="">\n 	<span id="textButton">'+textButtonFont.value+'</span>\n</button>';
	// } else{
		htmltag.value = '<button class="'+classNameHTML+'">'+imgTag+tagspan+textButtonFonter+tagtuspan+'</button>';
	//}
	openBlockNone();
	shadowFontWindow();

	//saveSetting('load');

}
	var keks = '';
	var keks2 = '';
	var keks3 = '';

window.onload = function(){
var divFuter = document.getElementById('divFuter');
	myFunctionCheckedTag();

	keks = testStyleSheets();
	keks2 = testStyleSheets2();
	keks3 = testStyleSheets3();
	kekeI = testStyleSheetsIcon();
	kekeIH = testStyleSheetsIconH();
	kekeIA = testStyleSheetsIconA();
	//testStyleSheets();
	//console.log(keks);
	codgener.onclick = function(event){
		divFuter.style.height = codgener.offsetHeight+200+'px';
	}

	for (var i = 0; i < inputRange.length; i++) {
		GradientRange(inputRange[i]);
	}
	fillingin();
}


var inputRange = document.getElementsByClassName('inputRange');

/*
opacityRange
opacityText
*/
var firstOpacity = true;
var secondOpacity = true;
function myFunctionOpacityRange(){
	opacityText.value = opacityRange.value;
	if(celectStandartInput.checked){
		blockStandart.style.opacity = opacityRange.value;
		if(firstOpacity){
			blockHover.style.opacity = opacityRange.value;
		}if(secondOpacity){
			blockActive.style.opacity = opacityRange.value;
		}
	} else if(celectHoverInput.checked){
		blockHover.style.opacity = opacityRange.value;
		firstOpacity = false;
	} else if(celectActiveInput.checked){
		blockActive.style.opacity = opacityRange.value;
		secondOpacity = false;
	}
	saveSetting('save', 'opus');
	GradientRange(opacityRange);
	timeCod();
}

function myFunctionOpacityText(){

	if(opacityText.value == '' || opacityText.value == '0.') return;
	if(opacityText.value == ' '){ opacityText.value = ''; return;}
	//if(opacityText.value == '0'){ opacityText.value = '0.'; return;}


	opacityRange.value = opacityText.value;
	
	myFunctionOpacityRange();
}
/*
fontShadowRangeX
fontShadowTextX
fontShadowRangeY
fontShadowTextY
fontShadowRangeBlur
fontShadowTextBlur
fontShadowColorOne
*/

function myFunctionFontShadowOneColor(){
	myFunctionFontShadowOneColorRange();
}

var firstTextShadow = true;
var secondTextShadow = true;
function myFunctionFontShadowOneColorRange(){

	fontShadowTextX.value = fontShadowRangeX.value;
	fontShadowTextY.value = fontShadowRangeY.value;
	fontShadowTextBlur.value = fontShadowRangeBlur.value;
	if(celectStandartInput.checked){
		blockStandart.style.textShadow = fontShadowRangeX.value+'px '+fontShadowRangeY.value+'px '+fontShadowRangeBlur.value+'px '+fontShadowColor.value;
		if(firstTextShadow){
		blockHover.style.textShadow = fontShadowRangeX.value+'px '+fontShadowRangeY.value+'px '+fontShadowRangeBlur.value+'px '+fontShadowColor.value;
		}if(secondTextShadow){
		blockActive.style.textShadow = fontShadowRangeX.value+'px '+fontShadowRangeY.value+'px '+fontShadowRangeBlur.value+'px '+fontShadowColor.value;
		}
	} else if(celectHoverInput.checked){
		blockHover.style.textShadow = fontShadowRangeX.value+'px '+fontShadowRangeY.value+'px '+fontShadowRangeBlur.value+'px '+fontShadowColor.value;
		firstTextShadow = false;
		firstTtextShadowTwo = false;
	} else if(celectActiveInput.checked){
		blockActive.style.textShadow = fontShadowRangeX.value+'px '+fontShadowRangeY.value+'px '+fontShadowRangeBlur.value+'px '+fontShadowColor.value;
		secondTextShadow = false;
		secondTtextShadowTwo = false;
	}
	saveSetting('save', 'fontShOne');
	GradientRange(fontShadowRangeX);
	GradientRange(fontShadowRangeY);
	GradientRange(fontShadowRangeBlur);
	timeCod();
}
function FontShadowOneTextTest(Val){
	if(Val.value == '-' || Val.value == '') return;
	if(Val.value == ' '){ Val.value = ''; return;}else{myFunctionFontShadowOneColorText();}
}
function FontShadowOneX(){FontShadowOneTextTest(fontShadowTextX);}
function FontShadowOneY(){FontShadowOneTextTest(fontShadowTextY);}
function FontShadowOneBlur(){FontShadowOneTextTest(fontShadowTextBlur);}

function myFunctionFontShadowOneColorText(){
	fontShadowRangeX.value = fontShadowTextX.value;
	fontShadowRangeY.value = fontShadowTextY.value;
	fontShadowRangeBlur.value = fontShadowTextBlur.value;
	myFunctionFontShadowOneColorRange();

}

function myFunctionFontShadowOneColor2(){
	myFunctionFontShadowOneColorRange2();
}

var firstTtextShadowTwo = true;
var secondTtextShadowTwo = true;
function myFunctionFontShadowOneColorRange2(){

	leftFontShadowTextX.value = leftFontShadowRangeX.value;
	leftFontShadowTextY.value = leftFontShadowRangeY.value;
	leftFontShadowTextBlur.value = leftFontShadowRangeBlur.value;

	rightFontShadowTextX.value = rightFontShadowRangeX.value;
	rightFontShadowTextY.value = rightFontShadowRangeY.value;
	rightFontShadowTextBlur.value = rightFontShadowRangeBlur.value;

	var firstSetting = leftFontShadowRangeX.value+'px '+leftFontShadowRangeY.value+'px '+leftFontShadowRangeBlur.value+'px '+leftFontShadowColor.value;
	var secondSetting = rightFontShadowRangeX.value+'px '+rightFontShadowRangeY.value+'px '+rightFontShadowRangeBlur.value+'px '+rightFontShadowColor.value;

	if(celectStandartInput.checked){
		blockStandart.style.textShadow = firstSetting+', '+secondSetting;
		if(firstTtextShadowTwo){
			blockHover.style.textShadow = firstSetting+', '+secondSetting;
		}if(secondTtextShadowTwo){
			blockActive.style.textShadow = firstSetting+', '+secondSetting;
		}
	} else if(celectHoverInput.checked){
		blockHover.style.textShadow = firstSetting+', '+secondSetting;
		firstTtextShadowTwo = false;
		firstTextShadow = false;
	} else if(celectActiveInput.checked){
		blockActive.style.textShadow = firstSetting+', '+secondSetting;
		secondTtextShadowTwo = false;
		secondTextShadow = false;
	}

	saveSetting('save', 'fontShTwo');
	GradientRange(leftFontShadowRangeX);
	GradientRange(leftFontShadowRangeY);
	GradientRange(leftFontShadowRangeBlur);
	GradientRange(rightFontShadowRangeX);
	GradientRange(rightFontShadowRangeY);
	GradientRange(rightFontShadowRangeBlur);
	timeCod();
}
//FontShadowOneTextTest();
function FontShadowOneTextTest2(Val){
	if(Val.value == '-' || Val.value == '') return;
	if(Val.value == ' '){ Val.value = ''; return;}else{myFunctionFontShadowOneColorText2();}
}

function FontShadowTwoX(){FontShadowOneTextTest2(leftFontShadowTextX);}
function FontShadowTwoY(){FontShadowOneTextTest2(leftFontShadowTextY);}
function FontShadowTwoBlur(){FontShadowOneTextTest2(leftFontShadowTextBlur);}

function FontShadowTwoX2(){FontShadowOneTextTest2(rightFontShadowTextX);}
function FontShadowTwoY2(){FontShadowOneTextTest2(rightFontShadowTextY);}
function FontShadowTwoBlur2(){FontShadowOneTextTest2(rightFontShadowTextBlur);}

function myFunctionFontShadowOneColorText2(){

	leftFontShadowRangeX.value = leftFontShadowTextX.value;
	leftFontShadowRangeY.value = leftFontShadowTextY.value;
	leftFontShadowRangeBlur.value = leftFontShadowTextBlur.value;

	rightFontShadowRangeX.value = rightFontShadowTextX.value;
	rightFontShadowRangeY.value = rightFontShadowTextY.value;
	rightFontShadowRangeBlur.value = rightFontShadowTextBlur.value;
	myFunctionFontShadowOneColorRange2();
}
function myFunctionNoneFontShadow(){

	if(celectStandartInput.checked){
		blockStandart.style.textShadow = 'none';
	} else if(celectHoverInput.checked){
		blockHover.style.textShadow = 'none';
	} else if(celectActiveInput.checked){
		blockActive.style.textShadow = 'none';
	}
	timeCod();
}

var borderRangeID = document.getElementById('borderRangeID');
var borderTextID = document.getElementById('borderTextID');
var firstBorderColor = document.getElementById('firstBorderColor');
var secondBorderColor = document.getElementById('secondBorderColor');
var borderColorRadio = document.getElementById('borderColorRadio');
var borderColorGradient = document.getElementById('borderColorGradient');


var borderStyle2 = document.getElementById('borderStyle').options;
var borderStyle = document.getElementById('borderStyle').selectedIndex;

var textOptionBorder = 'solid';

var firstBorder = true;
var secondBorder = true;

function myFunctionBorder(){

	borderWidth2.value = borderWidth.value;

	borderStyle = document.getElementById('borderStyle').selectedIndex;
	borderStyle2.selectedIndex = borderStyle;

	textOptionBorder = borderStyle2[borderStyle].text;

	if(celectStandartInput.checked){
		blockStandart.style.border = borderWidth.value+'px '+textOptionBorder+' '+ borderColor.value;
		if(firstBorder){
			blockHover.style.border = borderWidth.value+'px '+textOptionBorder+' '+ borderColor.value;
		} if(secondBorder){
			blockActive.style.border = borderWidth.value+'px '+textOptionBorder+' '+ borderColor.value;
		}
	} else if(celectHoverInput.checked){
		blockHover.style.border = borderWidth.value+'px '+textOptionBorder+' '+ borderColor.value;
		firstBorder = false;
	} else if(celectActiveInput.checked){
		blockActive.style.border = borderWidth.value+'px '+textOptionBorder+' '+ borderColor.value;
		secondBorder = false;
	}
	saveSetting('save', 'bordure');
	GradientRange(borderWidth);
	timeCod();
}

function myFunctionBorderText(){
	if(borderWidth2.value == '') return;
	if(borderWidth2.value == ' '){ borderWidth2.value = ''; return;}
	borderWidth.value = borderWidth2.value;
	myFunctionBorderColor();
}
function myFunctionBorderColor(){
	if(borderColorRadio.checked){
		myFunctionBorder();
	} else if(borderColorGradient.checked){
		myFunctionBorderGradient();
	}
}


function myFunctionBorderGradient(){

	borderWidth2.value = borderWidth.value;
	borderTextID.value = borderRangeID.value;
//border: 66px solid transparent;
	if(celectStandartInput.checked){
	//	blockStandart.style.border = borderWidth2.value+'px '+borderStyle2[borderStyle].text+' transparent';
		blockStandart.style.borderImage = 'linear-gradient('+borderRangeID.value+'deg, '+firstBorderColor.value+' , '+secondBorderColor.value+' )';
		//blockStandart.style.borderImage ='linear-gradient(20deg, #f92056 38%, #00deff 65%)';
		blockStandart.style.borderImageSlice = '1'; // растяжение изображения
	//	blockStandart.style.borderImageWidth = '5'; // ширина блока
	//	blockStandart.style.borderImageOutset = initial; // отдаление рамки
	//	blockStandart.style.borderImageRepeat = initial; // способ подачи изображения
	} else if(celectHoverInput.checked){
	//	blockHover.style.border = borderWidth2.value+'px '+borderStyle2[borderStyle].text;
	//	blockHover.style.borderImage =
	} else if(celectActiveInput.checked){
	//	blockActive.style.border = borderWidth2.value+'px '+borderStyle2[borderStyle].text;
	//	blockActive.style.borderImage =
	}

	timeCod();
}
var fontSaturation = document.getElementById('fontSaturation');
var fontSaturationText = document.getElementById('fontSaturationText');
/*
font-weight
text-decoration: underline;

*/
var firstSaturn = true;
var secondSaturn = true;
var lendSaturn = 400;
function myFunctionFontStyle(prep){
	fontSaturationText.value = fontSaturation.value;
	lendSaturn = fontSaturation.value
	if(celectStandartInput.checked){
		blockStandart.style.fontWeight = fontSaturation.value;
		if(firstSaturn){
			blockHover.style.fontWeight = fontSaturation.value;
		}if(secondSaturn){
			blockActive.style.fontWeight = fontSaturation.value;
		}
	} else if(celectHoverInput.checked){
		blockHover.style.fontWeight = fontSaturation.value;
		firstSaturn = false;
	} else if(celectActiveInput.checked){
		blockActive.style.fontWeight = fontSaturation.value;
		secondSaturn = false;
	}
	GradientRange(fontSaturation);
	exampleFont();
	saveSetting('save', 'decotText');
	timeCod();
}
function myFunctionFontStyleText(){
	//fontSaturationText.value += '00';
	fontSaturationText.value = fontSaturationText.value.replace(/[^0-9]/, "");
	if(fontSaturationText.value.length != 3){
		return;
	}
	


	fontSaturation.value = fontSaturationText.value;

	myFunctionFontStyle();
}
var italicStyle = document.getElementById('italicStyle');

var tableStr = document.getElementsByClassName('tableStr');
var tableButton = document.getElementsByClassName('tableButton');
var italic = '';
//

var firstFontStyle = true;
var secondFontStyle = true;
function myFunctionFontStyleItalic(){
	
	if(italicStyle.checked){
		italic = 'italic';
	} else {
		italic = 'normal';
	}
	if(celectStandartInput.checked){
		blockStandart.style.fontStyle = italic;
		if(firstFontStyle){
			blockHover.style.fontStyle = italic;
		}if(secondFontStyle){
			blockActive.style.fontStyle = italic;
		}
	} else if(celectHoverInput.checked){
		blockHover.style.fontStyle = italic;
		firstFontStyle = false;
	} else if(celectActiveInput.checked){
		blockActive.style.fontStyle = italic;
		secondFontStyle = false;
	}
	exampleFont();
	saveSetting('save', 'decotText');
	timeCod();
}
var underlineStyle = document.getElementById('underlineStyle');
var underLine = document.getElementsByClassName('underLine');
var statUnderline = 0;

var firstTextDecoration = true;
var secondTestDecoration = true;
var underlineT = '';

function openDiv(){
	if(underlineStyle.checked){
		tableButton[0].style.display = 'block';
	}else{
		tableButton[0].style.display = 'none';
	}
}

function myFunctionFontStyleUnderline(){
	openDiv();
	if(underlineStyle.checked){	
			if(underLine[2].checked){
				underlineT = 'underline';
			} else if(underLine[1].checked){
				underlineT = 'line-through';
			} else if(underLine[0].checked){
				underlineT = 'overline';
			}
		
	} else {
		underlineT = 'none';
	}
	if(celectStandartInput.checked){
		blockStandart.style.textDecoration = underlineT;
		if(firstTextDecoration){
			blockHover.style.textDecoration = underlineT;
		}if(secondTestDecoration){
			blockActive.style.textDecoration = underlineT;
		}
	//	blockStandart.style.textDecorationColor = transparent;
	} else if(celectHoverInput.checked){
		blockHover.style.textDecoration = underlineT;
	//	blockHover.style.textDecorationColor = transparent;
		firstTextDecoration = false;
	} else if(celectActiveInput.checked){
		blockActive.style.textDecoration = underlineT;
	//	blockActive.style.textDecorationColor = transparent;
		secondTestDecoration = false;
	}
	
	exampleFont();
	saveSetting('save', 'decotText');
	timeCod();
}

//pFont9
var pFont =[];
var lengthP = document.getElementsByClassName('spanFont');


function fillingin(){
	for(var i = 0; i < lengthP.length; i++){
		pFont[i] = document.getElementsByClassName('spanFont')[i];
	}
}


function exampleFont(){
	//if(setting == 'fontWeight'){
		for(var i = 0; i < lengthP.length; i++){
		
				pFont[i].style.fontWeight = lendSaturn;
				pFont[i].style.fontStyle = italic;
				pFont[i].style.textDecoration = underlineT;	
			
		}
	/*}
	if(setting == 'fontStyle'){
		for(var i = 1; i < 10; i++){
			
		}
	//}
//	if(setting == 'textDecoration'){
		for(var i = 1; i < 10; i++){
		
		}
	}*/
	
}
//italic; lendSaturn; underline;

var fontFamilyStyle = document.getElementsByClassName('fontFamilyStyle');
var fontsStyle = document.getElementsByClassName('fonts');
var indexFontFamily = 0;

var firstFontFamily = true;
var secondFontFamily = true;
function myFunctionFontFamilyStyle(){
	for(var i=0; i<fontFamilyStyle.length; i++){
		if(fontFamilyStyle[i].checked){
			if(celectStandartInput.checked){
				blockStandart.style.fontFamily = fontsStyle[i].textContent;
				if(firstFontFamily){
					blockHover.style.fontFamily = fontsStyle[i].textContent;
				}if(secondFontFamily){
					blockActive.style.fontFamily = fontsStyle[i].textContent;
				}
			} else if(celectHoverInput.checked){
				blockHover.style.fontFamily = fontsStyle[i].textContent;
				firstFontFamily = false;
			} else if(celectActiveInput.checked){
				blockActive.style.fontFamily = fontsStyle[i].textContent;
				secondFontFamily = false;
			}
			indexFontFamily = i;
			saveSetting('save', 'FamilyFont');
			timeCod();
			return;
		}
	}
}

//start transformenter
var twoDRR = document.getElementsByClassName('leftTransformR2d')[0];
var twoDRT = document.getElementsByClassName('leftTransformT2d')[0];
//ранж
var rotateX = document.getElementsByClassName('leftTransformR2d')[1];
var rotateY = document.getElementsByClassName('leftTransformR2d')[2];
var rotateZ = document.getElementsByClassName('leftTransformR2d')[3];
var rotateDeg = document.getElementsByClassName('leftTransformR2d')[4];

//text
var rotateXT = document.getElementsByClassName('leftTransformT2d')[1];
var rotateYT = document.getElementsByClassName('leftTransformT2d')[2];
var rotateZT = document.getElementsByClassName('leftTransformT2d')[3];
var rotateDegT = document.getElementsByClassName('leftTransformT2d')[4];

var firstTransform = true;
var secondTransform = true;

var scaleR = document.getElementsByClassName('scaleR');
var scaleT = document.getElementsByClassName('scaleT');

var scaleTwoR = document.getElementsByClassName('scaleTwoR');
/*
var rotate2D = document.getElementById('rotate2D');
var rotate3D = document.getElementById('rotate3D');

var scale2D = document.getElementById('scale2D');
var scale3D = document.getElementById('scale3D');

scaleR[0].value;
scaleR[1].value;
*/
var inputRSkew = document.getElementsByClassName('inputRSkew');
var inputTextSkew = document.getElementsByClassName('inputTSkew');
function myFunctionMegoTransform(){
	//transform = "rotate(7deg)";
	//2d
	var textParam = '';
	//3в
	if(rotate2D.checked){
		textParam = "rotate("+twoDRR.value+"deg)";
	}else if(rotate3D.checked){
		textParam = "rotate3d("+rotateX.value+", "+rotateY.value+", "+rotateZ.value+", "+rotateDeg.value+"deg)";
	}if(scale2D.checked){
		textParam += "scale("+scaleR[0].value+", "+scaleR[1].value+")";
	}/*else if(scale3D.checked){
		textParam += "scale3d("+scaleTwoR[0].value+", "+scaleTwoR[1].value+", "+scaleTwoR[2].value+")";
	}*/
	textParam += "skew("+inputRSkew[0].value+"deg, "+inputTextSkew[1].value+"deg)";

	if(celectStandartInput.checked){
		blockStandart.style.transform = textParam;
		if(firstTransform){
			blockHover.style.transform = textParam;
		}if(secondTransform){
			blockActive.style.transform = textParam;
		}
	} else if(celectHoverInput.checked){
		blockHover.style.transform = textParam;
		firstTransform = false;
	} else if(celectActiveInput.checked){
		blockActive.style.transform = textParam;
		secondTransform = false;
	}
	saveSetting('save', 'transform');
	timeCod();
}

function myFunctionMegoTransformR(){
	twoDRT.value = twoDRR.value;
	GradientRange(twoDRR);
	myFunctionMegoTransform();
}

function myFunctionMegoTransformT(){
	if(twoDRT.value == '') return;
	if(twoDRT.value == ' '){ twoDRT.value = ''; return;}
	twoDRR.value = twoDRT.value;
	GradientRange(twoDRR);
	myFunctionMegoTransformR();
}
function myFunctionMegoTransformR2(){
	rotateXT.value = rotateX.value;
	rotateYT.value = rotateY.value;
	rotateZT.value = rotateZ.value;
	rotateDegT.value = rotateDeg.value;
	GradientRange(rotateX);
	GradientRange(rotateY);
	GradientRange(rotateZ);
	GradientRange(rotateDeg);
	myFunctionMegoTransform();
}

function rotatePotate(Val){
	if(Val.value == '') return;
	if(Val.value == ' '){ Val.value = ''; return;}else{myFunctionMegoTransformT2();}
}

function rotateXTFunc(){rotatePotate(rotateXT);}
function rotateYTFunc(){rotatePotate(rotateYT);}
function rotateZTFunc(){rotatePotate(rotateZT);}
function rotateDegTFunc(){rotatePotate(rotateDegT);}

function myFunctionMegoTransformT2(){
	rotateX.value = rotateXT.value;
	rotateY.value = rotateYT.value;
	rotateZ.value = rotateZT.value;
	rotateDeg.value = rotateDegT.value;
	GradientRange(rotateX);
	GradientRange(rotateY);
	GradientRange(rotateZ);
	GradientRange(rotateDeg);
	myFunctionMegoTransformR2();
}
function myFunctionMegoScale2DR(){
	scaleT[0].value = scaleR[0].value;
	scaleT[1].value = scaleR[1].value;
	GradientRange(scaleR[0]);
	GradientRange(scaleR[1]);
	myFunctionMegoTransform();
}

function scalePotate(Val){
	if(Val.value == '' || Val.value == '-') return;
	if(Val.value == ' '){ Val.value = ''; return;}else{myFunctionMegoScale2DT();}
}

function scaleT0Func(){scalePotate(scaleT[0]);}
function scaleT1Func(){scalePotate(scaleT[1]);}

function myFunctionMegoScale2DT(){
	scaleR[0].value = scaleT[0].value;
	scaleR[1].value = scaleT[1].value;
	GradientRange(scaleR[0]);
	GradientRange(scaleR[1]);
	myFunctionMegoScale2DR();
}
//3д скеил отключен
// function myFunctionMegoScale3DR(){
// 	scaleTwoR[3].value=scaleTwoR[0].value;
// 	scaleTwoR[4].value=scaleTwoR[1].value;
// 	scaleTwoR[5].value=scaleTwoR[2].value;
// 	myFunctionMegoTransform();
// }

// function myFunctionMegoScale3DT(){
// 	scaleTwoR[0].value=scaleTwoR[3].value;
// 	scaleTwoR[1].value=scaleTwoR[4].value;
// 	scaleTwoR[2].value=scaleTwoR[5].value;
// 	myFunctionMegoTransform();
// }
//3д скеил отключен

function myFunctionMegoSkewR(){
	inputTextSkew[0].value = inputRSkew[0].value;
	inputTextSkew[1].value = inputRSkew[1].value;
	GradientRange(inputRSkew[0]);
	GradientRange(inputRSkew[1]);
	myFunctionMegoTransform();
}

function skewPotate(Val){
	if(Val.value == '' || Val.value == '-') return;
	if(Val.value == ' '){ Val.value = ''; return;}else{myFunctionMegoSkewT();}
}

function skew0Func(){skewPotate(inputTextSkew[0]);}
function skew1Func(){skewPotate(inputTextSkew[1]);}

function myFunctionMegoSkewT(){
	inputRSkew[0].value = inputTextSkew[0].value;
	inputRSkew[1].value = inputTextSkew[1].value;
	GradientRange(inputRSkew[0]);
	GradientRange(inputRSkew[1]);
	myFunctionMegoSkewR();
}
//функция транзишин
var rangeTransitTime = document.getElementsByClassName('rangeTransitTime');
var textTransitTime = document.getElementsByClassName('textTransitTime');
//var labelTransition = document.getElementsByClassName('labelTransition');
var inputTransition = document.getElementsByClassName('inputTransition');
var styleTransist = document.getElementById('styleTransist').selectedIndex;
var styleTransist2 = document.getElementById('styleTransist').options;

// var arrStyleTransit =[];
// for (var i = labelTransition.length - 1; i >= 0; i--) {
// 	arrStyleTransit[i] = labelTransition[i];
// }

function transitionRange(){
	textTransitTime[0].value = rangeTransitTime[0].value;
	testCheckTransist();
}

function transitionText(){
	if(textTransitTime[0].value == '') return;
	if(textTransitTime[0].value.length == 2 && textTransitTime[0].value[1] == '.') return;
	if(textTransitTime[0].value == '-'){ textTransitTime[0].value = ''; return;}
	if(textTransitTime[0].value == ' '){ textTransitTime[0].value = ''; return;}
	rangeTransitTime[0].value = textTransitTime[0].value;
	//console.log(textTransitTime[0].value.length);
	transitionRange();
}
var textFunc = '';
var firstTrans = true;
var secondTrans = true;
var indexTransistText = 0;
function testCheckTransist(){
	styleTransist = document.getElementById('styleTransist').selectedIndex;
	for (var i = inputTransition.length - 1; i >= 0; i--) {
		if (inputTransition[i].checked) {
			textFunc = inputTransition[i].value;
			indexTransistText = i;
		}
	}
	var textOption = styleTransist2[styleTransist].text;
	//console.log(textOption);
	
	if(celectStandartInput.checked){
		blockStandart.style.transition = textOption+' '+textFunc+' '+rangeTransitTime[0].value+'s';
		if(firstTrans){
			blockHover.style.transition = textOption+' '+textFunc+' '+rangeTransitTime[0].value+'s';
		}if(secondTrans){
			blockActive.style.transition = textOption+' '+textFunc+' '+rangeTransitTime[0].value+'s';
		}
	} else if(celectHoverInput.checked){
		blockHover.style.transition = textOption+' '+textFunc+' '+rangeTransitTime[0].value+'s';
		firstTrans = false;
	} else if(celectActiveInput.checked){
		blockActive.style.transition = textOption+' '+textFunc+' '+rangeTransitTime[0].value+'s';
		secondTrans = false;
	}
	//saveSetting('save', 'transform');
	saveSetting('save', 'transist');
	GradientRange(rangeTransitTime[0]);
	timeCod();
}

/*
var borderStyle2 = document.getElementById('borderStyle').options;
var borderStyle = document.getElementById('borderStyle').selectedIndex;


	borderWidth2.value = borderWidth.value;

	borderStyle = document.getElementById('borderStyle').selectedIndex;
	borderStyle2.selectedIndex = borderStyle;

	textOptionBorder = borderStyle2[borderStyle].text;
*/
/*
1) 
[
[twoDRR.value, rotateX.value, rotateY.value, rotateZ.value, rotateDeg.value],
[scaleR[0].value, scaleR[1].value],
[inputRSkew[0].value, inputRSkew[1].value]
],
[
[twoDRR.value, rotateX.value, rotateY.value, rotateZ.value, rotateDeg.value],
[scaleR[0].value, scaleR[1].value],
[inputRSkew[0].value, inputRSkew[1].value]
],
[
[twoDRR.value, rotateX.value, rotateY.value, rotateZ.value, rotateDeg.value],
[scaleR[0].value, scaleR[1].value],
[inputRSkew[0].value, inputRSkew[1].value]
],
2)
twoDRT.value
twoDRR.value


rotateXT.value
rotateYT.value
rotateZT.value
rotateDegT.value
rotateX.value 
rotateY.value 
rotateZ.value 
rotateDeg.value


scaleT[0].value
scaleT[1].value
scaleR[0].value
scaleR[1].value

inputTextSkew[0].value
inputTextSkew[1].value
inputRSkew[0].value
inputRSkew[1].value
*/

//var aryi = [5,3,4]
//fontFamilyStyle[aryi[2]].checked = true;

/*
var widthItem = document.getElementById('width');
var widthItem2 = document.getElementById('width2');
var heightItem = document.getElementById('height');
var heightItem2 = document.getElementById('height2');
var sizeColor = document.getElementById('sizeColor');

var bruL1 = document.getElementById('inp1');
var bruR1 = document.getElementById('inp2');
var brbL1 = document.getElementById('inp3');
var brbR1 = document.getElementById('inp4');

var brL1 = document.getElementById('inp11');
var brL2 = document.getElementById('inp22');
var brL3 = document.getElementById('inp33');
var brL4 = document.getElementById('inp44');

sizeColor.value //задник
var firstBackground = true;
var secondBackground = true;
.background = 'linear-gradient('+backgroundRangeID.value+'deg, '+firstColor.value+' '+bRCPO.value+'%,'+secondColor.value+' '+bRCPT.value+'%)';
var fLg = true;
var sLg = true;
	bTCPO.value = bRCPO.value;
	bTCPT.value = bRCPT.value;

.boxShadow = sdvigX.value+'px '+sdvigY.value+'px '+blur.value+'px '+whidblur.value+'px '+boxShadowColor.value+' '+inset;
shadowSide.checked 
var firstBoxShadow = true;
var secondBoxShadow = true;
	sdvigXInp.value = 
	sdvigX.value = 
	sdvigYInp.value = 
	sdvigY.value = 
	blurInp.value = 
	blur.value = 
	whidblurInp.value = 
	whidblur.value = 
	boxShadowColor.value = 
	shadowSide.checked = 


lockStandart.style.fontSize = fontSizeRange.value+'px'; 
var firstFontSize = true;
var secondFontSize = true;

var firstFontColor = true;
var secondFontColor = true;

	var fontColor = document.getElementById('fontColor');
		blockStandart.style.color = fontColor.value;
opus
var firstOpacity = true;
var secondOpacity = true;

		blockStandart.style.opacity = opacityRange.value; opacityText.value

blockStandart.style.textShadow = fontShadowRangeX.value+'px '+fontShadowRangeY.value+'px '+fontShadowRangeBlur.value+'px '+fontShadowColor.value;

fontShadowTextX.value = fontShadowRangeX.value;
fontShadowTextY.value = fontShadowRangeY.value;
fontShadowTextBlur.value = fontShadowRangeBlur.value;

var firstTextShadow = true;
var secondTextShadow = true;

/////twoooou

	leftFontShadowTextX.value = leftFontShadowRangeX.value;
	leftFontShadowTextY.value = leftFontShadowRangeY.value;
	leftFontShadowTextBlur.value = leftFontShadowRangeBlur.value;

	rightFontShadowTextX.value = rightFontShadowRangeX.value;
	rightFontShadowTextY.value = rightFontShadowRangeY.value;
	rightFontShadowTextBlur.value = rightFontShadowRangeBlur.value;

	leftFontShadowColor.value rightFontShadowColor.value

var firstTtextShadowTwo = true;
var secondTtextShadowTwo = true;


borderWidth2.value = borderWidth.value;
blockStandart.style.border = borderWidth2.value+'px '+borderStyle2[borderStyle].text+' '+ borderColor.value;
	borderStyle2.selectedIndex = borderStyle;

var firstBorder = true;
var secondBorder = true;
//
var fontSaturation = document.getElementById('fontSaturation');
var fontSaturationText = document.getElementById('fontSaturationText');


saveSetting('save', 'fontWeight');

var firstSaturn = true;
var secondSaturn = true;

italicStyle.checked

var firstFontStyle = true;
var secondFontStyle = true;


underlineStyle.checked 

underLine[2].checked
underLine[1].checked
underLine[0].checked


----чекаутколорбаскграонд
colorBackground
colorGradient
*/
/*-sizeButton-*/
var wRS = [[widthItem.value, heightItem.value], [widthItem.value, heightItem.value], [widthItem.value, heightItem.value]];

// wRH = widthItem.value, 
// hRH = heightItem.value,
// wRA = widthItem.value, 
// hRA = heightItem.value;
var bordeRaS = [
[bruL1.value, bruR1.value, brbL1.value, brbR1.value],
[bruL1.value, bruR1.value, brbL1.value, brbR1.value],
[bruL1.value, bruR1.value, brbL1.value, brbR1.value]
];

var backColor = [[sizeColor.value], [sizeColor.value], [sizeColor.value]]; // backColor

var backGradient = [
[backgroundRangeID.value, firstColor.value, bRCPO.value, secondColor.value, bRCPT.value],
[backgroundRangeID.value, firstColor.value, bRCPO.value, secondColor.value, bRCPT.value],
[backgroundRangeID.value, firstColor.value, bRCPO.value, secondColor.value, bRCPT.value]
];
var boxShadowBox = [
[sdvigX.value, sdvigY.value, blur.value, whidblur.value, boxShadowColor.value, shadowSide.checked],
[sdvigX.value, sdvigY.value, blur.value, whidblur.value, boxShadowColor.value, shadowSide.checked],
[sdvigX.value, sdvigY.value, blur.value, whidblur.value, boxShadowColor.value, shadowSide.checked]
];

var fontSiZen = [[fontSizeRange.value], [fontSizeRange.value], [fontSizeRange.value]];
var fontCol = [[fontColor.value], [fontColor.value], [fontColor.value]];
var opaCity = [[opacityRange.value], [opacityRange.value], [opacityRange.value]];

var saveFontSh = [
[fontShadowRangeX.value, fontShadowRangeY.value, fontShadowRangeBlur.value, fontShadowColor.value],
[fontShadowRangeX.value, fontShadowRangeY.value, fontShadowRangeBlur.value, fontShadowColor.value],
[fontShadowRangeX.value, fontShadowRangeY.value, fontShadowRangeBlur.value, fontShadowColor.value]
];

var saveFontShTwo = [
[[leftFontShadowRangeX.value, leftFontShadowRangeY.value, leftFontShadowRangeBlur.value, leftFontShadowColor.value], 
[rightFontShadowRangeX.value, rightFontShadowRangeY.value, rightFontShadowRangeBlur.value, rightFontShadowColor.value]],
[[leftFontShadowRangeX.value, leftFontShadowRangeY.value, leftFontShadowRangeBlur.value, leftFontShadowColor.value],
[rightFontShadowRangeX.value, rightFontShadowRangeY.value, rightFontShadowRangeBlur.value, rightFontShadowColor.value]],
[[leftFontShadowRangeX.value, leftFontShadowRangeY.value, leftFontShadowRangeBlur.value, leftFontShadowColor.value],
[rightFontShadowRangeX.value, rightFontShadowRangeY.value, rightFontShadowRangeBlur.value, rightFontShadowColor.value]]
];

var saveBorder = [
[borderWidth.value, borderStyle, borderColor.value],
[borderWidth.value, borderStyle, borderColor.value],
[borderWidth.value, borderStyle, borderColor.value],
];

var saveFontWeight = [[fontSaturation.value], [fontSaturation.value], [fontSaturation.value]];
var saveItalic = [[italicStyle.checked], [italicStyle.checked], [italicStyle.checked]];

var saveUnder = [
[underlineStyle.checked, underLine[2].checked, underLine[1].checked, underLine[0].checked],
[underlineStyle.checked, underLine[2].checked, underLine[1].checked, underLine[0].checked],
[underlineStyle.checked, underLine[2].checked, underLine[1].checked, underLine[0].checked]
];

var saveIndexFF = [[indexFontFamily], [indexFontFamily], [indexFontFamily]];
var saveStyleGroop = [
[italic, lendSaturn, underlineT],
[italic, lendSaturn, underlineT],
[italic, lendSaturn, underlineT],
];

var openFontSh = [
[shadowOne.checked, shadowTwo.checked],
[shadowOne.checked, shadowTwo.checked],
[shadowOne.checked, shadowTwo.checked]
];

var saveChekedBC = [
[colorBackground.checked, colorGradient.checked, colorImage.checked],
[colorBackground.checked, colorGradient.checked, colorImage.checked],
[colorBackground.checked, colorGradient.checked, colorImage.checked],
];
//rotateInput scaleInput skewInput rotate2D rotate3D scale2D scale3D
var saveTransformBlock = [
[rotate2D.checked, rotate3D.checked],
[rotate2D.checked, rotate3D.checked],
[rotate2D.checked, rotate3D.checked]
];
// [rotateInput.checked, scaleInput.checked, skewInput.checked, rotate2D.checked, rotate3D.checked, scale2D.checked /*scale3D.checked*/],
// [rotateInput.checked, scaleInput.checked, skewInput.checked, rotate2D.checked, rotate3D.checked, scale2D.checked /*scale3D.checked*/],
// [rotateInput.checked, scaleInput.checked, skewInput.checked, rotate2D.checked, rotate3D.checked, scale2D.checked /*scale3D.checked*/]
// ];

var saveTransformInp = [
[[twoDRR.value, rotateX.value, rotateY.value, rotateZ.value, rotateDeg.value],
[scaleR[0].value, scaleR[1].value],
[inputRSkew[0].value, inputRSkew[1].value]],
[[twoDRR.value, rotateX.value, rotateY.value, rotateZ.value, rotateDeg.value],
[scaleR[0].value, scaleR[1].value],
[inputRSkew[0].value, inputRSkew[1].value]],
[[twoDRR.value, rotateX.value, rotateY.value, rotateZ.value, rotateDeg.value],
[scaleR[0].value, scaleR[1].value],
[inputRSkew[0].value, inputRSkew[1].value]],
];

var saveTransist = [
[indexTransistText, styleTransist, rangeTransitTime[0].value],
[indexTransistText, styleTransist, rangeTransitTime[0].value],
[indexTransistText, styleTransist, rangeTransitTime[0].value]
];
/*
	backImageSizeX.value = '0';
	backImageSizeY.value = '0';
	backImageSizeXT.value = '0';
	backImageSizeYT.value = '0';
	backImagePosX.value = '0';
	backImagePosY.value = '0';
	backImagePosXT.value = '0';
	backImagePosYT.value = '0';
	
	var firstTG = secondTG = true;

	flagTextGrad = true;
	
	fontTextID.value = fontRangeID.value;
	fontTCPO.value = fontRCPO.value;
	fontTCPT.value = fontRCPT.value;



*/
var saveBackImg = [
[backImageSizeX.value, backImageSizeY.value, backImagePosX.value, backImagePosY.value],
[backImageSizeX.value, backImageSizeY.value, backImagePosX.value, backImagePosY.value],
[backImageSizeX.value, backImageSizeY.value, backImagePosX.value, backImagePosY.value]
];

var saveTextGrad = [
[fontRangeID.value, fontRCPO.value, fontRCPT.value],
[fontRangeID.value, fontRCPO.value, fontRCPT.value],
[fontRangeID.value, fontRCPO.value, fontRCPT.value]
];

var statusQuo = 0;
var statusBlock = true;
function saveSetting(paramn, size){
	
	if(paramn == 'save'){
		if(celectStandartInput.checked){
			statusQuo = 0;
		}else if(celectHoverInput.checked){
			statusQuo = 1;
		}else if(celectActiveInput.checked){
			statusQuo = 2;
		}
	//	console.log('save '+statusQuo);

			if(size == 'sizeButton'){
				wRS[statusQuo][0] = widthItem.value;
				wRS[statusQuo][1] = heightItem.value;
				if(statusQuo==0&&firstHeWe){
					wRS[1][0] = widthItem.value;
					wRS[1][1] = heightItem.value;
				}if(statusQuo==0&&secondHeWe){
					wRS[2][0] = widthItem.value;
					wRS[2][1] = heightItem.value;
				}
			}else if(size == 'borderRadius'){
				bordeRaS[statusQuo][0] = bruL1.value;
				bordeRaS[statusQuo][1] = bruR1.value;
				bordeRaS[statusQuo][2] = brbL1.value;
				bordeRaS[statusQuo][3] = brbR1.value;
				if(statusQuo==0&&borderRadiusStyle){
					bordeRaS[1][0] = bruL1.value;
					bordeRaS[1][1] = bruR1.value;
					bordeRaS[1][2] = brbL1.value;
					bordeRaS[1][3] = brbR1.value;
				}if(statusQuo==0&&borderRadiusStyleActiv){
					bordeRaS[2][0] = bruL1.value;
					bordeRaS[2][1] = bruR1.value;
					bordeRaS[2][2] = brbL1.value;
					bordeRaS[2][3] = brbR1.value;
				}
			}else if(size == 'backColor'){
				backColor[statusQuo][0] = sizeColor.value;
				if(statusQuo==0&&firstBackground){
					backColor[1][0] = sizeColor.value;
				}if(statusQuo==0&&secondBackground){
					backColor[2][0] = sizeColor.value;
				}
			}else if(size == 'bGradient'){
				backGradient[statusQuo][0] = backgroundRangeID.value;
				backGradient[statusQuo][1] = firstColor.value;
				backGradient[statusQuo][2] = bRCPO.value;
				backGradient[statusQuo][3] = secondColor.value;
				backGradient[statusQuo][4] = bRCPT.value;
				if(statusQuo==0&&fLg){
					backGradient[1][0] = backgroundRangeID.value;
					backGradient[1][1] = firstColor.value;
					backGradient[1][2] = bRCPO.value;
					backGradient[1][3] = secondColor.value;
					backGradient[1][4] = bRCPT.value;
				}if(statusQuo==0&&sLg){
					backGradient[2][0] = backgroundRangeID.value;
					backGradient[2][1] = firstColor.value;
					backGradient[2][2] = bRCPO.value;
					backGradient[2][3] = secondColor.value;
					backGradient[2][4] = bRCPT.value;
				}
			}else if(size == 'bsh'){
				boxShadowBox[statusQuo][0] = sdvigX.value;
				boxShadowBox[statusQuo][1] = sdvigY.value;
				boxShadowBox[statusQuo][2] = blur.value;
				boxShadowBox[statusQuo][3] = whidblur.value;
				boxShadowBox[statusQuo][4] = boxShadowColor.value;
				boxShadowBox[statusQuo][5] = shadowSide.checked;
				 if(statusQuo==0&&firstBoxShadow){
					boxShadowBox[1][0] = sdvigX.value;
					boxShadowBox[1][1] = sdvigY.value;
					boxShadowBox[1][2] = blur.value;
					boxShadowBox[1][3] = whidblur.value;
					boxShadowBox[1][4] = boxShadowColor.value;
					boxShadowBox[1][5] = shadowSide.checked;
				}if(statusQuo==0&&secondBoxShadow){
					boxShadowBox[2][0] = sdvigX.value;
					boxShadowBox[2][1] = sdvigY.value;
					boxShadowBox[2][2] = blur.value;
					boxShadowBox[2][3] = whidblur.value;
					boxShadowBox[2][4] = boxShadowColor.value;
					boxShadowBox[2][5] = shadowSide.checked;
				}
			}else if(size == 'Fsz'){
				fontSiZen[statusQuo][0] = fontSizeRange.value;
				if(statusQuo==0&&firstFontSize){
					fontSiZen[1][0] = fontSizeRange.value;
				}if(statusQuo==0&&secondFontSize){
					fontSiZen[2][0] = fontSizeRange.value;
				}
			}else if(size == 'Fcol'){
				fontCol[statusQuo][0] = fontColor.value;
				if(statusQuo==0&&firstFontColor){
					fontCol[1][0] = fontColor.value;
				}if(statusQuo==0&&secondFontColor){
					fontCol[2][0] = fontColor.value;
				}
			}else if(size == 'opus'){
				opaCity[statusQuo][0] = opacityRange.value;
				if(statusQuo==0&&firstOpacity){
					opaCity[1][0] = opacityRange.value;
				}if(statusQuo==0&&secondOpacity){
					opaCity[2][0] = opacityRange.value;
				}
			}else if(size == 'fontShOne'){
				saveFontSh[statusQuo][0] = fontShadowRangeX.value;
				saveFontSh[statusQuo][1] = fontShadowRangeY.value;
				saveFontSh[statusQuo][2] = fontShadowRangeBlur.value;
				saveFontSh[statusQuo][3] = fontShadowColor.value;
				if(statusQuo==0&&firstTextShadow){
					saveFontSh[1][0] = fontShadowRangeX.value;
					saveFontSh[1][1] = fontShadowRangeY.value;
					saveFontSh[1][2] = fontShadowRangeBlur.value;
					saveFontSh[1][3] = fontShadowColor.value;			
				}if(statusQuo==0&&secondTextShadow){
					saveFontSh[2][0] = fontShadowRangeX.value;
					saveFontSh[2][1] = fontShadowRangeY.value;
					saveFontSh[2][2] = fontShadowRangeBlur.value;
					saveFontSh[2][3] = fontShadowColor.value;;
				}
			}else if(size == 'fontShTwo'){
				saveFontShTwo[statusQuo][0][0] = leftFontShadowRangeX.value;
				saveFontShTwo[statusQuo][0][1] = leftFontShadowRangeY.value;
				saveFontShTwo[statusQuo][0][2] = leftFontShadowRangeBlur.value;
				saveFontShTwo[statusQuo][0][3] = leftFontShadowColor.value;

				saveFontShTwo[statusQuo][1][0] = rightFontShadowRangeX.value;
				saveFontShTwo[statusQuo][1][1] = rightFontShadowRangeY.value;
				saveFontShTwo[statusQuo][1][2] = rightFontShadowRangeBlur.value;
				saveFontShTwo[statusQuo][1][3] = rightFontShadowColor.value;
				if(statusQuo==0&&firstTtextShadowTwo){
					saveFontShTwo[1][0][0] = leftFontShadowRangeX.value;
					saveFontShTwo[1][0][1] = leftFontShadowRangeY.value;
					saveFontShTwo[1][0][2] = leftFontShadowRangeBlur.value;
					saveFontShTwo[1][0][3] = leftFontShadowColor.value;

					saveFontShTwo[1][1][0] = rightFontShadowRangeX.value;
					saveFontShTwo[1][1][1] = rightFontShadowRangeY.value;
					saveFontShTwo[1][1][2] = rightFontShadowRangeBlur.value;
					saveFontShTwo[1][1][3] = rightFontShadowColor.value;
				}if(statusQuo==0&&secondTtextShadowTwo){
					saveFontShTwo[2][0][0] = leftFontShadowRangeX.value;
					saveFontShTwo[2][0][1] = leftFontShadowRangeY.value;
					saveFontShTwo[2][0][2] = leftFontShadowRangeBlur.value;
					saveFontShTwo[2][0][3] = leftFontShadowColor.value;

					saveFontShTwo[2][1][0] = rightFontShadowRangeX.value;
					saveFontShTwo[2][1][1] = rightFontShadowRangeY.value;
					saveFontShTwo[2][1][2] = rightFontShadowRangeBlur.value;
					saveFontShTwo[2][1][3] = rightFontShadowColor.value;		
				}
			}else if(size == 'bordure'){
				saveBorder[statusQuo][0] = borderWidth.value;
				saveBorder[statusQuo][1] = borderStyle;
				saveBorder[statusQuo][2] = borderColor.value;
				if(statusQuo==0&&firstBorder){
					saveBorder[1][0] = borderWidth.value;
					saveBorder[1][1] = borderStyle;
					saveBorder[1][2] = borderColor.value;
				}if(statusQuo==0&&secondBorder){
					saveBorder[2][0] = borderWidth.value;
					saveBorder[2][1] = borderStyle;
					saveBorder[2][2] = borderColor.value;
				}
			// }else if(size == 'fontWeight'){
			// 	saveFontWeight[0] = fontSaturation.value;
			// 	if(firstSaturn){
			// 		saveFontWeight[1] = fontSaturation.value;
			// 	}if(secondSaturn){
			// 		saveFontWeight[2] = fontSaturation.value;
			// 	}
			// }else if(size == 'italicStyle'){
			// 	saveItalic[0] = italicStyle.checked;
			// 	if(firstFontStyle){
			// 		saveItalic[1] = italicStyle.checked;
			// 	}if(secondFontStyle){
			// 		saveItalic[2] = italicStyle.checked;
			// 	}
			}else if(size == 'decotText'){
				saveFontWeight[statusQuo][0] = fontSaturation.value;
				if(statusQuo==0&&firstSaturn){
					saveFontWeight[1][0] = fontSaturation.value;
				}if(statusQuo==0&&secondSaturn){
					saveFontWeight[2][0] = fontSaturation.value;
				}
				saveItalic[statusQuo][0] = italicStyle.checked;
				if(statusQuo==0&&firstFontStyle){
					saveItalic[1][0] = italicStyle.checked;
				}if(statusQuo==0&&secondFontStyle){
					saveItalic[2][0] = italicStyle.checked;
				}

				saveUnder[statusQuo][0] = underlineStyle.checked;
				saveUnder[statusQuo][1] = underLine[2].checked;
				saveUnder[statusQuo][2] = underLine[1].checked;
				saveUnder[statusQuo][3] = underLine[0].checked;

				saveStyleGroop[statusQuo][0] = italic;
				saveStyleGroop[statusQuo][1] = lendSaturn;
				saveStyleGroop[statusQuo][2] = underlineT;
				if(statusQuo==0&&firstTextDecoration){
					saveUnder[1][0] = underlineStyle.checked;
					saveUnder[1][1] = underLine[2].checked;
					saveUnder[1][2] = underLine[1].checked;
					saveUnder[1][3] = underLine[0].checked;

					saveStyleGroop[1][0] = italic;
					saveStyleGroop[1][1] = lendSaturn;
					saveStyleGroop[1][2] = underlineT;
				}if(statusQuo==0&&secondTestDecoration){
					saveUnder[2][0] = underlineStyle.checked;
					saveUnder[2][1] = underLine[2].checked;
					saveUnder[2][2] = underLine[1].checked;
					saveUnder[2][3] = underLine[0].checked;

					saveStyleGroop[2][0] = italic;
					saveStyleGroop[2][1] = lendSaturn;
					saveStyleGroop[2][2] = underlineT;
				}
			}else if(size == 'FamilyFont'){
				saveIndexFF[statusQuo][0] = indexFontFamily;
				if(statusQuo==0&&firstFontFamily){
					saveIndexFF[1][0] = indexFontFamily;
				}if(statusQuo==0&&secondFontFamily){
					saveIndexFF[2][0] = indexFontFamily;
				}
			}else if(size == 'openSHW'){
				openFontSh[statusQuo][0] = shadowOne.checked; 
				openFontSh[statusQuo][1] = shadowTwo.checked;
			
				saveChekedBC[statusQuo][0] = colorBackground.checked;
				saveChekedBC[statusQuo][1] = colorGradient.checked;
				saveChekedBC[statusQuo][2] = colorImage.checked;
				//saveTransformBlock = [rotate2D.checked, rotate3D.checked],
				saveTransformBlock[statusQuo][0] = rotate2D.checked;
				saveTransformBlock[statusQuo][1] = rotate3D.checked;

				//saveTransformBlock = rotateInput.checked, scaleInput.checked, skewInput.checked
				// saveTransformBlock[statusQuo][0] = rotateInput.checked;
				// saveTransformBlock[statusQuo][1] = scaleInput.checked;
				// saveTransformBlock[statusQuo][2] = skewInput.checked;
				// //rotate2D.checked rotate3D.checked scale2D.checked scale3D.checked
				// saveTransformBlock[statusQuo][3] = rotate2D.checked;
				// saveTransformBlock[statusQuo][4] = rotate3D.checked;
				// saveTransformBlock[statusQuo][5] = scale2D.checked;
			//	saveTransformBlock[statusQuo][6] = scale3D.checked;
				// if(statusQuo==0&&statusBlock){
				// // 	saveTransformBlock[1][0] = rotateInput.checked;
				// // 	saveTransformBlock[1][1] = scaleInput.checked;
				// // 	saveTransformBlock[1][2] = skewInput.checked;
				// // 	saveTransformBlock[2][0] = rotateInput.checked;
				// // 	saveTransformBlock[2][1] = scaleInput.checked;
				// // 	saveTransformBlock[2][2] = skewInput.checked;

				// // 	saveTransformBlock[1][3] = rotate2D.checked;
				// // 	saveTransformBlock[1][4] = rotate3D.checked;
				// // 	saveTransformBlock[1][5] = scale2D.checked;
				// // //	saveTransformBlock[1][6] = scale3D.checked;

				// // 	saveTransformBlock[2][3] = rotate2D.checked;
				// // 	saveTransformBlock[2][4] = rotate3D.checked;
				// // 	saveTransformBlock[2][5] = scale2D.checked;
				// // //	saveTransformBlock[2][6] = scale3D.checked;
				// }else{
				// 	//statusBlock = false;
				//}
			}else if(size == 'transform'){

				/*
				 saveTransformInp = [
				[[twoDRR.value, rotateX.value, rotateY.value, rotateZ.value, rotateDeg.value],
				[scaleR[0].value, scaleR[1].value],
				[inputRSkew[0].value, inputRSkew[1].value]],
				*/
				saveTransformInp[statusQuo][0][0] = twoDRR.value;
				saveTransformInp[statusQuo][0][1] = rotateX.value;
				saveTransformInp[statusQuo][0][2] = rotateY.value;
				saveTransformInp[statusQuo][0][3] = rotateZ.value;
				saveTransformInp[statusQuo][0][4] = rotateDeg.value;

				saveTransformInp[statusQuo][1][0] = scaleR[0].value;
				saveTransformInp[statusQuo][1][1] = scaleR[1].value;

				saveTransformInp[statusQuo][2][0] = inputRSkew[0].value;
				saveTransformInp[statusQuo][2][1] = inputRSkew[1].value;

				if(statusQuo==0&&firstTransform){
					saveTransformInp[1][0][0] = twoDRR.value;
					saveTransformInp[1][0][1] = rotateX.value;
					saveTransformInp[1][0][2] = rotateY.value;
					saveTransformInp[1][0][3] = rotateZ.value;
					saveTransformInp[1][0][4] = rotateDeg.value;

					saveTransformInp[1][1][0] = scaleR[0].value;
					saveTransformInp[1][1][1] = scaleR[1].value;

					saveTransformInp[1][2][0] = inputRSkew[0].value;
					saveTransformInp[1][2][1] = inputRSkew[1].value;
				}if(statusQuo==0&&secondTransform){
					saveTransformInp[2][0][0] = twoDRR.value;
					saveTransformInp[2][0][1] = rotateX.value;
					saveTransformInp[2][0][2] = rotateY.value;
					saveTransformInp[2][0][3] = rotateZ.value;
					saveTransformInp[2][0][4] = rotateDeg.value;

					saveTransformInp[2][1][0] = scaleR[0].value;
					saveTransformInp[2][1][1] = scaleR[1].value;

					saveTransformInp[2][2][0] = inputRSkew[0].value;
					saveTransformInp[2][2][1] = inputRSkew[1].value;
				}
			}else if(size == 'transist'){
				//saveTransist = [indexTransistText, styleTransist, rangeTransitTime[0].value],
				saveTransist[statusQuo][0] = indexTransistText;
				saveTransist[statusQuo][1] = styleTransist;
				saveTransist[statusQuo][2] = rangeTransitTime[0].value;
				if(statusQuo==0&&firstTrans){
					saveTransist[1][0] = indexTransistText;
					saveTransist[1][1] = styleTransist;
					saveTransist[1][2] = rangeTransitTime[0].value;
				}if(statusQuo==0&&secondTrans){
					saveTransist[2][0] = indexTransistText;
					saveTransist[2][1] = styleTransist;
					saveTransist[2][2] = rangeTransitTime[0].value;
				}
			}else if(size == 'bimg'){
				//var fid = sid = true;
				//saveBackImg = [backImageSizeX.value, backImageSizeY.value, backImagePosX.value, backImagePosY.value],
				saveBackImg[statusQuo][0] = backImageSizeX.value;
				saveBackImg[statusQuo][1] = backImageSizeY.value;
				saveBackImg[statusQuo][2] = backImagePosX.value;
				saveBackImg[statusQuo][3] = backImagePosY.value;
				if(statusQuo==0&&fid){
					saveBackImg[1][0] = backImageSizeX.value;
					saveBackImg[1][1] = backImageSizeY.value;
					saveBackImg[1][2] = backImagePosX.value;
					saveBackImg[1][3] = backImagePosY.value;
				}if(statusQuo==0&&sid){
					saveBackImg[2][0] = backImageSizeX.value;
					saveBackImg[2][1] = backImageSizeY.value;
					saveBackImg[2][2] = backImagePosX.value;
					saveBackImg[2][3] = backImagePosY.value;					
				}
			}else if(size == 'textGradient'){
				
				// var saveTextGrad = [
				// [fontRangeID.value, fontRCPO.value, fontRCPT.value]
				saveTextGrad[statusQuo][0] = fontRangeID.value;
				saveTextGrad[statusQuo][1] = fontRCPO.value;
				saveTextGrad[statusQuo][2] = fontRCPT.value;
				if(statusQuo==0&&firstTG){
					saveTextGrad[1][0] = fontRangeID.value;
					saveTextGrad[1][1] = fontRCPO.value;
					saveTextGrad[1][2] = fontRCPT.value;
				}if(statusQuo==0&&secondTG){
					saveTextGrad[2][0] = fontRangeID.value;
					saveTextGrad[2][1] = fontRCPO.value;
					saveTextGrad[2][2] = fontRCPT.value;
				}
			}
	}

	if(paramn == 'load'){
		if(celectStandartInput.checked){
			statusQuo = 0;
		}else if(celectHoverInput.checked){
			statusQuo = 1;
		}else if(celectActiveInput.checked){
			statusQuo = 2;
		}
		console.log('load '+statusQuo);
		//if(size == 'Standart'){
			widthItem.value = wRS[statusQuo][0];
			widthItem2.value = wRS[statusQuo][0];
			heightItem.value = wRS[statusQuo][1];
			heightItem2.value = wRS[statusQuo][1];
			sizeColor.value = backColor[statusQuo][0];

			bruL1.value = bordeRaS[statusQuo][0];
			bruR1.value = bordeRaS[statusQuo][1];
			brbL1.value = bordeRaS[statusQuo][2];
			brbR1.value = bordeRaS[statusQuo][3];

			brL1.value = bordeRaS[statusQuo][0];
			brL2.value = bordeRaS[statusQuo][1];
			brL3.value = bordeRaS[statusQuo][2];
			brL4.value = bordeRaS[statusQuo][3];

			backgroundRangeID.value = backGradient[statusQuo][0];
			backgroundTextID.value = backGradient[statusQuo][0];
			firstColor.value = backGradient[statusQuo][1];
			bRCPO.value = backGradient[statusQuo][2];
			secondColor.value = backGradient[statusQuo][3];
			bRCPT.value = backGradient[statusQuo][4];
			bTCPO.value = backGradient[statusQuo][2];
			bTCPT.value = backGradient[statusQuo][4];

			sdvigXInp.value = boxShadowBox[statusQuo][0];
			sdvigX.value = boxShadowBox[statusQuo][0];
			sdvigYInp.value = boxShadowBox[statusQuo][1];
			sdvigY.value = boxShadowBox[statusQuo][1];
			blurInp.value = boxShadowBox[statusQuo][2];
			blur.value = boxShadowBox[statusQuo][2];
			whidblurInp.value = boxShadowBox[statusQuo][3];
			whidblur.value = boxShadowBox[statusQuo][3];
			boxShadowColor.value = boxShadowBox[statusQuo][4];
			shadowSide.checked = boxShadowBox[statusQuo][5];

			fontSizeRange.value = fontSiZen[statusQuo][0];
			fontSizeText.value = fontSiZen[statusQuo][0];
			fontColor.value = fontCol[statusQuo][0];

			opacityRange.value = opaCity[statusQuo][0];
			opacityText.value = opaCity[statusQuo][0];

			fontShadowRangeX.value = saveFontSh[statusQuo][0];
			fontShadowTextX.value = saveFontSh[statusQuo][0];
			fontShadowRangeY.value = saveFontSh[statusQuo][1];
			fontShadowTextY.value = saveFontSh[statusQuo][1];
			fontShadowRangeBlur.value = saveFontSh[statusQuo][2];
			fontShadowTextBlur.value = saveFontSh[statusQuo][2];
			fontShadowColor.value = saveFontSh[statusQuo][3];	

			leftFontShadowRangeX.value = saveFontShTwo[statusQuo][0][0];
			leftFontShadowTextX.value = saveFontShTwo[statusQuo][0][0];
			leftFontShadowRangeY.value = saveFontShTwo[statusQuo][0][1];
			leftFontShadowTextY.value = saveFontShTwo[statusQuo][0][1];
			leftFontShadowRangeBlur.value = saveFontShTwo[statusQuo][0][2];
			leftFontShadowTextBlur.value = saveFontShTwo[statusQuo][0][2];
			leftFontShadowColor.value = saveFontShTwo[statusQuo][0][3];

			rightFontShadowRangeX.value = saveFontShTwo[statusQuo][1][0];
			rightFontShadowTextX.value = saveFontShTwo[statusQuo][1][0];
			rightFontShadowRangeY.value = saveFontShTwo[statusQuo][1][1];
			rightFontShadowTextY.value = saveFontShTwo[statusQuo][1][1];
			rightFontShadowRangeBlur.value = saveFontShTwo[statusQuo][1][2];
			rightFontShadowTextBlur.value = saveFontShTwo[statusQuo][1][2];
			rightFontShadowColor.value = saveFontShTwo[statusQuo][1][3];

			borderWidth.value = saveBorder[statusQuo][0];
			borderWidth2.value = saveBorder[statusQuo][0];
			borderStyle2.selectedIndex = saveBorder[statusQuo][1];
			borderColor.value = saveBorder[statusQuo][2];

			fontSaturation.value = saveFontWeight[statusQuo][0];
			fontSaturationText.value = saveFontWeight[statusQuo][0];

			italicStyle.checked = saveItalic[statusQuo][0];

			/*
				saveUnder[0][0] = underlineStyle.checked;
				saveUnder[0][1] = underLine[2].checked;
				saveUnder[0][2] = underLine[1].checked;
				saveUnder[0][3] = underLine[0].checked;
			*/
			underlineStyle.checked = saveUnder[statusQuo][0];
			underLine[2].checked = saveUnder[statusQuo][1];
			underLine[1].checked = saveUnder[statusQuo][2];
			underLine[0].checked = saveUnder[statusQuo][3];

			//saveIndexFF[0] = indexFontFamily;
			fontFamilyStyle[saveIndexFF[statusQuo][0]].checked = true;

			italic = saveStyleGroop[statusQuo][0];
			lendSaturn = saveStyleGroop[statusQuo][1];
			underlineT = saveStyleGroop[statusQuo][2];

			shadowOne.checked = openFontSh[statusQuo][0];
			shadowTwo.checked = openFontSh[statusQuo][1];
			colorBackground.checked = saveChekedBC[statusQuo][0];
			colorGradient.checked = saveChekedBC[statusQuo][1];
			colorImage.checked = saveChekedBC[statusQuo][2];

			rotate2D.checked = saveTransformBlock[statusQuo][0];
			rotate3D.checked = saveTransformBlock[statusQuo][1];

			// rotateInput.checked = saveTransformBlock[statusQuo][0];
			// scaleInput.checked = saveTransformBlock[statusQuo][1];
			// skewInput.checked = saveTransformBlock[statusQuo][2];

			// rotate2D.checked = saveTransformBlock[statusQuo][3];
			// rotate3D.checked = saveTransformBlock[statusQuo][4];
			// scale2D.checked = saveTransformBlock[statusQuo][5];
		//	scale3D.checked = saveTransformBlock[statusQuo][6];

		/*
				saveTransformInp[statusQuo][0][0] = twoDRR.value;
				saveTransformInp[statusQuo][0][1] = rotateX.value;
				saveTransformInp[statusQuo][0][2] = rotateY.value;
				saveTransformInp[statusQuo][0][3] = rotateZ.value;
				saveTransformInp[statusQuo][0][4] = rotateDeg.value;

				saveTransformInp[statusQuo][1][0] = scaleR[0].value;
				saveTransformInp[statusQuo][1][1] = scaleR[1].value;

				saveTransformInp[statusQuo][2][0] = inputRSkew[0].value;
				saveTransformInp[statusQuo][2][1] = inputRSkew[1].value;

		*/
			twoDRT.value = saveTransformInp[statusQuo][0][0];
			twoDRR.value = saveTransformInp[statusQuo][0][0];


			rotateXT.value = saveTransformInp[statusQuo][0][1];
			rotateYT.value = saveTransformInp[statusQuo][0][2];
			rotateZT.value = saveTransformInp[statusQuo][0][3];
			rotateDegT.value = saveTransformInp[statusQuo][0][4];
			rotateX.value = saveTransformInp[statusQuo][0][1]; 
			rotateY.value = saveTransformInp[statusQuo][0][2];
			rotateZ.value = saveTransformInp[statusQuo][0][3];
			rotateDeg.value = saveTransformInp[statusQuo][0][4];


			scaleT[0].value = saveTransformInp[statusQuo][1][0];
			scaleT[1].value = saveTransformInp[statusQuo][1][1];
			scaleR[0].value = saveTransformInp[statusQuo][1][0];
			scaleR[1].value = saveTransformInp[statusQuo][1][1];

			inputTextSkew[0].value = saveTransformInp[statusQuo][2][0];
			inputTextSkew[1].value = saveTransformInp[statusQuo][2][1];
			inputRSkew[0].value = saveTransformInp[statusQuo][2][0];
			inputRSkew[1].value = saveTransformInp[statusQuo][2][1];


			
			styleTransist2.selectedIndex = saveTransist[statusQuo][1];
			inputTransition[saveTransist[statusQuo][0]].checked = true;
			
			//borderStyle2.selectedIndex = saveBorder[statusQuo][1];
			//fontFamilyStyle[saveIndexFF[statusQuo][0]].checked = true;
			rangeTransitTime[0].value = saveTransist[statusQuo][2];
			textTransitTime[0].value = saveTransist[statusQuo][2];

			backImageSizeX.value = saveBackImg[statusQuo][0];
			backImageSizeY.value = saveBackImg[statusQuo][1];
			backImagePosX.value = saveBackImg[statusQuo][2];
			backImagePosY.value = saveBackImg[statusQuo][3];

			backImageSizeXT.value = saveBackImg[statusQuo][0];
			backImageSizeYT.value = saveBackImg[statusQuo][1];
			backImagePosXT.value = saveBackImg[statusQuo][2];
			backImagePosYT.value = saveBackImg[statusQuo][3];

			fontRangeID.value = saveTextGrad[statusQuo][0];
			fontRCPO.value = saveTextGrad[statusQuo][1];
			fontRCPT.value = saveTextGrad[statusQuo][2];

			fontTextID.value = saveTextGrad[statusQuo][0];
			fontTCPO.value = saveTextGrad[statusQuo][1];
			fontTCPT.value = saveTextGrad[statusQuo][2];
	
		if(styleFont.checked) {
			exampleFont();
			openDiv();
		}
		if(textShadowLabel.checked){
				shadowFontWindow();
			}
		if(sizeLable.checked){
			openBlockNone();
		}
		if(transformLable.checked){
			openTransform();
		}
		GradientRebild();
		
	}
}

function GradientRebild(){
	for (var i = 0; i < inputRange.length; i++) {
		GradientRange(inputRange[i]);
	}
}

function GradientRange(Hash){
	
	var min = Number(Hash.getAttribute('min'));
	var hashValue = Number(Hash.value);
	var max = Number(Hash.getAttribute('max'));
	var maxmin = 0;
	if(hashValue<0){
		//hashValue = hashValue * (-1);
	}
	if(min<0){
		min = min * (-1);
		//console.log(min); 
		maxmin= max + min;
		//console.log(maxmin);
		hashValue = hashValue + min;
		//console.log(hashValue);
	} else if (min>0) {
		maxmin = max - min;
		hashValue = hashValue - min;
	} else if (min==0) {
		maxmin = max;
	}

	
	var value = (hashValue / maxmin) * 100;  //((max + min)*Hash.value)%100;

	//var rezal = value;
	Hash.style.background = 'linear-gradient(to right, #D73B77 '+value+'%, white 0%)';
	// console.log(Hash);
	// console.log(value);
	//console.log((hashValue / maxmin) *100); // Hash.value);
	//console.log(min+max);

}
//var addCssRule = function(/* string */ selector, /* string */ rule) {
/*

function makeHash(source) {
  var hash = 0;
  if (source.length === 0) return hash;
  for (var i = 0; i < source.length; i++) {
    var char = source.charCodeAt(i);
    hash = ((hash<<5)-hash)+char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return hash;
}

var t0 = performance.now();
var result = makeHash('Peter');
var t1 = performance.now();
console.log('Took', (t1 - t0).toFixed(4), 'milliseconds to generate:', result);

  if (document.styleSheets) {
    if (!document.styleSheets.length) {
      var head = document.getElementsByTagName('head')[0];
      head.appendChild(bc.createEl('style'));
    }

    var i = document.styleSheets.length-1;
    var ss = document.styleSheets[i];

    var l=0;
    if (ss.cssRules) {
      l = ss.cssRules.length;
    } else if (ss.rules) {
      // IE
      l = ss.rules.length;
    }

    if (ss.insertRule) {
      ss.insertRule(selector + ' {' + rule + '}', l);
    } else if (ss.addRule) {
      // IE
      ss.addRule(selector, rule, l);
    }
  }
};
*//*
 	window.onload = function(){

        var docStyles = document.styleSheets[1];
		docStyles.insertRule("#block:hover {color: #0010FF;}", 1);
		docStyles.addRule("#block:hover", "color: #0300FF", 1);
		docStyles.addRule("#block:hover", "background: #0000FF", 1);
		docStyles.addRule("#block", "border: solid 1px red", 1);
		var peremen = '';
		var hoverTime = '';
		var hover = '#block:hover {';
		var standartTime = '';
		var standart = '';
		for(var i = 0; i<docStyles.cssRules.length; i++ ){
			if(docStyles.cssRules[i].cssText[6] == ':'){
				hoverTime += docStyles.cssRules[i].cssText;
			} else if(docStyles.cssRules[i].cssText[6] == ' '){
				standartTime += docStyles.cssRules[i].cssText;
			}
			//console.log(docStyles.cssRules[i].cssText)

			peremen += docStyles.cssRules[i].cssText;
			//console.log(docStyles.cssRules[i].cssText[i]);
			
		}			
			var too = '}';
			var heverenTime ='';
			heverenTime += hoverTime.replace(/(#block:hover) ({)/gi, '');
			hover += heverenTime.replace(/(})/gi, '');
			hover += '}'
			console.log(hover);
			//console.log(standartTime);
		
	

    };
	*/


var leftColum = document.getElementById('br');
var invisButton = document.getElementsByClassName('invisButton');
invisButton[0].style.display = 'block';
leftColum.onmousemove = function(event){
	movetmousclick();
	}
leftColum.onclick = function(event){
	movetmousclick();
	}
function movetmousclick(){
		
		invisButton[0].style.display = 'none';

		if(celectStandartInput.checked){
			invisButton[3].style.display = 'none';
			invisButton[2].style.display = 'none';
			invisButton[1].style.display = 'block';
		} else if(celectHoverInput.checked){
			invisButton[1].style.display = 'none';
			invisButton[3].style.display = 'none';
			invisButton[2].style.display = 'block';
		} else if(celectActiveInput.checked){
			invisButton[1].style.display = 'none';
			invisButton[2].style.display = 'none';
			invisButton[3].style.display = 'block';
		}
}	
leftColum.onmouseout = function(event){
			
			invisButton[1].style.display = 'none';
			invisButton[2].style.display = 'none';
			invisButton[3].style.display = 'none';
			invisButton[0].style.display = 'block';
		
	}


	// var keks = testStyleSheets();
	// var keks2 = testStyleSheets2();
	// var keks3 = testStyleSheets3();

// function hoverStyle(style){
// 			styleH += ' }';
// 		  	var docStyles = keks2;
// 		   	var testesTime = docStyles.cssRules[0].cssText;
// 		 //  var testesTime = docStyles.cssRules[0].cssText;
// 		   if(docStyles.cssRules[0] != undefined) docStyles.deleteRule(0);
// 		  	var hover = testesTime.replace(/}/, style);
// 			docStyles.insertRule(hover, 0);
// 			//console.log(docStyles.cssRules[0].cssText);
// 		}

// function activeStyle(style){
// 			styleA += ' }';
// 			var docStyles = keks3;
// 			var testesTime = docStyles.cssRules[0].cssText;
// 			if(docStyles.cssRules[0] != undefined) docStyles.deleteRule(0);
// 			var active = testesTime.replace(/}/, style);
// 			docStyles.insertRule(active, 0);
// 			//console.log(docStyles.cssRules[0].cssText);
// 		//	console.log(style);
// 		}


function standartStyle(){

	
	var kaka = blockStandart.getAttribute('style');
	if(kaka != null){
		console.log(blockHover.getAttribute('style'));
		var kakaHover = blockHover.getAttribute('style') != null ? newFortest(blockStandart.getAttribute('style'), blockHover.getAttribute('style')) : '';
		var kakaActive = blockActive.getAttribute('style') != null ? newFortest(blockStandart.getAttribute('style'), blockActive.getAttribute('style')) : '';
	
  	//console.log(kakaHover.length);

	 
		   //var testesTime = docStyles.cssRules[0].cssText;
		   // var standartSetting = 'position: absolute; top: 0px; bottom: 0px; left: 0px; right: 0px; margin: auto; ';//width: 67px; height: 22px; 
		   // var rezist = kaka.search( /width/i );
		   // if(rezist == '-1') standartSetting += 'width: 67px; height: 22px; ';
		   //var standart = docStyles.cssRules[0].cssText.replace(/}/, kaka);
		}else{
			kaka = '';
		var	kakaHover = blockHover.getAttribute('style') != null? blockHover.getAttribute('style'): '';
		var	kakaActive = blockActive.getAttribute('style') != null? blockActive.getAttribute('style'): '';
	//	console.log(kakaActive);
		}
		var standartSetting = 'position: absolute; top: 0px; bottom: 0px; left: 0px; right: 0px; margin: auto; ';//width: 67px; height: 22px; 
		var rezist = kaka.search( /width/i );
		if(rezist == '-1') standartSetting += 'width: 67px; height: 22px; ';
		var docStyles = keks;
		   
		   if(docStyles.cssRules[0] != undefined) 
		   	for (var i = docStyles.cssRules.length - 1; i >= 0; i--) {
		   		docStyles.deleteRule(0);
		   	//	console.log(keks);
		   	}
		   //	newFortest(blockStandart.getAttribute('style'), blockHover.getAttribute('style'));
		  // style += '}';
		    
		    //var standart = '#wh1skasGenerator { '+standartSetting+''+kaka;
		    // var hover = docStyles.cssRules[1].cssText.replace(/}/, kakaHover);
		   // if(kakaHover.length > 0)
		    // var hover = '#wh1skasGenerator:hover { '+kakaHover+' }';
		    // //var active = docStyles.cssRules[2].cssText.replace(/}/, kakaActive);
		    // if(kakaActive.length > 0)
		    var index = 0;
		    
		    	var standart = '#wh1skasGenerator { '+standartSetting+''+kaka+' }';
				docStyles.insertRule(standart, index++);
		    
			
			
			if(kakaHover.length > 0){
				var hover = '#wh1skasGenerator:hover { '+kakaHover+' }';
				docStyles.insertRule(hover, index++);
				//console.log(hover);
				//console.log(kakaHover.length);
				//console.log(docStyles);
			}
			
			if(kakaActive.length > 0){
				var active = '#wh1skasGenerator:active { '+kakaActive+' }';
				docStyles.insertRule(active, index++);
			}
			if(iconFlag){
	
				  	var kakaicon = iconS.getAttribute('style');
				  	//console.log(kakaicon);
				  	//console.log('1');
				  	if(kakaicon == null){
				  		kakaicon = '';
				  	}
				  	var kakaiconHov = iconH.getAttribute('style');
				  	if(kakaiconHov != null){
				  	//	console.log('1');
				  		kakaiconHov = newFortest(iconS.getAttribute('style'), iconH.getAttribute('style'));
				  	}else{
				  		kakaiconHov = '';
				  	}
			 		var kakaiconAct = iconA.getAttribute('style');

			 		if(kakaiconAct != null){
			 			
						kakaiconAct = newFortest(iconS.getAttribute('style'), iconA.getAttribute('style'));
					//	console.log(kakaiconAct);
			 		}else{
			 			kakaiconAct = '';
			 		}
				  	
				
				if(kakaicon.length > 0){
					var iconStd = '.iconButton { position: absolute; '+kakaicon+' }';
					docStyles.insertRule(iconStd, index++);
				}else{
					var iconStd = '.iconButton { position: absolute; }';
					docStyles.insertRule(iconStd, index++);
				}if(kakaiconHov.length > 0){
					var iconHov = '#wh1skasGenerator:hover .iconButton { '+kakaiconHov+' }';
					docStyles.insertRule(iconHov, index++);
				}if(kakaiconAct.length > 0){
					var iconAct = '#wh1skasGenerator:active .iconButton { '+kakaiconAct+' }';
					docStyles.insertRule(iconAct, index++);
				}

			}
			if(flagTextGrad){
				/*var textButtonStandart = document.getElementById('textButtonStandart');
				var textButtonHover = document.getElementById('textButtonHover');
				var textButtonActive = document.getElementById('textButtonActive');*/
				var gakaS = textButtonStandart.getAttribute('style');
				var gakaH = textButtonHover.getAttribute('style');
				var gakaA = textButtonActive.getAttribute('style');
				console.log(gakaS);
				console.log(textColorСhoiceH);
				gakaSplus = gakaS == null? '': gakaS.replace(/ text; -webkit-text-fill-color: transparent;/, ';');

				//console.log(gakaSplus);
				
					
					gakaH = gakaH == null? '':gakaH.replace(/ text; -webkit-text-fill-color: transparent;/, ';');
					gakaH = gakaH != null? newFortest(gakaSplus, gakaH):gakaH;
					//console.log(gakaSplus);
					// console.log(gakaH);
					// console.log(gakaH.length);
					gakaA = gakaA == null? '':gakaA.replace(/ text; -webkit-text-fill-color: transparent;/, ';');
					gakaA = gakaA != null? newFortest(gakaSplus, gakaA):gakaA;
				
				// textColorСhoiceS
				// textColorСhoiceH
				// textColorСhoiceA inherit
				console.log(gakaSplus);
				var stands = ' -webkit-background-clip: text; -webkit-text-fill-color: '+textColorСhoiceS+';';
				var standh = ' -webkit-background-clip: text; -webkit-text-fill-color: '+textColorСhoiceH+';';
				var standa = ' -webkit-background-clip: text; -webkit-text-fill-color: '+textColorСhoiceA+';';
				console.log(gakaSplus+', '+stands);
				if(textColorСhoiceS == 'transparent'){
					var spanStd = '#wh1skasGenerator span { '+gakaSplus+stands+' }';
					docStyles.insertRule(spanStd, index++);
				}else{
					var spanStd = '#wh1skasGenerator span { -webkit-text-fill-color: inherit }';
					docStyles.insertRule(spanStd, index++);
				}
				if(textColorСhoiceH == 'transparent'){
					var spanHov = '#wh1skasGenerator:hover span { '+gakaH+standh+' }';
					docStyles.insertRule(spanHov, index++);
				}else{
					var spanHov = '#wh1skasGenerator:hover span { -webkit-text-fill-color: inherit }';
					docStyles.insertRule(spanHov, index++);
				}
				if(textColorСhoiceA == 'transparent'){
					var spanAct = '#wh1skasGenerator:active span { '+gakaA+standa+' }';
					docStyles.insertRule(spanAct, index++);
				}else{
					var spanAct = '#wh1skasGenerator:active span { -webkit-text-fill-color: inherit }';
					docStyles.insertRule(spanAct, index++);
				}
			}

			//console.log(gakaH);
}

function newFortest(fir, sec){
	
	if(fir == null) return sec;
	//console.log(fir);
	fir = fir.replace(/; /g, '; _');
	//console.log(fir);
	// //fir = fir.replace(/#wh1skasGenerator { /, '');
	// console.log(fir);
	// //fir = fir.replace(/}/, '');
	// console.log(fir);
	// firlength = fir.match(/;/g);
	var arry = [];
	
	arry = fir.split(/_/);
	for(var i = 0; i< arry.length; i++){
		sec = sec.replace(arry[i], '');
		 	
		//fir = fir.replace(/_/, '$`');
	}
	//console.log(sec.search(/ /));
	//sec = sec.replace(/ /, '');
	if(sec[0] == ' '){
		sec = sec.replace(/ /, '');
		
	}
	
	return sec;
}

//textextsxtdf
function standartStyleIcon(style, rar){
//	console.log(style);
	style += ' }';
  
 // console.log(docStyles);
	 var docStyles = rar;
		   var testesTime = docStyles.cssRules[0].cssText;
		//   console.log(testesTime);
		   if(docStyles.cssRules[0] != undefined) docStyles.deleteRule(0);
		  // style += '}';
		   var standart = testesTime.replace(/}/, style);
			docStyles.insertRule(standart, 0);
		//	console.log(standart);
}

function testStyleSheets(){
	var timeoutstep;
	for(var i = 0; i<document.styleSheets.length; i++){
		//console.log(document.styleSheets[i]);
		timeoutstep = document.styleSheets[i];
		if(timeoutstep.href == null && timeoutstep.cssRules.length > 0){
			if(timeoutstep.cssRules[0].selectorText == '#wh1skasGenerator'){
				return timeoutstep;
			}
		}
	}
}
function testStyleSheets2(){
	var timeoutstep;
	for(var i = 0; i<document.styleSheets.length; i++){
		timeoutstep = document.styleSheets[i];
		if(timeoutstep.href == null && timeoutstep.cssRules.length > 0){
			if(timeoutstep.cssRules[0].selectorText == '#wh1skasGenerator:hover'){
				return timeoutstep;
			}
		}
	}
}
function testStyleSheets3(){
	var timeoutstep;
	for(var i = 0; i<document.styleSheets.length; i++){
		timeoutstep = document.styleSheets[i];
		if(timeoutstep.href == null && timeoutstep.cssRules.length > 0){
			if(timeoutstep.cssRules[0].selectorText == '#wh1skasGenerator:active'){
				return timeoutstep;
			}
		}
	}
}
function testStyleSheetsIcon(){
	var timeoutstep;
	for(var i = 0; i<document.styleSheets.length; i++){
		timeoutstep = document.styleSheets[i];
		if(timeoutstep.href == null && timeoutstep.cssRules.length > 0){
			if(timeoutstep.cssRules[0].selectorText == '.iconButton'){
				return timeoutstep;
			}
		}
	}
}
function testStyleSheetsIconH(){
	var timeoutstep;
	for(var i = 0; i<document.styleSheets.length; i++){
		timeoutstep = document.styleSheets[i];
		if(timeoutstep.href == null && timeoutstep.cssRules.length > 0){
			if(timeoutstep.cssRules[0].selectorText == '#wh1skasGenerator:hover .iconButton'){
			//	console.log(timeoutstep.cssRules[0]);
				return timeoutstep;
			}
		}
	}
}
function testStyleSheetsIconA(){
	var timeoutstep;
	for(var i = 0; i<document.styleSheets.length; i++){
		timeoutstep = document.styleSheets[i];
		if(timeoutstep.href == null && timeoutstep.cssRules.length > 0){
			if(timeoutstep.cssRules[0].selectorText == '#wh1skasGenerator:active .iconButton'){
				return timeoutstep;
			}
		}
	}
}
// testStyleSheets();
	//	var cer = 'color: red; background: green;';
	//	hoverStyle(cer);
// function ururur(){
// 		    var docStyles = document.styleSheets[1];
// 			docStyles.insertRule("#wh1skasGenerator:hover {color: blue;}", 1);
			
// 			docStyles.insertRule("#wh1skasGenerator:hover {color: green;}", 1);
			
// 		//	docStyles.addRule("#wh1skasGenerator:hover", "color: blue", 1);
			
// 			//docStyles.addRule("#wh1skasGenerator:hover", "color: yellow", 1);

// 			//docStyles.removeRule(1)
// 			//docStyles.addRule("#wh1skasGenerator:hover", "background: #0000FF", 1);
// 		//	docStyles.addRule("#wh1skasGenerator", "border: solid 1px red", 1);
// 		//	var peremen = '';
// 			var hoverTime = '';
// 			var hoverStart = '#wh1skasGenerator:hover {';
// 		for(var i = 0; i<docStyles.cssRules.length; i++ ){
// 			if(docStyles.cssRules[i].selectorText == '#wh1skasGenerator:hover'){
// 				hoverTime += docStyles.cssRules[i].cssText;
// 			} 
// 			//console.log(docStyles.cssRules[i].cssText)

// 			//peremen += docStyles.cssRules[i].cssText;
// 			//console.log(docStyles.cssRules[i].cssText[i]);
			
// 		}			
			
// 			var heverenTime ='';
// 			heverenTime = hoverTime.replace(/(#wh1skasGenerator:hover) ({)/gi, '');
// 			//hoverTime = '';
// 			//var hover = heverenTime.replace(/(})/gi, '');
// 			var hoverEND = '}'
			
// 		//	console.log(docStyles);
			
// }
//ururur();
var celectStandart = document.getElementById('celectStandart');
var celectHover = document.getElementById('celectHover');
var celectActive = document.getElementById('celectActive');

var celectStandartInput = document.getElementById('celectStandartInput');
var celectHoverInput = document.getElementById('celectHoverInput');
var celectActiveInput = document.getElementById('celectActiveInput');
var iconButton = document.getElementsByClassName('iconButton');
function timeCod(){
	
	// var kaka = blockStandart.getAttribute('style');
	// var kakaHover = blockHover.getAttribute('style');
	// var kakaActive =  blockActive.getAttribute('style');
	var kakaSpan = textButton.getAttribute('style');
	//var kakaIcon = keke.cssRules[0].cssText;

	// if(iconFlag){
	// 	// standartStyleIcon(iconTag[1].getAttribute('style'), kekeI);
	// 	// standartStyleIcon(iconTag[2].getAttribute('style'), kekeIH);
	// 	// standartStyleIcon(iconTag[3].getAttribute('style'), kekeIA);
	// 	console.log(kekeIA);		
	// }

	//var kakaIconS
	//if(celectStandartInput.checked){
		standartStyle();
		
	//} else if(celectHoverInput.checked){
		//hoverStyle(kakaHover);
//	} else if(celectActiveInput.checked){
		//activeStyle(kakaActive);
	//}
	//codgener.value = 'wh1skasButton {\n 	'+kaka+'\n}';
	var textCodGener = '';
	if(keks.cssRules.length>0){
		for(var i = 0; i< keks.cssRules.length; i++){
			textCodGener += keks.cssRules[i].cssText;
			
		}
	}

	// var str = textarebild(keks.cssRules[0].cssText);
	//'';
	// if(kaka != undefined && kaka != null){
	// 	for(var i = 0; i<kaka.length; i++){
				
	// 		if(kaka[i-1] == ';'){
	// 			str += kaka[i]+'\n\t';
	// 		} else {
	// 			str += kaka[i];
	// 		}
	// 	}
	// }
	// var strhover = '';
	// if(keks.cssRules.length > 1){
	// 	strhover = textarebild(keks.cssRules[1].cssText);//'';keks2
	// }else{
	// 	strhover = '';
	// }
	// if(kakaHover != undefined && kakaHover != null){
	// 	for(var i = 0; i<kakaHover.length; i++){
				
	// 		if(kakaHover[i-1] == ';'){
	// 			strhover += kakaHover[i]+'\n\t';
	// 		} else {
	// 			strhover += kakaHover[i];
	// 		}
	// 	}
	// }
	//console.time('test');
	// var stractive = '';
	// if(keks.cssRules.length > 2){
	// 	stractive = textarebild(keks.cssRules[2].cssText);//'';keks2
	// }else{
	// 	stractive = '';
	// }
	// if(kakaActive != undefined && kakaActive != null){		
	// 	for(var i = 0; i<kakaActive.length; i++){
			
	// 		if(kakaActive[i-1] == ';'){
	// 			stractive += kakaActive[i]+'\n\t';
	// 		} else {
	// 			stractive += kakaActive[i];
	// 		}
	// 	}
	// }
	//console.timeEnd('test');
	// var strKakaSpan = '';
	// if(kakaSpan != null){
	// 	for(var i = 0; i<kakaSpan.length; i++){
			
	// 		if(kakaSpan[i-1] == ';'){
	// 			strKakaSpan += kakaSpan[i]+'\n\t';
	// 		} else {
	// 			strKakaSpan += kakaSpan[i];
	// 		}
	// 	}		
	// }

		// if(inputGradientRACF.checked){
		// 		if(kakaActive != null){
		// 			codgener.value = '#wh1skasButton {\n 	'+str+'\n}\n#wh1skasButton:hover {\n 	'+strhover+'\n}\n#wh1skasButton:active {\n 	'+stractive+'\n}\n#textButton {\n 	'+strKakaSpan+'\n}';
		// 		}else if(kakaHover != null){
		// 			codgener.value = '#wh1skasButton {\n 	'+str+'\n}\n#wh1skasButton:hover {\n 	'+strhover+'\n}\n#textButton {\n 	'+strKakaSpan+'\n}';
		// 		} else {
		// 			codgener.value = '#wh1skasButton {\n 	'+str+'\n}\n#textButton {\n 	'+strKakaSpan+'\n}';
		// 		}
		// } else{





			
			// if(iconFlag){
			// 	console.time(kakaIcon);

			// 	kakaIcon = textarebild(kakaIcon);
			// 	//console.timeEnd('test');
			// 	//console.log(kakaIcon);
			// 	iconCod = '\n'+kakaIcon+'\n';
			// }else{
			// 	iconCod = '';
			// }
			// console.log(iconFlag);

				//if(kakaActive != null){
					codgener.value = textarebild(textCodGener);
				// }else if(kakaHover != null){
				// 	codgener.value = str+'\n'+strhover+iconCod;
				// } else {
				// 	codgener.value = str+iconCod;
				// }
		//	}
				
	//codgener.value = '.wh1skasButton {\n 	'+str+'\n}\n.wh1skasButton:hover {\n 	'+strhover+'\n}\n.wh1skasButton:active {\n 	'+stractive+'\n}';
		//codgener.innerHTML = '#wh1skasGenerator {\n	'+str+'\n}';
		
}

//classIconText = classIcon.value != '' ? returnClass(classIcon.value) : 'iconButton'; -webkit-background-clip: text;
function textarebild(text){
				text = text.replace(/#wh1skasGenerator/g, '.'+classNameHTML);
				text = text.replace(/iconButton/g, classIconText);
				if(text.search(/-webkit-background-clip: text;/) == '-1'){ //console.log(text.search(/-webkit-background-clip: text;/));
					text = text.replace(/ text;/g, '; -webkit-background-clip: text;');}
				text = text.replace(/background-clip:;/g, '');
				text = text.replace(/position: absolute; top: 0px; bottom: 0px; left: 0px; right: 0px; margin: auto; /, '');
				text = text.replace(/{ /g, '{\n\t');
				text = text.replace(/; /g, ';\n\t');
				text = text.replace(/;\n\t}/g, ';\n}');
				text = text.replace(/}/g, '}\n');
				//console.log(text);
				return text;
}

var textButtonLable = document.getElementById('textButtonLable');
var sizeLable = document.getElementById('sizeLable');
var borderRadiusLable = document.getElementById('borderRadiusLable');
var borderLable = document.getElementById('borderLable');
var boxShadowLable = document.getElementById('boxShadowLable');
var sizeColorFont = document.getElementById('sizeColorFont');
var transformLable = document.getElementById('transformLable');

var textButtonWrapper = document.getElementById('textButtonWrapper');
var sizeWrapper = document.getElementById('sizeWrapper');
var borderRadiusWrapper = document.getElementById('borderRadiusWrapper');
var borderWrapper = document.getElementById('borderWrapper');
var boxShadowWrapper = document.getElementById('boxShadowWrapper');
var SACWrapper = document.getElementById('SACWrapper');
var transformWrapper = document.getElementById('transformWrapper');

function myFunctionChec(){

	// if(textButtonLable.checked){
	// 	textButtonWrapper.style.display = 'block';
	// } else {
	// 	textButtonWrapper.style.display = 'none';
	// }
	// if(sizeColorFont.checked){
	// 	SACWrapper.style.display = 'block';
	// } else {
	// 	SACWrapper.style.display = 'none';
	// }
	// /////
	// if(textShadowLabel.checked){
	// 	textShadowWrapper.style.display = 'block';
	// } else {
	// 	textShadowWrapper.style.display = 'none';
	// }
	// if(sizeLable.checked){
	// 	sizeWrapper.style.display = 'block';
	// }else{
	// 	sizeWrapper.style.display = 'none';
	// }

	// if(borderRadiusLable.checked){
	// 	borderRadiusWrapper.style.display = 'block';
	// }else{
	// 	borderRadiusWrapper.style.display = 'none';
	// }
	// if(transformLable.checked){
	// 	transformWrapper.style.display = 'block';
	// } else{
	// 	transformWrapper.style.display = 'none';
	// } 

	// if(borderLable.checked){
	// 	borderWrapper.style.display = 'block';
	// } else {
	// 	borderWrapper.style.display = 'none';
	// }
	// if(boxShadowLable.checked){
	// 	boxShadowWrapper.style.display = 'block';
	// } else {
	// 	boxShadowWrapper.style.display = 'none';
	// }


	//console.log('kyky');
}
