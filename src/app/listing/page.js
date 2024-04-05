"use client";
import { useState } from 'react';
import styles from './Listing.css';

export default function Listing() {

    return (
        <div className='main-container'>
            <form>
                <div className='form-container'>
                    <h1 className='header'>List an Item</h1>
                    <div className='subsection'>
                        <h2 className='subheader'>Photos</h2>
                        <div className='photo-container'>
                            <div className="uploader">
                                <img className="img-symbol" src='/assets/add-photo.png' style={{height: '30px'}}></img>
                                <input id="input" type="file" accept="image/*" />
                            </div>
                            <div className="placeholder"></div>
                            <div className="placeholder"></div>
                            <div className="placeholder"></div>
                        </div>        
                    </div>
                    <div className='subsection'>
                        <h2 className='subheader'>Description</h2>
                        <textarea id="description" name="description" />
                    </div>
                    <div className='subsection'>
                        <h2 className='subheader'>Info</h2>
                        <div>
                            <h3 className='subcategory'>Category</h3>
                                <select id="dropdown" name="dropdown">
                                    <option hidden selected value></option>
                                    <option value="option1">Women's</option>
                                    <option value="option2">Men's</option>
                                    <option value="option3">Home</option>
                                </select>
                        </div>
                        <div>
                            <h3 className='subcategory'>Brand</h3>
                                <input id="info-input" type="text" />
                        </div>
                        <div>
                            <h3 className='subcategory'>Size</h3>
                                <select id="dropdown" name="dropdown">
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
                                <select id="dropdown" name="dropdown">
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
                        <input id="info-input" type="text" />
                    </div>
                    <button className='list-button' type="submit">List Item</button>
                </div>
            </form>
        </div> 
    )
}