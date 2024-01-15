import React, { useRef, useState } from 'react'
import './CertificateGenerator.css'
import bg_image from '../assets/cirtificate_bg.png'
import cv2 from 'opencv.js'

class  CertificateGenerator extends  React.Component{
  generateCertificate = () => {
    // Load the certificate base background image
    const background = cv2.imread(bg_image);

    // Add Full Name to the certificate
    const full_name = "John Doe";
    cv2.putText(background, full_name, [100, 200], cv2.FONT_HERSHEY_SIMPLEX, 1, [0, 0, 0], 2);

    // Add Logo to the certificate
    // const logo = cv2.imread('/images/logo.png');
    // const logo_resized = cv2.resize(logo, [100, 100]);
    // background[300, 200] = logo_resized;

    // Add Date to the certificate
    const date = "January 1, 2024";
    cv2.putText(background, date, [500, 200], cv2.FONT_HERSHEY_SIMPLEX, 1, [0, 0, 0], 2);

    // Save the final certificate image
    cv2.imwrite('/images/certificate_with_info.png', background);
  }
// const [image_url, setImage_url] = useState("/");
// let first_name = useRef(null);
// let last_name =useRef(null);

// const ImageGenerator = async()=>{
//   if(first_name === '' || last_name == ''){
// return 0;
//   }else{

//   }
// }
render(){
//   let first_name = useRef(null);
// let last_name =useRef(null);
  return (
    <div className='image_generator'>
        <div className='generator_header'>Certificate Genrator <span>Generator</span></div>
        <div className="image_load">
        {/* <div className="image"><img src={image_url === "/"? default_image:image_url } alt="" /></div> */}

        </div>
        
        <div className="image"></div>
<div className="UserInput">
  <input type="text" placeholder='Frist Name'className='first_name'></input>
  <input type="text" placeholder='Last Name'className='Last_name'></input>
  <div className="generate_btn" onClick={this.CertificateGenerator}>Generate Cirtificate</div>
</div>
    </div>
  );
}

}

export default CertificateGenerator;