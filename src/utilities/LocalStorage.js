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
  // const isExist = Favorite.find(item => item.id == coffee.id)
  Favorite.push(coffee);
  localStorage.setItem("Favorite", JSON.stringify(Favorite));
};

// remove a coffee from local storage
const removeFavorite = id => {
  // get all previously saved coffee data
  const Favorite = getallFavorite()
  const remaining = Favorite.filter(coffee => coffee.id != id)
  localStorage.setItem('Favorite', JSON.stringify(remaining))
}
export { addFavorite, getallFavorite, removeFavorite };

