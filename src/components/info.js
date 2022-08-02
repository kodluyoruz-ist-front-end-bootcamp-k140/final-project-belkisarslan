import React from 'react'
import "../index.css"

export const Info = () => {
  return (
    <div className="container text-center mt-3">
      <div className="row">
        <div className="col bg-light fs-5 mx-2 rounded-3">
          <p className='mt-3'>10000 saat kuralını duymuş muydunuz?</p>
        </div>
        <div className="col bg-light fs-5 mx-2 rounded-3">
          <p className='mt-3'>Sizi motive edecek bir şeyler mi arıyorsunuz?</p>
        </div>
        <div className="col bg-light fs-5 mx-2 rounded-3">
          <p className='mt-3'><span className='fw-bold'>Çalışma Zamanı</span> tam size göre :D</p>
        </div>
      </div>
    </div>
  )
}
