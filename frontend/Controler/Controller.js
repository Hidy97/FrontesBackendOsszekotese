import DataService from "../Model/DataService.js";

const ALAPVEGPONT = "http://localhost:8000/";
class Controller{
    constructor(){
        this.dataService = new DataService();
        this.dataService.getAxiosData(ALAPVEGPONT + "writers", this.megjelenit);
    }

    megjelenit(list){
        console.log(list);
        //new
    }

}

export default Controller;