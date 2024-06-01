import React from 'react'
import disaster from '../assets/disaster.png'
import backIcon from '../assets/back.png'
import soldier from '../assets/soldier.png'
import apple from '../assets/apple.png'
import rupee from '../assets/rupee.png'
import warning from '../assets/warning.png'
import copter from '../assets/copter.png'
import plus from '../assets/medical-plus.png'
const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show
        ? 'modal display-block'
        : 'modal display-none'

    return (
        <div className={showHideClassName}>
            <section className='modal-main'>
                {/* {children}

                <button type='button' onClick={handleClose}>
                    Close
                </button> */}
                <div className='modal-left-section'>
                    <div className='modal-top-section'>
                        <img
                            src={backIcon}
                            alt='back'
                            className='back'
                            onClick={handleClose}
                        />
                        <h1 className='modal-heading'>
                            Village of Khurda drowned in flood
                        </h1>
                    </div>
                    <div className='media-container'>
                        <img src={disaster} alt='disaster' className='media' />
                    </div>
                    <div className='location'>
                        Khurda,Odisha | 20.5° N/ 89.7° E
                    </div>
                </div>
                <div className='modal-right-section'>
                    <p className='right-heading'>Take Action</p>
                    <div className='action-container'>
                        <div className='action-item'>
                            <img src={soldier} alt='soldier' srcset='' />
                            <p className='instance-title'>deploy troops</p>
                        </div>
                        <div className='action-item'>
                            <img src={plus} alt='soldier' srcset='' />
                            <p className='instance-title'>Medical Help</p>
                        </div>
                        <div className='action-item'>
                            <img src={apple} alt='soldier' srcset='' />
                            <p className='instance-title'>Food Water</p>
                        </div>
                        <div className='action-item'>
                            <img src={copter} alt='soldier' srcset='' />
                            <p className='instance-title'>Air Rescue</p>
                        </div>
                        <div className='action-item'>
                            <img src={rupee} alt='soldier' srcset='' />
                            <p className='instance-title'>Sanction Funds</p>
                        </div>
                        <div className='action-item'>
                            <img src={warning} alt='soldier' srcset='' />
                            <p className='instance-title'>Escalate Priority</p>
                        </div>
                    </div>
                    <div className='instance-info'>
                        <textarea
                            name='info'
                            className='info-area'
                            id=''
                            cols='30'
                            rows='4'
                        >
                            Number of People affected: Troops to be deployed:
                            Food/Water(In Kg/Units):
                        </textarea>
                    </div>

                    <div className='button-section'>
                        <a href='/logistics'>Start Instance</a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Modal
