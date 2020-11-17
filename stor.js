function fetchData() {
  fetch("http://localhost:5000/store")
    .then((response) => {
      if (!response.ok) {
        throw Error("Error");
      }
      return response.json();
    })
    .then((store) => {
      console.log(store);
      const html = store.map((user) => {
        return `<div class="item">
        <div class="custom-card bg-white shadow-sm h-100 stor-card">
        <div class="custom-card-image">
        <a href="stores.html">
        <img class="img-fluid item-img" src=${user.image}>
        </a>
        <div class="shape shape-bottom shape-fluid-x svg-shim text-white">
        <svg viewBox="0 0 2880 480" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M2160 0C1440 240 720 240 720 240H0V480H2880V0H2160Z" fill="currentColor"></path>
        </svg>
        </div>
        <div class="store-star"><span class="badge badge-success"><i class="icofont-star"></i> 4.1</span></div>
        </div>
        <div class="p-3">
        <div class="custom-card-body">
        <h6 class="mb-0"><a class="text-black" href="stores.html    ">${user.title}</a></h6>
        <p class="text-gray mb-2">${user.Address}</p>
        <p class="text-gray mb-0"><span class="text-gold"><i class="icofont-clock-time"></i> Time Left : ${user.leftTime}</span></p>
        </div>
        </div>
        <div class="p-3 border-top">
        <div class="custom-card-badge">
        <span class="badge badge-danger"><i class="icofont-sale-discount"></i> OFFER</span> Flat 50% on all Stores
        </div>
        </div>
         </div>
        </div>`;
      });
      document.querySelector("#stor").insertAdjacentHTML("afterbegin", html);
    })
    .catch((error) => {
      console.log(error);
    });
}
fetchData();
