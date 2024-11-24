import { useState } from 'react';
import './style.scss'
const AddPost = () => {
    const [isHotel, setIsHotel] = useState(true); // Switch state: true for hotels, false for destinations
    const [formData, setFormData] = useState({
        id: '',
        title: '',
        price: '',
        location: '',
        bathrooms: '',
        bedrooms: '',
        img: [],
        duration: '',
        near: '',
        description: '',
        categories: [],
        comments: [],
        review: ''
    });

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        const endpoint = isHotel ? `${import.meta.env.VITE_APP_BASE_URL}hotels` : `${import.meta.env.VITE_APP_BASE_URL}destinations`;

        try {
            const response = await fetch(endpoint, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                alert('Post added successfully!');
                setFormData({
                    id: '',
                    title: '',
                    price: '',
                    location: '',
                    bathrooms: '',
                    bedrooms: '',
                    img: [],
                    duration: '',
                    near: '',
                    description: '',
                    categories: [],
                    comments: [],
                    review: ''
                });
            } else {
                alert('Failed to add post');
            }
        } catch (error) {
            console.error(error);
            alert('Error while adding post');
        }
    };

    return (
        <div className='AddPost container'>

            <div className='Switch'>
                <button
                    onClick={() => setIsHotel(true)}
                    style={{
                        backgroundColor: isHotel ? '#F15D30' : '#f1f1f1',
                        color: isHotel ? 'white' : 'black'
                    }}
                >
                    Hotels
                </button>
                <button
                    onClick={() => setIsHotel(false)}
                    style={{
                        backgroundColor: !isHotel ? '#F15D30' : '#f1f1f1',
                        color: !isHotel ? 'white' : 'black'
                    }}
                >
                    Destinations
                </button>
            </div>

            <form onSubmit={handleSubmit}>
                <div className='input'>
                    <label>Title</label>
                    <input type="text" name="title" value={formData.title} onChange={handleChange} required />
                </div>

                <div className='input'>
                    <label>Price</label>
                    <input type="number" name="price" value={formData.price} onChange={handleChange} required />
                </div>

                <div className='input'>
                    <label>Location</label>
                    <input type="text" name="location" value={formData.location} onChange={handleChange} required />
                </div>

                <div className='input'>
                    <label>Bathrooms</label>
                    <input type="number" name="bathrooms" value={formData.bathrooms} onChange={handleChange} />
                </div>

                <div className='input'>
                    <label>Bedrooms</label>
                    <input type="number" name="bedrooms" value={formData.bedrooms} onChange={handleChange} />
                </div>

                <div className='input'>
                    <label>Images (Comma separated URLs)</label>
                    <input
                        type="text"
                        name="img"
                        value={formData.img}
                        onChange={(e) => setFormData({ ...formData, img: e.target.value.split(',') })}
                    />
                </div>

                <div className='input'>
                    <label>Duration</label>
                    <input type="number" name="duration" value={formData.duration} onChange={handleChange} />
                </div>

                <div className='input'>
                    <label>Near</label>
                    <input type="text" name="near" value={formData.near} onChange={handleChange} />
                </div>

                <div className='input'>
                    <label>Review</label>
                    <input type="number" step="0.1" name="review" value={formData.review} onChange={handleChange} />
                </div>
                <div className='input'>
                    <label>Description</label>
                    <input name="description" value={formData.description} onChange={handleChange} required />
                </div>


            </form>
            <button className='submit' onClick={handleSubmit} type="submit">Submit</button>
        </div>
    );
};

export default AddPost;
