import { createStore } from "redux";

const initialState={
    data: [],
    favorites: [],
    popdata: [], 
    poptrigger: false,
    searchdata: [],
    theme: "light",
    themeicon: "sun",
    next:[],
    prev:[],
    filmurl:[]
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_DATA":
            return {
                ...state,
                data: action.payload,
            }
         case "SET_DATA":
            return {
                ...state,
                data: action.payload,
            }
        case "ADD_FAVORITE":
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            }
        case "REMOVE_FAVORITE":
            return {
                ...state,
                favorites: state.favorites.filter((item) => item !== action.payload)
            }
        case "GET_POP_DATA":
            return {
                ...state,
                popdata: action.payload,
            }
        case "SET_POP_TRIGGER":
            return {
                ...state,
                poptrigger: action.payload,
            }
        case "GET_SEARCH_DATA":
            return {
                ...state,
                searchdata: action.payload,
            }
        case "SET_THEME":
            return{
                ...state,
                theme:action.payload,
            }
        case "SET_THEME_ICON":
            return{
                ...state,
                themeicon:action.payload,
            }
        case "GET_NEXT_PAGE":
            return{
                ...state,
                next:action.payload,
            }
        case "GET_PREV_PAGE":
            return{

                ...state,
                prev:action.payload,
            }
        case "SET_FILM_URL":
            return{
                ...state,
                filmurl:action.payload,
            }  
        default:
            return state;

    }


}


// actions



// store
const  store = createStore(reducer);
export default store;





