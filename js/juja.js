'use strict'
console.log('Legend of Juja Snake v.1.2  2011 - 12.02.2018');

//
// 0 < x 29,  0 < y < 39
// snake.direction 0,1,2,3; 0-up, 1-down, 2-left, 3-right
//
//  Next step: 
//  1. Head and tail position tracking
//  2. Sprites moving snake body
//  3. Snake Food
//  4. Sound engine
//  5. Strip image prize
//  6. Scores w name
//  7. Pause - P, Exit - ESC

let snake={};
let area=[];

function jujaStart () {

    snake.x = 15; //координаты головы
    snake.y = 19; //координаты головы
    snake.direction = 3;
    snake.dead = false;

// создать поле area[row 0..29][col 0..39]
for (let i=0; i<30; i++) {
    area[i]=[];
}

for (let i in area) {
  for (let j=0; j<40; j++) {
     area[i][j]=0
  }
}

// как тут сразу keyHandler вызвать, а не внутри function
    $('html').keydown( function (e) {
        keyHandler (e)
    });

    setInterval( loop, 750)
}

function loop () {
    update();
    draw();
    if (snake.dead) {console.log('i see, snake dead');}
}

function update () {
    console.log('update:', snake)
    area[snake.y][snake.x]=2 //body on old coords

    // up
    if (snake.direction==0) {
        if (snake.y!=0) {snake.y=snake.y-1}
        if (snake.y==0) {snake.y=29}
    }

    // down
    if (snake.direction==1) {
        if (snake.y!=29) {snake.y=snake.y+1}
        if (snake.y==29) {snake.y=1}
    }

    // left
    if (snake.direction==2) {
        if (snake.x!=0) {snake.x=snake.x-1}
        if (snake.x==0) {snake.x=39}
    }

    // right
    if (snake.direction==3) {
        if (snake.x!=39) {snake.x=snake.x+1}
        if (snake.x==39) {snake.x=0}
    }

    let chk = area[snake.y][snake.x]
    console.log('chk',chk)
    if (chk==2) { console.log ('Snake die.'); snake.dead=true;}
    area[snake.y][snake.x]=1 //snake head new coord
}

function draw () {

 console.log ("draw:", snake, Date.now() )
 let t=`<div class='tile'></div>`
 let ty=`<div class='tile yellow'></div>`
 let tg=`<div class='tile grey'></div>`
 $('#fence').empty();
 let c=0;

 for (let i in area) {
      for (let j=0; j<40; j++) {
        c++; 
        let a=t;
        if (area[i][j]==0) { a=t }
        if (area[i][j]==1) { a=ty } //head
        if (area[i][j]==2) { a=tg } //body?            
        $('#fence').append(a)
      }
 }

}

function keyHandler (e) {
    // e.which --->   Enter-13   Space-32
    //console.log ('key:', e.which)
    let key=e.which;

    switch (key) {
        case (37):  // left
           snake.direction=2;
           break;
        case (38):  // up
           snake.direction=0;
           break;
        case (39):  // right
           snake.direction=3;
           break;
        case (40):  // down
           snake.direction=1;
           break;  
        case (27):  // ESC
           console.log('ESC'); snake.dead = true;
           break;            
    }                               
}

function checkJquery() {
    if (window.$){
        jujaStart();
    } else {
    	console.log('wait jq loading');
        setTimeout(checkJquery, 50);
    }
}
checkJquery();

