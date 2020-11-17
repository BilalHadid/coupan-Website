function fetchData() {
  fetch("http://localhost:5000/CouponDeal")
    .then((response) => {
      if (!response.ok) {
        throw Error("Error");
      }
      return response.json();
    })
    .then((store) => {
      console.log(store);
      const html = store.map((user) => {
        return `${
          user.category == "Accessories"
            ? `<div class="all-coupon">
              <img alt="Generic placeholder image" src=${user.image} class="mb-3 user-cou-img">
              <h4 class="mt-1">80% OFF</h4>
              <h6 class="mb-4 mt-3 pb-2 text-secondary">${user.title}</h6>
              </div>
              <div class="mb-0">
              <p class="mb-0 text-danger"><i class="icofont-clock-time"></i>${user.dealexpire}</p>
              </div>`
            : ``
        }`;
      });
      document
        .querySelector("#category2")
        .insertAdjacentHTML("afterbegin", html);
    })
    .catch((error) => {
      console.log(error);
    });
}
fetchData();
