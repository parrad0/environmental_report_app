import { IgetCards } from "Use-case/interface/Igetcards";
import getCardsDataProvider from "Dataproviders/get-cards-data-provider/get-cards-data-provider";

class dataProviderGenerator{
static getCardsDatarpovider(): IgetCards{
return new getCardsDataProvider();
}
}
export default dataProviderGenerator;