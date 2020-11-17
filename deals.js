function fetchData() {
  fetch("http://localhost:5000/deals")
    .then((response) => {
      if (!response.ok) {
        throw Error("Error");
      }
      return response.json();
    })
    .then((store) => {
      console.log(store);
      const html = store.map((user) => {
        return `<div class="col-xl-4 col-sm-6 mb-5">
        <div class="power-card bg-white shadow-sm p-4 text-center">
        <div class="power-card-image">
        <a href=${user.dealURL}>
        <img class="img-fluid item-img" src=${user.image}>
        </a>
        </div>
        <div class="power-card-body mb-4 mt-5">
        <h5 class="mb-2">${user.DealName}</h5>
        <p>${user.Description}</p>
        </div>
        <div class="mb-4">
        <a href=${user.dealURL}>
        <button class="btn btn-outline-primary" type="button"> Grab Deal </button>
        </a>
        </div>
        <div class="power-card-time mb-3">
        <p class="m-0 text-dark"><i class="icofont-clock-time"></i> Time Left : ${user.dealexpire}</p>
        </div>
        </div>
        </div>`;
      });
      document.querySelector("#deal").insertAdjacentHTML("afterbegin", html);
    })
    .catch((error) => {
      console.log(error);
    });
}
fetchData();
