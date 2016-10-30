const QueryFile = require('pg-promise').QueryFile;
const path = require('path');

function sql(file) {
  const fullPath = path.join(__dirname, file);
  console.log('from sqlProvider');
  return new QueryFile(fullPath, { minify: true });
}

const sqlProvider = {
  guests: {
    all: sql('./sql/guest/all.sql'),
    find: sql('./sql/guest/find.sql'),
    create: sql('./sql/guest/create.sql'),
    delete: sql('./sql/guest/delete.sql'),
  },
  organizers: {
    all: sql('./sql/organizer/all.sql'),
    create: sql('./sql/organizer/create.sql'),
    delete: sql('./sql/organizer/delete.sql'),
    find: sql('./sql/organizer/find.sql'),
  },
};

module.exports = sqlProvider;
