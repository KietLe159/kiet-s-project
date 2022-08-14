

const INITIAL_STATE= {
    movie: null
}

export const moviesReducer= (state= INITIAL_STATE, action)=>{
    switch (action.type){
        case "VIEW-MOVIE": {
            return {movie: action.payload}
        }

    }
 
}
