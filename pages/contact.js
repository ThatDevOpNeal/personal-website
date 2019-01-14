import Navbar from '../components/Navbar';
import Title from '../components/Title';
import Linkedin from '../components/Linkedin';
import Email from '../components/Email';

const Contact = () => (
  <div className="main-container">
    <link
      href="//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css"
      rel="stylesheet"
    />
    <Navbar />
    <div className="half-container">
      <Title />
    </div>
    <div className="half-container">
      <h1 className="margin-padding-zero right-side-title">Contact Information</h1>
      <ul className="full-width-center-ul margin-padding-zero">
        <li>
          <Linkedin />
        </li>
        <li>
          <Email />
        </li>
      </ul>
    </div>
  </div>
);

export default Contact;
