const amountStringsOnPage = 10

const maxAmountButtonsOnPage = 5

const emptyObj = {
  id: '',
  numId: '',
  header: '',
  description: ''
}

const emptyList = []

for (let i=1; i<=amountStringsOnPage; i++) {
  const cloneEmptyObj = Object.assign({}, emptyObj);
  cloneEmptyObj.id = i
  emptyList.push(cloneEmptyObj)
}

function getNumFromNowPage(input) {
  return Number(input.split('/')[1])
}

function sortIDDown(a, b) {
  if (a.id < b.id) {
    return -1;
  }
  if (a.id > b.id) {
    return 1;
  }
}

function sortIDUp(a, b) {
  if (a.id < b.id) {
    return 1;
  }
  if (a.id > b.id) {
    return -1;
  }
}

function sortHeadDown(a, b) {
  if (a.header < b.header) {
    return -1;
  }
  if (a.header > b.header) {
    return 1;
  }
}

function sortHeadUp(a, b) {
  if (a.header < b.header) {
    return 1;
  }
  if (a.header > b.header) {
    return -1;
  }
}

function sortDescrDown(a, b) {
  if (a.description < b.description) {
    return -1;
  }
  if (a.description > b.description) {
    return 1;
  }
}

function sortDescrUp(a, b) {
  if (a.description < b.description) {
    return 1;
  }
  if (a.description > b.description) {
    return -1;
  }
}

module.exports.emptyList = emptyList
module.exports.emptyObj = emptyObj
module.exports.amountStringsOnPage = amountStringsOnPage
module.exports.getNumFromNowPage = getNumFromNowPage
module.exports.maxAmountButtonsOnPage = maxAmountButtonsOnPage

module.exports.sortIDDown = sortIDDown
module.exports.sortIDUp = sortIDUp
module.exports.sortHeadDown = sortHeadDown
module.exports.sortHeadUp = sortHeadUp
module.exports.sortDescrDown = sortDescrDown
module.exports.sortDescrUp = sortDescrUp
