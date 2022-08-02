import React from 'react'

export const Detail = () => {
    return (
        <div className="card text-center mt-3">
            <div className="card-header">
                <p className='mt-3'>Peki nedir bu <span className='fw-bold'>Çalışma Zamanı</span> ?</p>
            </div>
            <div className="card-body">
                <h5 className="card-title">Günlük çalışma saatinizi kaydettiğiniz kişisel bir takvim</h5>
                <p className="card-text">Malcolm Gladwell, “Outliers” adlı kitabında temel olarak bir konuda uzman olabilmek için toplamda 10 bin saat o konu üzerinde çalışılması gerektiğini söylüyor. Uzmanlaşmak istediğimiz herhangi bir alana günde ortalama 8 saatimizi ayırarak istikrarlı çalışmayı yaşam tarzı haline getirmemiz mümkün.</p>
                <p className='card-text'>Uzun saatler çalışmak elbette ki kolay değil. Bu zorlu süreçte motivasyonunuzu arttırmak için <span className='fw-bold'>Çalışma Zamanı</span> yanınızda. </p>
            </div>
            <div className="card-footer text-muted">
                Mutlu Çalışmalar
            </div>
        </div>
    )
}
