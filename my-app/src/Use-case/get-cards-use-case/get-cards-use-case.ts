import { IgetCards } from "Use-case/interface/Igetcards";

class getCardsUseCase{
 dataprovider: IgetCards;   
constructor(data:IgetCards){
this.dataprovider=data;
}

async getCards() : Promise<any>{
    try{
    return await this.dataprovider.getCards();
    }catch(Exception){console.log(Exception.message)}
}

}
export default getCardsUseCase;