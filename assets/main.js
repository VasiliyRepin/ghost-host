$(".domain__select-common").click(function (e) {
  e.preventDefault();
  $(this).toggleClass("is-active");
})

$( ".domain__select-item" ).click(function() {
  const domain_zone = $(this).text();
  console.log("domai", domain_zone)
  $(".domain__select-btn").text(domain_zone);
});

