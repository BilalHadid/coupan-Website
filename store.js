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
        return `<div class="col-xl-3 col-sm-6 mb-4">
        <div class="custom-card shadow-sm h-100 stor-card">
        <div class="custom-card-image">
        <Link to="store-details.html">
        <img class="img-fluid item-img" src=${user.image}>
        </Link>
        <div class="store-star"><span class="badge badge-success"><i class="icofont-star"></i> 4.1</span></div>
        </div>
        <div class="p-3">
        <div class="custom-card-body">
        <h6 class="mb-0"><a class="text-black" href="stores.html">${user.title}</a></h6>
        <p class="text-gray mb-2"> ${user.Address}</p>
        <p class="text-gray mb-0"><span class="text-black">${user.metatitle}</span></p>
        </div>
        </div>
        <div class="p-3 border-top">
       
        </div>
        </div>
        </div>`;
      });
      document.querySelector("#storee").insertAdjacentHTML("afterbegin", html);
    })
    .catch((error) => {
      console.log(error);
    });
}
fetchData();
