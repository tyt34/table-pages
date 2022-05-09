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

module.exports.emptyList = emptyList
module.exports.emptyObj = emptyObj
module.exports.amountStringsOnPage = amountStringsOnPage
module.exports.getNumFromNowPage = getNumFromNowPage
module.exports.maxAmountButtonsOnPage = maxAmountButtonsOnPage
