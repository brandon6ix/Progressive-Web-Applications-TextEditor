import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// Method to save content to the database
export const putDb = async (content) => {
  console.log('PUT to the database');

  // Open a connection to the 'jate' database with version 1
  const jateDb = await openDB('jate', 1);

  // Create a transaction and specify the database and data privileges
  const tx = jateDb.transaction('jate', 'readwrite');

  // Open up the desired object store
  const store = tx.objectStore('jate');

  // Use the .put() method to add or update data in the store
  const request = store.put({ id: 1, content: content });

  // Get confirmation of the request
  const result = await request;
  console.log('🚀 - data saved to the database', result);
};

// Method to get all content from the database
export const getDb = async () => {
  console.log('GET all content from the database');

  // Open a connection to the 'jate' database with version 1
  const jateDb = await openDB('jate', 1);

  // Create a transaction and specify the database and privileges
  const tx = jateDb.transaction('jate', 'readonly');

  // Open up the desired object store
  const store = tx.objectStore('jate');

  // Use the .get() method to get the data from the store
  const request = store.get(1);

  // Wait for the request to complete
  const result = await request;
  console.log('result.value', result?.content);
  return result?.content;
};

// Initialize the database
initdb();

