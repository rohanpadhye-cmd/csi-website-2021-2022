import {IconContext} from 'react-icons'
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedinIn,FaHeart} from 'react-icons/fa';
const FooterComponent=()=>{
    return(
        <footer className='d-flex'>
            <div className='ml-5 my-auto'>&copy;CSI-VESIT 2020</div>
            <div className='mx-auto my-auto'>Made with <FaHeart/> by CSI Web Team</div>
            <div className='mr-5'>
                <IconContext.Provider value={{ color:'#363537',className: "fa-icons",size:'2em' }}>
                    <a href='' className='ml-2'><FaEnvelope/></a>
                    <a href='' className='ml-2'><FaInstagram/></a>
                    <a href='' className='ml-2'><FaFacebook/></a>
                    <a href='' className='ml-2'><FaLinkedinIn/></a>
                </IconContext.Provider>               
            </div>
        </footer>
    )
}

export default FooterComponent;

