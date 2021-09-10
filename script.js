let interval_id1;
let interval_id2;
let interval_id3;
let interval_id4;
let interval_id5;
function on_lights() {

    function red() {
        var red = document.querySelector("#red");
        red.style = "background-color:red;box-shadow: 0 0 20px 5px red"
        var green = document.getElementById("green")
        green.style.backgroundColor = "black";
        green.style.boxShadow = "none"
        interval_id1 = setTimeout(yellow, 1000);
        // console.log(interval);

    }


    function yellow() {

        var yellow = document.getElementById("yellow");
        yellow.style.backgroundColor = "#d9e00b";
        yellow.style.boxShadow = "0 0 20px 5px #d9e00b";
        var red = document.querySelector("#red");
        red.style.backgroundColor = "black";
        red.style.boxShadow = "none";
        interval_id2 = setTimeout(green, 1000);
    }


    function green() {
        var green = document.getElementById("green");
        green.style.backgroundColor = "#06d417";
        green.style.boxShadow = " 0 0 20px 5px #06d417"
        var yellow = document.getElementById("yellow");
        yellow.style.backgroundColor = "black";
        yellow.style.boxShadow = "none";
        interval_id3 = setTimeout(red, 1000);

    }

    red();

}


function off_lights() {
    clearTimeout(interval_id1);
    clearTimeout(interval_id2);
    clearTimeout(interval_id3);
    clearTimeout(interval_id4);
    clearTimeout(interval_id5);
    var red = document.querySelector("#red");
    var yellow = document.getElementById("yellow");
    var green = document.getElementById("green");
    yellow.style.backgroundColor = "black";
    yellow.style.boxShadow = "none";
    red.style.backgroundColor = "black";
    red.style.boxShadow = "none";
    green.style.backgroundColor = "black";
    green.style.boxShadow = "none"

}

function green_light() {
    clearTimeout(interval_id1);
    clearTimeout(interval_id2);
    clearTimeout(interval_id3);
    // var green = document.getElementById("green");
    green.style.backgroundColor = "#06d417";
    green.style.boxShadow = " 0 0 20px 5px #06d417"
    yellow.style.backgroundColor = "black";
    yellow.style.boxShadow = "none";
    red.style.backgroundColor = "black";
    red.style.boxShadow = "none";


}

function red_light() {
    clearTimeout(interval_id1);
    clearTimeout(interval_id2);
    clearTimeout(interval_id3);

    red.style.backgroundColor = "red";
    red.style.boxShadow = " 0 0 20px 5px red"
    yellow.style.backgroundColor = "black";
    yellow.style.boxShadow = "none";
    green.style.backgroundColor = "black";
    green.style.boxShadow = "none";
}

function yellow_blink() {
    function yellow_light() {
        yellow.style.backgroundColor = "#d9e00b";
        yellow.style.boxShadow = "0 0 20px 5px #d9e00b";
        interval_id4=setTimeout(black_light,250)

    }
    function black_light() {
        
        yellow.style.backgroundColor = "black";
        yellow.style.boxShadow = "none";
        interval_id5=setTimeout(yellow_light,250)

    }
    yellow_light();
}






// function off_lights() {
//     var red = document.querySelector("#red");
//     var yellow = document.getElementById("yellow");
//     var green = document.getElementById("green")
//     red.style.backgroundColor = "black";
//     red.style.boxShadow = "none";
//     yellow.style.backgroundColor = "black";
//     yellow.style.boxShadow = "none";
//     green.style.backgroundColor = "black";
//     green.style.boxShadow = "none"


// }


