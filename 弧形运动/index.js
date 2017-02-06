(function() {

    $("html, body").on("click", startHuxing);

    function startHuxing(event) {
        // 终点
        // 添加的图片
        var offset = $("#end").offset(),
            flyer = $('<img class="u-flyer" src="./images/img.jpg"/>');

        flyer.fly({
            start: {
              left: event.pageX,
              top: event.pageY
            },
            end: {
              left: offset.left,
              top: offset.top, 
              width: 20,height: 20
            }
        });
    }   

})();