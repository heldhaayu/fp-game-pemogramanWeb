let score = 0;
let score1 = 0
let isOver = false

// fungsi utama untuk menjalankan game
export default function startGame(){   
    // fungsing menjalankan game level 1 
  level1()            
}

function level1(){
   
    var canvas = document.getElementById("myCanvas");
	var ctx = canvas.getContext("2d");


        // Load the sprite sheet image
        var playerImage = new Image();
        playerImage.src = "./assets/bomb.png";


        var explode = new Image();
        explode.src = "./assets/mbledos.png";

        // buat ambil frame bomb
        var frames = [
        { x: 0, y: 0, w:21, h: 35 },  // left
        { x: 21.9, y: 0, w:27, h: 35 }, // left
        { x: 45.9, y: 0, w:23, h: 35 }, // left
        { x: 88.8, y: 0, w:27, h: 35 }, // left
        ];




        // membuat objek gambar bomb
        var player = {
        x: 0,
        y: 0,
        width: 64,
        height: 64,
        frameIndex: 1 // starting frame
        };



        // iki posisi jatuh dari sebuah gambar
		let yB = 0
        let xB = 0
        let xPe =  Math.floor(Math.random() * canvas.width)+10
        let yPe = 0
        // posisi x dari gambar
		var x = canvas.width/2;
        let gerakTank = 0
		var y = 0;
		var dy = 2;
        let xEb = []
      		

        // iki ambil gambar
		var parachute = new Image();
		parachute.src = "./assets/obstacle/bomb.png";

        var people = new Image();
		people.src = "./assets/pe1.png";

        var parachutex= new Image();
		parachutex.src = "./assets/parasut.png";

        var tank= new Image();
		tank.src = "./assets/tank.png";
        
		
        // ambil background level 1
		var bg = new Image();
        bg.src = "./assets/bg-forrest/1.png";

        const bg1 = new Image()
        bg1.src ='./assets/bg-forrest/2.png'

        const bg2 = new Image()
        bg2.src =  './assets/bg-forrest/4.png'

        
        
        // memasukan animasi truck  ke sebuah array biar bisa bergerak
        var idleFrames = [];
		for (let i = 1; i <= 4; i++) {
			const frame = new Image();
			frame.src = "./assets/truck/" + i + ".png";
			idleFrames.push(frame);
		}
		
		// deklarasi index untuk memindah gambar truck 
		let idleIndex = 0;


          // update gambar truck
		var idleInterval = setInterval(function() {
			// menambah index gambar untuk digerakan
			idleIndex++;
            // jika index lebih dari sama dengan panjang array maka index berubah menjadi satu lagi 
			if (idleIndex >= idleFrames.length) {
				idleIndex = 0;
			}

            
		}, 200); // update setiap 200 milidetik 
           
		
		
		



        // orang terjun parasut


        // memasukan gambar kedalam array agar array nya bisa diputar index untuk animasi
        var idleFrames1 = [];
		for (let i = 1; i <= 3; i++) {
			const frame1 = new Image();
			frame1.src = "./assets/pow/pow (" + i + ").png";
			idleFrames1.push(frame1);
		}

         // memasukan gambar kedalam array agar array nya bisa diputar index untuk animasi
      
                for (let i = 2; i <= 16; i++) {
                const frame1 = new Image();
                frame1.src = "./assets/pow/hit/pow (" + i + ").png";
                idleFrames1.push(frame1);            
		      	}        


        
		
		// deklarasi index parasut
		let idleIndex1 = 0;
		
		// update gambar orang jatuh dari parasut
		const idleInterval1 = setInterval(function() {
			// update the idle frame index
			idleIndex1++;
			if (idleIndex1 === 3) {
				idleIndex1 = 0;
             }
             
           
            
		}, 200); // update gambar setiap 200 milidetik


        // deklarasi index index
		let bombIndex = 0;
		
		// update gambar bomb
		const bombInterval = setInterval(function() {
			// update the idle frame index
            bombIndex
            player.frameIndex = bombIndex + (Math.floor(Date.now() / 100) % 4);
            // index e lebih dari sama dengan 3 kembali ke index 1 agar animasi berputar putar
			if (bombIndex >= 3) {
                player.frameIndex = 0 + (Math.floor(Date.now() / 100) % 4);
			}
		}, 200); // update every 200 milliseconds

        player.frameIndex = 0 + (Math.floor(Date.now() / 100) % 4);



        // frame untuk mengambil posisi gambar ledakan
        var explodeFrames = [
                    { x: 0, y: 0, w:10, h: 64},
                    { x: 11, y: 0, w:10, h: 64}, // left
                    { x: 22, y: 0, w:10, h: 64}, // left
                    { x: 43, y: 0, w:10, h: 64 },   // left
                    { x: 75, y: 0, w:15, h: 64}, // left
                    { x: 150, y: 0, w:15, h: 64}, // left
                    { x: 290, y: 0, w:15, h: 64 }, // left
                    ];

                    
// objek untuk gambar ledakan
        var explodeBombs = {
                    x: 0,
                    y: 0,
                    width:60,
                    height:200,
                    frameIndex:0  // starting frame
                    };


        let exIndex = 0;
		
                // update gambar ledakan
                const exInterval = setInterval(function() {
                    // update the idle frame index
                    
                   
                    
                    explodeBombs.frameIndex +=1 
                    if (explodeBombs.frameIndex  >= 6 ) {
                       
                        explodeBombs.frameIndex = 0  ;
                        
                    }
                }, 200); // update every 200 milliseconds
                explodeBombs.frameIndex = 0  ;





                // mengambil frame gambar orang 

            var people1Frames = [
                    { x: 0,   y:0,  w:30, h: 64},
                    { x: 45,  y:0, w:30, h: 64}, // left
                    { x: 90,  y:0, w:30, h: 64}, // left
                    { x: 182,  y:0, w:30, h: 64 }, // left
                    { x: 235, y:0, w:30, h: 64}, // left
                  
            ];

        var people1 = {
                    x: 0,
                    y: 0,
                    width:30,
                    height:70,
                    frameIndex:4  // starting frame
        };



      
		// update gambar orang
		const people1Interval = setInterval(function() {
			// update the idle frame index            
            people1.frameIndex+=1 
			if (people1.frameIndex>= 4) {

                
                people1.frameIndex = 0 
             
			}
		}, 200); // update every 200 milliseconds
     
                


        // mengambil posisi gambar parasut
        var parachutexFrame = [
                    { x: 0,   y:0,  w:170, h: 130},
                    { x: 45,  y:0, w:30, h: 64}, // left
                    { x: 90,  y:0, w:30, h: 64}, // left
                    { x: 182,  y:0, w:30, h: 64 }, // left
                    { x: 235, y:0, w:30, h: 64}, // left
                  
            ];

        var parachutexObj = {
                    x: 0,
                    y: 0,
                    width:90,
                    height:80,
                    frameIndex:0  // starting frame
                    };



      
		// update gambar parasut
		const parachuteInterval = setInterval(function() {
			// update the idle frame index            
            parachutex.frameIndex+=1 
			if (parachutex.frameIndex>= 4) {                
                parachutex.frameIndex = 0              
			}
		}, 200); // update every 200 milliseconds
     

        // mengambil posisi gambar tank
        var tankFrame = [
                    { x: 0,   y:0,  w:75, h: 75},
                    { x: 75,  y:0, w:75, h: 75}, // left
                    { x: 150,  y:0, w:75, h: 75}, // left
                    { x: 300,  y:0, w:75, h: 75 }, // left
                    { x: 375, y:0, w:75, h: 75}, // left
                  
            ];

            
// objek tank
        var tankObj = {
                    x: 0,
                    y: 0,
                    width:90,
                    height:80,
                    frameIndex:4  // starting frame
                    };



      
		// update gambar tank
		const tankInterval = setInterval(function() {
			// update the idle frame index            
            tankObj.frameIndex+=1 
			if (tankObj.frameIndex>= 4) {

                
                tankObj.frameIndex = 0 
             
			}
		}, 200); // update every 200 milliseconds
     
                
       
       

                             

         // membuat event listener pada keyboard agar bisa menggerakan tank dan truck
         document.addEventListener("keydown", keyDownHandler, false);
        document.addEventListener("keyup", keyUpHandler, false);



        // update character's position based on pressed key

        let gerakTruck = 0
        const truckY = 400
        const xWind = canvas.width / 2;
        
        function keyDownHandler(e) {
        // setiap kita pencet tombol d
            if(e.key == "d" || e.key == "D") {
                
                // gerak truck bertambah 50 ke kanan
                gerakTruck += 50; 

                if (gerakTruck>canvas.width - 100) {
                    gerakTruck =  canvas.width - 100
                } 
            }
            // setiap  pencet tombol a 
            else if(e.key == "a" || e.key == "A") {
                // gerak truck berkurang 50
                gerakTruck += -50;

                if (gerakTruck<0) {
                    gerakTruck =  0
                } 
            }

            
        }

        // tidak pencet tombol posisi nya tetap
        function keyUpHandler(e) {
            if(e.key == "d" || e.key == "D" || e.key == "a" || e.key == "A") {
                gerakTruck = gerakTruck;
            }


        }

        document.addEventListener('keydown', function(event) {
            // setiap pencet tombol kanan
             if (event.code === 'ArrowRight') {
                // gerak tank bertambah 50 ke kanan
                gerakTank += 50;
                if (gerakTank>canvas.width - 100) {
                    gerakTank =  canvas.width - 100
                }
                // setiap pencet tombol kiri
            } else if (event.code === 'ArrowLeft') {
                // gerak tank berkurang ke kiri
                gerakTank += -50;
               
               if (gerakTank<0) {
                   gerakTank =  0
               } 
            } 
        });



        
        // posisi x bg
        let xbg = 0;        
       
      
        
        let isExecute = false

        let bomAndRoad = false


     

		function draw() {       
         

            var frameEx = explodeFrames[explodeBombs.frameIndex];

        // ----------------------------------bg---------------------------//

            // bg mountain
            ctx.drawImage(bg, xbg, 0 ,canvas.width, canvas.height);           
		    ctx.drawImage(bg, xbg +canvas.width, 0,canvas.width, canvas.height);

            
            // bg forrest
            ctx.drawImage(bg1, xbg, 200, canvas.width, 250)
            ctx.drawImage(bg1, xbg +canvas.width, 200, canvas.width, 250)
			
            // bg jalan berumput diatas bukit
            ctx.drawImage(bg2, xbg, 200, canvas.width, 300)
            ctx.drawImage(bg2, xbg +canvas.width, 200, canvas.width, 300)

           

            
           // loop bg

           
        //    background berjalan ke kiri sebanyak 2
            xbg -= 2;
            // background ke luar kanvas
			if (xbg < -canvas.width) {
                // setting background kembali lagi ke 0
				xbg = 0;
			}

            // //obstacle
            // ctx.drawImage(parachute, x, y);            
            //truck
            

            // untuk menggambar truck
            ctx.drawImage(idleFrames[idleIndex], gerakTruck, truckY);

            //ini untuk ngecek kalo y  nya menabrak tanah akan kembali ke atas dengan posisi y 0 dan posisi  x random                       
            if (y> canvas.height - 100) {
                idleIndex1=0
                y=0
                x=Math.floor(Math.random() * canvas.width)+10
               
            }

            // posisi yB dari bomb

            if(yB > canvas.height -100){
               
                yB = 0
                xB = Math.floor(Math.random() * canvas.width)+10

                // setiap bomb menabrak tanah dia ngeplay audio meledak
                const audio2 = document.getElementById("sound-effect");
               
                audio2.play();               
                
                console.log('play2')
             
            }

            // posisi yPe dari orang yang jatuh dari parasut
            
            if(yPe > canvas.height -100){                
                yPe=0
                xPe= Math.floor(Math.random() * canvas.width)+10
            }


            if(idleIndex1 >= idleFrames1.length){   
               idleIndex1 =0                                           
            }



          

        
        
            // menentukan ukuran atau batasan dari setiap objek
             const parachuteBounds = {
                x: x,
                y: y,
                width: idleFrames1[idleIndex1].width,
                height:idleFrames1[idleIndex1].height
            };

            const parachuteBounds2 = {
                x: x,
                y: y,
                width: idleFrames1[idleIndex1].width,
                height:idleFrames1[idleIndex1].height
            };   
               
            const bombBounds = {
                x: xB,
                y: yB,
                width: player.width-30,
                height:player.height
            };

            const truckBounds = {
                x: gerakTruck,
                y: 423,
                width: idleFrames[idleIndex].width,
                height: idleFrames[idleIndex].height
            };

             const roadBounds ={
                x:xB,
                y:450,
                width:canvas.width,
                height:300,
            }


            const pe1Bounds ={
                x:xPe,
                y:yPe,
                width:30,
                height:70,
            }

            const tankBounds = {
                x:gerakTank,
                y:430,
                width:tankFrame[tankObj.frameIndex].w,
                height:tankFrame[tankObj.frameIndex].h,                
            }

                let bombAndTruck = false

            // untuk check  parasut bertabrakan dengan tank
                if(checkCollision(parachuteBounds, tankBounds)){
                    y=430
                    idleIndex1 = 4
                    if(!isExecute){                                                                                                                                      
            updateScore1()
            isExecute = true    
            setTimeout(()=>{
                isExecute = false
                y=0
                x=Math.floor(Math.random() * canvas.width)+10                                
            },2780)                                                
                }                                                                                                 
              
            }


                if(checkCollision(pe1Bounds,truckBounds)){                                                                                                                 
                 updateScore()           
                 yPe=0
                 xPe=Math.floor(Math.random() * canvas.width)+10   
                                                                                                                
                }

                if(checkCollision(pe1Bounds,tankBounds)){                                                                                                                 
                 updateScore1()           
                 yPe=0
                 xPe=Math.floor(Math.random() * canvas.width)+10                                                                                                      
                }


                if(checkCollision(bombBounds, truckBounds)){                                                                                                                                                   
                  
                   explodeBombs.frameIndex=4
                   ctx.drawImage(explode, frameEx.x, frameEx.y, frameEx.w, frameEx.h,  xB ,yB,explodeBombs.width,explodeBombs.height);                                                                                                          
                   alert('game over')
                //    clear posisi dan score
                   bombAndTruck =false
                   ctx.clearRect(0, 0, canvas.width, canvas.height);
                   y = 0
                   yB = 0   
                   xB = 0                
                   score = 0
                   score1=0                   
                   bombAndTruck = true  
                   isOver = true                                                                                                                                                                        
                }

                if(checkCollision(bombBounds, tankBounds)){                                                                                                                                                                                         
                    explodeBombs.frameIndex=4
                    ctx.drawImage(explode, frameEx.x, frameEx.y, frameEx.w, frameEx.h,  xB ,yB,explodeBombs.width,explodeBombs.height);                                                                                                              
                    alert('game over')                      
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                        y = 0
                        yB = 0   
                        xB = 0                
                        score = 0
                        score1 = 0 
                        
                        isOver = true  
                }
                    

               
                if (checkCollision(bombBounds, roadBounds)) {                                                                                                                                                                                                                    
               bomAndRoad = true
                }

                
        // bomb menabrak tanah maka gambar effek ledakan
                if(bomAndRoad === true){                  
                   xEb.push(xB)                                                       
                   ctx.drawImage(explode, frameEx.x, frameEx.y, frameEx.w, frameEx.h,  xEb[0] ,350,explodeBombs.width,explodeBombs.height);                                                                                                                                                                                         
                        setTimeout(()=>{
                            if(xEb.length >=2){
                    xEb =[]
                    
                   }                           
                            bomAndRoad =false
                        },2000)                                                                
                }
                

            if (checkCollision(parachuteBounds, truckBounds)) {
                     
                if(!isExecute){
                    
                    idleIndex1 = 4 
                                                                                              
            updateScore()
            isExecute = true    
            setTimeout(()=>{
                isExecute = false
                y=0
                x=Math.floor(Math.random() * canvas.width)+10                                
            },2780)                         
                }                                                                                                                   
            }else{               
                y += 2;  
            }

           

            yB += 5;
            yPe +=4
            
            var parachutexFrames = parachutexFrame[parachutexObj.frameIndex];
            ctx.drawImage(parachutex, parachutexFrames.x, parachutexFrames.y, parachutexFrames.w, parachutexFrames.h, x-35, y-60, parachutexObj.width, parachutexObj.height);                      

            ctx.drawImage(idleFrames1[idleIndex1],x, y);

            
         
            var frame = frames[player.frameIndex];
            ctx.drawImage(playerImage, frame.x, frame.y, frame.w, frame.h, xB, yB, player.width, player.height);                      

            var parachutexFrames = parachutexFrame[parachutexObj.frameIndex];
            ctx.drawImage(parachutex, parachutexFrames.x, parachutexFrames.y, parachutexFrames.w, parachutexFrames.h, xPe-30, yPe-60, parachutexObj.width, parachutexObj.height);                      


            var pe1Frame = people1Frames[people1.frameIndex];
            ctx.drawImage(people, pe1Frame.x, pe1Frame.y, pe1Frame.w, pe1Frame.h, xPe, yPe, people1.width, people1.height);                      

// mengambil frame gambar agar bisa digerakan
            var tankFrames = tankFrame[tankObj.frameIndex];
            ctx.drawImage(tank, tankFrames.x, tankFrames.y, tankFrames.w, tankFrames.h, gerakTank, 400, tankObj.width, tankObj.height);                      

            ctx.font = "20px Arial";
            ctx.strokeText("Score : "+score, 10, 20);

            ctx.font = "20px Arial";
            ctx.strokeText("Score : "+score1, canvas.width -100, 20);

           
             
   if(score >=10 || score1 >=10){
    setTimeout(()=>{
        level2()
    },1000)
    loading()

   }else if (isOver ===true){
    drawMenu()
    isOver = false

   
   
    
   
       }else{
        requestAnimationFrame(draw);
       }
           
			

		}


       
// untuk check objek yang bertabrakan
        function checkCollision(parachuteBounds, truckBounds) {
        return (
            parachuteBounds.x < truckBounds.x + truckBounds.width &&
            parachuteBounds.x + parachuteBounds.width > truckBounds.x &&
            parachuteBounds.y  < truckBounds.y + truckBounds.height -100 &&
            parachuteBounds.y + parachuteBounds.height > truckBounds.y 
        );
        }

        

        const updateScore = () =>{
            const audio2 = document.getElementById("coin-sound");
                audio2.play();
                
                console.log('play2')
          
         score++;                                      
           
		}

        const updateScore1 = () =>{
            const audio2 = document.getElementById("coin-sound");
            audio2.play();
            
            console.log('play2')
         score1++                                       
       }
        
        let isColide = false

       
              
                
       
        

		bg.onload = function() {
			draw();
            
		};

        


}

