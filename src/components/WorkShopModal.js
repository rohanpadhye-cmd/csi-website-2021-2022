import {Modal} from 'react-bootstrap';
const WorkShopModal=({name,desc,img,handleClose,show})=>{
    
    return(
        <Modal className='mx-0' size='lg' show={show} onHide={handleClose} onClick={handleClose}>
        <Modal.Body className='px-0 py-0'><img src={img} width='100%'/></Modal.Body>
        <Modal.Footer>
          <h1>{desc}</h1>
        </Modal.Footer>
      </Modal> 
    )
}
export default WorkShopModal;