const QueryFile = require('pg-promise').QueryFile;
const path = require('path');

function sql(file) {
  const fullPath = path.join(__dirname, file);
  return new QueryFile(fullPath, { minify: true });
}

const sqlProvider = {
  guests: {
    all: sql('./sql/user/all.sql'),
    find: sql('./sql/user/find.sql'),
    create: sql('./sql/user/create.sql'),
    delete: sql('./sql/user/delete.sql'),
  },
  organizers: {
    all: sql('./sql/chirp/all.sql'),
    create: sql('./sql/chirp/create.sql'),
    delete: sql('./sql/chirp/delete.sql'),
    find: sql('./sql/chirp/find.sql'),
  },
};

module.exports = sqlProvider;
