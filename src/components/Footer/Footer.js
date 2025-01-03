import './footer.css'
import React from 'react'





const Footer = () => {
    const year = new Date().getFullYear(); // يحصل على السنة الحالية
  return (

    <div className='footer'>
      <div className="main-footer ">
        <div className="container">
            <div className="row mb-2 baner">
                <div className="col-lg-3 col-md-6 col-sm-6 imgSection marginBottom">
                <img className='logo' src={`${process.env.PUBLIC_URL}/images/logonavbar.png`} alt="مؤسسة نسمة الحسي التجارية" />
                </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="deatelsSection">
                        <h3>سطحة</h3>
                        <a href="tel:0500686864"><p>سطحة طريق القصيم الرياض</p></a>
                        <a href="tel:0534555170"><p>سطحة طريق الرياض القصيم</p></a>
                        <a href="tel:0564686864"><p>سطحة بنبان</p></a>
                        <a href="tel:0500686864"><p>سطحة صلبوخ</p></a>
                        <a href="tel:0500686864"><p>سطحة ضرماء</p></a>
                        <a href="tel:0500686864"><p>سطحة الجدية</p></a>
                        <a href="tel:0500686864"><p>سطحة نساح</p></a>
                        <a href="tel:0500686864"><p>سطحة دقله </p></a>
                        <a href="tel:0500686864"><p>سطحة طريق القصيم</p></a>
                        <a href="tel:0500686864"><p>سطحة الجله</p></a>
                        <a href="tel:0534555170"><p>سطحة ملهم</p></a>
                        <a href="tel:0570709339"><p>سطحة الدمام</p></a>
                        <a href="tel:0550242411"><p>سطحة الأحساء</p></a>
                        <a href="tel:0564686864"><p className='marginBottom'>سطحة الحسي</p></a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="deatelsSection">
                        <h3>سطحة</h3>
                        <a href="tel:0564686864"><p>سطحة جلاجل</p></a>
                        <a href="tel:0534555170"><p>سطحة روضة سدير</p></a>
                        <a href="tel:0500686864"><p>سطحة تمير</p></a>
                        <a href="tel:0500686864"><p>سطحة قصور المقبل</p></a>
                        <a href="tel:0564686864"><p>سطحة حوطة سدير</p></a>
                        <a href="tel:0500686864"><p>سطحة شقراء </p></a>
                        <a href="tel:0500686864"><p>سطحة الساحبه </p></a>
                        <a href="tel:0500686864"><p>سطحة البره</p></a>
                        <a href="tel:0500686864"><p>سطحة رغبه</p></a>
                        <a href="tel:0500686864"><p>سطحة ثادق </p></a>
                        <a href="tel:0534555170"><p>سطحة عشيرة سدير</p></a>
                        <a href="tel:0570709339"><p>سطحة الجبيل</p></a>
                        <a href="tel:0550242411"><p>سطحة بقيق</p></a>
                        <a href="tel:0500686864"><p className='marginBottom'>سطحة العتش</p></a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="deatelsSection">
                        <h3>سطحة</h3>
                        <a href="tel:0500686864"><p>سطحة القصيم الرياض</p></a>
                        <a href="tel:0500686864"><p>سطحة  المزاحمية </p></a>
                        <a href="tel:0534555170"><p>سطحة الغاط</p></a>
                        <a href="tel:0564686864"><p>سطحة الزلفي</p></a>
                        <a href="tel:0500686864"><p>سطحة حرمه</p></a>
                        <a href="tel:0500686864"><p>سطحة حريملاء </p></a>
                        <a href="tel:0500686864"><p>سطحة القرينة </p></a>
                        <a href="tel:0500686864"><p>سطحة الدرعية </p></a>
                        <a href="tel:0500686864"><p>سطحة الجبيلة</p></a>
                        <a href="tel:0500686864"><p>سطحة العيينة</p></a>
                        <a href="tel:0534555170"><p>سطحة المجمعة</p></a>
                        <a href="tel:0550242411"><p>سطحة الخبر</p></a>
                        <a href="tel:0570709339"><p>سطحة راس تنورة</p></a>
                        <a href="tel:0564686864"><p className='marginBottom'>سطحة التويم</p></a>
                    </div>
                </div>
            </div>
            <div className="row baner">
                <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="deatelsSection marginBottom">
                        <h3>جميع الحقوق محفوظة</h3>
                        <p>مؤسسة نسمة الحسي التجارية {year}</p>
                        
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
