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
    upleft: "img/upleft.png",
    downleft: "img/downleft.png",
    downright: "img/downright.png",
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
    ){
        console.log("upleft");
        $(".head").attr("src", image_src.upleft);
    }else if( 
        (mloc.x >= 0 && mloc.x <= $(document).width()/2) &&
        (mloc.y >= $(document).height()/2 && mloc.y <= $(document).height())
    ){
        console.log("downleft");
        $(".head").attr("src", image_src.downleft);
    }else if( 
        (mloc.x >= $(document).width()/2 && mloc.x <= $(document).width()) &&
        (mloc.y >= 0 && mloc.y <= $(document).height()/2)
    ){
        console.log("upright");
        $(".head").attr("src", image_src.upright);
    }else if(
        (mloc.x >= $(document).width()/2 && mloc.x <= $(document).width()) &&
        (mloc.y >= $(document).height()/2 && mloc.y <= $(document).height())
    ){
        console.log("downright");
        $(".head").attr("src", image_src.downright);
    }else {
        console.log("front");
        $(".head").attr("src", image_src.front);
    }
});