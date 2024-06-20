import './App.css'
import dorianImg from './assets/dorian.png'

function App() {

  return (
    <>
      <div className="main-container">
        <img className='profile-img' src={dorianImg} alt="" />
        <h2 className='name'>Dorian Taponzing Donfack</h2>
        <p className='address'>Georgia, United States of America</p>
        <p className='description'>"Front-end developer and avid reader"</p>
        <div className="links-container">
          <a href="https://github.com/thebreezyguy1">GitHub</a>
          <a href="https://www.frontendmentor.io/profile/thebreezyguy1">Frontend Mentor</a>
          <a href="https://linkedin.com/in/dorian-taponzing-donfack-0269892a9">LinkedIn</a>
          <a href="https://x.com/thebreezyguy168">Twitter</a>
          <a href="https://instagram.com/thebreezyguy">Instagram</a>
        </div>
      </div>
    </>
  )
}

export default App