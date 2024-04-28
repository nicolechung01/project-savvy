"use client";
import { useState, useEffect } from 'react';
import styles from '../App.css';
import Header from '../components/Header/Header';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import axios from 'axios';
import { UserProvider } from '../../../context/UserContext';


export default function ItemUpdate() {

    const router = useRouter();

    const searchParams = useSearchParams()  //getting search param from url -> itemId
    const itemId = searchParams.get('item');

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
        user_id: '',
    });

    const [imageData1, setImageData1] = useState('');
    const [imageData2, setImageData2] = useState('');
    const [imageData3, setImageData3] = useState('');
    const [imageData4, setImageData4] = useState('');

   
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
        const { name } = e.target;

        //using compressed image
        const image = e.target.files[0];
        if (image) {
            const reader = new FileReader();
            reader.onload = function(e) {
                if (name === 'img1') {
                    setImageData1(e.target.result);
                } else if (name === 'img2') {
                    setImageData2(e.target.result);
                } else if (name === 'img3') {
                    setImageData3(e.target.result);
                } else {
                    setImageData4(e.target.result);
                }
                console.log(e.target.result);
            };
            reader.readAsDataURL(image);
        };
    }

    //submit Handler
    const updateItem = async (event) => {
        event.preventDefault();
        console.log(formData);
        try {
            if (imageData1 !== '') {
                formData.img1 = imageData1;
            }
            if (imageData2 !== '') {
                formData.img2 = imageData2;
            }
            if (imageData3 !== '') {
                formData.img3 = imageData3;
            }
            if (imageData1 !== '') {
                formData.img4 = imageData4;
            }
            console.log(formData);
            const filteredFormData = Object.fromEntries(
                Object.entries(formData).filter(([key, value]) => value !== '')
            );
            
            const requestBody = {
                ...filteredFormData,
            }
            console.log(requestBody);
            await axios.put(`http://localhost:8082/api/items/${itemId}`, requestBody) //update to db
            .then((res) => {        // handling promise from item update operation
                router.push('/profile');    // back to profile
            })
        } catch (error) {
            console.error('failed:', error);
        }   

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
        <UserProvider>
            <div className='listing-form-main'>
                <Header />
                <div className='listing-main-container'>
                    
                        <form onSubmit={updateItem}>
                            <div className='form-container'>
                                <h1 className='listing-header'>Update Item</h1>
                                <div className='listing-subsection'>
                                    <h2 className='subheader-photos'>Photos</h2>
                                    <p className='instructions'>Add up to four photos in JPEG or PNG format.</p>
                                    <div className='photo-container'>
                                        <div className="uploader">
                                            <input id="input" name="img1" type="file" accept=".jpg, .jpeg, .png" value={formData.img1} onChange={handleImageChange}/>
                                            <input id="input" name="img2" type="file" accept=".jpg, .jpeg, .png" value={formData.img2} onChange={handleImageChange}/>
                                            <input id="input" name="img3" type="file" accept=".jpg, .jpeg, .png" value={formData.img3} onChange={handleImageChange}/>
                                            <input id="input" name="img4" type="file" accept=".jpg, .jpeg, .png" value={formData.img4} onChange={handleImageChange}/>
                                        </div>
                                    </div>        
                                </div>
                                <div className='listing-subsection'>
                                    <h2 className='listing-subheader'>Name</h2>
                                    <input id="name-input" name="name" type="text" value={formData.name} onChange={handleChange}/>
                                </div>
                                <div className='listing-subsection'>
                                    <h2 className='listing-subheader'>Description</h2>
                                    <textarea id="description" name="description" placeholder="e.g. small white t-shirt" value={formData.description} onChange={handleChange}/>
                                </div>
                                <div className='listing-subsection'>
                                    <h2 className='listing-subheader'>Info</h2>
                                    <div>
                                        <h3 className='listing-subcategory'>Category</h3>
                                            <select id="dropdown" name="category" value={formData.category} onChange={handleChange}>
                                                <option hidden selected value></option>
                                                <option value="Womens">Women's</option>
                                                <option value="Mens">Men's</option>
                                                <option value="Home">Home</option>
                                            </select>
                                    </div>
                                    <div>
                                        <h3 className='listing-subcategory'>Brand</h3>
                                            <input id="brand-input" name="brand" type="text" value={formData.brand} onChange={handleChange}/>
                                    </div>
                                    <div>
                                        <h3 className='listing-subcategory'>Size</h3>
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
                                        <h3 className='listing-subcategory'>Condition</h3>
                                            <select id="dropdown" name="condition" value={formData.condition} onChange={handleChange}>
                                                <option hidden selected value></option>
                                                <option value="New">New</option>
                                                <option value="Used - Great">Used - Great</option>
                                                <option value="Used - Good">Used - Good</option>
                                                <option value="Used - Fair">Used - Fair</option>
                                            </select>
                                    </div>
                                </div>
                                <div className='listing-subsection'>
                                    <h2 className='listing-subheader'>Item Price</h2>
                                    <input id="price-input" name="price" type="text" placeholder="$0.00" value={formData.price} onChange={handleChange}/>
                                </div>
                                <button className='list-button' type="submit">Update Item</button>
                            </div>
                        </form>
                    
                </div> 
            </div>
        </UserProvider>
    )
}