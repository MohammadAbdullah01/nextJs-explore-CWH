import React from 'react';
import Blog from './blog';

const contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const phone = e.target.phone.value;
        const address = e.target.address.value;
        const contact = { name: name, email: email, phone: phone, address: address }
        fetch('http://localhost:3000/api/postcontact', {
            method: 'POST',
            body: JSON.stringify(contact),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                window.alert("successfully submitted")
                e.target.reset()
            });
    }
    return (
        <div className='w-2/4 mx-auto'>
            <form onSubmit={handleSubmit}>
                <p>Name</p>
                <input type="text" className='w-full my-1' name='name' required />
                <p>Email</p>
                <input type="email" className='w-full my-1' name='email' required />
                <p>Phone</p>
                <input type="number" className='w-full my-1' name='phone' required />
                <p>Address</p>
                <input type="text" className='w-full my-1' name='address' required />
                <button className='bg-slate-400 text-black p-2 mt-2 rounded-full' type='Submit'>Submit</button>
            </form>
        </div>
    );
};

export default contact;