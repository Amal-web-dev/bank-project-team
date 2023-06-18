// function getRandomColor() {
//     const letters = '0123456789ABCDEF';
//     let color = '#';
//     for (let i = 0; i < 6; i++) {
//       color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
//   }

export function reload(arr, place) {
    place.innerHTML = '';
    
    for (let card of arr) {
        let doc = document
        let div = doc.createElement('div');
        let title = doc.createElement('div');
        let lang = doc.createElement('div');
        //class
        div.classList.add('item');
        title.classList.add('item__title');
        lang.classList.add('item__lang');
        //inner
        title.innerHTML = card.name;
        lang.innerHTML = card.currency;
        div.style.cursor = "pointer"
        const color1 = card.leftColor;
        const color2 = card.rightColor;
        div.style.background = `linear-gradient(to right, ${color1}, ${color2})`;
        //append
        div.append(title, lang);
        place.append(div);

        div.onclick = () => {
            location.assign('/pages/cards/card/?id=' + card.id)
        }
    }
}
export function reloadTable(res, body) {
    let doc = document;
    body.innerHTML = ''
    let n = 1;
    for (let data of res) {
        let tr = doc.createElement('tr');
        for (let i = 0; i < 5; i++) {
            let td = doc.createElement('td');
            if (i === 0) {
                td.innerText = n;
            } else if (i === 1) {
                td.innerText = data.card.name;
            } else if (i === 2) {
                td.innerText = data.category;
            } else if (i === 3) {
                td.innerText = data.amount;
            } else if (i === 4) {
                td.innerText = data.date;
            }
            tr.append(td);
        }
        body.append(tr);
        n++;
    }
}