"use strict";


const getallFavorite = () => {
  const all = localStorage.getItem("Favorite")
  if (all) {
    const Favorite = JSON.parse(all)
    return Favorite 
  } else {
    return []
  }
}
const addFavorite = (coffee) => {
  const Favorite = getallFavorite();
  const isExist = Favorite.find(item => item.id == coffee.id)
  if (isExist) return alert("Coffee already exists!")
  Favorite.push(coffee);
  localStorage.setItem("Favorite", JSON.stringify(Favorite));
  alert("coffee added")
};

export { addFavorite, getallFavorite };

