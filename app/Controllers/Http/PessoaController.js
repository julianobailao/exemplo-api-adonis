'use strict'

const Pessoa = use('App/Models/Pessoa')

// ResourceController
// Create - store
// Read - index
// Detail - show
// Update - update
// Delete - destroy

class PessoaController {
  async index() {
    const page = await Pessoa.query().paginate(1)

    return page
  }

  async show({ params }) {
    const pessoa = await Pessoa.findOrFail(params.id)

    return pessoa
  }

  async store({ request }) {
    const pessoa = new Pessoa();
    pessoa.nome = request.input('nome')
    pessoa.sobrenome = request.input('sobrenome')
    await pessoa.save()

    return pessoa
  }

  async update({ params, request }) {
    const pessoa = await Pessoa.findOrFail(params.id)
    pessoa.nome = request.input('nome')
    pessoa.sobrenome = request.input('sobrenome')
    await pessoa.save()

    return pessoa
  }

  async destroy({ params }) {
    const pessoa = await Pessoa.findOrFail(params.id)
    await pessoa.delete()

    return null
  }
}

module.exports = PessoaController
