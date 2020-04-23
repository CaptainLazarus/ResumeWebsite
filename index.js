function hideImage(el) {
    el.remove()
}

function restoreImage(el , imageName , imageFormat) {
    var y = el.parentElement
    var z = document.createElement("img");
    z.setAttribute("src" , imageName+imageFormat);
    z.setAttribute("id" , imageName);
    z.setAttribute("onclick" , "hideImage(this)");
    y.insertBefore(z , el);
}