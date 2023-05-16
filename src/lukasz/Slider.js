// import React from 'react'
// import slider from './img/slider.jpg';
// import slider2 from './img/slider2.jpg';


// export default function Slider() {
//     const images = document.querySelectorAll('.slider img');
//     const controls = document.querySelectorAll('.slider-control');
//     let currentIndex = 0;

//     setInterval(() => {
//         // console.log(images[currentIndex].classList)
//         images[currentIndex].classList.remove('active');
//         controls[currentIndex].classList.remove('active');

//         currentIndex = (currentIndex + 1) % images.length;

//         images[currentIndex].classList.add('active');
//         controls[currentIndex].classList.add('active');
//     }, 2000);

//     controls.forEach((control, index) => {
//         control.addEventListener('click', () => {

//             controls[currentIndex].classList.remove('active');

//             currentIndex = index;

//             images[currentIndex].classList.add('active');
//             controls[currentIndex].classList.add('active');
//         });
//     });



//     return (
//         <div className='slider'>
//             <img src={slider} alt="Image 1" className="active" />
//             <img src={slider2} alt="Image 2" />
//             {/* <img src="pexel.jpg" alt="Image 2" /> */}
//             {/* <img src="image3.jpg" alt="Image 3" /> */}
//             <div className="sliderControls">
//                 <span className="sliderControl active"></span>
//                 <span className="sliderControl"></span>
//                 <span className="sliderControl"></span>
//             </div>
//         </div>

//     )
// }
