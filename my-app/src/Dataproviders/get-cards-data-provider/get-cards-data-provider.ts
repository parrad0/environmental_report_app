import { IgetCards } from "Use-case/interface/Igetcards";
import webbapp_conector from "Dataproviders/dto/webapp/webapp_conector";
import environment from "configuration/environment";
import cardDto from "entities/card";

class getCardsDataProvider implements IgetCards {
  webapp: webbapp_conector;
  constructor() {
    this.webapp = new webbapp_conector();
  }
  async getCards(): Promise<any> {
    try {
      var response: cardDto[] = [];
      let card: cardDto = {
        text: "Vertidos de Basura en El pilar",
        cod: 22,
        title: "Vertidos en Everis",
        img: "",
        avatar: "Javier",
        date: new Date().toLocaleDateString("eur")
      };
      response.push(card);
      return await response;
      //return await this.webapp.consumeData(environment.url+"/api/values/data");
    } catch (Exception) {
      console.log(Exception.message);
    }
  }
}
export default getCardsDataProvider;
