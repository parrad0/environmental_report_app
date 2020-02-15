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
      var response: cardDto[] = [
        {
          text: "Vertidos de Basura en El pilar",
          cod: 22,
          title: "Vertidos en Everis",
          img:
            "https://www.lavanguardia.com/r/GODO/LV/p6/WebSite/2019/03/10/Recortada/_20190228000914209-kbtB-U46903139902O8C-992x558@LaVanguardia-Web.jpg",
          avatar: "Javier",
          date: new Date().toLocaleDateString("eur")
        },
        {
          text: "Vertidos de Basura en El pilar",
          cod: 22,
          title: "Vertidos en Everis",
          img:
            "https://www.lavanguardia.com/r/GODO/LV/p6/WebSite/2019/03/10/Recortada/_20190228000914209-kbtB-U46903139902O8C-992x558@LaVanguardia-Web.jpg",
          avatar: "Javier",
          date: new Date().toLocaleDateString("eur")
        },
        {
          text: "Vertidos de Basura en El pilar",
          cod: 22,
          title: "Vertidos en Everis",
          img:
            "https://www.lavanguardia.com/r/GODO/LV/p6/WebSite/2019/03/10/Recortada/_20190228000914209-kbtB-U46903139902O8C-992x558@LaVanguardia-Web.jpg",
          avatar: "Javier",
          date: new Date().toLocaleDateString("eur")
        },
        {
          text: "Vertidos de Basura en El pilar",
          cod: 22,
          title: "Vertidos en Everis",
          img:
            "https://www.lavanguardia.com/r/GODO/LV/p6/WebSite/2019/03/10/Recortada/_20190228000914209-kbtB-U46903139902O8C-992x558@LaVanguardia-Web.jpg",
          avatar: "Javier",
          date: new Date().toLocaleDateString("eur")
        },
        {
          text: "Vertidos de Basura en El pilar",
          cod: 22,
          title: "Vertidos en Everis",
          img:
            "https://www.lavanguardia.com/r/GODO/LV/p6/WebSite/2019/03/10/Recortada/_20190228000914209-kbtB-U46903139902O8C-992x558@LaVanguardia-Web.jpg",
          avatar: "Javier",
          date: new Date().toLocaleDateString("eur")
        }
      ];
      let card: cardDto = {
        text: "Vertidos de Basura en El pilar",
        cod: 22,
        title: "Vertidos en Everis",
        img:
          "https://www.lavanguardia.com/r/GODO/LV/p6/WebSite/2019/03/10/Recortada/_20190228000914209-kbtB-U46903139902O8C-992x558@LaVanguardia-Web.jpg",
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
