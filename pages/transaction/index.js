import { reloadHeader } from "../../modules/header";
import { getData } from "../../modules/http";
import { reloadTable } from "../../modules/ui";

let userData = JSON.parse(localStorage.getItem('user'));
let body = document.querySelector('tbody');
let cen = document.querySelector('.center')
let table = document.querySelector('table')

reloadHeader()

getData('/transactions/?user_id=' + userData.id)
.then(res => {
   if(res.data.length > 0) {
       cen.style.display = 'none'
       table.style.display = 'table'
   } else {
      cen.style.display = 'block'
      table.style.display = 'none'
   }
})

getData('/transactions/')
   .then(res => {
      if (res.status == 200 || res.status === 201) {
         if (body !== null) reloadTable(res.data, body);
      }
   })