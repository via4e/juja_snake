var snake={};

function jujaStart () {
    console.log( 'juja' );
    var snake={};
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

    if (snake.direction==0) {
        if (snake.y!=0) {snake.y=y-1}
    }
}

function draw () {
    console.log('draw')
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



