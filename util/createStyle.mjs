export default function createStyle(data, options) {
  const {
    graphHeight,
    graphWidth,
    barTextColor,
    barTextPosition,
    titleTextColor,
    titleFontSize,
    titlePosition,
    titleTextTransform,
    valueFontSize,
    xTextColor,
    xFontSize,
    valuePosition,
  } = options;
  $("#q-graph").css({
    width: `${graphWidth}`,
    height: `${graphHeight}`,
    display: "block",
    position: "relative",
    border: "solid 2px",
  });
  $("caption").css({
    textTransform: `${titleTextTransform}`,
    color: `${titleTextColor}`,
    fontSize: `${titleFontSize}`,
    width: `${graphWidth}`,
    position: `${titlePosition}`,
    top: "-90px",
  });

  $("td").css({
    color: `${barTextColor}`,
    fontSize: `${valueFontSize}`,
    textAlign: `${valuePosition}`,
  });
  $("td p").css({
    position: "relative",
    top: `${barTextPosition.middle}`,
    zIndex: "10",
  });
  $("tbody .tr").css({
    height: "100%",
    color: `${xTextColor}`,
    fontSize: `${xFontSize}`,
  });
  $("tr th").css({
    bottom: "-3em",
    marginLeft: "0",
  });

  $("#ticks").css({
    position: `${titlePosition}`,
    top: "-300px",
    left: "2px",
    width: `${graphWidth}`,
    height: `${graphHeight}`,
    marginBottom: "-300px",
    fontSize: `${xFontSize}`,
  });

  $("#ticks .tick").css({
    position: `${titlePosition}`,
    borderTop: "1px dotted #c4c4c4",
    borderBottom: "1px dotted #c4c4c4",
    width: `${graphWidth}`,
  });

  $("#ticks .tick p").css({
    position: "absolute",
    left: "-5em",
    margin: "0 0 0 0.5em",
  });
}
