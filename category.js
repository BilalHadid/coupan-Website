function fetchData() {
  fetch("http://localhost:5000/posts")
    .then((response) => {
      if (!response.ok) {
        throw Error("Error");
      }
      return response.json();
    })
    .then((store) => {
      console.log(store);
      const html = store.map((user) => {
        return `<div class="col-xl-4 col-sm-6 mb-4">
        <div class="custom-card shadow-sm h-100">
        <div class="custom-card-image">
        <a href="#">
        <img class="img-fluid item-img" src=${user.images}>
        </a>
        <div class="button-g-btn button-g-btn-up">
        <img class="img-fluid" src="images/brand/1.png">
       
        </div>
        </div>
        <div class="p-3 pt-4">
        <div class="custom-card-body">
        <h6 class="mb-3"><a class="text-black" href="#">${user.title}</a></h6>
        
        </div>
        <div class="custom-card-footer mb-2">
        <a class="btn btn-orange float-right" href="#">Get Offer</a>
        </div>
        </div>
        </div>
        </div>`;
      });
      document.querySelector("#categ").insertAdjacentHTML("afterbegin", html);
    })
    .catch((error) => {
      console.log(error);
    });
}
fetchData();
