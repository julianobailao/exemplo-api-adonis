'use strict'

const Schema = use('Schema')

class PessoaSchema extends Schema {
  up () {
    this.create('pessoas', (table) => {
      table.increments() // id - int - auto increments - uuid
      table.string('nome', 100)
      table.string('sobrenome', 100)
      table.timestamps() // created_at / updated_at - timestamp 23/12/2018 19:00:00
    })
  }

  down () {
    this.drop('pessoas')
  }
}

module.exports = PessoaSchema
