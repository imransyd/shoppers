import React from 'react';

const Image = React.createClass ({
  render() {
    return (
     
        <div className="pics">
          <p>Showing picture</p>
          <div className='pic'>
            <img src={berryType.display_src} alt={berryType.caption} />
            // <I want to return the products />
          </div>
        </div>
     
    );
  }
});

export default Image;