// -----------------level 2----------------------------

 function level2(){

    var canvas = document.getElementById("myCanvas");
		var ctx = canvas.getContext("2d");


        // Load the sprite sheet image
        var playerImage = new Image();
        playerImage.src = "./assets/bomb.png";


        var explode = new Image();
        explode.src = "./assets/mbledos.png";

        // Define the animation frames
        var frames = [
        { x: 0, y: 0, w:21, h: 35 },  // left
        { x: 21.9, y: 0, w:27, h: 35 }, // left
        { x: 45.9, y: 0, w:23, h: 35 }, // left
        { x: 88.8, y: 0, w:27, h: 35 }, // left
        ];




        // Create the player object and set its initial position
        var player = {
        x: 0,
        y: 0,
        width: 64,
        height: 64,
        frameIndex: 1 // starting frame
        };

        var player1 = {
            x: 0,
            y: 0,
            width: 64,
            height: 64,
            frameIndex: 1 // starting frame
            };
    




        let yb2 = 0
        let xb2 =  Math.floor(Math.random() * canvas.width)+10

        let yb3 = 0
        let xb3 =  Math.floor(Math.random() * canvas.width)+10
		let yB = 0
        let xB = 0
        let xPe =  Math.floor(Math.random() * canvas.width)+10
        let yPe = 0

        let xPe2 =  Math.floor(Math.random() * canvas.width)+10
        let yPe2 = 0
		var x = canvas.width/2;
        let gerakTank = 0
		var y = 0;
		var dy = 2;
        let xEb = []
        let xEb1 = []
      		
		var parachute = new Image();
		parachute.src = "./assets/obstacle/bomb.png";

        var people = new Image();
		people.src = "./assets/pe1.png";

        var parachutex= new Image();
		parachutex.src = "./assets/parasut.png";

        var tank= new Image();
		tank.src = "./assets/tank.png";
        
		
        // bg
		var bg = new Image();
        bg.src = "./assets/bg-desert/ds1.png";

        const bg1 = new Image()
        bg1.src ='./assets/bg-desert/ds2.png'

        const bg2 = new Image()
        bg2.src =  './assets/bg-desert/ds3.png'

        // truck

        var idleFrames = [];
		for (let i = 1; i <= 4; i++) {
			const frame = new Image();
			frame.src = "./assets/truck/" + i + ".png";
			idleFrames.push(frame);
		}
		
		// deklarasi index index
		let idleIndex = 0;


          // update gambar
		var idleInterval = setInterval(function() {
			// update the idle frame index
			idleIndex++;
			if (idleIndex >= idleFrames.length) {
				idleIndex = 0;
			}

            
		}, 200); // update every 200 milliseconds
           
		
		
		



        // pow

        var idleFrames1 = [];
		for (let i = 1; i <= 3; i++) {
			const frame1 = new Image();
			frame1.src = "./assets/pow/pow (" + i + ").png";
			idleFrames1.push(frame1);
		}
      
                for (let i = 2; i <= 16; i++) {
                const frame1 = new Image();
                frame1.src = "./assets/pow/hit/pow (" + i + ").png";
                idleFrames1.push(frame1);            
		      	}        


        
		
		// deklarasi index index
		let idleIndex1 = 0;
		
		// update gambar
		const idleInterval1 = setInterval(function() {
			// update the idle frame index
			idleIndex1++;
			if (idleIndex1 === 3) {
				idleIndex1 = 0;
             }
             
           
            
		}, 200); // update every 200 milliseconds


        // deklarasi index index
		let bombIndex = 0;
		
		// update gambar
		const bombInterval = setInterval(function() {
			// update the idle frame index
            bombIndex
            player.frameIndex = bombIndex + (Math.floor(Date.now() / 100) % 4);
			if (bombIndex >= 3) {
                player.frameIndex = 0 + (Math.floor(Date.now() / 100) % 4);
			}
		}, 200); // update every 200 milliseconds

        player.frameIndex = 0 + (Math.floor(Date.now() / 100) % 4);


        var explodeFrames = [
                    { x: 0, y: 0, w:10, h: 64},
                    { x: 11, y: 0, w:10, h: 64}, // left
                    { x: 22, y: 0, w:10, h: 64}, // left
                    { x: 43, y: 0, w:10, h: 64 },   // left
                    { x: 75, y: 0, w:15, h: 64}, // left
                    { x: 150, y: 0, w:15, h: 64}, // left
                    { x: 290, y: 0, w:15, h: 64 }, // left
                    ];

        var explodeBombs = {
                    x: 0,
                    y: 0,
                    width:60,
                    height:200,
                    frameIndex:0  // starting frame
                    };


        let exIndex = 0;
		
                // update gambar
                const exInterval = setInterval(function() {
                    // update the idle frame index
                    
                   
                    
                    explodeBombs.frameIndex +=1 
                    if (explodeBombs.frameIndex  >= 6 ) {
                       
                        explodeBombs.frameIndex = 0  ;
                        
                    }
                }, 200); // update every 200 milliseconds
                explodeBombs.frameIndex = 0  ;






            var people1Frames = [
                    { x: 0,   y:0,  w:30, h: 64},
                    { x: 45,  y:0, w:30, h: 64}, // left
                    { x: 90,  y:0, w:30, h: 64}, // left
                    { x: 182,  y:0, w:30, h: 64 }, // left
                    { x: 235, y:0, w:30, h: 64}, // left
                  
            ];

        var people1 = {
                    x: 0,
                    y: 0,
                    width:30,
                    height:70,
                    frameIndex:4  // starting frame
        };



      
		// update gambar
		const people1Interval = setInterval(function() {
			// update the idle frame index            
            people1.frameIndex+=1 
			if (people1.frameIndex>= 4) {

                
                people1.frameIndex = 0 
             
			}
		}, 200); // update every 200 milliseconds
     
                


        var parachutexFrame = [
                    { x: 0,   y:0,  w:170, h: 130},
                    { x: 45,  y:0, w:30, h: 64}, // left
                    { x: 90,  y:0, w:30, h: 64}, // left
                    { x: 182,  y:0, w:30, h: 64 }, // left
                    { x: 235, y:0, w:30, h: 64}, // left
                  
            ];

        var parachutexObj = {
                    x: 0,
                    y: 0,
                    width:90,
                    height:80,
                    frameIndex:0  // starting frame
                    };



      
		// update gambar
		const parachuteInterval = setInterval(function() {
			// update the idle frame index            
            parachutex.frameIndex+=1 
			if (parachutex.frameIndex>= 4) {                
                parachutex.frameIndex = 0              
			}
		}, 200); // update every 200 milliseconds
     

        var tankFrame = [
                    { x: 0,   y:0,  w:75, h: 75},
                    { x: 75,  y:0, w:75, h: 75}, // left
                    { x: 150,  y:0, w:75, h: 75}, // left
                    { x: 300,  y:0, w:75, h: 75 }, // left
                    { x: 375, y:0, w:75, h: 75}, // left
                  
            ];

        var tankObj = {
                    x: 0,
                    y: 0,
                    width:90,
                    height:80,
                    frameIndex:4  // starting frame
                    };



      
		// update gambar
		const tankInterval = setInterval(function() {
			// update the idle frame index            
            tankObj.frameIndex+=1 
			if (tankObj.frameIndex>= 4) {

                
                tankObj.frameIndex = 0 
             
			}
		}, 200); // update every 200 milliseconds
     
                
       
       

                             

         // membuat event listener pada keyboard
         document.addEventListener("keydown", keyDownHandler, false);
        document.addEventListener("keyup", keyUpHandler, false);



        // update character's position based on pressed key

        let gerakTruck = 0
        const truckY = 400
        const xWind = canvas.width / 2;
        
        function keyDownHandler(e) {
            if(e.key == "d" || e.key == "D") {
                
                gerakTruck += 50;
                if (gerakTruck>canvas.width - 100) {
                    gerakTruck =  canvas.width - 100
                } 
            }
            else if(e.key == "a" || e.key == "A") {
                gerakTruck += -50;

                if (gerakTruck<0) {
                    gerakTruck =  0
                } 
            }

            
        }

        // stop character's movement when key is released
        function keyUpHandler(e) {
            if(e.key == "d" || e.key == "D" || e.key == "a" || e.key == "A") {
                gerakTruck = gerakTruck;
            }


        }

        document.addEventListener('keydown', function(event) {
             if (event.code === 'ArrowRight') {
                
                gerakTank += 50;
                if (gerakTank>canvas.width - 100) {
                    gerakTank =  canvas.width - 100
                }
            } else if (event.code === 'ArrowLeft') {
                gerakTank += -50;
               
               if (gerakTank<0) {
                   gerakTank =  0
               } 
            } 
        });



        
        // posisi x bg
        let xbg = 0;        
       
      
        
        let isExecute = false

        let bomAndRoad = false

        let bomAndRoad1 = false



     

		function draw() {       
            var frameEx = explodeFrames[explodeBombs.frameIndex];

        // ----------------------------------bg---------------------------//

            // bg langit
            ctx.drawImage(bg1, xbg+3, -10 ,canvas.width, canvas.height-90);           
		    ctx.drawImage(bg1, xbg +canvas.width, -10,canvas.width, canvas.height-90);

            
            // bg forrest
            ctx.drawImage(bg2, xbg, 200, canvas.width, 250)
            ctx.drawImage(bg2, xbg +canvas.width, 200, canvas.width, 250)
			
            // bg jalan padang pasir
            ctx.drawImage(bg, xbg, 350, canvas.width, 200)
            ctx.drawImage(bg, xbg +canvas.width, 350, canvas.width, 200)

           

            
           // loop bg

           
            xbg -= 2;
			if (xbg < -canvas.width) {
				xbg = 0;
			}

            // //obstacle
            // ctx.drawImage(parachute, x, y);            
            //truck
            
            ctx.drawImage(idleFrames[idleIndex], gerakTruck, truckY);

            //pow                       
            if (y> canvas.height - 100) {
                idleIndex1=0
                y=0
                x=Math.floor(Math.random() * canvas.width)+10
                
            }

            if(yB > canvas.height -100){
                yB = 0
                xB = Math.floor(Math.random() * canvas.width)+10
                const audio2 = document.getElementById("sound-effect");
                audio2.play();
                
                console.log('play2')
            }

            if(yb2 > canvas.height -100){
                yb2 = 0
                xb2= Math.floor(Math.random() * canvas.width)+10
                const audio2 = document.getElementById("sound-effect");
                audio2.play();
                
                console.log('play2')
            }

            
            if(yPe > canvas.height -100){                
                yPe=0
                xPe= Math.floor(Math.random() * canvas.width)+10
            }

            if(yPe2 > canvas.height -100){                
                yPe2=0
                xPe2= Math.floor(Math.random() * canvas.width)+10
            }

            if(yb3 > canvas.height -100){                
                yb3=0
                xb3= Math.floor(Math.random() * canvas.width)+10
                const audio2 = document.getElementById("sound-effect");
                audio2.play();
                
                console.log('play2')
            }


            if(idleIndex1 >= idleFrames1.length){   
               idleIndex1 =0                                           
            }



          

        
        

             const parachuteBounds = {
                x: x,
                y: y,
                width: idleFrames1[idleIndex1].width,
                height:idleFrames1[idleIndex1].height
            };

           
               
            const bombBounds = {
                x: xB,
                y: yB,
                width: player.width-30,
                height:player.height
            };

            const bombBounds2 = {
                x: xb2,
                y: yb2,
                width: player.width-30,
                height:player.height
            };

            const truckBounds = {
                x: gerakTruck,
                y: 423,
                width: idleFrames[idleIndex].width,
                height: idleFrames[idleIndex].height
            };

             const roadBounds ={
                x:xB,
                y:450,
                width:canvas.width,
                height:300,
            }

            const pe1Bounds ={
                x:xPe,
                y:yPe,
                width:30,
                height:70,
            }

            const pe2Bounds ={
                x:xb3,
                y:yb3,
                width:30,
                height:70,
            }

            const tankBounds = {
                x:gerakTank,
                y:430,
                width:tankFrame[tankObj.frameIndex].w,
                height:tankFrame[tankObj.frameIndex].h,                
            }

                
                if(checkCollision(parachuteBounds, tankBounds)){
                    y=430
                    idleIndex1 = 4
                    if(!isExecute){                                                                                                                                      
            updateScore1()
            isExecute = true    
            setTimeout(()=>{
                isExecute = false
                y=0
                x=Math.floor(Math.random() * canvas.width)+10                                
            },2780)                                                
                }                                                                                                 
              
            }


                if(checkCollision(pe1Bounds,truckBounds)){                                                                                                                 
                 updateScore()           
                 yPe=0
                 xPe=Math.floor(Math.random() * canvas.width)+10                                                                                                     
                }

                if(checkCollision(pe2Bounds,truckBounds)){                                                                                                                 
                    updateScore()           
                    yb3=0
                    xb3=Math.floor(Math.random() * canvas.width)+10                                                                                                     
                   }

                   if(checkCollision(pe2Bounds,tankBounds)){                                                                                                                 
                    updateScore()           
                    yb3=0
                    xb3=Math.floor(Math.random() * canvas.width)+10                                                                                                     
                   }

                if(checkCollision(pe1Bounds,tankBounds)){                                                                                                                 
                 updateScore1()           
                 yPe=0
                 xPe=Math.floor(Math.random() * canvas.width)+10                                                                                                      
                }


                if(checkCollision(bombBounds, truckBounds)){                                                                                                                                                   
                  
                   explodeBombs.frameIndex=4
                   ctx.drawImage(explode, frameEx.x, frameEx.y, frameEx.w, frameEx.h,  xB ,yB,explodeBombs.width,explodeBombs.height);                                                                                                          
                   alert('game over')

                   ctx.clearRect(0, 0, canvas.width, canvas.height);
                   y = 0
                   yB = 0   
                   xB = 0   
                   yb2 = 0   
                   xb2 = 0              
                   score = 0
                   score1=0    
                   
                   isOver = true  
                                                                                                                                                                                          
                }

                if(checkCollision(bombBounds2, truckBounds)){                                                                                                                                                   
                  
                    explodeBombs.frameIndex=4
                    ctx.drawImage(explode, frameEx.x, frameEx.y, frameEx.w, frameEx.h,  xB ,yB,explodeBombs.width,explodeBombs.height);                                                                                                          
                    alert('game over')
                   
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    y = 0
                    yB = 0   
                    xB = 0   
                    yb2 = 0   
                    xb2 = 0              
                    score = 0
                    score1=0     
                    
                    isOver = true  
                                                                                                                                                                                            
                 
                }


                if(checkCollision(bombBounds2, tankBounds)){                                                                                                                                                   
                  
                    explodeBombs.frameIndex=4
                    ctx.drawImage(explode, frameEx.x, frameEx.y, frameEx.w, frameEx.h,  xB ,yB,explodeBombs.width,explodeBombs.height);                                                                                                          
                    alert('game over')
                   
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    y = 0
                    yB = 0   
                    xB = 0   
                    yb2 = 0   
                    xb2 = 0                
                    score = 0
                    score1=0      
                    
                    isOver = true  
                                                                                                                                                                                            
                 
                }

                if(checkCollision(bombBounds, tankBounds)){                                                                                                                                                                                         
                    explodeBombs.frameIndex=4
                    ctx.drawImage(explode, frameEx.x, frameEx.y, frameEx.w, frameEx.h,  xB ,yB,explodeBombs.width,explodeBombs.height);                                                                                                              
                    alert('game over')                      
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                        y = 0
                        yB = 0   
                        xB = 0 
                        yb2 = 0   
                        xb2 = 0                
                        score = 0
                        score1 = 0 
                        
                        isOver = true  
                }
                    

               
                if (checkCollision(bombBounds, roadBounds)) {                                                                                                                                                                                                                    
               bomAndRoad = true
              
                }

                if (checkCollision(bombBounds2, roadBounds)) {                                                                                                                                                                                                                    
                    bomAndRoad1 = true
                   
                     }
     

                

                if(bomAndRoad === true){                  
                   xEb.push(xB)                                                       
                   ctx.drawImage(explode, frameEx.x, frameEx.y, frameEx.w, frameEx.h,  xEb[0] ,350,explodeBombs.width,explodeBombs.height);                                                                                                                                                                                         
                        setTimeout(()=>{
                            if(xEb.length >=2){
                    xEb =[]
                    
                   }                           
                            bomAndRoad =false
                        },2000)                                                                
                }


                if(bomAndRoad1 === true){                  
                    xEb1.push(xb2)                                                       
                    ctx.drawImage(explode, frameEx.x, frameEx.y, frameEx.w, frameEx.h,  xEb1[0] ,350,explodeBombs.width,explodeBombs.height);                                                                                                                                                                                         
                         setTimeout(()=>{
                             if(xEb1.length >=2){
                     xEb1 =[]
                    }                           
                             bomAndRoad1 =false
                         },1000)                                                                
                 }
                

            if (checkCollision(parachuteBounds, truckBounds)) {
                     
                if(!isExecute){
                    
                    idleIndex1 = 4 
                                                                                              
            updateScore()
            isExecute = true    
            setTimeout(()=>{
                isExecute = false
                y=0
                x=Math.floor(Math.random() * canvas.width)+10                                
            },2780)                         
                }                                                                                                                   
            }else{               
                y += 2;  
            }

            yb2 += 5
            yB += 5;
            yPe +=4

            yb3 +=6
            
            var parachutexFrames = parachutexFrame[parachutexObj.frameIndex];
            ctx.drawImage(parachutex, parachutexFrames.x, parachutexFrames.y, parachutexFrames.w, parachutexFrames.h, x-35, y-60, parachutexObj.width, parachutexObj.height);                      

            ctx.drawImage(idleFrames1[idleIndex1],x, y);

            
         
            var frame = frames[player.frameIndex];
            ctx.drawImage(playerImage, frame.x, frame.y, frame.w, frame.h, xB, yB, player.width, player.height);                      


            var frame1 = frames[player.frameIndex];
            ctx.drawImage(playerImage, frame1.x, frame1.y, frame1.w, frame1.h,  xb2, yb2, player.width, player.height);                      

            var parachutexFrames = parachutexFrame[parachutexObj.frameIndex];
            ctx.drawImage(parachutex, parachutexFrames.x, parachutexFrames.y, parachutexFrames.w, parachutexFrames.h, xPe-30, yPe-60, parachutexObj.width, parachutexObj.height);                      
            
            
            // pow 2
            var frame2 = people1Frames[people1.frameIndex];
            ctx.drawImage(people, frame2.x, frame2.y, frame2.w, frame2.h,  xb3, yb3, people1.width, people1.height);                      

            var parachutexFrames = parachutexFrame[parachutexObj.frameIndex];
            ctx.drawImage(parachutex, parachutexFrames.x, parachutexFrames.y, parachutexFrames.w, parachutexFrames.h, xb3-30, yb3-60, parachutexObj.width, parachutexObj.height);                      


            var pe1Frame = people1Frames[people1.frameIndex];
            ctx.drawImage(people, pe1Frame.x, pe1Frame.y, pe1Frame.w, pe1Frame.h, xPe, yPe, people1.width, people1.height);                      


            var tankFrames = tankFrame[tankObj.frameIndex];
            ctx.drawImage(tank, tankFrames.x, tankFrames.y, tankFrames.w, tankFrames.h, gerakTank, 400, tankObj.width, tankObj.height);                      

            ctx.font = "20px Arial";
            ctx.strokeText("Score : "+score, 10, 20);

            ctx.font = "20px Arial";
            ctx.strokeText("Score : "+score1, canvas.width -100, 20);


            if(score >=20){
                setTimeout(()=>{
                    level3()
                },1000)
                loading()            
            }else if (isOver ===true){
                isOver = false
                drawMenu()
               
                        }else{
                            requestAnimationFrame(draw);
                        }                                                                                          
                
			

		}


       

        function checkCollision(parachuteBounds, truckBounds) {
        return (
            parachuteBounds.x < truckBounds.x + truckBounds.width &&
            parachuteBounds.x + parachuteBounds.width > truckBounds.x &&
            parachuteBounds.y  < truckBounds.y + truckBounds.height -100 &&
            parachuteBounds.y + parachuteBounds.height > truckBounds.y 
        );
        }

        

        const updateScore = () =>{
            const audio2 = document.getElementById("coin-sound");
            audio2.play();
            
            console.log('play2')
           
          
         score++;   
         
        
           
		}

        const updateScore1 = () =>{
            const audio2 = document.getElementById("coin-sound");
            audio2.play();
            
            console.log('play2')
         score1++                                       
       }
        
        let isColide = false

       
              
              
       
        

		bg.onload = function() {
			draw();
            
		};

}


