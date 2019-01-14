import Link from 'next/link';
import Navbar from '../components/Navbar';
import Title from '../components/Title';

const About = () => (
  <div className="main-container">
    <Navbar />
    <div className="half-container">
      <Title />
    </div>
    <div className="half-container">
      <h1 className="margin-padding-zero right-side-title">About Me</h1>
      <div className="align-center right-half-information">
        <h2>
          I'm Neal Bharucha, an excited developer and <i>near</i> avid coffee drinker.
        </h2>
        <p>
          I've always loved the collaboration and interaction required in order to create the best
          product. The overlap between teams, especially design and development, never fails to show
          me that there is always room to improve. I enjoy every aspect of front-end development,
          back-end development, and a{' '}
          <i>
            <b>nice</b>
          </i>{' '}
          pour over of course :)
        </p>
        <p>
          Want to speak to me? <Link href="/contact">Get in touch!</Link>
        </p>
        <br />
        <h2>What I Do</h2>
        <h3>Front-End</h3>
        <p>Javascript, ES6, React, Next, HTML, CSS</p>
        <h3>Back-End</h3>
        <p>NodeJS, ExpressJs, Python, APIs, SQL, NoSQL</p>
        <h3>Apps</h3>
        <p>Swift, React-Native</p>
        <h3>Cloud</h3>
        <p>AWS Certified Developer</p>
        <br />
        <h2>Favorite Quotes</h2>
        <p>
          <i>"Be the change that you wish to see in the world."</i> - Mahatma Gandhi
        </p>
        <p>
          <i>"Every champion was once a contender who refused to give up."</i> - Rocky Balboa
        </p>
        <br />
      </div>
    </div>
  </div>
);

export default About;
