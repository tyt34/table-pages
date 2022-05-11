const maxAmountStringsOnPage = 10

const maxAmountButtonsOnPage = 5

const emptyObj = {
  id: '',
  numId: '',
  header: '',
  description: ''
}

const emptyList = []

for (let i=1; i<=maxAmountStringsOnPage; i++) {
  const cloneEmptyObj = Object.assign({}, emptyObj);
  cloneEmptyObj.id = i
  emptyList.push(cloneEmptyObj)
}

function getNumFromNowPage(input) {
  return Number(input.split('/')[1])
}

function sortIDDown(a, b) {
  if (a.id < 0) {
    return 1
  }
  if (b.id < 0) {
    return 1
  }
  ///////////////////////////////////////////
  // эти и последующие первые два условных выражениния сделаны для того
  // чтобы при сортировки пустых строк они всегда были снизу
  if (a.id < b.id) {
    return -1;
  }
  if (a.id > b.id) {
    return 1;
  }
}

function sortIDUp(a, b) {
  if (a.id < 0) {
    return 1
  }
  if (b.id < 0) {
    return 1
  }
  if (a.id < b.id) {
    return 1;
  }
  if (a.id > b.id) {
    return -1;
  }
}

function sortHeadDown(a, b) {
  if (a.header === '') {
    return 1
  }
  if (b.header === '') {
    return 1
  }
  if (a.header < b.header) {
    return -1;
  }
  if (a.header > b.header) {
    return 1;
  }
}

function sortHeadUp(a, b) {
  if (a.header === '') {
    return 1
  }
  if (b.header === '') {
    return 1
  }
  if (a.header < b.header) {
    return 1;
  }
  if (a.header > b.header) {
    return -1;
  }
}

function sortDescrDown(a, b) {
  if (a.description === '') {
    return 1
  }
  if (b.description === '') {
    return 1
  }
  if (a.description < b.description) {
    return -1;
  }
  if (a.description > b.description) {
    return 1;
  }
}

function sortDescrUp(a, b) {
  if (a.description === '') {
    return 1
  }
  if (b.description === '') {
    return 1
  }
  if (a.description < b.description) {
    return 1;
  }
  if (a.description > b.description) {
    return -1;
  }
}

function searchText(textSearch, array) {
  const result = []
  for (let i=0; i<array.length; i++) {
    const firstPartOfArr = array[i].title
    const secondPartOfArr = array[i].body.split('\n').join(' ')
    if (firstPartOfArr.includes(textSearch)) {
      result.push(array[i])
    } else if (secondPartOfArr.includes(textSearch)) {
      result.push(array[i])
    }
  }
  return result
}

module.exports.emptyList = emptyList
module.exports.emptyObj = emptyObj
module.exports.maxAmountStringsOnPage = maxAmountStringsOnPage
module.exports.getNumFromNowPage = getNumFromNowPage
module.exports.maxAmountButtonsOnPage = maxAmountButtonsOnPage

module.exports.sortIDDown = sortIDDown
module.exports.sortIDUp = sortIDUp
module.exports.sortHeadDown = sortHeadDown
module.exports.sortHeadUp = sortHeadUp
module.exports.sortDescrDown = sortDescrDown
module.exports.sortDescrUp = sortDescrUp

module.exports.searchText = searchText
