import { reloadHeader } from "./modules/header";
import {getData} from "./modules/http";
import { reload, reloadTable } from "./modules/ui";

let wrapper = document.querySelector('.card-container__wrapper');
let body = document.querySelector('tbody');
let localedUser = JSON.parse(localStorage.getItem('user')) || {}
let cen = document.querySelector('.center')
let table = document.querySelector('table')

reloadHeader()

getData('/transactions/?user_id=' + localedUser.id)
.then(res => {
   if(res.data.length > 0) {
       cen.style.display = 'none'
       table.style.display = 'table'
   } else {
      cen.style.display = 'block'
      table.style.display = 'none'
   }
})

getData('/cards?user_id=' + localedUser?.id)
   .then(res => {
      if (res.status == 200 || res.status === 201) {
         if(res.data.length > 0) {
            reload(res.data.slice(0, 4), wrapper);
         }
      }
   })

getData('/transactions?user_id=' + localedUser?.id)
   .then(res => {
      if (res.status == 200 || res.status === 201) {
         if(res.data.length > 0) {
            reloadTable(res.data.slice(0, 5), body);
         }
      }
   })
