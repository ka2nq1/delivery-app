import React from 'react';

const ContactsForm = ({order, setOrder}) => {
    return (
        <form>
            <label htmlFor='name'>Name:</label>
            <input 
                type='text' 
                id='name' 
                placeholder='Gustavo Fring'
                onChange={e => setOrder({...order, name: e.target.value})}
            />

            <label htmlFor='email'>Email:</label>
            <input 
                type='text' 
                id='email' 
                placeholder='loss.pollos@albukerke.com'
                onChange={e => setOrder({...order, email: e.target.value})}
            />

            <label htmlFor='phone'>Phone:</label>
            <input 
                type='text' 
                id='phone' 
                placeholder='000 000-00-00'
                onChange={e => setOrder({...order, phone: e.target.value})}
            />

            <label htmlFor='address'>Address:</label>
            <input 
                type='text'
                id='address' 
                placeholder='1213 Jefferson St NE, Albuquerque, New Mexico'
                onChange={e => setOrder({...order, address: e.target.value})}
            />
        </form>
    )
}

export default ContactsForm;