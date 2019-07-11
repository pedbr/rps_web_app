require('../spec.helper');

context('User can see landing page', () => {
  before(async () => {
    await browser.init()
    await browser.visitPage('http://localhost:8080/')
  });
 
  beforeEach(async () => {
    await browser.page.reload();
  });

  after(() => {
    browser.close();
  });

  it('renders the correct page title', async () => {
    expect(await browser.page.title()).to.eql('Rock Paper Scissors');
  });
});