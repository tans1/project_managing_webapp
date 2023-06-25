import './App.css';
import Title from './components/Main content/Title/title';
import Group from './components/Main content/groups/groups';
import Modify from './components/Main content/modify/modify';
import NavBar from './components/navbar/navbar';
import SideBar from './components/sidebar/sidebar';
import { useState, useEffect } from 'react';

function App() {
  const [isactive, setIsactive] = useState(true);

  const activeController = () => {
    setIsactive(!isactive)
  }


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 880){
        setIsactive(false)
      } else{
        setIsactive(true);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [window.innerWidth]);




  const style1 = {
    gridTemplateColumns: "250px 1fr"
  }

  const style2 = {
    gridTemplateColumns: "1fr",
    height: "90vh"
  }
  return (
    <div className="App">
        <NavBar active = {isactive} changeactive = {activeController} />
      <div className='Content' style={isactive ? style1 : style2}>
        {isactive && <SideBar />}
        <div className='MainContent' >
          <Title />
          <Modify />
          <Group />
        </div>
      </div>
    </div>
  );
}

export default App;
