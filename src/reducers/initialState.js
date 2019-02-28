const initialState = {
  population: [],
  age: {
    min: 0,
    max: 400,
    from: null,
    to: null
  },
  weight: {
    max: 400,
    min: 0,
    from: null,
    to: null
  },
  height: {
    max: 400,
    min: 0,
    from: null,
    to: null
  },
  hair: {
    options: []
  },
  professions: {
    options: []
  },
  gnomeSelected: "",
  professionSelected: "",
  qualifications: {
    maxNumberOfFriends: null,
    maxNumberOfProfessions: null
  },
  loading: false,
  idShowDetail: ""
};

export default initialState;
