const BASE_URL = "https://thatcopy.pw/catapi/rest/";
const BOTAO = document.getElementById("change-cat");
const FOTO = document.getElementById("cat");

const getCats = async () => {
  try {
    const data = await fetch(BASE_URL);
    const json = await data.json();
    return json.webpurl;
  } catch (e) {
    console.log(e.message);
  }
};

const Load_Img = async () => {
  FOTO.src = await getCats();
};

BOTAO.addEventListener("click", Load_Img);

Load_Img();
