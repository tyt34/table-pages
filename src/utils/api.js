const link = 'https://jsonplaceholder.typicode.com/posts'

export const getInformation = () => {
  //console.log(' get from: ', link)
  return fetch(link, {
    method: 'GET',
  })
  .then(res => {
    return res.json()
  })
}
