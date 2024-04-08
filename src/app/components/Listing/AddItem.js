import React, { useState } from 'react';
import styles from '../../listing/Listing.css';
import { useRouter } from 'next/navigation';

const AddItem = (props) => {
    
    const router = useRouter();

    //storing data
    const [formData, setFormData] = useState({
        name: '',
        img: '',
        description: '',
        category: '',
        brand: '',
        size: '',
        condition: '',
        price: '',
    });

    //handling the updates
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    //submit Handler
    const submitHandler = (event) => {
        event.preventDefault();
        
        const newItem = {
            id: Math.random().toString(), 
            name: formData.name,
            img: formData.img,
            description: formData.description,
            category: formData.category,
            brand: formData.brand,
            size: formData.size,
            condition: formData.condition,
            price: formData.price,
        };
        
        props.onAddItem(newItem);


        // Clear the form fields
        setFormData({
            name: '',
            img: '',
            description: '',
            category: '',
            brand: '',
            size: '',
            condition: '',
            price: '',
        });
    };

    return (
        <div className='main-container'>
        <form onSubmit={submitHandler}>
            <div className='form-container'>
                <h1 className='header'>List an Item</h1>
                <div className='subsection'>
                    <h2 className='subheader'>Photos</h2>
                    <div className='photo-container'>
                        <div className="uploader">
                            <img className="img-symbol" src='/assets/add-photo.png' style={{height: '30px'}}></img>
                            <input id="input" type="file" accept="image/*" onChange={(event) => setFormData({ ...formData, img: event.target.value })}/>
                        </div>
                        <div className="placeholder"></div>
                        <div className="placeholder"></div>
                        <div className="placeholder"></div>
                    </div>        
                </div>
                <div className='subsection'>
                    <h3 className='subheader'>Name</h3>
                    <input id="name-input" type="text" onChange={handleChange}/>
                </div>
                <div className='subsection'>
                    <h2 className='subheader'>Description</h2>
                    <textarea id="description" name="description" onChange={handleChange}/>
                </div>
                <div className='subsection'>
                    <h2 className='subheader'>Info</h2>
                    <div>
                        <h3 className='subcategory'>Category</h3>
                            <select id="dropdown" name="dropdown" onChange={handleChange}>
                                <option hidden selected value></option>
                                <option value="option1">Women's</option>
                                <option value="option2">Men's</option>
                                <option value="option3">Home</option>
                            </select>
                    </div>
                    <div>
                        <h3 className='subcategory'>Brand</h3>
                            <input id="brand-input" type="text" onChange={handleChange}/>
                    </div>
                    <div>
                        <h3 className='subcategory'>Size</h3>
                            <select id="dropdown" name="dropdown" onChange={handleChange}>
                                <option hidden selected value></option>
                                <option value="option1">X-Small</option>
                                <option value="option2">Small</option>
                                <option value="option3">Medium</option>
                                <option value="option4">Large</option>
                                <option value="option3">X-Large</option>

                            </select>
                    </div>
                    <div>
                        <h3 className='subcategory'>Condition</h3>
                            <select id="dropdown" name="dropdown" onChange={handleChange}>
                                <option hidden selected value></option>
                                <option value="option1">New</option>
                                <option value="option2">Used - Great</option>
                                <option value="option3">Used - Good</option>
                                <option value="option3">Used - Fair</option>
                            </select>
                    </div>
                </div>
                <div className='subsection'>
                    <h2 className='subheader'>Item Price</h2>
                    <input id="price-input" type="text" onChange={handleChange}/>
                </div>
                <button className='list-button' type="submit">List Item</button>
            </div>
        </form>
    </div> 
    )
}

export default AddItem;