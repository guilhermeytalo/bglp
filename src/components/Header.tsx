import React from 'react';

const Header = () => {
  const logo = '../../logo.svg';

  return (
    <div className='container mx-auto flex justify-center'>
      <div className='flex items-center'>
        <img alt="logo" src={logo} />
        <div className='text-left'>
          <p>JarJer</p>
          <p className='pl-2'>Food Delivery</p>
        </div>
      </div>

      <div>
        <div>
          <span>Categorys</span>
        </div>
      </div>
      
      <div>
        <div>
          <span>Contact Us</span>
        </div>
      </div>

      <div>Header Work's</div>
      <div>Header Work's</div>
      <div>Header Work's</div>
    </div>
  );
}

export default Header;
