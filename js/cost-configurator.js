const sliders = document.querySelectorAll(".range-slider__input");
const outputs = document.querySelectorAll(".cost__output");

sliders.forEach((slider, index) => {
  slider.addEventListener("input", () => {
    updateSlider(slider);
    outputs[index].value = slider.value;
  });
});

outputs.forEach((output, index) => {
  output.addEventListener("input", () => {
    sliders[index].value = output.value;
    updateSlider(sliders[index]);
  });
});

function updateSlider(slider) {
  slider.parentNode.style.setProperty(
    `--value-${slider.dataset.id}`,
    slider.value
  );
}
