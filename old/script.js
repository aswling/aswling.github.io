$("a.jumble-up-text").on("mouseover mouseout", function(){
    var $this = $(this);
    var sShowTxt = $this.data('changetxt');
    $this.data('changetxt', $this.text());   
    $this.text(sShowTxt);

});