class UserApi {
    constructor() {

        const hostName = window.location.hostname;
        if (hostName === "localhost") {
            this.baseUrl = "http://localhost:8081"
        } else {
            this.baseUrl = "https://spring-boot-1604154327452.azurewebsites.net";
        }
    }


    existsUsers(data) {
        return $.ajax({
            url: this.baseUrl + "/exists",
            method: "GET",
            dataType: "json",
            data: data,
        })
    }

    createUsers(data) {
        return $.ajax({
            url: this.baseUrl + "/join",
            method: "POST",
            dataType: "json",
            contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
            data: data,
        })
    }


    loginUsers(data) {
        return $.ajax({
            url: this.baseUrl + "/login",
            method: "POST",
            dataType: "json",
            contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
            data: data,
        })
    }

    getUsers() {
        const id = sessionStorage.getItem('id');
        return $.ajax({
            url: this.baseUrl + "/users",
            method: "GET",
            dataType: "json",
            data: {id:id},
        })
    }


}


