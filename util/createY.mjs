export default function createY(options) {
  const { graphHeight } = options;
  for (let i = 0; i < 5; i++) {
    $("#ticks").append(`<div class="tick"><p>${(5 - i) * 20}%</p></div>`);
    $("div .tick").css("height", "20%");
  }
}
