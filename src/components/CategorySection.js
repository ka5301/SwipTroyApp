import React from 'react';
import '../assets/css/category.css'; // Import CSS file for styling

const CategorySection = ({ categories }) => {
  const handleClick = (text) => {
    console.log(`Clicked on ${text}`);
    // Add your logic here
    window.location.href = `/story/category/${text}`;
  };

  return (
    <>
      <div className="box-container">
        <div
          key="0"
          className="box"
          onClick={() => window.location.href = "/"}
          style={{ backgroundImage: `url(/images/all.jpeg)` }}
        >
          <div className="box-text">All</div>
        </div>
        {categories?.map((category) => (
          <div
            key={category._id}
            className="box"
            onClick={() => handleClick(category.name)}
            style={{ backgroundImage: `url(${category.imageUrl})` }}
          >
            <div className="box-text">{category.name}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CategorySection;