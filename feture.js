function fetchData() {
  fetch("http://localhost:5000/CouponDeal")
    .then((response) => {
      if (!response.ok) {
        throw Error("Error");
      }
      return response.json();
    })
    .then((slide) => {
      console.log(slide);
      const html = slide.map((user) => {
        return `${
          user.fetured == true
            ? `
            <div class="col-xl-3 col-sm-6 mb-4">
        <div class="custom-card shadow-sm bg-white h-100">
        <div class="custom-card-image">
        <a href="coupans.html">
        <img class="img-fluid item-img" src=${user.image}>
        </a>
        <div class="shape shape-bottom shape-fluid-x svg-shim text-white">
       
        </div>
        </div>
        <div class="p-3">
        <div class="custom-card-body">
        <h6 class="mb-1"><a class="text-black" href="#">${user.title}</a></h6>
        <p class="text-gray mb-2"><i class="icofont-price"></i> Store :${user.store}</p>
        </div>
        <div class="custom-card-badge mt-2">
        <span class="badge badge-success">OFFER</span> Flat 50% on all Stores
        </div>
        </div>
        </div>
        </div>`
            : ``
        }`;
      });
      console.log(html);
      document.querySelector("#feture").insertAdjacentHTML("afterbegin", html);
    })
    .catch((error) => {
      console.log(error);
    });
}
fetchData();
