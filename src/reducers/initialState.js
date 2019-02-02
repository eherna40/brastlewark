const initialState = {
    population: [],
    age:{
        min: null,
        max: null,
        from: null,
        to: null
    },
    weight:{
        max: null,
        min: null,
        from: null,
        to: null
    }, 
    height: {
        max: null,
        min: null,
        from: null,
        to: null
    },
    hair: {
        options: []
    },
    professions:{
        options: []
    },
    gnomeSelected: {},
    professionSelected: {},
    qualifications:{
        maxNumberOfFriends: null,
        maxNumberOfProfessions: null
    },
    loading: false 
}

export default initialState;