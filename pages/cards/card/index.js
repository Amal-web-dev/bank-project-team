import { getData } from "../../../modules/http"
import { reload } from "../../../modules/ui";

const card_id = location.search.split('=').at(-1)
let h1 = document.querySelector('h1')
let wrapper = document.querySelector('.card-block')

// getData('/cards/' + card_id)
//     .then(res => {
//         h1.innerHTML = res.data.name + " ID PAGE"
//     })


    
getData('/cards/' + card_id)
.then(res => {
    console.log(res.data);
   if (res.status == 200 || res.status === 201) {
         reload(res.data, wrapper);
   }
})
