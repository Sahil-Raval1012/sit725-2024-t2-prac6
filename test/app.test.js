(async () => {
  const chai = await import('chai');
  const chaiHttp = await import('chai-http');
  const app = await import('../app.js'); 
  const { expect } = chai;
  chai.use(chaiHttp);
describe('Server Tests', function () {
  before(function (done) {
    this.server = app.listen(3001, done);
  });
  after(function (done) {
    this.server.close(done);
  });
  it('should return the home page with correct content', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        if (err) return done(err);
        expect(res).to.have.status(200);
        expect(res.text).to.include('Welcome to the Home Page');
        done();
      });
  });
  it('should return the About page with correct content', (done) => {
    chai.request(app)
      .get('/about')
      .end((err, res) => {
        if (err) return done(err);
        expect(res).to.have.status(200);
        expect(res.text).to.include('About Us');
        done();
      });
  });
  it('should return the Contact page with correct content', (done) => {
    chai.request(app)
      .get('/contact')
      .end((err, res) => {
        if (err) return done(err);
        expect(res).to.have.status(200);
        expect(res.text).to.include('Contact Us');
        done();
      });
  });
});
})();
