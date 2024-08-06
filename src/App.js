import './App.css';
import StatsCards from './Components/StatsCards';
import Progress from './Components/Progress';
import ActivityChart from './Components/ActivityChart';
import Category from './Components/Category';
import Reviews from './Components/Reviews';
import OrderList from './Components/OrderList';
import Sidebar from './Components/Sidebar';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className='flex flex-row'>
      <div className='sidebar-container w-0 sm:w-20 flex flex-col'>
        <Sidebar />
      </div>
      <div className='main'>
        <div className='navbar-wrapper flex flex-row'>
          <Navbar />
        </div>
        <div className='main-content p-4 sm:p-6 font-semibold flex flex-col gap-6 lg:gap-8'>
          <h2 className='dashboard-heading sm:text-3xl sm:mb-4'>Dashboard</h2>
          <div className='section-1 flex flex-col xl:flex-row gap-6 lg:gap-8'>
            <div className='w-full xl:w-4/6 2xl:w-[72%]'>
              <StatsCards />
            </div>
            <div className='w-full xl:w-2/6 2xl:w-[28%]'>
              <Progress />
            </div>
          </div>
          <div className='section-2 flex flex-col xl:flex-row gap-6 lg:gap-8'>
            <div className='w-full xl:w-4/6 2xl:w-[72%]'>
              <ActivityChart />
            </div>
            <div className='w-full xl:w-2/6 2xl:w-[28%]'>
              <Category />
            </div>
          </div>
          <div className='section-3 flex flex-col xl:flex-row gap-6 lg:gap-8'>
            <div className='w-full xl:w-4/6 2xl:w-[72%]'>
              <OrderList />
            </div>
            <div className='w-full xl:w-2/6 2xl:w-[28%]'>
              <Reviews />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
