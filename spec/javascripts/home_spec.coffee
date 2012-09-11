describe 'Home', ->
  banjo = null
  beforeEach ->
    banjo = new Banjo()

  it 'can fetch data using instagram API', ->
    console.log('hi')
    expect(banjo.refreshImage()).toBeTrue()