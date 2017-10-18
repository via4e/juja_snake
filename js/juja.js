function jujaStart () {
    console.log( 'juja' );
    setTimeout( loop, 1000)
}

function loop () {
    update();
    draw();
}

function update () {
    console.log('update')
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