// -----------------level 3----------------------------

function level3(){

    var canvas = document.getElementById("myCanvas");
		var ctx = canvas.getContext("2d");


        // Load the sprite sheet image
        var playerImage = new Image();
        playerImage.src = "./assets/bomb.png";


        var explode = new Image();
        explode.src = "./assets/mbledos.png";

        // Define the animation frames
        var frames = [
        { x: 0, y: 0, w:21, h: 35 },  // left
        { x: 21.9, y: 0, w:27, h: 35 }, // left
        { x: 45.9, y: 0, w:23, h: 35 }, // left
        { x: 88.8, y: 0, w:27, h: 35 }, // left
        ];




        // Create the player object and set its initial position
        var player = {
        x: 0,
        y: 0,
        width: 64,
        height: 64,
        frameIndex: 1 // starting frame
        };

        var player1 = {
            x: 0,
            y: 0,
            width: 64,
            height: 64,
            frameIndex: 1 // starting frame
            };
    




        let yb2 = 0
        let xb2 =  Math.floor(Math.random() * canvas.width)+10
        let yb3 = 0
        let xb3 =  Math.floor(Math.random() * canvas.width)+10
		let yB = 0
        let xB = 0
        let xPe =  Math.floor(Math.random() * canvas.width)+10
        let yPe = 0

        let xPe2 =  Math.floor(Math.random() * canvas.width)+10
        let yPe2 = 0
		var x = canvas.width/2;
        let gerakTank = 0
		var y = 0;
		var dy = 2;
        let xEb = []
        let xEb1 = []
        let xEb2 = []
      		
		var parachute = new Image();
		parachute.src = "./assets/obstacle/bomb.png";

        var people = new Image();
		people.src = "./assets/pe1.png";

        var parachutex= new Image();
		parachutex.src = "./assets/parasut.png";

        var tank= new Image();
		tank.src = "./assets/tank.png";
        
		
        // bg
		var bg = new Image();
        bg.src = "./assets/bg-sky/s1.png";

        const bg1 = new Image()
        bg1.src ='./assets/bg-sky/s2.png'

        
        // truck

        var idleFrames = [];
		for (let i = 1; i <= 4; i++) {
			const frame = new Image();
			frame.src = "./assets/truck/" + i + ".png";
			idleFrames.push(frame);
		}
		
		// deklarasi index index
		let idleIndex = 0;


          // update gambar
		var idleInterval = setInterval(function() {
			// update the idle frame index
			idleIndex++;
			if (idleIndex >= idleFrames.length) {
				idleIndex = 0;
			}

            
		}, 200); // update every 200 milliseconds
           
		
		
		



        // pow

        var idleFrames1 = [];
		for (let i = 1; i <= 3; i++) {
			const frame1 = new Image();
			frame1.src = "./assets/pow/pow (" + i + ").png";
			idleFrames1.push(frame1);
		}
      
                for (let i = 2; i <= 16; i++) {
                const frame1 = new Image();
                frame1.src = "./assets/pow/hit/pow (" + i + ").png";
                idleFrames1.push(frame1);            
		      	}        


        
		
		// deklarasi index index
		let idleIndex1 = 0;
		
		// update gambar
		const idleInterval1 = setInterval(function() {
			// update the idle frame index
			idleIndex1++;
			if (idleIndex1 === 3) {
				idleIndex1 = 0;
             }
             
           
            
		}, 200); // update every 200 milliseconds


        // deklarasi index index
		let bombIndex = 0;
		
		// update gambar
		const bombInterval = setInterval(function() {
			// update the idle frame index
            bombIndex
            player.frameIndex = bombIndex + (Math.floor(Date.now() / 100) % 4);
			if (bombIndex >= 3) {
                player.frameIndex = 0 + (Math.floor(Date.now() / 100) % 4);
			}
		}, 200); // update every 200 milliseconds

        player.frameIndex = 0 + (Math.floor(Date.now() / 100) % 4);


        var explodeFrames = [
                    { x: 0, y: 0, w:10, h: 64},
                    { x: 11, y: 0, w:10, h: 64}, // left
                    { x: 22, y: 0, w:10, h: 64}, // left
                    { x: 43, y: 0, w:10, h: 64 },   // left
                    { x: 75, y: 0, w:15, h: 64}, // left
                    { x: 150, y: 0, w:15, h: 64}, // left
                    { x: 290, y: 0, w:15, h: 64 }, // left
                    ];

        var explodeBombs = {
                    x: 0,
                    y: 0,
                    width:60,
                    height:200,
                    frameIndex:0  // starting frame
                    };


        let exIndex = 0;
		
                // update gambar
                const exInterval = setInterval(function() {
                    // update the idle frame index
                    
                   
                    
                    explodeBombs.frameIndex +=1 
                    if (explodeBombs.frameIndex  >= 6 ) {
                       
                        explodeBombs.frameIndex = 0  ;
                        
                    }
                }, 200); // update every 200 milliseconds
                explodeBombs.frameIndex = 0  ;






            var people1Frames = [
                    { x: 0,   y:0,  w:30, h: 64},
                    { x: 45,  y:0, w:30, h: 64}, // left
                    { x: 90,  y:0, w:30, h: 64}, // left
                    { x: 182,  y:0, w:30, h: 64 }, // left
                    { x: 235, y:0, w:30, h: 64}, // left
                  
            ];

        var people1 = {
                    x: 0,
                    y: 0,
                    width:30,
                    height:70,
                    frameIndex:4  // starting frame
        };



      
		// update gambar
		const people1Interval = setInterval(function() {
			// update the idle frame index            
            people1.frameIndex+=1 
			if (people1.frameIndex>= 4) {

                
                people1.frameIndex = 0 
             
			}
		}, 200); // update every 200 milliseconds
     
                


        var parachutexFrame = [
                    { x: 0,   y:0,  w:170, h: 130},
                    { x: 45,  y:0, w:30, h: 64}, // left
                    { x: 90,  y:0, w:30, h: 64}, // left
                    { x: 182,  y:0, w:30, h: 64 }, // left
                    { x: 235, y:0, w:30, h: 64}, // left
                  
            ];

        var parachutexObj = {
                    x: 0,
                    y: 0,
                    width:90,
                    height:80,
                    frameIndex:0  // starting frame
                    };



      
		// update gambar
		const parachuteInterval = setInterval(function() {
			// update the idle frame index            
            parachutex.frameIndex+=1 
			if (parachutex.frameIndex>= 4) {                
                parachutex.frameIndex = 0              
			}
		}, 200); // update every 200 milliseconds
     

        var tankFrame = [
                    { x: 0,   y:0,  w:75, h: 75},
                    { x: 75,  y:0, w:75, h: 75}, // left
                    { x: 150,  y:0, w:75, h: 75}, // left
                    { x: 300,  y:0, w:75, h: 75 }, // left
                    { x: 375, y:0, w:75, h: 75}, // left
                  
            ];

        var tankObj = {
                    x: 0,
                    y: 0,
                    width:90,
                    height:80,
                    frameIndex:4  // starting frame
                    };



      
		// update gambar
		const tankInterval = setInterval(function() {
			// update the idle frame index            
            tankObj.frameIndex+=1 
			if (tankObj.frameIndex>= 4) {

                
                tankObj.frameIndex = 0 
             
			}
		}, 200); // update every 200 milliseconds
     
                
       
       

                             

         // membuat event listener pada keyboard
         document.addEventListener("keydown", keyDownHandler, false);
        document.addEventListener("keyup", keyUpHandler, false);



        // update character's position based on pressed key

        let gerakTruck = 0
        const truckY = 400
        const xWind = canvas.width / 2;
        
        function keyDownHandler(e) {
            if(e.key == "d" || e.key == "D") {
                
                gerakTruck += 50;
                if (gerakTruck>canvas.width - 100) {
                    gerakTruck =  canvas.width - 100
                } 
            }
            else if(e.key == "a" || e.key == "A") {
                gerakTruck += -50;

                if (gerakTruck<0) {
                    gerakTruck =  0
                } 
            }

            
        }

        // stop character's movement when key is released
        function keyUpHandler(e) {
            if(e.key == "d" || e.key == "D" || e.key == "a" || e.key == "A") {
                gerakTruck = gerakTruck;
            }


        }

        document.addEventListener('keydown', function(event) {
             if (event.code === 'ArrowRight') {
                
                gerakTank += 50;
                if (gerakTank>canvas.width - 100) {
                    gerakTank =  canvas.width - 100
                }
            } else if (event.code === 'ArrowLeft') {
                gerakTank += -50;
               
               if (gerakTank<0) {
                   gerakTank =  0
               } 
            } 
        });



        
        // posisi x bg
        let xbg = 0;        
       
      
        
        let isExecute = false

        let bomAndRoad = false

        let bomAndRoad1 = false

        let bomAndRoad2 = false



     

		function draw() {       
            var frameEx = explodeFrames[explodeBombs.frameIndex];

        // ----------------------------------bg---------------------------//

            // bg langit
            ctx.drawImage(bg1, xbg+10, -10 ,canvas.width, canvas.height-90);           
		    ctx.drawImage(bg1, xbg +canvas.width, -10,canvas.width, canvas.height-90);

            
           
            // bg jalan padang pasir
            ctx.drawImage(bg, xbg, 350, canvas.width, 200)
            ctx.drawImage(bg, xbg +canvas.width, 350, canvas.width, 200)

           

            
           // loop bg

           
            xbg -= 2;
			if (xbg < -canvas.width) {
				xbg = -10;
			}

            // //obstacle
            // ctx.drawImage(parachute, x, y);            
            //truck
            
            ctx.drawImage(idleFrames[idleIndex], gerakTruck, truckY);

            //pow                       
            if (y> canvas.height - 100) {
                idleIndex1=0
                y=0
                x=Math.floor(Math.random() * canvas.width)+10
                
            }

            if(yB > canvas.height -100){
                yB = 0
                xB = Math.floor(Math.random() * canvas.width)+10
                const audio2 = document.getElementById("sound-effect");
                audio2.play();
                
                console.log('play2')
            }

            if(yb2 > canvas.height -100){
                yb2 = 0
                xb2= Math.floor(Math.random() * canvas.width)+10
                const audio2 = document.getElementById("sound-effect");
                audio2.play();
                
                console.log('play2')
            }

            if(yb3 > canvas.height -100){
                yb3 = 0
                xb3= Math.floor(Math.random() * canvas.width)+10
                const audio2 = document.getElementById("sound-effect");
                audio2.play();
                
                console.log('play2')
            }

            
            if(yPe > canvas.height -100){                
                yPe=0
                xPe= Math.floor(Math.random() * canvas.width)+10
            }

            if(yPe2 > canvas.height -100){                
                yPe2=0
                xPe2= Math.floor(Math.random() * canvas.width)+10
            }


            if(idleIndex1 >= idleFrames1.length){   
               idleIndex1 =0                                           
            }
                      

             const parachuteBounds = {
                x: x,
                y: y,
                width: idleFrames1[idleIndex1].width,
                height:idleFrames1[idleIndex1].height
            };

           
               
            const bombBounds = {
                x: xB,
                y: yB,
                width: player.width-30,
                height:player.height
            };

            const bombBounds2 = {
                x: xb2,
                y: yb2,
                width: player.width-30,
                height:player.height
            };

            const bombBounds3 = {
                x: xb3,
                y: yb3,
                width: player.width-30,
                height:player.height
            };

            const truckBounds = {
                x: gerakTruck,
                y: 423,
                width: idleFrames[idleIndex].width,
                height: idleFrames[idleIndex].height
            };

             const roadBounds ={
                x:xB,
                y:450,
                width:canvas.width,
                height:300,
            }

            const pe1Bounds ={
                x:xPe,
                y:yPe,
                width:30,
                height:70,
            }

            const tankBounds = {
                x:gerakTank,
                y:430,
                width:tankFrame[tankObj.frameIndex].w,
                height:tankFrame[tankObj.frameIndex].h,                
            }

                
                if(checkCollision(parachuteBounds, tankBounds)){
                    y=430
                    idleIndex1 = 4
                    if(!isExecute){                                                                                                                                      
            updateScore1()
            isExecute = true    
            setTimeout(()=>{
                isExecute = false
                y=0
                x=Math.floor(Math.random() * canvas.width)+10                                
            },2780)                                                
                }                                                                                                 
              
            }


                if(checkCollision(pe1Bounds,truckBounds)){                                                                                                                 
                 updateScore()           
                 yPe=0
                 xPe=Math.floor(Math.random() * canvas.width)+10                                                                                                     
                }

                if(checkCollision(pe1Bounds,tankBounds)){                                                                                                                 
                 updateScore1()           
                 yPe=0
                 xPe=Math.floor(Math.random() * canvas.width)+10                                                                                                      
                }


                if(checkCollision(bombBounds, truckBounds)){                                                                                                                                                   
                  
                   explodeBombs.frameIndex=4
                   ctx.drawImage(explode, frameEx.x, frameEx.y, frameEx.w, frameEx.h,  xB ,yB,explodeBombs.width,explodeBombs.height);                                                                                                          
                   alert('game over')

                   ctx.clearRect(0, 0, canvas.width, canvas.height);
                   y = 0
                   yB = 0   
                   xB = 0   
                   yb2 = 0   
                   xb2 = 0              
                   score = 0
                   score1=0               
                   
                   isOver = true  
                                                                                                                                                                                          
                }

                if(checkCollision(bombBounds2, truckBounds)){                                                                                                                                                   
                  
                    explodeBombs.frameIndex=4
                    ctx.drawImage(explode, frameEx.x, frameEx.y, frameEx.w, frameEx.h,  xB ,yB,explodeBombs.width,explodeBombs.height);                                                                                                          
                    alert('game over')
                   
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    y = 0
                    yB = 0   
                    xB = 0   
                    yb2 = 0   
                    xb2 = 0              
                    score = 0
                    score1=0       
                    
                    isOver = true  
                                                                                                                                                                                            
                 
                }


                if(checkCollision(bombBounds2, tankBounds)){                                                                                                                                                   
                  
                    explodeBombs.frameIndex=4
                    ctx.drawImage(explode, frameEx.x, frameEx.y, frameEx.w, frameEx.h,  xB ,yB,explodeBombs.width,explodeBombs.height);                                                                                                          
                    alert('game over')
                   
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    y = 0
                    yB = 0   
                    xB = 0   
                    yb2 = 0   
                    xb2 = 0                
                    score = 0
                    score1=0             
                    
                    isOver = true  
                                                                                                                                                                                            
                 
                }

                if(checkCollision(bombBounds3, truckBounds)){                                                                                                                                                   
                  
                    explodeBombs.frameIndex=4
                    ctx.drawImage(explode, frameEx.x, frameEx.y, frameEx.w, frameEx.h,  xB ,yB,explodeBombs.width,explodeBombs.height);                                                                                                          
                    alert('game over')
                   
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    y = 0
                    yB = 0   
                    xB = 0   
                    yb2 = 0   
                    xb2 = 0 
                    yb3 = 0   
                    xb3 = 0              
                    score = 0
                    score1=0      
                    
                    isOver = true  
                                                                                                                                                                                            
                 
                }


                if(checkCollision(bombBounds3, tankBounds)){                                                                                                                                                   
                  
                    explodeBombs.frameIndex=4
                    ctx.drawImage(explode, frameEx.x, frameEx.y, frameEx.w, frameEx.h,  xB ,yB,explodeBombs.width,explodeBombs.height);                                                                                                          
                    alert('game over')
                   
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    y = 0
                    yB = 0   
                    xB = 0   
                    yb2 = 0   
                    xb2 = 0
                    yb3 = 0   
                    xb3 = 0                 
                    score = 0
                    score1=0 
                    
                    isOver = true  
                                                                                                                                                                                            
                 
                }

                if(checkCollision(bombBounds, tankBounds)){                                                                                                                                                                                         
                    explodeBombs.frameIndex=4
                    ctx.drawImage(explode, frameEx.x, frameEx.y, frameEx.w, frameEx.h,  xB ,yB,explodeBombs.width,explodeBombs.height);                                                                                                              
                    alert('game over')                      
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                        y = 0
                        yB = 0   
                        xB = 0 
                        yb2 = 0   
                        xb2 = 0                
                        score = 0
                        score1 = 0  
                        
                        isOver = true  
                }
                    

               
                if (checkCollision(bombBounds, roadBounds)) {                                                                                                                                                                                                                    
               bomAndRoad = true
                }

                if (checkCollision(bombBounds2, roadBounds)) {                                                                                                                                                                                                                    
                    bomAndRoad1 = true
                     }
     

                

                if(bomAndRoad === true){                  
                   xEb.push(xB)                                                       
                   ctx.drawImage(explode, frameEx.x, frameEx.y, frameEx.w, frameEx.h,  xEb[0] ,350,explodeBombs.width,explodeBombs.height);                                                                                                                                                                                         
                        setTimeout(()=>{
                            if(xEb.length >=2){
                    xEb =[]
                   }                           
                            bomAndRoad =false
                        },2000)                                                                
                }


                if(bomAndRoad1 === true){                  
                    xEb1.push(xb2)                                                       
                    ctx.drawImage(explode, frameEx.x, frameEx.y, frameEx.w, frameEx.h,  xEb1[0] ,350,explodeBombs.width,explodeBombs.height);                                                                                                                                                                                         
                         setTimeout(()=>{
                             if(xEb1.length >=2){
                     xEb1 =[]
                    }                           
                             bomAndRoad1 =false
                         },1000)                                                                
                 }

                 if(bomAndRoad2 === true){                  
                    xEb2.push(xb3)                                                       
                    ctx.drawImage(explode, frameEx.x, frameEx.y, frameEx.w, frameEx.h,  xEb2[0] ,350,explodeBombs.width,explodeBombs.height);                                                                                                                                                                                         
                         setTimeout(()=>{
                             if(xEb2.length >=2){
                     xEb2 =[]
                    }                           
                             bomAndRoad2 =false
                         },1000)                                                                
                 }

                 
                

            if (checkCollision(parachuteBounds, truckBounds)) {
                     
                if(!isExecute){
                    
                    idleIndex1 = 4 
                                                                                              
            updateScore()
            isExecute = true    
            setTimeout(()=>{
                isExecute = false
                y=0
                x=Math.floor(Math.random() * canvas.width)+10                                
            },2780)                         
                }                                                                                                                   
            }else{               
                y += 2;  
            }

            yb2 += 5
            yb3 +=6
            yB += 5;
            yPe +=4
            
            var parachutexFrames = parachutexFrame[parachutexObj.frameIndex];
            ctx.drawImage(parachutex, parachutexFrames.x, parachutexFrames.y, parachutexFrames.w, parachutexFrames.h, x-35, y-60, parachutexObj.width, parachutexObj.height);                      

            ctx.drawImage(idleFrames1[idleIndex1],x, y);

            
         
            var frame = frames[player.frameIndex];
            ctx.drawImage(playerImage, frame.x, frame.y, frame.w, frame.h, xB, yB, player.width, player.height);                      


            var frame1 = frames[player.frameIndex];
            ctx.drawImage(playerImage, frame1.x, frame1.y, frame1.w, frame1.h,  xb2, yb2, player.width, player.height);                      

            var frame2 = frames[player.frameIndex];
            ctx.drawImage(playerImage, frame2.x, frame2.y, frame2.w, frame2.h,  xb3, yb3, player.width, player.height);                      

            var parachutexFrames = parachutexFrame[parachutexObj.frameIndex];
            ctx.drawImage(parachutex, parachutexFrames.x, parachutexFrames.y, parachutexFrames.w, parachutexFrames.h, xPe-30, yPe-60, parachutexObj.width, parachutexObj.height);                      


            var pe1Frame = people1Frames[people1.frameIndex];
            ctx.drawImage(people, pe1Frame.x, pe1Frame.y, pe1Frame.w, pe1Frame.h, xPe, yPe, people1.width, people1.height);                      


            var tankFrames = tankFrame[tankObj.frameIndex];
            ctx.drawImage(tank, tankFrames.x, tankFrames.y, tankFrames.w, tankFrames.h, gerakTank, 400, tankObj.width, tankObj.height);                      

            ctx.font = "20px Arial";
            ctx.strokeText("Score : "+score, 10, 20);

            ctx.font = "20px Arial";
            ctx.strokeText("Score : "+score1, canvas.width -100, 20);

           if (isOver === true) {
            isOver = false

            drawMenu()
           }else{
            requestAnimationFrame(draw);
           }
           
			

		}


       

        function checkCollision(parachuteBounds, truckBounds) {
        return (
            parachuteBounds.x < truckBounds.x + truckBounds.width &&
            parachuteBounds.x + parachuteBounds.width > truckBounds.x &&
            parachuteBounds.y  < truckBounds.y + truckBounds.height -100 &&
            parachuteBounds.y + parachuteBounds.height > truckBounds.y 
        );
        }

        

        const updateScore = () =>{
            const audio2 = document.getElementById("coin-sound");
            audio2.play();
            
            console.log('play2')
          
         score++;   
         
        
           
		}

        const updateScore1 = () =>{

            const audio2 = document.getElementById("coin-sound");
            audio2.play();
            
            console.log('play2')
         score1++                                       
       }
        
        let isColide = false

       
              
              
       
        

		bg.onload = function() {
			draw();
            
		};

}

