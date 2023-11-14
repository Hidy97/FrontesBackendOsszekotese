import DataService from "../Model/DataService.js";

//http://localhost:8000/api/writers
const ALAPVEGPONT = "http://localhost:8000/api/writers";
class Controller{
    constructor(){
        this.dataService = new DataService();
        this.dataService.getAxiosData(ALAPVEGPONT, this.megjelenit);
        this.dataService.postAxiosData(ALAPVEGPONT, {
            "nev" : "Czipri Éva",
            "szul" : 1943
        });

        this.dataService.putAxiosData(ALAPVEGPONT, {
            "id": 1,
            "nev" : "Jankovics Marcell",
            "szul" : 1941
        });
        

        this.dataService.deleteAxiosData("api/writers", 15);
    }

    megjelenit(list){
        //console.log(list);
        new TablaView(list, $("article form"));
    }

}

export default Controller;