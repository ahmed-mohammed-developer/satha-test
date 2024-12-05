import './weexist.css';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { IoCallOutline } from "react-icons/io5";


function Weexist() {
  const sathe = [
    { id: uuidv4(), name: 'سطحة طريق القصيم الرياض ', phone:"0500686864" },
    { id: uuidv4(), name: 'سطحة طريق الرياض القصيم ', phone:"0564686864" },
    { id: uuidv4(), name: 'سطحة بنبان ', phone:"0534555170" },
    { id: uuidv4(), name: 'سطحة صلبوخ ', phone:"0500686864" },
    { id: uuidv4(), name: 'سطحة ملهم ', phone:"0564686864" },
    { id: uuidv4(), name: 'سطحة الحسي', phone:'0534555170'},
    { id: uuidv4(), name: 'سطحة العتش', phone:"0500686864" },
    { id: uuidv4(), name: 'سطحة عشيرة سدير ', phone:'0564686864' },
    { id: uuidv4(), name: 'سطحة تمير', phone:"0534555170"},
    { id: uuidv4(), name: 'سطحة حوطة سدير', phone:"0500686864"},
    { id: uuidv4(), name: 'سطحة روضة سدير', phone:"0564686864" },
    { id: uuidv4(), name: 'سطحة جلاجل', phone:'0534555170' },
    { id: uuidv4(), name: 'سطحة التويم ', phone:"0564686864"},
    { id: uuidv4(), name: 'سطحة المجمعة ', phone:"0500686864" },
    { id: uuidv4(), name: 'سطحة حرمه ', phone:'0534555170' },
    { id: uuidv4(), name: ' سطحة الزلفي', phone: '0564686864'},
    { id: uuidv4(), name: ' سطحة الغاط ', phone:'0534555170' },
    { id: uuidv4(), name: 'سطحة القصيم الرياض ', phone:'0500686864' },
    { id: uuidv4(), name: 'سطحة  الجله ', phone:'0500686864' },
    { id: uuidv4(), name: 'سطحة المزاحمية ', phone:'0500686864' },
    { id: uuidv4(), name: 'سطحة قصور المقبل ', phone:'0500686864' },
    { id: uuidv4(), name: 'سطحة العيينة', phone:'0500686864' },
    { id: uuidv4(), name: 'سطحة الجبيلة ', phone:'0500686864' },
    { id: uuidv4(), name: 'سطحة الدرعية ', phone:'0500686864' },
    { id: uuidv4(), name: 'سطحة القرينة ', phone:'0500686864' },
    { id: uuidv4(), name: 'سطحة حريملاء ', phone:'0500686864' },
    { id: uuidv4(), name: 'سطحت شقراء ', phone:'0500686864' },
    { id: uuidv4(), name: 'سطحة الساحبه ', phone:'0500686864' },
    { id: uuidv4(), name: 'سطحة البره ', phone:'0500686864' },
    { id: uuidv4(), name: 'سطحة رغبه', phone:'0500686864' },
    { id: uuidv4(), name: 'سطحة ثادق ', phone:'0500686864' },
    { id: uuidv4(), name: 'سطحة طريق القصيم', phone:'0500686864' },
    { id: uuidv4(), name: 'سطحة دقله ', phone:'0500686864' },
    { id: uuidv4(), name: 'سطحة نساح', phone:'0500686864' },
    { id: uuidv4(), name: 'سطحة الجدية', phone:'0500686864' },
    { id: uuidv4(), name: 'سطحة ضرماء', phone:'0500686864' },
    { id: uuidv4(), name: 'سطحة الدمام', phone:'0550242411' },
    { id: uuidv4(), name: 'سطحة الجبيل', phone:'0570709339' },
    { id: uuidv4(), name: 'سطحة الخبر', phone:'0550242411' },
  ];

  return (
    <div className="background-section" id='weexist'>
      <div className="container">
        <div className="row">
          <div className="section-title">
            <h2 className='text-white'>أين تجدنا !</h2>
            <span className="line bg-white"></span>
          </div>
        </div>
        <div className="row g-4">
          {sathe.map((item, index) => (
            <div className="col-md-6" key={index}>
              <div className="card step-card">
                <div className="card-body text-center">
                  <h4 className="card-title titleexit">{item.name}</h4>
                  <button
                  type="button"
                  className="btn btnwe"
                  style={{ marginTop: "10px" }}
                  onClick={() => window.location.href = `tel:${item.phone}`}
                  >
                  اتصل بنا
                  <IoCallOutline className='iconwhy'/>
                  </button>
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
}

export default Weexist;
