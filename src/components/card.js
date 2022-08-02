import React from 'react'
import "../index.css"

export const Card = () => {
    return (
        <div className="container text-center mt-3">
            <div className="row">
                <div className="col fs-5 mx-2 rounded-3">
                    <div className="card">
                        <img src="https://picsum.photos/id/1073/800/600" className="card-img-top" alt='...'/>
                        <div className="card-body">
                            <p className="card-text">Emek</p>
                        </div>
                    </div>
                </div>
                <div className="col fs-5 mx-2 rounded-3">
                    <div className="card">
                        <img src="https://picsum.photos/id/20/800/600" className="card-img-top" alt='...' />
                        <div className="card-body">
                            <p className="card-text">Motivasyon</p>
                        </div>
                    </div>
                </div>
                <div className="col fs-5 mx-2 rounded-3">
                    <div className="card">
                        <img src="https://picsum.photos/id/175/800/600" className="card-img-top" alt='...'/>
                        <div className="card-body">
                            <p className="card-text">Süreklilik</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
