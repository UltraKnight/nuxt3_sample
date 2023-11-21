export default defineEventHandler(async () => {
  await useStorage('db').removeItem('foo.json');

  return {}
})
