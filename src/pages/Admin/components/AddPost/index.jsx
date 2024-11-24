import { useState } from 'react';
import './style.scss';
import Swal from 'sweetalert2';

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
        categories: [
            { title: "Staff", points: 0 },
            { title: "Facilities", points: 0 },
            { title: "Cleanliness", points: 0 },
            { title: "Comfort", points: 0 },
            { title: "Value for money", points: 0 },
            { title: "Location", points: 0 },
            { title: "Free WIFI", points: 0 },
        ],
        comments: [],
        review: '',
    });

    // Handle input changes for formData
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Handle category score updates
    const handleCategoryChange = (index, value) => {
        const updatedCategories = [...formData.categories];
        updatedCategories[index].points = parseInt(value, 10) || 0;
        setFormData({
            ...formData,
            categories: updatedCategories,
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
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Posted successfully',
                    showConfirmButton: false,
                    timer: 1500,
                });
                // Reset formData
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
                    categories: [
                        { title: "Staff", points: 0 },
                        { title: "Facilities", points: 0 },
                        { title: "Cleanliness", points: 0 },
                        { title: "Comfort", points: 0 },
                        { title: "Value for money", points: 0 },
                        { title: "Location", points: 0 },
                        { title: "Free WIFI", points: 0 },
                    ],
                    comments: [],
                    review: '',
                });
            } else {
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: 'Failed to add',
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
        } catch (error) {
            console.error(error);
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'Error while adding',
                showConfirmButton: false,
                timer: 1500,
            });
        }
    };

    return (
        <div className="AddPost container">
            <div className="Switch">
                <button
                    onClick={() => setIsHotel(true)}
                    style={{
                        backgroundColor: isHotel ? '#F15D30' : '#f1f1f1',
                        color: isHotel ? 'white' : 'black',
                    }}
                >
                    Hotels
                </button>
                <button
                    onClick={() => setIsHotel(false)}
                    style={{
                        backgroundColor: !isHotel ? '#F15D30' : '#f1f1f1',
                        color: !isHotel ? 'white' : 'black',
                    }}
                >
                    Destinations
                </button>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="input">
                    <label>Title</label>
                    <input type="text" name="title" value={formData.title} onChange={handleChange} required />
                </div>

                <div className="input">
                    <label>Price</label>
                    <input type="number" name="price" value={formData.price} onChange={handleChange} required />
                </div>

                <div className="input">
                    <label>Location</label>
                    <input type="text" name="location" value={formData.location} onChange={handleChange} required />
                </div>

                <div className="input">
                    <label>Bathrooms</label>
                    <input type="number" name="bathrooms" value={formData.bathrooms} onChange={handleChange} />
                </div>

                <div className="input">
                    <label>Bedrooms</label>
                    <input type="number" name="bedrooms" value={formData.bedrooms} onChange={handleChange} />
                </div>

                <div className="input">
                    <label>Images (Comma separated URLs)</label>
                    <input
                        type="text"
                        name="img"
                        value={formData.img.join(',')}
                        onChange={(e) => setFormData({ ...formData, img: e.target.value.split(',') })}
                    />
                </div>

                <div className="input">
                    <label>Duration</label>
                    <input type="number" name="duration" value={formData.duration} onChange={handleChange} />
                </div>

                <div className="input">
                    <label>Near</label>
                    <input type="text" name="near" value={formData.near} onChange={handleChange} />
                </div>

                <div className="input">
                    <label>Review</label>
                    <input type="number" step="0.1" name="review" value={formData.review} onChange={handleChange} />
                </div>

                <div className="input">
                    <label>Description</label>
                    <input name="description" value={formData.description} onChange={handleChange} required />
                </div>

                {formData.categories.map((category, index) => (
                    <div key={index} className="category-input input">
                        <label>{category.title}</label>
                        <input
                            type="number"
                            value={category.points}
                            onChange={(e) => handleCategoryChange(index, e.target.value)}
                        />
                    </div>
                ))}

                <button className="submit" type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default AddPost;
