
// <select v-model="selected">
//             <option disabled value="">Выберите один из вариантов</option>
//             <option>А</option>
//             <option>Б</option>
//             <option>В</option>
					  // <option>px</option>
			    //   <option>em</option>
			    //   <option>rem</option>
			    //   <option>vw</option>
			    //   <option>vh</option>
			    //   <option>%</option>
//           </select>


var Selec = {
  		data:function(){
  			return {optionValue : ['px','em','rem','vw','vh','%']}
  		},
  		props:['value'],
			template:  
				`
					<select v-on:input="$emit('input', $event.target.value)" :value="value">
			      <option v-for="items in optionValue">
			      	{{items}}
			      </option>
			    </select>
		  	`
	  };
var Delec = {
			template:  
				`
					<select>
			      <option selected disabled>deg</option>
			    </select>
		  	`
	  };

var Colorlist = {
	  	props:['value'],
	  	components:{'Selec': Selec},
			template:  
				`
					<li>
						<input type="color" v-model="value[2]" v-on:input="$emit('input', [value[0],value[1],$event.target.value])" />
						<input type="range" v-model="value[0]" v-on:input="$emit('input', [$event.target.value,value[1],value[2]])" />
						<input type="text" v-model="value[0]" v-on:input="$emit('input', [$event.target.value,value[1],value[2]])" />
						<Selec v-model="value[1]" v-on:input="$emit('input', [value[0],$event.target.value,value[2]])"></Selec>
					</li>
		  	`
	  };

