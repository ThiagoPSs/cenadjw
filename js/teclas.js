'use strict';
const KEY = {
  UM: 65,
  DOIS: 50,
  TRES: 51,
  
  
}


function butons(){

    document.addEventListener('keydown', event => {
        if (event.keyCode === KEY.UM){
          console.table("KEY.UM");
          var img = document.querySelector("#tundra");
          img.setAttribute('src','img\tundra1.png');
        
        }


        if (event.keyCode === KEY.DOIS) {
        fundd=2;
        }


         if (event.keyCode === KEY.P) {
        fundd=3;
        }
    });
  }

  Object.freeze(KEY);