const board = document.querySelector('#board')


//EventListener
document.addEventListener("DOMContentLoaded", (e) => {
  loadImages();
  addclickEvents();
})


loadImages();
function loadImages() {
  board.innerHTML = '';
  arrayImg.forEach((image) => {
    board.innerHTML += `
        <div class="image">
            <img src="${image.route}" class="click" id=${image.id}>
            <div class="corazon" id=""></div>
            <div class="contador" id=${image.id}></i></div>
        </div>
      `;
  });
}

function addclickEvents() {
  const favclick = document.querySelectorAll('.click');
  favclick.forEach((fav) => {
    fav.addEventListener("dblclick", (e) => {
      e.preventDefault();

      const posX = e.clientX;
      const posY = e.clientY;
      const leftOffset = e.target.offsetLeft
      const topOffset = e.target.offsetTop
      console.log(fav.id);
      createHeart(fav.id, posX, posY, leftOffset, topOffset);
      checkImg(fav.id);
    });
  })
}

const createHeart = (id, clientX, clientY, leftOffset, topOffset) => {
  const heart = document.createElement('i')

  const x = clientX;
  const y = clientY;

  const xInside = x - leftOffset;
  const yInside = y - topOffset;

  const click = document.getElementById(`${id}`)

  const elementoHermano = click.nextElementSibling;

  elementoHermano.style.top = `${y}px`
  elementoHermano.style.left = `${x}px`

  elementoHermano.classList.add("fas");
  elementoHermano.classList.add("fa-heart")

  setTimeout(() => elementoHermano.classList.remove("fa-heart"), 1000)
}


function checkImg(id) {
  const addcount = document.querySelector(`.contador[id="${id}"]`);
  let elemento = arrayImg.findIndex(element => element.id === parseInt(id));
  arrayImg[elemento].click++;
  console.log(arrayImg[elemento].click);
  addcount.innerHTML= `<span class="material-symbols-outlined">favorite</span> ${arrayImg[elemento].click} `;


}


