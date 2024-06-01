import React, { useState } from 'react'
import '../App.css'
import filter from '../assets/filter.png'
import down from '../assets/down.png'
import disaster from '../assets/bridge-collapse.webp'
import Ldisaster from '../assets/long-disaster.png'
import { MasonryGrid } from '@egjs/react-grid'
import Modal from '../components/Modal'

const Incidents = () => {
    const [ModalVisible, setModalVisible] = useState(false)

    const showModal = () => {
        setModalVisible(true)
        console.log('showModal')
    }
    const hideModal = () => {
        setModalVisible(false)
    }
    return (
        <>
            <div className='topmargin'></div>
            <section className='filter'>
                <div className='filter-item'>
                    <img className='filter-ico' src={filter}></img>
                    <div className='filter-item-title'>Filters</div>
                </div>
                <div className='filter-item'>
                    <div className='filter-item-title'>Type</div>
                    <img className='filter-icon' src={down}></img>
                </div>
                <div className='filter-item'>
                    <div className='filter-item-title'>Status</div>
                    <img className='filter-icon' src={down}></img>
                </div>
                <div className='filter-item'>
                    <div className='filter-item-title'>Data</div>
                    <img className='filter-icon' src={down}></img>
                </div>
            </section>
            <div>
                <MasonryGrid
                    className='card-container'
                    gap={20}
                    defaultDirection={'end'}
                    align={'center'}
                    column={0}
                    columnSize={0}
                    columnSizeRatio={0}
                >
                    <div className='card'>
                        <div className='card-top-section'>
                            <div className='status'>
                                <div
                                    className='status-color'
                                    style={{ backgroundColor: 'blueviolet' }}
                                ></div>
                                <div className='status-text'>In Progress</div>
                            </div>
                            <div className='dollar'>$$</div>
                        </div>
                        <div className='media-container'>
                            <img className='media' src={disaster}></img>
                        </div>
                        <div className='headline-section'>
                            <p className='time'>12:57 PM</p>
                            <h6 className='headline'>
                                Railway bridge in Himachal collapses amid floods
                            </h6>
                        </div>
                        <div className='button-section'>Take Action</div>
                    </div>
                    <div className='card'>
                        <div className='card-top-section'>
                            <div className='status'>
                                <div
                                    className='status-color'
                                    style={{ backgroundColor: 'blueviolet' }}
                                ></div>
                                <div className='status-text'>In Progress</div>
                            </div>
                            <div className='dollar'>$$</div>
                        </div>
                        <div className='media-container'>
                            <img className='media' src={Ldisaster}></img>
                        </div>
                        <div className='headline-section'>
                            <p className='time'>12:57 PM</p>
                            <h6 className='headline'>
                                Railway bridge in Himachal collapses amid floods
                            </h6>
                        </div>
                        <button
                            className='button-section'
                            onClick={() => showModal()}
                        >
                            Take Action
                        </button>
                    </div>
                    <div className='card'>
                        <div className='card-top-section'>
                            <div className='status'>
                                <div
                                    className='status-color'
                                    style={{ backgroundColor: 'blueviolet' }}
                                ></div>
                                <div className='status-text'>In Progress</div>
                            </div>
                            <div className='dollar'>$$</div>
                        </div>
                        <div className='media-container'>
                            <img className='media' src={disaster}></img>
                        </div>
                        <div className='headline-section'>
                            <p className='time'>12:57 PM</p>
                            <h6 className='headline'>
                                Railway bridge in Himachal collapses amid floods
                            </h6>
                        </div>
                        <div className='button-section'>Take Action</div>
                    </div>
                    <div className='card'>
                        <div className='card-top-section'>
                            <div className='status'>
                                <div
                                    className='status-color'
                                    style={{ backgroundColor: 'blueviolet' }}
                                ></div>
                                <div className='status-text'>In Progress</div>
                            </div>
                            <div className='dollar'>$$</div>
                        </div>
                        <div className='media-container'>
                            <img className='media' src={disaster}></img>
                        </div>
                        <div className='headline-section'>
                            <p className='time'>12:57 PM</p>
                            <h6 className='headline'>
                                Railway bridge in Himachal collapses amid floods
                            </h6>
                        </div>
                        <div className='button-section'>Take Action</div>
                    </div>
                    <div className='card'>
                        <div className='card-top-section'>
                            <div className='status'>
                                <div
                                    className='status-color'
                                    style={{ backgroundColor: 'blueviolet' }}
                                ></div>
                                <div className='status-text'>In Progress</div>
                            </div>
                            <div className='dollar'>$$</div>
                        </div>
                        <div className='media-container'>
                            <img className='media' src={disaster}></img>
                        </div>
                        <div className='headline-section'>
                            <p className='time'>12:57 PM</p>
                            <h6 className='headline'>
                                Railway bridge in Himachal collapses amid floods
                            </h6>
                        </div>
                        <div className='button-section'>Take Action</div>
                    </div>
                    <div className='card'>
                        <div className='card-top-section'>
                            <div className='status'>
                                <div
                                    className='status-color'
                                    style={{ backgroundColor: 'blueviolet' }}
                                ></div>
                                <div className='status-text'>In Progress</div>
                            </div>
                            <div className='dollar'>$$</div>
                        </div>
                        <div className='media-container'>
                            <img className='media' src={disaster}></img>
                        </div>
                        <div className='headline-section'>
                            <p className='time'>12:57 PM</p>
                            <h6 className='headline'>
                                Railway bridge in Himachal collapses amid floods
                            </h6>
                        </div>
                        <div className='button-section'>Take Action</div>
                    </div>
                    <div className='card'>
                        <div className='card-top-section'>
                            <div className='status'>
                                <div
                                    className='status-color'
                                    style={{ backgroundColor: 'blueviolet' }}
                                ></div>
                                <div className='status-text'>In Progress</div>
                            </div>
                            <div className='dollar'>$$</div>
                        </div>
                        <div className='media-container'>
                            <img className='media' src={disaster}></img>
                        </div>
                        <div className='headline-section'>
                            <p className='time'>12:57 PM</p>
                            <h6 className='headline'>
                                Railway bridge in Himachal collapses amid floods
                            </h6>
                        </div>
                        <div className='button-section'>Take Action</div>
                    </div>
                </MasonryGrid>
            </div>
            <Modal show={ModalVisible} handleClose={() => hideModal()}>
                <p>hellow ths is modal</p>
            </Modal>
        </>
    )
}

export default Incidents
