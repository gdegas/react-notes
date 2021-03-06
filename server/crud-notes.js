const knex = require('knex')({
  dialect: 'pg',
  connection: process.env.DATABASE_URL
})

function getNotes() {
  const query = knex
    .select('*')
    .from('notes')
  return query
}

function addNote(note) {
  const query = knex
    .insert(note)
    .into('notes')
    .returning('*')
  return query
}

function deleteNote(id) {
  const query = knex
    .where('id', id)
    .delete()
    .from('notes')
  return query
}

module.exports = {
  getNotes,
  addNote,
  deleteNote
}
