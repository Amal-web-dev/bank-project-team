import { getData } from "../../../modules/http"

const card_id = location.search.split('=').at(-1)
let h1 = document.querySelector('h1')
let container = document.querySelector('.card-block')
let inner = document.querySelector('.card')
let h3 = document.querySelector('h3')
let p = document.querySelector('p')
let localedUser = JSON.parse(localStorage.getItem('user')) || {}
let id = document.querySelector('.id')
let name = document.querySelector('.name')
let user_id = document.querySelector('.user_id')
let balance = document.querySelector('.balance')

getData('/cards/' + card_id)
.then(res => {
      let data = res.data
      console.log(res);
      const color1 = data.leftColor;
      const color2 = data.rightColor;
      color()
      function color() {
            inner.style.background = `linear-gradient(to right, ${color1}, ${color2})`;            
            h3.innerHTML = data.name
            p.innerHTML = data.currency
            id.innerHTML = "your id:" + data.id.slice(0, 10)
            name.innerHTML = "your card_name:" + data.name
            balance.innerHTML = "your balance:" + data.balance
            user_id.innerHTML = 'your user_id:' + data.user_id
      }
     

anime()

function anime() {
    
      // Mouse
      var mouse = {
        _x: 0,
        _y: 0,
        x: 0,
        y: 0,
        updatePosition: function(event) {
          var e = event || window.event;
          this.x = e.clientX - this._x;
          this.y = (e.clientY - this._y) * -1;
        },
        setOrigin: function(e) {
          this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
          this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
        },
        show: function() {
          return "(" + this.x + ", " + this.y + ")";
        }
      };
    
      // Track the mouse position relative to the center of the container.
      mouse.setOrigin(container);
    
      //-----------------------------------------
    
      var counter = 0;
      var updateRate = 20;
      var isTimeToUpdate = function() {
        return counter++ % updateRate === 0;
      };
    
      //-----------------------------------------
    
      var onMouseEnterHandler = function(event) {
        update(event);
      };
    
      var onMouseLeaveHandler = function() {
        inner.style = "";
        color()
      };
    
      var onMouseMoveHandler = function(event) {
        if (isTimeToUpdate()) {
          update(event);
        }
      };
    
      //-----------------------------------------
    
      var update = function(event) {
        mouse.updatePosition(event);
        updateTransformStyle(
          (mouse.y / inner.offsetHeight / 2).toFixed(2),
          (mouse.x / inner.offsetWidth / 8).toFixed(2)
        );
      };
    
      var updateTransformStyle = function(x, y) {
        var style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
        inner.style.transform = style;
        inner.style.webkitTransform = style;
        inner.style.mozTransform = style;
        inner.style.msTransform = style;
        inner.style.oTransform = style;
      };
    
      //-----------------------------------------
    
      container.onmouseenter = onMouseEnterHandler;
      container.onmouseleave = onMouseLeaveHandler;
      container.onmousemove = onMouseMoveHandler;
    }; 

    inner.onclick = () => {
      
    }
})

function flipCard() {
  inner.classList.toggle('flip');
}

inner.addEventListener('click', flipCard);



