import { LightningElement } from "lwc";

export default class App extends LightningElement {
  //Criar variáveis, atributos
  nome = "Luiz Santana";
  telefone ="1199998888";
  cpf= "22222222211";
  idade = 44;
  email="luiztictac@gmail.com";
  instagram="https://www.instagram.com/luiztictac2010/";
  linkedin="https://www.linkedin.com/in/luiz-s-lima/";
  
  visible = true;
  trocarDiv(){
    this.visible = !this.visible;
    /* ou assim  if(this.visible == true){
            this.visible = false;
        }
        else   {
            this.visible = true;
    */
    
  }
  visibleTxt = true;
  trocarDados(){
      this.visibleTxt = !this.visibleTxt;
      if(this.visibleTxt==!true){
         this.nome ="Carlos Rasta";
         this.telefone ="11777778888";
         this.cpf= "99988877766";
         this.idade = 24;
      }else{
        this.nome = "Luiz Santana";
        this.telefone ="1199998888";
        this.cpf= "22222222211";
        this.idade = 44;

      } 
      if(this.visibleTxt == !true){
         this.email="luiztictac@gmail.com";
         this.instagram="https://www.instagram.com/luiztictac2010/";
         this.linkedin="https://www.linkedin.com/in/luiz-s-lima/";
    }else{
      this.email="carlosrasta@email.com";
      this.instagram="https://www.google.com.br/";
      this.linkedin="https://www.salesforce.com/";
    }
  }
 
  
}
