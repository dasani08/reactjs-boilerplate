import store from 'store'

const defaultState = {}

const getCats = () => {
  return dispatch => {}
}

const addCat = (cat) => {}
const delCat = (id) => {}
const updateCat = (cat) => {}

export {
  getCats,
  addCat,
  delCat,
  updateCat
}
export default (state = defaultState, action) => state
