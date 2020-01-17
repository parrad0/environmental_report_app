import { IgetCards } from "Use-case/interface/Igetcards";
import dataProviderGenerator from "configuration/dataProviderGenerator";
import getCardsUseCase from "Use-case/get-cards-use-case/get-cards-use-case";
import { gridViewDto } from "Components/gridView/gridViewDto";

class gridViewController {
  async loadData(
    // TODO add filter funtion
    country: string,
    province: string,
    type: string
  ): Promise<any> {
    try {
      let provider: IgetCards = dataProviderGenerator.getCardsDatarpovider();
      let usecase = new getCardsUseCase(provider);
      return await usecase.getCards();
    } catch (Exception) {
      console.log(Exception.message);
      //error logic goes here
    }
  }
  async getFilterTagData(): Promise<gridViewDto> {
    let response: gridViewDto = {
      countries: ["España", "Inglaterra", "USA", "Turquia"],
      provinces: ["Guadalajara", "Toledo", "Madrid"],
      types: ["Incendio", "Vertidos", ""]
    };
    return response;
  }
  async likeCardToUser(value?: number) {}
}
export default gridViewController;
