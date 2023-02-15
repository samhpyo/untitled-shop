/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/function-component-definition */
import DirectoryItem from "../directory-item/directory-item.component"
import './directory.styles.scss'

const Directory = ({categories}) => (
  <div className="directory-container">
    {categories.map((category) => (
      <DirectoryItem key={category.id} category={category} />
    ))}
  </div>
);

export default Directory