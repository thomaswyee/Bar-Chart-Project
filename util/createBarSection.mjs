export default function createBarSection(data, options, element) {
  const { spacing } = options;
  if (data[0].length > 1) {
    data.map((x, index) => {
      $(`${element}`).append(
        `<tr class="tr" id=${index}><th scope="row">Section${
          index + 1
        }</th></tr>"`
      );
      $("tr")
        .last()
        .css({
          left: `${index * spacing}px`,
        });
    });
  } else {
    data.map((x, index) => {
      $(`${element}`).append(
        `<tr class="tr" id=${index}><th scope="row">Section${
          index + 1
        }</th></tr>`
      );
      $("tbody tr")
        .last()
        .css({
          left: `${index * spacing}px`,
        });
    });
  }
}
