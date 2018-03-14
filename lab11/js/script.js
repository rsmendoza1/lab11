/*eslint-env browser*/

function init() {
    "use strict";
    var btnlogin = window.document.getElementById("login");
    btnlogin.addEventListener("click", function () {
        window.open("login.html", "login", "width=400, height=400");
    });
}
window.addEventListener("load", init);