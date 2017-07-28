function jujaStart () {
    console.log( 'juja' );
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

