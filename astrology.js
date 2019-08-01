function hover(element) {
  let sign = element.parentNode.id;
  let goldStringSign = `gold-png/${sign}-gold.png`;
  element.setAttribute('src', goldStringSign);
  // console.log(element.previousElementSibling.style.textShadow = );
  element.previousElementSibling.style.textShadow = "#FFDD20 0px 0px 3px";
}

function unhover(element) {
  let sign = element.parentNode.id;
  let stringSign = `png/${sign}.png`;
  element.setAttribute('src', stringSign);
  element.previousElementSibling.style.textShadow = "none";
}
