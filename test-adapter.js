const { PrismaBetterSqlite3 } = require('@prisma/adapter-better-sqlite3');
const { clear } = require('console');
console.log('PrismaBetterSqlite3:', PrismaBetterSqlite3);
try {
  const adapter = new PrismaBetterSqlite3({ url: './dev.db' });
  console.log('Adapter created successfully');
} catch (e) {
  console.error('Error creating adapter:', e);
}
