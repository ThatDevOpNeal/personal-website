import '../static/css/style.css';
import Navbar from '../components/Navbar';
import Title from '../components/Title';

const Index = () => (
  <div className="main-container">
    <Navbar />
    <div className="half-container">
      <Title />
    </div>
    <div className="half-container">
      <h1 className="margin-padding-zero">Welcome To My Website!</h1>
      <h2>Neal Bharucha</h2>
    </div>
  </div>
);

export default Index;
