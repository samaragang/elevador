import React from 'react';
import './sectionHeader.css';

const SectionHeader = ({ title, description, className = '' }) => {
  return (
    <div className={`section-header ${className}`}>
      {title && <h3>{title}</h3>}
      {description && <div className="section-header__description">{description}</div>}
    </div>
  );
};

export default SectionHeader;
