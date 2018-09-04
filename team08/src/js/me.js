$(function() {
    $.ajax({
        url: "/api/swiper",
        dataType: "json",
        success: function(res) {
            if (res.code === 1) {
                var str = ''
                res.msg.forEach(function(file) {
                    str += ' <div class="swiper-slide"><img src="img/' + file.url + '" alt=""> </div>'
                })
                $('.swiper-wrapper').html(str)
                new Swiper('.swiper-container')
            }
        }
    })
})