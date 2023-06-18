
import { reloadHeader } from "../../modules/header";
import { getData } from "../../modules/http";
import { reload } from "../../modules/ui";

reloadHeader()

let userData = JSON.parse(localStorage.getItem('user'));
let wrapper = document.querySelector('.card-container__wrapper');
let btn = document.querySelector('.card-container__button');
let nullCard = document.querySelector('.null-card')

getData('/cards/?user_id=' + userData.id)
.then(res => {
   if(res.data.length > 0) {
      nullCard.style.display = 'none'
   } else {
      nullCard.style.display = 'flex'
   }
})


getData('/cards/?user_id=' + userData.id)
   .then(res => {
      if (res.status == 200 || res.status === 201) {
         if (res.data.length > 0) {
            reload(res.data.slice(0, 4), wrapper);
         }
      }
   })


btn.onclick = () => {
   location.assign('/pages/addWallet/')
}