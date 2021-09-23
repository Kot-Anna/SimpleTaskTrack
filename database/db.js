import * as SQLite from 'expo-sqlite'


const db = SQLite.openDatabase('db.taskDb') // returns Database object



//Check if the items table exists if not create it
export const init = () => {
  const promise = new Promise ((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
            'CREATE TABLE IF NOT EXISTS items (id INTEGER PRIMARY KEY, name TEXT NOT NULL, due TEXT NOT NULL, desc TEXT NOT NULL);',[],
          () => {
            resolve();
          },
          (_,err)=>{
            reject(err);
          }
        );
      });
  });
  return promise;
};

//inserting new item into database

export const addItem=(itemname, itemduedate, itemdesc)=> {
  const promise = new Promise ((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
          'INSERT INTO items(name, due, desc) values (?,?,?);',
          [itemname, itemduedate, itemdesc],
        (_,result) => {
          resolve(result);
        },
        (_,err)=>{
          reject(err);
        }
      );
    });
});
return promise;
};

//fetching all items from db
export const fetchItems = () => {
    const promise = new Promise ((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
            'select * from items;',
            [],
          (tx,result) => {
            resolve(result);
          },
          (tx,err)=>{
            reject(err);
          }
        );
      });
  });
  return promise;
};

// deleting item by id
export const deleteItem=(itemid)=> {
  const promise = new Promise ((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
          'DELETE FROM items where id = ?;',
          [itemid],
        (_,result) => {
          resolve(result);
        },
        (_,err)=>{
          reject(err);
        }
      );
    });
});
return promise;
};

//updating item by id

export const editItem=(itemid, itemname, itemduedate, itemdesc)=> {
 // console.log("This is edit function of db " + itemid, itemname, itemduedate, itemdesc)
  const promise = new Promise ((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
          'UPDATE items SET name=?, due=?, desc=? WHERE id=?;',
          [itemname, itemduedate, itemdesc, itemid],
        (_,result) => {
          resolve(result);
        },
        (_,err)=>{
          reject(err);
        }
      );
    });
});

return promise;
};

