import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { Currency, UserInfo } from './currency-exchange'

$(document).ready(function() {
  $("#form").submit(function(event){
    event.preventDefault();
    (async () => {
      let currency = new Currency();
      const usdExchange = await currency.usdExchange();
      console.log(usdExchange);

    
      
      let userInput = parseInt($('#insert-rate').val());
      let newRate = parseInt$('#rate').val();));
      let userInfo = new UserInfo (userInput); 

      userInfo.rateExchange() 

      // function exchangeTo(userInput) {
      //   if (userInput === " " || userInput < 1) {

      //   } 
      //   // let cadRate = usdExchange.CAD * userInput;
      //   // let eurRate = usdExchange.EUR * userInput; 
      //   // let jpyRate = usdExchange.EUR * userInput; 
      //   // let 
      // }
     
    })()


    
  });

});