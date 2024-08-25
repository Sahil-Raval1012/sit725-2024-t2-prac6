import * as chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app.js';
const { expect } = chai;
chai.use(chaiHttp);

describe('GET /', () => {
    it('should return the home page with content', (done) => {
        chai.request(app)
          .get('/')
          .end((err, res) => {
            expect(res).to.have.status(200);
            expect(res.text).to.include('Task 6.2D');
            expect(res.text).to.include('Applied Software Engineering');
            expect(res.text).to.include('Part - 1');
            expect(res.text).to.include('Take advantage of the provided slides and actively participate in the practical session to gain insights into basic testing strategies. This will equip you with essential knowledge and techniques to design and implement effective tests for your software.');
            expect(res.text).to.include('Part - 2');
            expect(res.text).to.include('Continuing from previous weeks, import your weekly project into a new repository. Its time to make the necessary modifications and incorporate testing into your project. Implementing tests will help verify the correctness of your code, identify potential issues or bugs, and enhance the overall quality of your software.');
            done();
          });
      });
    });
    describe('GET /about', () => {
      it('should return the About page with correct content', (done) => {
        chai.request(app)
          .get('/about')
          .end((err, res) => {
            expect(res).to.have.status(200);
            expect(res.text).to.include('About Us');
            done();
          });
      });
    });
    describe('GET /contact', () => {
      it('should return the Contact page with correct content', (done) => {
        chai.request(app)
          .get(' /contact')
          .end((err, res) => {
            expect(res).to.have.status(200);
            expect(res.text).to.include('Contact Us');
            expect(res.text).to.include('Connect with us through Social Media.');
            done();
          });
      });
    });
