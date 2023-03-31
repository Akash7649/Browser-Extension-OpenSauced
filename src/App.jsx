import Img from './assets/demo.png'
import './App.css'

function App() {

  return (
    <div className="App">
      <div>
      <h1>OpenSauced Browser Extension</h1>
      <p>This extension checks if a gitHub user is a member of OpenSauced Organization. 
        If the user is a member, then it adds a button to the user's GitHub profile which directs it to  that users OpenSauced profile</p>
      </div>
      <h2>Example:</h2>
      <div className="img">
        <img src={Img} alt="" />
      </div>
      <p className="link_to_profile">
        Developed by <a href="https://github.com/Akash7649" target="_blank">Akash7649</a>
      </p>
    </div>
  )
}

export default App
