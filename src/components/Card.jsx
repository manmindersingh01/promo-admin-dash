import React from 'react'
import { useState } from 'react'
const Card = () => {

  const [image, setImage] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setImage(URL.createObjectURL(file));
    // uploadFileToBackend(file);
  };
  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    setImage(URL.createObjectURL(file));
    // uploadFileToBackend(file);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <div className=' bg-gray-800 h-80 w-72 m-4 rounded-[30px]  flex flex-col justify-between overflow-hidden'
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <div className=' w-full p-4'>
        {
          image ? <div>
            <img src={image} alt="image" />
          </div> : <div className=' p-4 pt-14 flex flex-col justify-center items-center w-full h-36 '>
            <input
              type="file"
              className="hidden"
              onChange={handleFileChange}
              id="fileUpload"
            />
            <label
              htmlFor="fileUpload"
              className="flex items-center justify-center text-whiterounded cursor-pointer"
            >
              <svg className='h-6 w-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="#b3b3b3" d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128z" /></svg>

            </label>
            <p className='   text-sm text-center'>
              choose a file or drag and drop it here
            </p>
          </div>
        }
      </div>
      <div>
        <p className='  text-gray-500  text-xs text-center p-7'>
          we recommend using high quality .jpg files less than 20MB
        </p>
      </div>


    </div>
  )
}

export default Card