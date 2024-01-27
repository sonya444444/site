let work= document.getElementById("work");
let education= document.getElementById("education");
let list = document.querySelector(".page-about__profile-list")

console.log(work, education, list);

function Click() {
    console.log("нажали");
}

work.onclick = function() {
    console.log("нажали на work");
    list.innerHTML = "";
    list.insertAdjacentHTML("beforeend",`<article class="profile-item">
    <h5>Пупа и Лупа<h5>
    <div class="profile-item__bottom">
      <h5>пришли в зоопарк</h5>
      <div class="profile-item__date">
        <img src="./assets/img/calendar.svg" alt="" />
        <h6>2009 - 2014</h6>
      </div>
    </div>
  </article>`);
};

education.onclick = () => {
console.log("нажали на education");
list.innerHTML = "";
    list.insertAdjacentHTML("beforeend",`<article class="profile-item">
    <h5>Лупа и Пупа<h5>
    <div class="profile-item__bottom">
      <h5>ушли домой</h5>
      <div class="profile-item__date">
        <img src="./assets/img/calendar.svg" alt="" />
        <h6>2014 - 2016</h6>
      </div>
    </div>
  </article>`);
};


