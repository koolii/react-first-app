export default (store) => (next) => (action) => {
  const datetime = Date.now()
  console.log(`1. BEFORE(${datetime}) STATE: ${JSON.stringify(store.getState(), null, '\t')}`)
  console.log(`2. BEFORE(${datetime}) ACTION: ${JSON.stringify(action, null, '\t')}`)

  const result = next(action)
  console.log(`3. AFTER(${datetime}) STATE: ${JSON.stringify(store.getState(), null, '\t')}`)
  console.log('---------------------------------------')

  return result
}