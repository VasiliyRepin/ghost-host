// Domain zone
$(".domain__select-common").click(function (e) {
  e.preventDefault();
  $(this).toggleClass("is-active");
})

$( ".domain__select-item" ).click(function() {
  const domain_zone = $(this).text();
  console.log("domai", domain_zone)
  $(".domain__select-btn").text(domain_zone);
});


//get width of display: none elements
function getWidth(obj) {
  const clone = obj.clone();
  clone.css({ position: "absolute", visibility: "hidden" });
  $('body').append(clone);
  const width = clone.outerWidth();
  clone.remove();
  console.log('realW = ', width);
  return width;
}

//Slider's author centering
function calcSlide(index) {
  const margin = 20;
  const blockWidth = $(".blog__content").outerWidth();
  const authorWidth = getWidth(($(".blog__author").eq(index)))
  const indicatorsWidth = $(".carousel-indicators").outerWidth();
  const right = (blockWidth - (authorWidth + margin + indicatorsWidth)) / 2;
  const marginRight = indicatorsWidth + margin;
  console.log( right);
  console.log("authorW =", authorWidth );
  $(".carousel-indicators").css("right", right);
  $(".blog__author").eq(index).css("margin-right", marginRight);
}

$("#sayCarousel").on('slide.bs.carousel', function (e) {
  const index = $(e.relatedTarget).index();
  console.log(index)
  calcSlide(index);
})
//for first slide:
const index = $(".carousel-item.active").index();
console.log("ind", index)
calcSlide(index);
