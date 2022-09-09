import React from 'react';
import './createnft.css';

const CreateNft = () => {
  return (
      <section id='createnft'>          
          <div className='createnftpage'>
              <div className='createnftpage_content'>
                  <div className='name'>Name</div>
                  <input type="text" className='inputname' placeholder='Nft Name'></input>
                  <div className='description'>Description</div>
                  <textarea className='textarea' placeholder='Nft description'>
                  </textarea>
                  <div className='price'>Price</div>
                  <input type="text" placeholder="minimum 0.01 ETH" className='inputprice'></input>
                  <button className='uploadbtn'>upload</button>
              </div>
          </div>
      </section>
  )
}

export default CreateNft