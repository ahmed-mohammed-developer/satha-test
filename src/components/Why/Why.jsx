import './why.css'
import img2s from '../images/8w (2).png';
import img3s from '../images/8w (1).png';
import img9s from '../images/10 (2).png';
import img8s from '../images/8w (4).png';
import img7s from '../images/8w (5).png';
import img10s from '../images/9w.png';


import React from 'react'

const Why = () => {
    const DeatelisSection = [
        {
          id: 1,
          title: "على مدار الساعة",
          icon: <img src={img3s} alt="على مدار الساعة" className="imgs w200" />, // استخدام الصورة المستوردة
        },
        {
          id: 2,
          title: "أسعار تنافسية",
          icon: <img src={img2s} alt="أسعار تنافسية" className="imgs w200" />, // استخدام الصورة المستوردة
        },
        {
          id: 3,
          title: "فريق خبير",
          icon: <img src={img9s} alt="فريق خبير" className="imgs w200" />, // استخدام الصورة المستوردة
        },
        {
          id: 4, // تعديل الرقم المتكرر هنا من 3 إلى 4
          title: "سرعة بالتجاوب",
          icon: <img src={img8s} alt="سرعة التجاوب" className="imgs w200" />, // استخدام الصورة المستوردة
        },
        {
          id: 5, // تعديل الرقم المتكرر هنا من 5 إلى 6
          title: "سهولة التواصل",
          icon: <img src={img7s} alt="سهولة التواصل" className="imgs w200" />, // استخدام الصورة المستوردة
        },
        {
          id: 6, // تعديل الرقم المتكرر هنا من 5 إلى 6
          title: "فواتير إلكترونية",
          icon: <img src={img10s} alt="فواتير إلكترونية" className="imgs w200" />, // استخدام الصورة المستوردة
        },
      ];
  return (
    <div className="steps" id="featuresid">
    <div className="container">
      <div className="row">
        <div className="section-title">
          <h2>لماذا سطحة !</h2>
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
  )
}

export default Why