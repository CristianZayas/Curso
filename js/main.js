
 // Modal
 const btnModal = document.querySelector('#MyModal03');
 const myModal = document.querySelector('#exampleModal')
      // myModal.addEventListener("show.bs.modal", (event) => {
      //   // do something...
      //   console.log("Hello Hidden");
      // });

       myModal.addEventListener('show.bs.modal', () => console.log('show.bs.modal') )
       myModal.addEventListener('shown.bs.modal', () => {
        btnModal.className = 'container btn  btn-danger disabled'
      
        btnModal.textContent = "Estas en la Modal"
         console.log('shown.bs.modal')} )
       myModal.addEventListener('hide.bs.modal', () => {
        btnModal.className = 'container btn btn-warning'
        btnModal.textContent = "Mostrar la frase."
       } )
       myModal.addEventListener('hidden.bs.modal', () => console.log('hidden.bs.modal') )

       
      //  $('#exampleModal').on("show.bs.modal", (event) => {
      //   // do something...
      //   console.log("Hello Hidden");
      // });
   
      var tooltipTriggerList = [].slice.call(
        document.querySelectorAll('[data-bs-toggle="tooltip"]')
      );
      var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
      });

      var popoverTriggerList = [].slice.call(
        document.querySelectorAll('[data-bs-toggle="popover"]')
      );
      var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl);
      });
      var myCarousel = document.querySelector("#myCarousel");
      var carousel = new bootstrap.Carousel(myCarousel, {
        interval: 2000,
        wrap: false,
        touch: true,
      });
      var popover = new bootstrap.Popover(
        document.querySelector(".example-popover"),
        {
          container: "body",
        }
      );
