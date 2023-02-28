
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
  


const Booked = ({array1,array2,array3,show,setShowModal}) => {

  const handleClose = () => setShowModal(false);
  let i=localStorage.getItem('ii');
  i=parseInt(i,10);
  let ar1=[];
  if(i===0)
  {  
    for(let i=0;i<array1.length;i++)
    {
      ar1.push(array1[i]);
    }
  }
  else if(i===1)
  {
    for(let i=0;i<array1.length;i++)
    {
      ar1.push(array2[i]);
    }
  }
  else
  {
    for(let i=0;i<array1.length;i++)
    {
      ar1.push(array3[i]);
    }
  }
  

 


  
  
  return (
    <>
    
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Bookings</Modal.Title>
      </Modal.Header> 
      <Modal.Body>00:00 - 03:00 {` :- ${ar1[0]}`} </Modal.Body>
      <Modal.Body>03:00 - 06:00 {` :- ${ar1[1]}`} </Modal.Body>
      <Modal.Body>06:00 - 09:00 {` :- ${ar1[2]}`} </Modal.Body>
      <Modal.Body>09:00 - 12:00 {` :- ${ar1[3]}`} </Modal.Body>
      <Modal.Body>12:00 - 15:00 {` :- ${ar1[4]}`} </Modal.Body>
      <Modal.Body>15:00 - 18:00 {` :- ${ar1[5]}`} </Modal.Body>
      <Modal.Body>18:00 - 21:00 {` :- ${ar1[6]}`} </Modal.Body>
      <Modal.Body>21:00 - 24:00 {` :- ${ar1[7]}`} </Modal.Body>
      
      
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        
      </Modal.Footer>
    </Modal>
  </>
  )
}

export default Booked
