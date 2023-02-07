import React from "react";

const AppReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_FAVS':
            return {
                ...state,
                favourites: [...state.favourites, action.payload]
            };
        case 'REMOVE_FROM_FAVS':
            return {
                ...state,
                favourites: state.favourites.filter((item) => item.id !== action.payload)
            };
    }
};

export default AppReducer;