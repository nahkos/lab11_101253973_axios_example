import React from 'react'
import { Button, Card } from 'react-bootstrap'

const Contact = ({contact}) => {
    return (
        <>
         <Card className='my-3 p-3 rounded h-90'>
             <Card.Img style={{objectFit:'contain'}} variant='top' src={contact.picture.large} />
             <Card.Body>
                 <Card.Title>
                     {`${contact.name.title + ' '+ contact.name.first + ' ' + contact.name.last
                    + ' - ' + contact.login.uuid}`}
                 </Card.Title>                                  
                 <Card.Subtitle className='mb-2 text-muted'>User Name</Card.Subtitle>
                 <Card.Text>
                 {contact.login.username}
                 </Card.Text>
                 <Card.Subtitle className='mb-2 text-muted'>Gender</Card.Subtitle>
                 <Card.Text>
                 {contact.gender}
                 </Card.Text>
                 <Card.Subtitle className='mb-2 text-muted'>Time Zone Description</Card.Subtitle>
                 <Card.Text>
                 {contact.location.timezone.description}
                 </Card.Text>
                 <Card.Subtitle className='mb-2 text-muted'>Address</Card.Subtitle>
                 <Card.Text>
                 {contact.location.city},&nbsp;{contact.location.state},&nbsp;{contact.location.postcode}
                 </Card.Text>
                 <Card.Subtitle className='mb-2 text-muted'>Email</Card.Subtitle>
                 <Card.Text>
                 {contact.email}
                 </Card.Text>
                 <Card.Subtitle className='mb-2 text-muted'>Birth Date and Age</Card.Subtitle>
                 <Card.Text>
                 {contact.dob.date},&nbsp;({contact.dob.age})
                 </Card.Text>
                 <Card.Subtitle className='mb-2 text-muted'>Register Date</Card.Subtitle>
                 <Card.Text>
                 {contact.registered.date}
                 </Card.Text>
                 <Card.Subtitle className='mb-2 text-muted'>Phone</Card.Subtitle>
                 <Card.Text>
                     {contact.phone}
                 </Card.Text>                 
                 <a href={`mailto:${contact.email}`}><Button style={{borderRadius: '20px'}} className='w-100' variant='dark'>Contact</Button></a>
             </Card.Body>
            
         </Card>   
        </>
    )
}

export default Contact
