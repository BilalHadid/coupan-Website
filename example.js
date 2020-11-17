function fetchData() {
  fetch("http://localhost:5000/CouponDeal")
    .then((response) => {
      if (!response.ok) {
        throw Error("Error");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      const html = data.map((user) => {
        return `
        <div class="item" >

        <div class="bg-white p-4 shadow-sm text-center h-100 border-radius">
        <div class="all-coupon">
        <img class="mb-4 user-cou-img" src=${user.image} alt="Generic placeholder image">
        <h4 class="mt-1">${user.ForumCategory}</h4>
        <h6 class="mb-4 mt-3 pb-2 text-secondary">${user.title}</h6>
        </div>
        <div class="mb-0">
        <p class="mb-0 text-info"><i class="icofont-clock-time"></i> Ends ${user.dealexpire}</p>
        </div>
        </div>
        </div>
        
        </div>
          `;
      });
      console.log(html);
      document.querySelector("#apy").insertAdjacentHTML("afterbegin", html);
    })
    .catch((error) => {
      console.log(error);
    });
}
fetchData();
