class BoardApi {
    constructor() {
        const hostName = window.location.hostname;
        if (hostName === "localhost") {
            this.baseUrl = "http://localhost:8081"
        } else {
            this.baseUrl = "https://spring-boot-1604154327452.azurewebsites.net";
        }
    }


    getBoardList() {
        return $.ajax({
            url: this.baseUrl + "/board_list",
            method: "GET",
            dataType: "json",
            async:false
        })
    }

    createBoard(data) {
        return $.ajax({
            url: this.baseUrl + "/board",
            method: "POST",
            dataType: "json",
            contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
            data: data,
        })
    }

    getBoard(data) {
        return $.ajax({
            url: this.baseUrl + "/board",
            method: "GET",
            dataType: "json",
            data: data,
        })
    }


}


