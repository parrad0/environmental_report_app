import { IgetCards } from "Use-case/interface/Igetcards";
import dataProviderGenerator from "configuration/dataProviderGenerator";
import getCardsUseCase from "Use-case/get-cards-use-case/get-cards-use-case";
import {valueExample} from "Components/Component/gridView/gridViewDto";

class gridViewController{
    async loadData(): Promise <any>{
try{
        let provider : IgetCards = dataProviderGenerator.getCardsDatarpovider();
        let usecase= new getCardsUseCase(provider);
        return await usecase.getCards();
        console.log("controller");
}catch(Exception){
    console.log(Exception.message);
    //error logic goes here
}
    }
    async getCountriesFilterTagData():Promise<valueExample>{
            let response : valueExample={
value: ['g','f','d','s'],

            }
        return response;  }
}
export default gridViewController;