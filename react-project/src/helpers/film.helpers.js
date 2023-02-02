export function filterFilmsByDirector(list, director){
 if (director)
 return list.filter((film) => film.director === director);
 else 
 return list;

}

export function getListOf(list, props) {
    return [...new Set(list.map((film) => film[props] || ""))];

}