var app = new Vue({
  el: '#bossPandel',
  data: {
    message: 'Привет, Vue!',
    numbers: [ 1, 2, 3, 4, 5 ],
	  status: '0',
	  typeColor: '0',
	  typeGradient: '0',
    colorOl: [[[['0','%','#ffffff'],['100','%','#000000']],'0', '0'],[[['0','%','#ffffff'],['100','%','#000000']],'0', '0'],[[['0','%','#ffffff'],['100','%','#000000']],'0', '0']],
    imgIteam: [[['10','px','10','px','0','px','0','px'],'1',''],['0','px','0','px','0','px','0','px'],['0','px','0','px','0','px','0','px']],
    styleButton:[{},{},{}],
    styleText:[],
    openState: true,
    openCode: true,
    openBoredrRadius: false,
    openFont: false,
    openBackground: false,
    borderRadius:[['0','px','0','px','0','px','0','px'],['0','px','0','px','0','px','0','px'],['0','px','0','px','0','px','0','px']],
    widthSize:[['0','px'],['0','px'],['0','px']],
    heightSize:[['0','px'],['0','px'],['0','px']],
    backgroundColor:[['#dddddd'],['#dddddd'],['#dddddd']],
    fonts:[['0','px'],['0','px'],['0','px']],
    textCode:'',
  },
  components:{
  	'Selec': Selec,
  	'Delec': Delec,
	  'Colorlist': Colorlist,
  },
  methods:{
  	stateDor: function(){
  		this.openState = !this.openState;
  	},
  	borderRadiusDor: function(){
  		this.openBoredrRadius = !this.openBoredrRadius;
  	},
  	fontDor: function(){
  		this.openFont = !this.openFont;
  	},
  	backgroundDor:function(){
  		this.openBackground = !this.openBackground;
  	},
  	codeDor:function(){
  		this.openCode = !this.openCode;
  	},
  	state: function(item){
  		this.status = item;
  		console.log('status'+this.status);
  	},
  	colorСhoice: function(item){
  		this.typeColor = item;
  		console.log('colorChoice'+this.typeColor);
  	},
  	gradientСhoice: function(item){
  		this.colorOl[this.status][2] = item;
  		console.log(this.colorOl[this.status][2]);
  	},
  	repeatСhoice: function(item){
  		this.imgIteam[this.status][1] = item;
  		console.log(this.imgIteam[this.status][1]);
  	},
  	addGradientColor: function(){
  		this.colorOl[this.status][0].push(['100','%','#dddddd']);
  		console.log(this.colorOl[this.status][0]);
  	},
  	RemoveGradientColor: function(){
  		this.colorOl[this.status][0].pop();
  		console.log(this.colorOl[this.status][0]);
  	},
  	codPen: function(){
			var codes = [[],[],[]];
			var i = 0;
			const obj = this.styleButton;
			console.log(obj);
			console.log(this.textCode);
			if(JSON.stringify(obj[0])!=="{}"){
  			codes[0][i++] = '.yourClass{';
  			for (key in obj[0]) {codes[0][i++] = '\t'+key+': '+obj[0][key]+';';}
  			codes[0][i++] = '}\n';
			}if(JSON.stringify(obj[1])!=="{}"){
  			i=0;
  			codes[1][i++] = '.yourClass:hover{';
				for (key in obj[1]) {codes[1][i++] = '\t'+key+': '+obj[1][key]+';';}
				codes[1][i++] = '}\n';
			}if(JSON.stringify(obj[2])!=="{}"){
				i=0;
				codes[2][i++] = '.yourClass:active{';
				for (key in obj[2]) {codes[2][i++] = '\t'+key+': '+obj[2][key]+';';}
				codes[2][i++] = '}';
			}
			console.log([JSON.stringify(obj[0])==="{}",JSON.stringify(obj[1])==="{}",JSON.stringify(obj[2])==="{}"]);
			return this.textCode = codes[0].join('\n')+codes[1].join('\n')+codes[2].join('\n');
  	}
  },
  watch:{
		borderRadius: function(){
		  this.styleButton[this.status]['border-radius'] = this.borderRadius[this.status][0]+this.borderRadius[this.status][1]+' '+this.borderRadius[this.status][2]+this.borderRadius[this.status][3]+' '+this.borderRadius[this.status][4]+this.borderRadius[this.status][5]+' '+this.borderRadius[this.status][6]+this.borderRadius[this.status][7];
			this.codPen();
		},
		fonts:function(){
			this.styleButton[this.status]['font-size'] = this.fonts[this.status][0]+this.fonts[this.status][1];
			this.codPen();
		},
		widthSize:function(){
			this.styleButton[this.status]['width'] = this.widthSize[this.status][0]+this.widthSize[this.status][1];
			this.codPen();
		},
		heightSize:function(){
			this.styleButton[this.status]['height'] = this.heightSize[this.status][0]+this.heightSize[this.status][1];
			this.codPen();
		},
		backgroundColor:function(){
			this.styleButton[this.status]['background'] = this.backgroundColor[this.status][0];
			this.codPen();
		},
		colorOl:function(){
			const varThis = this.colorOl[this.status][0];
			var arrColGradient = this.colorOl[this.status][0].map(function(value, index) {
	      return varThis[index][2]+' '+varThis[index][0]+varThis[index][1];
	    });
	    var typeGradient = '';
	    console.log(this.styleButton[this.status])
	    switch (this.colorOl[this.status][2]){
	    	case '0': typeGradient = 'linear-gradient('+this.colorOl[this.status][1]+'deg, '; break;
	    	case '1': typeGradient = 'radial-gradient('; break;
	    	case '2': typeGradient = 'repeating-linear-gradient('+this.colorOl[this.status][1]+'deg, '; break;
	    }
	    console.log(typeGradient+arrColGradient.join(', ')+')');
			this.styleButton[this.status]['background'] = typeGradient+arrColGradient.join(', ')+')';
			this.codPen();
		},
		imgIteam:function(){
			const varThis = this.imgIteam[this.status];
			var typeGradient = '';
			switch (this.imgIteam[this.status][1]){
	    	case '0': typeGradient = 'repeat'; break;
	    	case '1': typeGradient = 'no-repeat'; break;
	    	case '2': typeGradient = 'repeat-x'; break;
	    	case '3': typeGradient = 'repeat-y'; break;
	    }
	    this.styleButton[this.status]['background-repeat'] = typeGradient;
	    this.styleButton[this.status]['background-image'] = 'url('+varThis[2]+')';
	    this.styleButton[this.status]['background-size'] = varThis[0][0]+varThis[0][1]+' '+varThis[0][2]+varThis[0][3];
	    this.styleButton[this.status]['background-position'] = varThis[0][4]+varThis[0][5]+' '+varThis[0][6]+varThis[0][7];
	    this.codPen();
		},
		styleText:function(){
			console.log(this.styleText);
		},
		textCode:function(){
			console.log(this.styleButton);
			var codeText = ['','',''],
					dubleArr = ['','',''];
			dubleArr = this.textCode.replace(/\n/g, "")
			dubleArr = dubleArr.split('}'); //.yourClass{\n\t
					// codeText[1] = this.textCode.replace( /.yourClass:hover{\n\t/, "" );
					// codeText[2] = this.textCode.replace( /.yourClass:active{\n\t/, "" );
			for (let i=0; i<dubleArr.length-1; i++) {
				if(dubleArr[i].search( /:hover/i )!== -1){
					codeText[1] = dubleArr[i];
				}else if(dubleArr[i].search( /:active/i )!== -1){
					codeText[2] = dubleArr[i];
				}else if(dubleArr[i].search( /:[. \n]{1,}{/ ) === -1){
					codeText[0] = dubleArr[i];
				}
				//console.log(dubleArr[i]+' === '+dubleArr[i].search( /:.{1,}/ )+' '+i);
			}
			for (var i = 0; i < codeText.length; i++) {
				codeText[i] = codeText[i].replace(/\t/g, "");
				codeText[i] = codeText[i].replace( /:\s/g, ":" );
				codeText[i] = codeText[i].replace( /\s\s/g, "" );
				codeText[i] = codeText[i].replace( /;\s/g, ";" );
				codeText[i] = codeText[i].replace( /.{1,}{/, "" );
			//	codeText[i] = codeText[i].slice(0,-1);
			}
			console.log(codeText);
//console.log(codeText[0]);
	// codeText[1] = codeText[1].slice(0,-1);
				// codeText[2] = codeText[2].slice(0,-1);
				// codeText[1] = codeText[1]===''?'':codeText[1].replace( /:\s/g, ":" );
				// codeText[1] = codeText[1]===''?'':codeText[1].replace( /\s\s/g, "" );
				// codeText[1] = codeText[1]===''?'':codeText[1].replace( /;\s/g, ";" );
				// codeText[1] = codeText[1]===''?'':codeText[1].replace( /.{1,}{/, "" );

				// codeText[2] = codeText[2]===''?'':codeText[2].replace( /:\s/g, ":" );
				// codeText[2] = codeText[2]===''?'':codeText[2].replace( /\s\s/g, "" );
				// codeText[2] = codeText[2]===''?'':codeText[2].replace( /;\s/g, ";" );
				// codeText[2] = codeText[2]===''?'':codeText[2].replace( /.{1,}{/, "" );
//codeText[0] = codeText[0]===''?'':codeText[0].replace( /\.[a-zA-Z0-9_]{1,}{/, "" );
				
				// codeText[1] = codeText[1]===undefined?'':codeText[1].replace(/\t/g, "");
				// codeText[2] = codeText[2]===undefined?'':codeText[2].replace(/\t/g, "");
			
				//codeText[0] = codeText[0].replace( /[\t\n}]/g, "" );

			var textObj = [];
					textObj[0] = JSON.stringify(this.styleButton[0]).replace( /","/g, ";" ),
					textObj[1] = JSON.stringify(this.styleButton[1]).replace( /","/g, ";" ),
					textObj[2] = JSON.stringify(this.styleButton[2]).replace( /","/g, ";" );//.replace( /-/g, ":" )

			//textObj = textObj.replace( /},{/g, "" );
			textObj[0] = textObj[0].replace( /[\[{"}\]]/g, "" );
			textObj[1] = textObj[1].replace( /[\[{"}\]]/g, "" );
			textObj[2] = textObj[2].replace( /[\[{"}\]]/g, "" );
			//codeText = codeText.pop();
			textObj[0] = textObj[0]==''?'':textObj[0] + ';';
			textObj[1] = textObj[1]==''?'':textObj[1] + ';';
			textObj[2] = textObj[2]==''?'':textObj[2] + ';';
			console.log(codeText[0]);
			//textObj = textObj+';';
			console.log(textObj[0]);

			console.log(codeText[1]);
			console.log(textObj[1]);

			console.log(codeText[2]);
			console.log(textObj[2]);
			
			console.log(textObj[0]===codeText[0]&&textObj[1]===codeText[1]&&textObj[2]===codeText[2]);
			if(textObj[0]===codeText[0]&&textObj[1]===codeText[1]&&textObj[2]===codeText[2]) return;
			for(let i=0;i<3;i++){codeText[i] = codeText[i].split(';');}
			console.log(codeText[0][codeText[0].length-1]+"~"+codeText[1][codeText[1].length-1]+"~"+codeText[2][codeText[2].length-1]);
			if(codeText[0][codeText[0].length-1]!==""||codeText[1][codeText[1].length-1]!==""||codeText[2][codeText[2].length-1]!=="") {console.log(codeText);
				return;}
			codeText[0] = codeText[0].map(function(value, index){return codeText[0][index].split(':');});
			codeText[1] = codeText[1].map(function(value, index){return codeText[1][index].split(':');});
			codeText[2] = codeText[2].map(function(value, index){return codeText[2][index].split(':');});
	    
			console.log(codeText);
			var red = [{},{},{}];
			for (let i=0; i<codeText.length; i++) {
				for (let j=0; j<codeText[i].length; j++) {
					if(codeText[i][j][0]!=''){
						//this.styleButton[i][codeText[i][j][0]] = codeText[i][j][1];
						red[i][codeText[i][j][0]] = codeText[i][j][1];
						//console.log(codeText[i][j]);
					}
				}
			}
			
			this.styleButton = red;
			console.log(this.styleButton);
			this.codPen();
		}

  },
  computed: {
  	styles:function(){
  		return this.styleButton[this.status];
  	},
  	superCod:function(){
  		return this.styleButton[this.status];
  	}
  }
})