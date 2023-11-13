import React, { useState } from 'react'

export default function LoginFunction() {

    var [formData, setFormData] = useState({
        email: '',
        name: '',
        address: '',
        address2: '',
        city: '',
        province: '',
        postalcode: ''
    })
    //var [x, setX] = useState(0)

    const provinces = ["Alberta", "British Columbia", "Manitoba", "New Brunswick", "Newfoundland and Labrador", "Nova Scotia", "Ontario", "Prince Edward Island", "Quebec", "Saskatchewan"]
    
    const onValueChanged = (event) => {
        setFormData({...formData , [event.target.name]:event.target.value})
    }

    const onSubmitForm = (event) => {
        
        event.preventDefault()
        console.log("Form Submitted : " +  JSON.stringify(formData))
        
    }

  return (
    <>
        <h2>Data Entry Form</h2>
        <form class="form" onSubmit={(e) => onSubmitForm(e)} > 
        <h3>Email</h3>
            <input 
                name='email'
                type="text"
                onChange={(e) => onValueChanged(e)} 
                placeholder="Enter Email" />
        <h3>Name</h3>
            <input 
                name='name'
                type="text"
                onChange={(e) => onValueChanged(e)} 
                placeholder="Full Name" />
        <h3>Address</h3>
            <input 
                name='address'
                type="text"                
                onChange={(e) => onValueChanged(e)} 
                placeholder='123 Main St' />

        <h3>Address2</h3>
             <input 
                name='address2'
                type="text"                
                onChange={(e) => onValueChanged(e)} 
                placeholder='Aparment, studio,or floor' />

        <h3>City</h3>
             <input 
                name='city'
                type="text"                
                onChange={(e) => onValueChanged(e)}/>
            
        <h3>Province</h3>
            <select name='province' onChange={(e) => onValueChanged(e)}>
                {
                    provinces.map((province) => (
                            <option key={province} value={province}>{province}</option>
                    ))
                }
            </select>
        
            <h3>Postal Code</h3>
             <input 
                name='postalcode'
                type="text"                
                onChange={(e) => onValueChanged(e)}/>
                <br></br>

                <input 
                name='agree'
                type="radio"
                value="agree"
                onChange={(e) => onValueChanged(e)} /> Agree Terms & Condition?<br></br>
            
            <input 
                name='btnSubmit'
                type="submit"
                value="Login" />
        </form>
        <br></br>
        <form class="form" > 
        {(<p ><a class="green">Emai:</a>{JSON.stringify(formData.email)}</p>)}
        <hr class="green"></hr>
        {(<p ><a class="green">Full Name:</a>{JSON.stringify(formData.name)}</p>)}
        <hr class="green"></hr>
        {(<p ><a class="green">Address:</a>{JSON.stringify(formData.address)}</p>)}
        <hr class="green"></hr>
        {(<p ><a class="green">City:</a>{JSON.stringify(formData.city)}</p>)}
        <hr class="green"></hr>
        {(<p ><a class="green">province:</a>{JSON.stringify(formData.province)}</p>)}
        <hr class="green"></hr>
        {(<p ><a class="green">Postal Code:</a>{JSON.stringify(formData.postalcode)}</p>)}
        </form>
    </>
  )
}
