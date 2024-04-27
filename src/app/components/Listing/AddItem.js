import React, { useState } from 'react';
import styles from '../../listing/Listing.css';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { useContext } from 'react';
import UserContext from '../../../../context/UserContext';

const AddItem = () => {
    const router = useRouter();
    const { userData } = useContext(UserContext);
    const userId = userData?.user?.id;

    const [imageData, setImageData] = useState('');

    //storing data
    const [formData, setFormData] = useState({
        name: '',
        img1: '',
        img2: '',
        img3: '',
        img4: '',
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

        if (name === 'price' && value && !value.startsWith('$')) {
            setFormData({
                ...formData,
                [name]: '$' + value, // Add '$' to the beginning of the value
            });
        } else {
            setFormData(prevState => ({
                ...prevState,
                [name]: value
            }));
        }
    };

    const handleImageChange = (e) => {
        handleChange(e);
        storeImage(e);
    };

    const storeImage = (e) => {

        //using compressed image
        const image = e.target.files[0];
        if (image) {
            const reader = new FileReader();
            reader.onload = function(e) {
                setImageData(e.target.result);
                console.log(e.target.result);
            };
            reader.readAsDataURL(image);
        };
    }

    //submit Handler
    const submitHandler = async (event) => {
        
        event.preventDefault();
        try {
            formData.img1 = imageData;
            formData.user_id = userId;
            await axios.post('http://localhost:8082/api/items/listing', formData); //add to db
            router.push('/profile'); // back to profile
        } catch (error) {
            console.error('failed:', error);
        }   

        /*const newItem = {
            id: Math.random().toString(), 
            name: formData.name,
            img: formData.img,
            description: formData.description,
            category: formData.category,
            brand: formData.brand,
            size: formData.size,
            condition: formData.condition,
            price: formData.price,
        };*/
        
        // Clear the form fields
        setFormData({
            name: '',
            img1: '',
            img2: '',
            img3: '',
            img4: '',
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
                    <h2 className='subheader-photos'>Photos</h2>
                    <p className='instructions'>Add up to four photos in JPEG or PNG format.</p>
                    <div className='photo-container'>
                        <div className="uploader">
                            <input id="input" name="img1" type="file" accept=".jpg, .jpeg, .png" value={formData.img1} onChange={handleImageChange}/>
                            <input id="input" name="img2" type="file" accept=".jpg, .jpeg, .png" value={formData.img2} onChange={handleChange}/>
                            <input id="input" name="img3" type="file" accept=".jpg, .jpeg, .png" value={formData.img3} onChange={handleChange}/>
                            <input id="input" name="img4" type="file" accept=".jpg, .jpeg, .png" value={formData.img4} onChange={handleChange}/>
                        </div>
                    </div>        
                </div>
                <div className='subsection'>
                    <h2 className='subheader'>Name</h2>
                    <input id="name-input" name="name" type="text" value={formData.name} onChange={handleChange}/>
                </div>
                <div className='subsection'>
                    <h2 className='subheader'>Description</h2>
                    <textarea id="description" name="description" placeholder="e.g. small white t-shirt" value={formData.description} onChange={handleChange}/>
                </div>
                <div className='subsection'>
                    <h2 className='subheader'>Info</h2>
                    <div>
                        <h3 className='subcategory'>Category</h3>
                            <select id="dropdown" name="category" value={formData.category} onChange={handleChange}>
                                <option hidden selected value></option>
                                <option value="Womens">Women's</option>
                                <option value="Mens">Men's</option>
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
                    <input id="price-input" name="price" type="text" placeholder="$0.00" value={formData.price} onChange={handleChange}/>
                </div>
                <button className='list-button' type="submit">List Item</button>
            </div>
        </form>
    </div> 
    )
}

export default AddItem;