function loading(){
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');

   
    
    

    var bg = new Image();
    bg.src = "./assets/mainMenu/bg.jpg";

    let i = 0
    const dot =['.','..','...','....']
           

         setInterval(function() {
			// update the idle frame index            
            
           
               
                if(i>=3){
                    i=0
            }
            i++
		}, 200);
        



    
    const drawMenu = ()=>{
        ctx.drawImage(bg,0,0,canvas.width, canvas.height);
        ctx.font = "50px Arial";
        ctx.fillStyle = "#00000";
        ctx.fillText("loading", canvas.width/2-70, canvas.height/2);
        ctx.font = "100px Arial";
        ctx.fillText(dot[i], canvas.width/2-70, canvas.height/2+50);
       


        requestAnimationFrame(drawMenu);
    }


    
   

       

    drawMenu()
}


		     
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// mengambil gambar tombol newgame
var newGame = new Image();
newGame.src = "./assets/mainMenu/newGame.png";

// mengambil gambar tombol rules
var rules = new Image();
rules.src = "./assets/mainMenu/Rules.png";

// var exit = new Image();
// exit.src = "./assets/mainMenu/exit.png";


// mengambil gambar backgrouund
var bg = new Image();
bg.src = "./assets/mainMenu/bg.jpg";

// mengambil gambar title
var title = new Image();
title.src = "./assets/mainMenu/title.png";

