class DataService {
    constructor() {

    }

    getAxiosData(url, callback) {
        console.log(url)
        axios.get(url)
            .then(function (response) {
                //console.log(callback)
                // handle success
                /**
                console.log("Válasz objektum", response);
                console.log("adatok", response.data);
                console.log("Adatok nevek lista", response.data.nevek);
                console.log("status", response.status);
                console.log("Státusz szöveg", response.statusText);
                console.log("Válasz fejléc", response.headers);
                console.log("Válasz konfig", response.config);
                 */

                console.log(response);
                console.log(response.data);
                console.log(response.status);
                console.log(response.statusText);
                console.log(response.header);
                console.log(response.config);
                callback(response.data)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
                //hibaCallback(error)
            })
            .finally(function () {
                // always executed
                console.log("finally")
            });
    }

}

export default DataService;