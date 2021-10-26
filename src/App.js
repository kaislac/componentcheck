import './App.css'
import FullName from './Component/Profile/FullName'
import Adress from './Component/Profile/Adress'
import ProfilePhoto from './Component/Profile/ProfilePhoto'

function App() {
  return (
    <>
      <div className='App-header'>
        <FullName />
        <Adress />
        <div className='App-logo'>
          <ProfilePhoto />
        </div>
      </div>
    </>
  )
}

export default App
