import axios from "axios";

const getAllImages = () => {
  return axios.get("https://jsonplaceholder.typicode.com/photos");
};

const getImages = async () => {
  //get all images
  let data = await getAllImages();
  //take 10 random element from data.data array
  let ten_img = Array.from({ length: 10 }, (v, k) => k).map((value) => {
    //get num between 0 to 4999
    let random_num = Math.floor(Math.random() * 5000);
    return (value = data.data[random_num]);
  });
  
  return ten_img;
};
export { getImages };
