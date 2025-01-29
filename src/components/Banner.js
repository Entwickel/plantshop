import logo from '../assets/logo.png'
import '../styles/Banner.css'

function Banner(){
    const title = 'PlantShop'
    return <div className="lmj-banner"> 
    
    <img src = {logo} alt="PlantShop Logo" className='lmj-logo'></img>
    <h1>{title}</h1>
    </div>
}
export default Banner