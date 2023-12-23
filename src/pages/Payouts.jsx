import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Dashboard from '../components/Dashboard';
import Styles from '../styles/payouts.module.css';

const Payouts = () => {
  return (
    <div className={Styles.main_container}>
      <div className={Styles.sidebar_container}>
        <Sidebar />
      </div>

      <div className={Styles.sub_container}>
        <Navbar />
        {<Dashboard />}
      </div>
    </div>
  );
};

export default Payouts;
