describe('API AluraPIC', () => {
    it('Dados da API', () => {
      cy.request({
        method:'POST',
        url:'http://localhost:3000/user/login',
        //vai buscar os dados para login no cypress.env para não deixar os dados de login expostos na execução do teste
        body: Cypress.env()
      }).then((res)=> {
        expect(res.status).to.be.equal(200)
        expect(res.body).is.not.empty
        expect(res.body).to.have.property('id')
        expect(res.body.id).to.be.equal(3)
      })
    })

    it.only('Fotos do usuário', () => {
      

      cy.request({
        method:'GET',
        url:'http://localhost:3000/rogeriolins/photos',
        
      }).then((res)=> {
        expect(res.status).to.be.equal(200)
        expect(res.body).is.not.empty
        expect(res.body[0]).to.have.property('description')
        expect(res.body[0].description).to.be.equal('Santos')
      })
    })
  })