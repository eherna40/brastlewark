const initialState = {
    population: [],
    filters:{
        age:{
            min: null,
            max: null,
            from: null,
            to: null
        },
        weight:{
            max: null,
            min: null
        }, 
        height: {
            max: null,
            min: null
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
    }       
}

export default initialState;