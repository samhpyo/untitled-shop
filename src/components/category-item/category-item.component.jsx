/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/function-component-definition */
import './category-item.styles.scss'

const CategoryItem = ({ category }) => {
    const { imageUrl, title, id } = category;
    return (
        <div key={id} className="category-container">
          <div className="background-image" style={{
            backgroundImage: `url(${imageUrl})`
          }}/>
          <div className="category-body-container">
            <h2>{title}</h2>
            <p>Shop Now</p>
          </div>
        </div>
    )
}

export default CategoryItem