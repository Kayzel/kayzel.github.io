var helper = {
	start:function(id1, id2){
		var firID = document.getElementById(id1);
		var secId = document.getElementById(id2);
		//this.indexer2 = secId;
		firID.addEventListener("mouseover", function(){
			secId.style.left = 420+'px';
			secId.style.opacity = 1;
			secId.style.zIndex = 10;
		}, false);
		firID.addEventListener("mouseout", function(){
			secId.style.left = 0+'px';
			secId.style.opacity = 0;
			secId.style.zIndex = -1;
		}, false);
	},
}
var bg = helper;
bg.start('inquiryBackground', 'helpBackground');
var ts = helper;
ts.start('inquiryTextShadow', 'helpTextShadow');
var tc = helper;
tc.start('inquiryClass', 'helpClass');
var st = helper;
st.start('inquiryStyleFont', 'helpStyleFont');
var scg = helper;
scg.start('inquirySCG', 'helpSCG');
var ib = helper;
ib.start('inquiryIcon', 'helpIcon');
var br = helper;
br.start('inquiryBorderRadius', 'helpBorderRadius');
var bo = helper;
bo.start('inquiryBorder', 'helpBorder');
var tr = helper;
tr.start('inquiryTransform', 'helpTransform');
var bs = helper;
bs.start('inquiryBoxShadow', 'helpBoxShadow');
var an = helper;
an.start('inquiryTransition', 'helpTransition');
var hc = helper;
hc.start('inquiryHTML', 'helpHTML');
var cc = helper;
cc.start('inquiryCSS', 'helpCSS');
