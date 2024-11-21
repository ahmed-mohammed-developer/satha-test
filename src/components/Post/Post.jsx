import './post.css'
import React from 'react'
import imglogo from '../images/logo3.png'
import { v4 as uuidv4 } from 'uuid';


const Post = () => {
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

    ]
  return (
    <div className='post'>
        <div className='container'>
            <div className="row">
                <div className='col-md-10 col-sm-10 m-auto'>
                <h1 className='h1post'>سطحات متوفرة على مدار الساعة من مؤسسة نسمة الحسي التجارية 
                <a style={{marginRight: "10px", color: "#dc3545"}} href="tel:0500686864">اتصل بنا</a>
                </h1>
                </div>
                <div className="col-md-10 col-sm-10 m-auto mt-4 mb-1">
                    <img src={imglogo} alt="مؤسسة نسمة الحسي" className='imgpost'/>
                </div>
                <div className="col-md-10 col-sm-10 m-auto mt-2">
                    <h3 className='h3post'>نقدم لكم خدمات سطحات احترافية تشمل جميع المناطق، لتلبية احتياجاتكم بسرعة وكفاءة. سطحات متوفرة في:</h3>
                    {sathe.map((item, index) => (
                    <ul key={index} className='mt-3 '>
                        <li className='lipost'><a className="apost" href={`tel:${item.phone}`}>{item.name}</a></li>
                    </ul>
                    ))}
                </div>
                <div className='btnservic mt-0'> 
        <button type="button" className="btn btn-danger" style={{marginTop: "10px" }} onClick={() => window.location.href='tel:0500686864'}>اتصل بنا</button>
        </div>
            </div>
        </div>
    </div>
  )
}

export default Post