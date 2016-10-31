//https://teamtreehouse.com/community/random-background-color
function ran_col() {
    var color = '#';
    var letters = ['000000','FFFF00','FF0000','00FFFF'];
    color += letters[Math.floor(Math.random() * letters.length)];
    document.getElementById('page').style.background = color;
}

$("a.jumble-up-text").on("mouseover mouseout", function(){
    var $this = $(this);
    var sShowTxt = $this.data('changetxt');
    $this.data('changetxt', $this.text());   
    $this.text(sShowTxt);
});

//https://perishablepress.com/3-ways-preload-images-css-javascript-ajax/
var images = new Array()
    function preload() {
        for (i = 0; i < preload.arguments.length; i++) {
            images[i] = new Image()
            images[i].src = preload.arguments[i]
        }
    }
    preload(
        "img/upleft.png",
        "img/downleft.png",
        "img/downright.png",
        "img/upright.png",
        "img/front.png"
    )

//http://stackoverflow.com/questions/9476843/changing-a-image-with-mouse-positions
var image_src = {
    //up: "img/up.png",
    upleft: "img/upleft.png",
    //left: "img/left.png",
    downleft: "img/downleft.png",
    //down: "img/down.png",
    downright: "img/downright.png",
    //right: "img/right.png",
    upright: "img/upright.png",
    front: "img/front.png"
};

$(document).mousemove(function(event){
    var mloc = {
        x: event.pageX,
        y: event.pageY
    };

    if(
        (mloc.x >= 0 && mloc.x <= $(document).width()/2) &&
        (mloc.y >= 0 && mloc.y <= $(document).height()/2)
        //(mloc.x >= 0 && mloc.x <= $(document).width()/3) &&
        //(mloc.y >= 0 && mloc.y <= $(document).height()/3)
    ){
        console.log("upleft");
        $(".head").attr("src", image_src.upleft);
    }else if( 
        (mloc.x >= 0 && mloc.x <= $(document).width()/2) &&
        (mloc.y >= $(document).height()/2 && mloc.y <= $(document).height())
        //(mloc.x >= 0 && mloc.x <= $(document).width()/3) &&
        //(mloc.y >= $(document).height()*(2/3) && mloc.y <= $(document).height())
    ){
        console.log("downleft");
        $(".head").attr("src", image_src.downleft);
    }else if( 
        (mloc.x >= $(document).width()/2 && mloc.x <= $(document).width()) &&
        (mloc.y >= 0 && mloc.y <= $(document).height()/2)
        //(mloc.x >= $(document).width()*(2/3) && mloc.x <= $(document).width()) &&
        //(mloc.y >= 0 && mloc.y <= $(document).height()/3)
    ){
        console.log("upright");
        $(".head").attr("src", image_src.upright);
    }else if(
        (mloc.x >= $(document).width()/2 && mloc.x <= $(document).width()) &&
        (mloc.y >= $(document).height()/2 && mloc.y <= $(document).height())
        //(mloc.x >= $(document).width()*(2/3) && mloc.x <= $(document).width()) &&
        //(mloc.y >= $(document).height()*(2/3) && mloc.y <= $(document).height())
    ){
        console.log("downright");
        $(".head").attr("src", image_src.downright);
    }else {
        console.log("front");
        $(".head").attr("src", image_src.front);
    }

    /*} else if(
        (mloc.x >= $(document).width()/2 && mloc.x <= $(document).width()) &&
        (mloc.y >= 0 && mloc.y <= $(document).height())
        //(mloc.x >= $(document).width()*(2/3) && mloc.x <= $(document).width()) &&
        //(mloc.y >= $(document).height()/3 && mloc.y <= $(document).height()*(2/3))
    ){
        console.log("right");
        $(".head").attr("src", image_src.right);
    }else if( 
        (mloc.x >= 0 && mloc.x <= $(document).width()/2) &&
        (mloc.y >= 0 && mloc.y <= $(document).height())
        //(mloc.x >= 0 && mloc.x <= $(document).width()/3) &&
        //(mloc.y >= $(document).height()/3 && mloc.y <= $(document).height()*(2/3))
    ){
        console.log("left");
        $(".head").attr("src", image_src.left);
    }else if( 
        (mloc.x >= 0 && mloc.x <= $(document).width()) &&
        (mloc.y >= 0 && mloc.y <= $(document).height()/2)
        //(mloc.x >= $(document).width()/3 && mloc.x <= $(document).width()*(2/3)) &&
        //(mloc.y >= $(document).height()*(2/3) && mloc.y <= $(document).height())
    ){
        console.log("up");
        $(".head").attr("src", image_src.up);
    }else if( 
        (mloc.x >= 0 && mloc.x <= $(document).width()) &&
        (mloc.y >= $(document).height()/2 && mloc.y <= $(document).height())
        //(mloc.x >= $(document).width()/3 && mloc.x <= $(document).width()*(2/3)) &&
        //(mloc.y >= 0 && mloc.y <= $(document).height()/3)
    ){
        console.log("down");
        $(".head").attr("src", image_src.down);
    }*/
});