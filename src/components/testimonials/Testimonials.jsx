
import React from 'react';
// import { BsLinkedin } from 'react-icons/bs';
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './testimonials.css';
import IMG1 from "../../assets/Google.jpg";
import IMG2 from "../../assets/digitalgarage.jpg";
import IMG3 from "../../assets/info.jpg";
import IMG4 from "../../assets/gtt.jpg";
// import IMG5 from "../../assets/googledev.png";
const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      link: 'https://www.credential.net/7f7021ca-7412-4564-926b-879aa44c1691#gs.0uvhdf',
      name: 'Google Play Academy - Store Listing Certificate',
      image: IMG1,
      role: 'Cyber Security Engineer . Improving open-source projects, one commit at a time.',
      test: 'As a developer and a problem solver, I think Rasif is a great collaborative partner to have. I met Rasif in some basic javascript & react projects and since then he has drastically progressed in him understanding of the development process. He always has a professional environment and has good audio and video quality which makes it easier to communicate with him.',
    },
    {
      id: 2,
      link: 'https://www.credential.net/6d836393-7f88-4df5-8c80-b61e12ce23c3?username=hitenderyadav722586#gs.0uvna7',
      name: 'Fundamentals Of Digital Marketing',
      image: IMG2,
      role: 'Full-stack developer | Technical Support Engineer at Microverse',
      test: "It was a pleasure collaborating with Rasif on different projects. One of the things that I think is special about him is that he never settles, even after completing the projects he finds other resources and strengthens him knowledge. Collaborating with him is easy and comfortable, it's like working with someone you've known for a long period of time.",
    },
    {
      id: 3,
      link: 'https://www.credential.net/e5a153b3-a059-4544-bbf7-4b6a1746bca2?username=hitenderyadav722586#gs.0uvohe',
      name: 'React Js - Infosys Springboard',
      image: IMG3,
      role: 'Full Stack Developer| PostgreSQL | JavaScript | React | Redux | Html&Css | Python.',
      test: 'I worked with Rasif in the same team and him communication skills are very strong. Him programming skill is one of the bests, given the time frame in the field. He is a good team player.  He will probably fit in most of the companies not only because he\'s a good team worker, but also because he has very good skills and I know he has much more potential to be shown.',
    },
    {
      id: 4,
      link: 'https://www.credential.net/profile/hitenderyadav722586/wallet',
      name: 'Barclays LifeSkills Programme - GTT Foundation',
      image: IMG4,
      role: 'Full-Stack Web Developer. JavaScript | Rails | React | Redux.',
      test: "I mentored Rasif some months ago, and I can say that he is one of those people that you love to work with. He was always interested in what I was trying to teach him, paying attention and always asking questions if something was not clear. When it comes to professional skills, he is really committed to work, always doing him best and going beyond the requirements of the project he's building.",
    },
    // {
    //   id: 5,
    //   link: 'https://www.credential.net/profile/hitenderyadav722586/wallet',
    //   name: 'Google Developers Certification',
    //   image: IMG5,
    //   role: 'Software Developer',
    //   test: "Throughout all our collaborations, Rasif has always conducted herself politely and kindly. He comes across as someone that's always willing to help and puts the team ahead of himself. But beneath this, I see a strength and determination to distinguish himself. He's not only someone I highly recommend but is also someone I greatly respect.",
    // },
  ];
  return (
    <section id="testmonials">
      <h5>Some of my Achievements</h5>
      <h2>Certificates</h2>
      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {testimonials.map((test) => (
          <SwiperSlide className="testimonial" key={test.id}>
            <div className="client__avatar">

              <a href={test.link}>
                <img src={test.image} alt={test.name} />

                {/* <BsLinkedin /> */}
              </a>
            </div>
            <h5 className='client__name'>{test.name}</h5>
            {/* <small className="client__review">{test.test}</small> */}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Testimonials