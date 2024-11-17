import './style.scss'
import PropTypes from 'prop-types'
function BlogCard({ data }) {
    return (
        <div className="BlogCard" >
            <div
                className="img"
                style={{
                    backgroundImage: `url(${data.img})`
                }}
            >
                <div className="price">
                    <div className="day">
                        {data.day}
                    </div>
                    <div className="dates">
                        <div className="date">{data.year}</div>
                        <div className="date">{data.month}</div>
                    </div>

                </div>
            </div>
            <div className="text">
                <div className="days">
                    {data.duration}
                    days tour
                </div>
                <h3> {data.title}</h3>
                <button>read more</button>
            </div>
        </div>
    )
}
BlogCard.propTypes = {
    data: PropTypes.shape({
        img: PropTypes.string.isRequired,
        day: PropTypes.string.isRequired,
        year: PropTypes.string.isRequired,
        month: PropTypes.string.isRequired,
        duration: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
    }).isRequired,
}

export default BlogCard