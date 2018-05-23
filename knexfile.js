module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/g-memory-1db'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL + '?ssl=true'
  }
};