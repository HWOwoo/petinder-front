import Sidebar from '../../component/sidebar/Sidebar';
import NewBestUser from '../../component/stateCard/NewBestUser';
import NewIssue from '../../component/stateCard/NewIssue';
import NewMatchCard from '../../component/stateCard/NewMatchCard';
import NewReportCard from '../../component/stateCard/NewReportCard';
import NewUserCard from '../../component/stateCard/NewUserCard';
import './App.css';



const Index: React.FC = () => {
    return (
    <div className='admin-index'>
      <Sidebar></Sidebar>
      <div className='admin-index-content'>
        <NewUserCard></NewUserCard>
        <NewMatchCard></NewMatchCard>
        <NewReportCard></NewReportCard>
        <NewBestUser></NewBestUser>
        <NewIssue></NewIssue>
      </div>
    </div>
  );
}

export default Index;
