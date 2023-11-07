import DataService from "../Model/DataService.js";

const ALAPVEGPONT = "http://localhost:8000/";
class Controller{
    constructor(){
        this.dataService = new DataService();
        this.dataService.getAxiosData(ALAPVEGPONT + "writers", this.megjelenit);
        this.dataService.postAxiosData(ALAPVEGPONT + "writers", {
            "nev" : "Író neve",
            "szul" : 1547
        });
    }

    megjelenit(list){
        console.log(list);
        //new
    }

}

export default Controller;