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
                            <select id="dropdown" name="category" onChange={handleChange}>
                                <option hidden selected value></option>
                                <option value="Women's">Women's</option>
                                <option value="Men's">Men's</option>
                                <option value="Home">Home</option>
                            </select>
                    </div>
                    <div>
                        <h3 className='subcategory'>Brand</h3>
                            <input id="brand-input" name="brand" type="text" onChange={handleChange}/>
                    </div>
                    <div>
                        <h3 className='subcategory'>Size</h3>
                            <select id="dropdown" name="size" onChange={handleChange}>
                                <option hidden selected value></option>
                                <option value="X-Small">X-Small</option>
                                <option value="Small">Small</option>
                                <option value="Medium">Medium</option>
                                <option value="Large">Large</option>
                                <option value="X-Large">X-Large</option>

                            </select>
                    </div>
                    <div>
                        <h3 className='subcategory'>Condition</h3>
                            <select id="dropdown" name="condition" onChange={handleChange}>
                                <option hidden selected value></option>
                                <option value="New">New</option>
                                <option value="Used - Great">Used - Great</option>
                                <option value="Used - Good">Used - Good</option>
                                <option value="Used - Fair">Used - Fair</option>
                            </select>
                    </div>
                </div>
                <div className='subsection'>
                    <h2 className='subheader'>Item Price</h2>
                    <input id="price-input" name="price" type="text" onChange={handleChange}/>
                </div>
                <button className='list-button' type="submit">List Item</button>
            </div>
        </form>
    </div> 
    )
}

export default AddItem;