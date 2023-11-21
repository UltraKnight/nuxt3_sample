export default defineEventHandler(async () => {
  const item = await useStorage('db').getItem('foo.json');

  return {
    item
  }
})