const rulesMenu =()=>{
// menggambar background
    ctx.drawImage(bg,0,0,canvas.width, canvas.height);
// memberi ukuran style pada tulisan
    ctx.font = "50px Arial";
    // memberi warna pada tulisan
    ctx.fillStyle = "#000000";
    // gambar tulisan (format e apa yang digambar, posisi x dan posisi y)
    ctx.fillText("Rules", canvas.width/2-70, 100);
    ctx.font = "20px Arial";
    ctx.fillText(`1.Selamatkan korban yang terjun dengan parasut`, canvas.width/2-200, 150);
    ctx.fillText(`2.Hindari bomb atau game akan berakhir`, canvas.width/2-200, 200);
   
    ctx.fillStyle = "#ff0000";
    ctx.fillText(`3.Mainkan!`, canvas.width/2-200, 250);


    //memberi event click canvas
    canvas.addEventListener('mousedown', function(event) {
        const rect = canvas.getBoundingClientRect();
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;
        
        //membaca posisi mouse untuk menjalankan drawmenu
        if (mouseX >= canvas.width/2 - 200 && mouseX <= canvas.width/2 + 200 &&
          mouseY >= 200 && mouseY <= 250) {
        
        drawMenu()
        }
        
      
        });


    
   

    requestAnimationFrame(rulesMenu);

}



