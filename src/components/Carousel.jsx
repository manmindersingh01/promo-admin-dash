import React from 'react'


const Carousel = () => {

  const image = [
    "https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg",
    "https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg",
    "https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg",
    "https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg",
    "https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg",
  ]
  return (
    <div className="carousel rounded-box md:w-[80%] border-4 border-white">

      {
        image.map((img, index) => (
          <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
            <img src={img} alt="Carousel slide" />
          </div>
        ))

      }
    </div>
  )
}

export default Carousel