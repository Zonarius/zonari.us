(function () {
    $.get("galleries.json", function (data) {
        Object.keys(data).forEach(function(key) {
            addGallery(key, data[key]);
        })
    });

    var template = '<div id=\"MYID\" class=\"carousel slide\" data-ride=\"carousel\">\r\n      <!-- Indicators -->\r\n      <ol class=\"carousel-indicators\">\r\n\r\n      <\/ol>\r\n\r\n      <!-- Wrapper for slides -->\r\n      <div class=\"carousel-inner\" role=\"listbox\">\r\n\r\n      <\/div>\r\n\r\n      <!-- Left and right controls -->\r\n      <a class=\"left carousel-control\" href=\"#MYID\" role=\"button\" data-slide=\"prev\">\r\n        <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\"><\/span>\r\n        <span class=\"sr-only\">Previous<\/span>\r\n      <\/a>\r\n      <a class=\"right carousel-control\" href=\"#MYID\" role=\"button\" data-slide=\"next\">\r\n        <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"><\/span>\r\n        <span class=\"sr-only\">Next<\/span>\r\n      <\/a>\r\n    <\/div>';

    function addGallery(name, files) {
        $('#carousel-container').append(template.replace(/MYID/g, name));
        var indicators = $('#' + name).find("ol.carousel-indicators");
        var slides = $('#' + name).find("div.carousel-inner");
        files.forEach(function(file, i) {
            if (i == 0) {
                indicators.append("<li data-target='#" + name + "' data-slide-to='" + i + "' class='active'></li>");
                slides.append('<div class="item active"><img src="' + file + '" /></div>');
            } else {
                indicators.append("<li data-target='#" + name + "' data-slide-to='" + i + "'></li>");
                slides.append('<div class="item"><img src="' + file + '" /></div>');
            }
        })
    }
})();
