function setCookie(cookieName, value, exdays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var cookieValue = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toGMTString());
    document.cookie = cookieName + "=" + cookieValue;
}

function deleteCookie(cookieName) {
    var expireDate = new Date();
    expireDate.setDate(expireDate.getDate() - 1);
    document.cookie = cookieName + "= " + "; expires=" + expireDate.toGMTString();
}

function getCookie(cookieName) {
    cookieName = cookieName + '=';
    var cookieData = document.cookie;
    var start = cookieData.indexOf(cookieName);
    var cookieValue = '';
    if (start != -1) {
        start += cookieName.length;
        var end = cookieData.indexOf(';', start);
        if (end == -1) end = cookieData.length;
        cookieValue = cookieData.substring(start, end);
    }
    return unescape(cookieValue);
}

function logout() {
    sessionStorage.removeItem('id');
    window.location.reload();
}

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}



(function () {
    const userApi = new UserApi();
    const id = sessionStorage.getItem('id')
    userApi.existsUsers({id: id}).done(json => {
        if (json.result) {
            $(".login_before").hide();
            $(".login_after").show();
            console.log("auth")
        } else {
            $(".login_before").show();
            $(".login_after").hide();
            console.log("no auth")
        }
    });
    if(id==="admin"){
        $("#write").show();
        $("#save_btn").show();
    } else {
        $("#write").hide();
        $("#save_btn").hide();
    }
})()