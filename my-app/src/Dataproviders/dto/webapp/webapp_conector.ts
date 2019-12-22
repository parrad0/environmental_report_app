class webbapp_conector{

constructor(){

}
async consumeData(url : string){
    try{
        return fetch(url)
          .then(response => {
            if (!response.ok) {
              throw new Error(response.statusText)
            }
            return response.json();
          })
        }catch(Exception){console.log(Exception.message)}     
}

}
export default webbapp_conector;