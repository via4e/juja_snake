console.log('Legend of Juja Snake v.1.2  2011 - 31.01.2018');
'use strict'

let snake={};

function jujaStart () {
    console.log( 'juja' );

    // 0 < x 29,  0 < y < 39
    // snake.direction 0,1,2,3; 0-up, 1-down, 2-left, 3-right

    snake.x = 15;
    snake.y = 19;
    snake.direction = 3;

// как тут сразу keyHandler вызвать, а не внутри function
    $('html').keydown( function (e) {
        keyHandler (e)
    });

    setInterval( loop, 1500)
}

function loop () {
    update();
    draw();
}

function update () {
    console.log('update:', snake)

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

}

function draw () {
    console.log ("snk:", snake)
}

function keyHandler (e) {
    // e.which --->   Enter-13   Space-32
    // Left-37
    // Right-39
    // Up-38
    // Down-40
    //console.log ('key:', e.which)
    let key=e.which;

    switch (key) {
        case (37):
           // left
           snake.direction=2;
           break;
        case (38):
           // up
           snake.direction=0;
           break;
        case (39):
           // right
           snake.direction=3;
           break;
        case (40):
           // down
           snake.direction=1;
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