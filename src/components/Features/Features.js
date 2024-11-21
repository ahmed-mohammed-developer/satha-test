import React from 'react';
import './features .css';
import img2s from '../images/2s.png';
import img3s from '../images/3s.png';
import img9s from '../images/9s.png';
import img8s from '../images/8s.png';
import img6s from '../images/6s.png';
import img7s from '../images/7s.png';







const Features = () => {
  const DeatelisSection = [
    {
      id: 1,
      title: "سطحة هدروليك",
      icon: <img src={img3s} alt="سطحة هدروليك" className="imgs w100" />, // استخدام الصورة المستوردة
    },
    {
      id: 2,
      title: "سطحة عادية",
      icon: <img src={img2s} alt="سطحة عادية" className="imgs" />, // استخدام الصورة المستوردة
    },
    {
      id: 3,
      title: "سطحة غمارتين لنقل العوائل",
      icon: <img src={img9s} alt="سطحة غمارتين" className="imgs" />, // استخدام الصورة المستوردة
    },
    {
      id: 4, // تعديل الرقم المتكرر هنا من 3 إلى 4
      title: "توفير اشتراك متنقل كهربائي",
      icon: <img src={img8s} alt="إشتراك كهربائي" className="imgs w-100" />, // استخدام الصورة المستوردة
    },
    {
      id: 5,
      title: "أجرة تاكسي للأفراد والعوائل",
      icon: <img src={img6s} alt="أجرة تاكسي" className="imgs w-100" />, // استخدام الصورة المستوردة
    },
    {
      id: 6, // تعديل الرقم المتكرر هنا من 5 إلى 6
      title: "عجلات لجميع أنواع السيارات",
      icon: <img src={img7s} alt="عجلات السيارات" className="imgs w-100" />, // استخدام الصورة المستوردة
    },
  ];

  return (
    <div className="steps" id="serviec">
      <div className="container">
        <div className="row">
          <div className="section-title">
            <h2>خدماتنا</h2>
            <span className="line"></span>
          </div>
        </div>
        <div className="row g-4">
          {DeatelisSection.map((item, index) => (
            <div className="col-md-4" key={index}>
              <div className="card step-card">
                <div className="card-body text-center">
                  <div className="step-iconfet mx-auto">
                    {item.icon} {/* استخدام الخاصية icon هنا */}
                  </div>
                  <h5 className="card-title titleservice">{item.title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='btnservic'> 
        <button type="button" className="btn btn-danger" style={{marginTop: "10px" }} onClick={() => window.location.href='tel:0500686864'}>اتصل بنا</button>
        </div>
      </div>
    </div>
  );
};

export default Features;
