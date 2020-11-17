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
        return `<div class="col-xl-3 col-md-12 mb-4">
        <div class="bg-white p-4 shadow-sm text-center h-100 border-radius">
        <div class="all-coupon">
        <img class="mb-3 user-cou-img" src=${user.image} alt="Generic placeholder image">
         <h4 class="mt-1">${user.ForumCategory}</h4>
        <h6 class="mb-4 mt-3 pb-2 text-secondary">${user.title}</h6>
        </div>
        <div class="mb-0">
        <p class="mb-0 text-info"><i class="icofont-clock-time"></i> Ends ${user.dealexpire}</p>
        </div>
        <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Get Coupans</button>

        <div id="myModal" class="modal fade" role="dialog">
            <div class="modal-dialog">

                <!-- Modal content-->
                <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">COUPON DETAIL</h4>
                </div>
                <div class="modal-body">
                <p>code is :</p>  
                    <h2>${user.couponcode}</h2>
                   <a href=${user.dealURL}>
                    <button type="button" class="btn btn-danger btn-lg" >Visit Store</button>
                    </a>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                </div>
                </div>

            </div>
        </div>
        </div>  
        </div>`;
      });
      console.log(html);
      document.querySelector("#coupan").insertAdjacentHTML("afterbegin", html);
    })
    .catch((error) => {
      console.log(error);
    });
}
fetchData();
