export default defineEventHandler(async () => {
  interface Configs {
    a?: string;
    b?: string;
  }

  const storage =  useStorage<Configs>('db');
  await storage.setItem('foo.json', {a: 'test'});
  const currentItems = await storage.getItem('foo.json'); 
  const item = await useStorage('db').setItem('foo.json', {...currentItems, b: 'test2'});

  return {
    item
  }
})
