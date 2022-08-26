// Domain zone
$(".search-form__select").click( e => {
  e.preventDefault();
  $(e.currentTarget).toggleClass("is-active");
});

$( ".search-form__select-item" ).click( ({currentTarget}) => {
  const domain_zone = $(currentTarget).text();
  console.log("domai", domain_zone)
  $(".search-form__select-button").text(domain_zone);
});


//get width of display: none elements
const getWidth = (obj) => {
  const clone = obj.clone();
  clone.css({ position: "absolute", visibility: "hidden" });
  $('body').append(clone);
  const width = clone.outerWidth();
  clone.remove();
  return width;
}

//Slider's author centering
const calcSlide = (index) => {
  const margin = 20;
  const blockWidth = $(".blog__content").outerWidth();
  const authorWidth = getWidth(($(".blog__author").eq(index)))
  const indicatorsWidth = $(".carousel-indicators").outerWidth();
  const right = (blockWidth - (authorWidth + margin + indicatorsWidth)) / 2;
  const marginRight = indicatorsWidth + margin;
  $(".carousel-indicators").css("right", right);
  $(".blog__author").eq(index).css("margin-right", marginRight)
}

$("#sayCarousel").on('slide.bs.carousel', (e) => {
  const index = $(e.relatedTarget).index();
  calcSlide(index);
});

//for first slide:
const index = $(".carousel-item.active").index();
calcSlide(index);