const  drawMenu = ()=>{

    const audio = document.getElementById("background-music");
  
    
   
   
    audio.volume = 0.1;
    audio.loop = true;
    audio.play()


    
    ctx.drawImage(bg,0,0,canvas.width, canvas.height);

    ctx.drawImage(title,canvas.width/2 -200, 50,400, 70);
   
    ctx.drawImage(newGame,canvas.width/2 -100, 150,200, 100);

    ctx.drawImage(rules,canvas.width/2 -100, 250,200, 60);

   
    requestAnimationFrame(drawMenu);
}


// memberi event click pada canvas

canvas.addEventListener('mousedown', function(event) {
const rect = canvas.getBoundingClientRect();
const mouseX = event.clientX - rect.left;
const mouseY = event.clientY - rect.top;

//  membaca posisi mouse jika diatas tombol new game untuk menjalankan fungsi start game
if (mouseX >= canvas.width/2 - 100 && mouseX <= canvas.width/2 + 100 &&
  mouseY >= 150 && mouseY <= 250) {
startGame()
}

// membaca posisi mouse jika diatas tombol rules untuk menjalankan fungsi rules
if (mouseX >= canvas.width/2 - 100 && mouseX <= canvas.width/2 + 100 &&
  mouseY >= 250 && mouseY <= 320) {
rulesMenu()
}
});
   

drawMenu()






