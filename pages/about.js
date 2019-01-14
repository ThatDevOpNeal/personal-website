import Navbar from '../components/Navbar';
import Title from '../components/Title';

const About = () => (
  <div className="main-container">
    <Navbar />
    <div className="half-container">
      <Title />
    </div>
    <div className="half-container">
      <h1 className="margin-padding-zero">About Me</h1>
    </div>
  </div>
);

export default About;
