import React, { useState, useEffect } from 'react';
import { createStory, saveStory } from '../business/storyEndpoints';
import { swip_troy_access, getCookie } from '../business/authentication';
import axios from 'axios';

const MakeStory = ({ story, categories = [], closeModal }) => {

    const [heading, setHeading] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [validationError, setValidationError] = useState('');
    const [responseMessage, setResponseMessage] = useState('');

    useEffect(() => {
        if (story) {
            setHeading(story.heading);
            setDescription(story.description);
            setCategory(story.category);
        } else {
            setHeading('');
            setDescription('');
            setCategory('');
        }
    }, []);

    const handleSubmit = async () => {
        if (!heading || !description || !category) {
            setValidationError("All the fields are mandatory");
            return;
        }
        if (story) {
            story.heading = heading;
            story.description = description;
            story.category = category;
            story.image = "assets/images/icecream.jpg";

            const token = getCookie(swip_troy_access);
            await axios.patch(saveStory(story._id), story, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });

            setResponseMessage("Your story has been save successfully.");

            setTimeout(() => {
                closeModal();
            }, 1000);

        } else {
            const data = {
                heading: heading,
                description: description,
                category: category,
                image: "assets/images/icecream.jpg"
            }

            const token = getCookie(swip_troy_access);
            await axios.post(createStory, data, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });

            setResponseMessage("Your story has been created successfully.");

            setTimeout(() => {
                closeModal();
            }, 1000);
        }
    }

    return (
        <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <div className="modal-dialog modal-dialog-centered" style={{ maxWidth: '500px', maxHeight: '500px' }}>
                <div className="modal-content">
                    <div className="modal-header" style={{ borderBottom: 'none', textAlign: 'right', display: 'block' }}>
                        <button type="button" className="close" style={{ borderRadius: '50%' }} aria-label="Close" onClick={closeModal}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <h5 className="modal-title text-center pb-4">{story ? 'Edit your story' : 'Add a new story'}</h5>
                        {validationError && <p className="text-danger">{validationError}</p>}
                        <div className="form-group pb-3">
                            <div className='row'>
                                <div className='col-4'>
                                    <label htmlFor="heading">Heading</label>
                                </div>
                                <div className='col-8'>
                                    <input type="text" className="form-control" id="heading" placeholder="Enter heading" value={heading} onChange={(e) => setHeading(e.target.value)} />
                                </div>
                            </div>
                        </div>
                        <div className="form-group pb-3">
                            <div className='row'>
                                <div className='col-4'>
                                    <label htmlFor="description">Description</label>
                                </div>
                                <div className='col-8'>
                                    <input type="text" className="form-control" id="description" placeholder="Enter description" value={description} onChange={(e) => setDescription(e.target.value)} />
                                </div>
                            </div>
                        </div>
                        <div className="form-group pb-3">
                            <div className='row'>
                                <div className='col-4'>
                                    <label htmlFor="category">Category</label>
                                </div>
                                <div className='col-8'>
                                    <select
                                        className="form-control"
                                        id="category"
                                        value={category}
                                        onChange={(e) => setCategory(e.target.value)}
                                    >
                                        <option value="">Select Category</option>
                                        {categories.map((category, index) => (
                                            <option key={index} value={category.name}>
                                                {category.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>
                        {responseMessage && <p className="text-info">{responseMessage}</p>}
                    </div>
                    <div className="modal-footer pb-5" style={{ borderTop: 'none', display: 'block' }}>
                        <button type="button" className="btn btn-primary btn-block" onClick={handleSubmit}>{story ? 'Save Story' : 'Add Story'}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MakeStory;
