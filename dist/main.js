let apiImage = "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";

let input = document.getElementById("input");

let images = document.querySelector(".images");

let button = document.getElementById("button");
//========================
button.addEventListener("click", getimage);

input.addEventListener("keydown", function (event) {
  if (event.keyCode === 13 || event.key === "Enter") {
    getimage();
  }
});
//==================
input.focus();
async function getimage() {
  if (input.value === "") {
    alert("the input faild");
  }

  var methods = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiImage}`,
    },
    body: JSON.stringify({
      prompt: input.value,
      n: 4,
      size: "256x256",
    }),
  };

  let response = await fetch(
    "https://api.openai.com/v1/images/generations",
    methods,
  );

  // prse the respons

  var data = await response.json();

  images.innerHTML = "";

  var listImages = data.data;

  listImages.map((img) => {
    let div = document.createElement("div");
    images.append(div);
    let imgs = document.createElement("img");
    div.append(imgs);
    imgs.src = img.url;
  });

  input.value = "";
}
