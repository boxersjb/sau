import './../App.css'
import MenuBar from '../components/MenuBar'
import Welcome from '../components/Welcome' 
import Footer from '../components/Footer'

function Contact() {
  const style_test = {
    color: "blue",
    textAlign: "center"
  }
  return (
    <>
      <MenuBar />
      <Welcome />
      <h1 style={{color:"red", textAlign:"center"}}>Hiiiiiii</h1>
      <h2 style={{style_test}}>Hello Chanachai Pansarakam</h2>
      <hr />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, obcaecati.</p>
      <hr />
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae, neque!</p>
      <Footer />
    </>
  )
}

export default Contact
