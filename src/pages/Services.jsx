// Services.jsx
import React from 'react';
import './Services.css';
import Header from '../components/Header';
import Dashboard from '../components/Dashboard';
import Footer from '../components/Footer';
import icon1 from '../assets/img/services_img/services_img/icon1.png';
import icon2 from '../assets/img/services_img/services_img/icon2.png';
import icon3 from '../assets/img/services_img/services_img/icon3.png';
import service from "../assets/img/imagefile/imagefile/services_img.png"
const servicesData = [
  { 
    icon:icon2,
    title: 'Turn-Key Project',
    description:
      'We take care of every aspect of your project, from initial planning to final implementation, providing a fully functional and operational entertainment venue.',
  },
  {
    icon:icon1,
    title: 'Custom Made Design & Engineering',
    description:
      'Our engineering, design, and art departments are second to none. They will advise you about the specific requirements of location and the facility, as well as design and space utilization. Let us create the right project to suit your needs.',
  },
  {
    icon:icon3,
    title: 'Top-Quality Materials',
    description:
      'To guarantee safety performance, the materials used are top-quality, certified, non-toxic, very durable, and in line with the industry standards.',
  },
  {
    icon:icon2,
    title: 'In-House Production',
    description:
      'We produce the components in-house to guarantee consistent quality, great customer service, shorter delivery time for complete projects and spare parts, with an optimized price for the client.',
  },
  {
    icon:icon3,
    title: 'Quality Control',
    description:
      'All GEM equipment is 100% tested in our factory to ensure safety, quicker installation, perfect component fitting, and high-quality product.',
  },
  {
    icon:icon2,
    title: 'All Details Included',
    description:
      'Our offer includes all the details that the customer expects, meaning all primary elements of the playground area, the platforms, safety nets, wall protection, and also the specific details that make each project unique as colors, wall design, and themes.',
  },
  {
    icon:icon3,
    title: 'On-Site Installation',
    description:
      'Our expert team of installers are an integral part behind delivering a product. They are knowledgeable about the product being installed and have the necessary tools and equipment to complete the job efficiently and safely.',
  },
  {
    icon:icon2,
    title: 'Support & Maintenance',
    description:
      'GEM support services provide the clients with access to technical experts and resources that can help them troubleshoot problems and optimize the performance of their entertainment facility. Our services include technical assistance, repair services, routine inspections, cleaning, and sanitation services.',
  },
  {
    icon:icon1,
    title: 'Warranty',
    description:
      'We offer warranty to provide our customers with a level of protection and reassurance, knowing that the product they are purchasing is guaranteed to meet certain standards. Our warranty can vary from 1 till 5 years and cover defects in materials or workmanship, as well as malfunctions that occur during normal use.',
  },
];

const Services = () => {
  let title = (<>Elevate Your<br/> Entertainment <br/>Experience</>)
  let description = (<>Your gateway to the ultimate entertainment experience!Explore<br/>our cutting-edge productsand immerse yourself in a world of
    <br/>
     innovation and excitement.
</>)
  return (
    <div>
      <Header/>
      <Dashboard title={title} imageUrl={service} description={description}/>
    <div className="Services-container">
      <h1 className="Services-title">Our Services</h1>
      <div className="Services-grid">
        {servicesData.map((service, index) => (
          <div key={index} className="Service-card">
            <img 
              src={service.icon} 
              alt={service.title} 
              className="Service-icon" 
            />
            <h2 className="Service-title">{service.title}</h2>
            <p className="Service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Services;
