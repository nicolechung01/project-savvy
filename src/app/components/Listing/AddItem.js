import React, { useState } from 'react';
import styles from '../../listing/Listing.css';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { useContext } from 'react';
import UserContext from '../../../../context/UserContext';

const AddItem = (props) => {
    const router = useRouter();
    const { userData } = useContext(UserContext);
    const userId = userData?.user?.id;

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
        user_id: '',       // new addition
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
    const submitHandler = async (event) => {
        event.preventDefault();

        console.log(formData);

        try {
            await axios.post('http://localhost:8082/api/items/listing', formData); //add to db
            router.push('/profile'); // back to profile
        } catch (error) {
            console.error('failed:', error);
        }   

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
        <form onSubmit={submitHandler} method='POST' action='/listing'>
            <div className='form-container'>
                <h1 className='header'>List an Item</h1>
                <div className='subsection'>
                    <h2 className='subheader'>Photos</h2>
                    <div className='photo-container'>
                        <div className="uploader">
                            <img className="img-symbol" src='/assets/add-photo.png' style={{height: '30px'}}></img>
                            <input id="input" name="img" type="file" accept="image/*" onChange={(event) => setFormData({ ...formData, img: event.target.value })}/>
                        </div>
                        <div className="placeholder"></div>
                        <div className="placeholder"></div>
                        <div className="placeholder"></div>
                    </div>        
                </div>
                <div className='subsection'>
                    <h3 className='subheader'>Name</h3>
                    <input id="name-input" name="name" type="text" value={formData.name} onChange={handleChange}/>
                </div>
                <div className='subsection'>
                    <h2 className='subheader'>Description</h2>
                    <textarea id="description" name="description" value={formData.description} onChange={handleChange}/>
                </div>
                <div className='subsection'>
                    <h2 className='subheader'>Info</h2>
                    <div>
                        <h3 className='subcategory'>Category</h3>
                            <select id="dropdown" name="category" value={formData.category} onChange={handleChange}>
                                <option hidden selected value></option>
                                <option value="Women's">Women's</option>
                                <option value="Men's">Men's</option>
                                <option value="Home">Home</option>
                            </select>
                    </div>
                    <div>
                        <h3 className='subcategory'>Brand</h3>
                            <input id="brand-input" name="brand" type="text" value={formData.brand} onChange={handleChange}/>
                    </div>
                    <div>
                        <h3 className='subcategory'>Size</h3>
                            <select id="dropdown" name="size" value={formData.size} onChange={handleChange}>
                                <option hidden selected value></option>
                                <optgroup label="Clothing">
                                <    option value="XX-Small">XX-Small</option>
                                    <option value="X-Small">X-Small</option>
                                    <option value="Small">Small</option>
                                    <option value="Medium">Medium</option>
                                    <option value="Large">Large</option>
                                    <option value="X-Large">X-Large</option>
                                    <option value="XX-Large">XX-Large</option>
                                    <option value="Other">Other</option>
                                </optgroup>
                                <optgroup label="Shoes">
                                    <option value="5">5</option>
                                    <option value="5.5">5.5</option>
                                    <option value="6">6</option>
                                    <option value="6.5">6.5</option>
                                    <option value="7">7</option>
                                    <option value="7.5">7.5</option>
                                    <option value="8">8</option>
                                    <option value="8.5">8.5</option>
                                    <option value="9">9</option>
                                    <option value="9.5">9.5</option>
                                    <option value="10">10</option>
                                    <option value="10.5">10.5</option>
                                    <option value="11">11</option>
                                    <option value="11.5">11.5</option>
                                    <option value="12">12</option>
                                    <option value="12.5">12.5</option>
                                    <option value="13">13</option>
                                    <option value="13.5">13.5</option>
                                    <option value="Other">Other</option>
                                </optgroup>
                            </select>
                    </div>
                    <div>
                        <h3 className='subcategory'>Condition</h3>
                            <select id="dropdown" name="condition" value={formData.condition} onChange={handleChange}>
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
                    <input id="price-input" name="price" type="text" value={formData.price} onChange={handleChange}/>
                </div>
                <button className='list-button' type="submit">List Item</button>
            </div>
        </form>
    </div> 
    )
}

export default AddItem;