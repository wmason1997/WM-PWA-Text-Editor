import { openDB } from 'idb';

const initdb = async () => {
  try {
    await openDB('jate', 1, {
      // Add our database schema if it has not already been initialized.
      upgrade(db) {
        if (db.objectStoreNames.contains('jate')) {
          console.log('jate database already exists');
          return;
        }
        // Create a new object store for the data and give it a key name of 'id' which will autoincrement
        db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
        console.log('jate database created');
      },
    });
  } catch (error) {
    console.log('Database initialization error:', error);
  }
};

// Added logic to a putDb method that accepts some content and adds it to the database
export const putDb = async (content) => {
  try {
    // Create a connection to the database 'jate' and specify the version
    const jateDb = await openDB('jate', 1);

    // Create a new transaction and specify readwrite mode
    const tx = jateDb.transaction('jate', 'readwrite');

    // Open the object store
    const store = tx.objectStore('jate');

    // Add the new content to the object store
    const request = store.put({ id: 1, value: content });

    // Handle the success or error of the operation
    request.onsuccess = () => {
      console.log('Data successfully stored');
    };

    request.onerror = (event) => {
      console.error('Error storing data:', event.target.error);
    };

    // Wait for the transaction to complete
    await tx.complete;
  } catch (error) {
    console.error('Error putting data in the database:', error);
  }
};


// Added logic for a getDb method that gets all the content from the database
export const getDb = async () => {
  console.log('GET from the database');

  // Create a connection to the database jate and version we want to use.
  const jateDb = await openDB('jate', 1);

  // Create a new transaction and specify the database and data privileges.
  const tx = jateDb.transaction('jate', 'readonly');

  // Open up the desired object store.
  const store = tx.objectStore('jate');

  // Use the .get(1) method to get 1 piece that has all the edited text.
  const request = await store.get(1);

  // Get confirmation of the request.
  const result = await request;
  console.log('result.value', result);
  return result.value; // Added this and so now the content on the page gets put back on the page upon refresh
};

initdb();
