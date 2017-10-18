var snake={};


function jujaStart () {
    console.log( 'juja' );

    // 0 < x 29,  0 < y < 39
    // snake.direction 0,1,2,3; 0-up, 1-down, 2-left, 3-right

    snake.x = 15;
    snake.y = 19;
    snake.direction = 3;

    setInterval( loop, 1000)
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



