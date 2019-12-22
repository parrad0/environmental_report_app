import {IgetCards} from "Use-case/interface/Igetcards";
import webbapp_conector from "Dataproviders/dto/webapp/webapp_conector";
import environment from "configuration/environment";

class getCardsDataProvider implements IgetCards{
    webapp : webbapp_conector;
    constructor(){
         this.webapp= new webbapp_conector();
    }
async getCards():Promise<any>{
    try{
        return await ["a","b","c","f"];
        console.log("provider");
    //return await this.webapp.consumeData(environment.url+"/api/values/data");
    }catch(Exception){console.log(Exception.message)}
}

}
export default getCardsDataProvider;