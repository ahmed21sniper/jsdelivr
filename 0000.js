var postnavPrevText = "الموضوع السابق",
    postnavNextText = "الموضوع التالي",
    noThumbnail = "https://4.bp.blogspot.com/-OI0BoYP677M/VZu1TW7a3DI/AAAAAAAAFsE/4BRdE2YFS5A/w230-h155-p-k-no-nu/noimg.png";
$(".post-nav").each(function() {
    var t = $("a.prev-post").attr("href"),
        n = $("a.next-post").attr("href");
    $.ajax({
        url: t,
        type: "get",
        success: function(t) {
            var n = $(t).find(".posts-h1-title").text(),
                a = postnavPrevText,
                e = "",
                s = $(t).find(".post-outer img:first").attr("src");
            void 0 === s && (s = noThumbnail), e += "<div class='nav-thumb'><img alt='" + n + "' src='" + s + "'/></div><div class='nav-content'><span>" + a + "</span><p class='truncate'>" + n + "</p></div>", $("a.prev-post").html(e)
        }
    }), $.ajax({
        url: n,
        type: "get",
        success: function(t) {
            var n = $(t).find(".posts-h1-title").text(),
                a = postnavNextText,
                e = "",
                s = $(t).find(".post-outer img:first").attr("src");
            void 0 === s && (s = noThumbnail), e += "<div class='nav-thumb'><img alt='" + n + "' src='" + s + "'/></div><div class='nav-content'><span>" + a + "</span><p class='truncate'>" + n + "</p></div>", $("a.next-post").html(e)
        }
    })
});
