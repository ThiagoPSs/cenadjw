class Starfield
{
	// define as variaveis
	
	fps ;
    canvas ;
    width ;
	height ;
    minVelocity ;
    maxVelocity ;
    qtdestars ;
	stars;
    intervalId ;
	ctx;
	star;
	
	
	 
  
  
	//define o construtor e o contexto
	  constructor(ctx) {
		  this.fps = 30;
	
	this.width = 0;
	this.height = 0;
	this.minVelocity = 25;
	this.maxVelocity = 50;
	this.qtdestars = 150;
	this.intervalId = 0;

    this.ctx = ctx;
	//console.table(this.ctx);
	//define o tamanho da janela
	this.width = window.innerWidth;
	console.table(window.innerWidth);
	this.height = window.innerHeight;
	console.table(window.innerHeight);
	this.ctx.canvas.width = this.width;
    this.ctx.canvas.height = this.height;
	    
  }
  
 
inicializa()
{
	
	var self = this;
	 
addEventListener('resize', function resize(event){
		//redefine as medidas quando a janela é alterada
    
	
}); 

}
start()
{
	
	this.stars = [];
	//console.table(stars);
	for(var i=0; i<this.qtdestars; i++) {
		//console.table("start");
			var x = Math.random()*this.width;
			
			var y =  Math.random()*this.height;
			var size =  Math.random()*10+1;
			var vel = (Math.random()*(this.maxVelocity - this.minVelocity))+this.minVelocity;
			
			this.star = new Star(x,y, size,vel );
			//console.table(s.x);
			//console.table(this.star);
		this.stars[i] = this.star;
	}
	
//console.table(stars);
	var timeUpdate = 1000 / this.fps;
	var self = this;
	this.intervalId = setInterval(function() {
        self.update();
        self.desenha();	
		self.butons();
    }, timeUpdate);


}

  
  



   
	desenha()
	{
		//console.table("teste");

		//desenha o plano de fundo
		this.ctx.fillStyle = '#1C1C1C';
     
		this.ctx.fillRect(0, 0, this.width, this.height);
		



		//desenha as estrelas no plano de fundo
		this.ctx.fillStyle = '#ffffff';
		for(var i=0; i<this.stars.length;i++) {
			this.star = this.stars[i];
			this.ctx.fillRect(this.star.x, this.star.y, this.star.size, this.star.size);
			//console.table(star);
		}
		
	}


  update(){
	var dt = 1 / this.fps;

	for(var i=0; i<this.stars.length; i++) {
		var star = this.stars[i];
		star.y += dt * star.velocity;


		if(star.y > this.height) {
			var x = Math.random()*this.width;
			var size =  Math.random()*3+1;
			var vel = (Math.random()*(this.maxVelocity - this.minVelocity))+this.minVelocity;
			let s = new Star(x, 0,size, vel);
		 	this.stars[i] = s;
		}
		
	}
}
	butons(){
		const KEY = {
			UM: 49,
			DOIS: 50,
			TRES: 51,
		}
	
		document.addEventListener('keydown', event => {
			if (event.keyCode === KEY.UM){
			  console.table("KEY.UM");
			  var img = document.querySelector("#tundra");
			  img.setAttribute('src','img/tundra9.png');
			
			}
	
	
			if (event.keyCode === KEY.DOIS) {
				console.table("KEY.DOIS");
				var img = document.querySelector("#tundra");
				img.setAttribute('src','img/tundra10.png');
			}
	
	
			 if (event.keyCode === KEY.TRES) {
				console.table("KEY.TRES");
				var img = document.querySelector("#tundra");
				img.setAttribute('src','img/tundra13.png');
			}
		});
	  }
stop()
{
	clearInterval(this.intervalId);
}
	
}
