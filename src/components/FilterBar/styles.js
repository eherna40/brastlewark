export default (theme) => ({
  root: {
    width: 200,
    minWidth: 200,
    paddingRight: 10,
    flexDirection: 'column',
  },

  filter: {
    marginTop: 20
  },

  title: {
    width: '100%',
    color: 'rgba(0,0,0,0.75)',
    fontWeight: 300,
    margin: 15,
    marginBottom: 0,
  },

  results: {
    width: '100%',
    color: 'rgba(0,0,0,0.7)',
    fontWeight: 400,
    fontSize: 11,
    margin: '7px 15px 0px 18px',
  },

  filtersAppliedContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginTop: 30,
  },

  chipRoot: {
    flex: 1,
    display: 'flex',
    height: 28,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 5,
    marginTop: 5,
    border: '1px solid rgba(0,0,0,0.02)',
    '&hover:' : {
      backgroundColor: 'red',
      boxShadow: '1px 1px 1px rgba(0,0,0,1)'
    }
  },

  avatar: {
    height: 30,
    width: 30,
  },

  chipLabel: {
    flexGrow: 1,
  },

  chip: {
    flex: 1,
  },

  rangeContainer:{
    marginLeft: 20,
    marginRight: 15,
    marginBottom: 20
  },

  range: {
  },

  rangeLabel: {
    marginLeft: -5,
    marginBottom: 10
  },

  optionFilterContainer: {
    marginBottom: 20,
  },

  optionFilterSubtitle: {
    fontWeight: 400,
    paddingLeft: 15,
  },

  optionFilterItem: {
    fontWeight: 200,
    paddingLeft: 20,
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    '&:hover': {
      color: '#00b9e6',
    }
  },
});
