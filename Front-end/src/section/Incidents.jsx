import React, { useState } from 'react'
import '../App.css'
import filter from '../assets/filter.png'
import down from '../assets/down.png'
import disaster from '../assets/bridge-collapse.webp'
import dis1 from '../assets/dis1.jpg'
import dis2 from '../assets/dis2.jpg'
import dis3 from '../assets/dis3.jpg'
import dis4 from '../assets/dis4.jpg'
import Ldisaster from '../assets/long-disaster.png'
import { MasonryGrid } from '@egjs/react-grid'
import Select from 'react-select'
import makeAnimated from 'react-select/animated'
import Modal from '../components/Modal'

const Incidents = () => {
    const [ModalVisible, setModalVisible] = useState(false)
    const [type, setType] = useState([])
    const [status, setStatus] = useState({})

    const optionTypes = [
        { value: 'flood', label: 'Flood' },
        { value: 'earthquake', label: 'Earthquake' },
        { value: 'landslide', label: 'Landslide' },
        { value: 'forestfire', label: 'Forest Fire' },
    ]
    const optionStatus = [
        { value: 'In Progress', label: 'In Progress' },
        { value: 'Fake', label: 'Fake' },
        { value: 'Unverified', label: 'Unverified' },
        { value: 'Discussion', label: 'Discussion' },
        { value: 'In Action', label: 'In Action' },
        { value: 'Priority', label: 'Priority' },
    ]
    const optionType = [
        { value: 'Images', label: 'Images' },
        { value: 'Video', label: 'Video' },
    ]

    const showModal = () => {
        setModalVisible(true)
        console.log('showModal')
    }
    const hideModal = () => {
        setModalVisible(false)
    }
    const customTheme = (theme) => {
        return {
            ...theme,
            colors: {
                ...theme.colors,
                primary25: '#00DCE6',
                primary: 'black',
            },
        }
    }

    const colourStyles = {
        control: (base, state) => ({
            ...base,
            background: '#fff',
            borderRadius: '8px 8px 8px 8px',
            borderColor: state.isFocused ? 'black' : 'darkblue',
            boxShadow: state.isFocused ? '2px 2px #00dce6' : '1px 1px #00dce6',
            '&:hover': {
                borderColor: state.isFocused ? 'black' : 'black',
            },
        }),
        menu: (base) => ({
            ...base,
            borderRadius: '15px',
            marginTop: '3px',
        }),
        menuList: (base) => ({
            ...base,
            padding: 0,
            borderRadius: '15px',
        }),
        option: (styles, { isDisabled }) => {
            return {
                ...styles,
                color: 'black',
                cursor: isDisabled ? 'not-allowed' : 'default',
            }
        },
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
                    <Select
                        components={makeAnimated()}
                        theme={customTheme}
                        styles={colourStyles}
                        onChange={setType}
                        options={optionTypes}
                        placeholder='Select Type'
                        noOptionsMessage={() => 'This is not a disaster type'}
                        isSearchable
                        isMulti
                        autoFocus
                    />
                    {/* <div className='filter-item-title'>Type</div> */}

                    {/* <img className='filter-icon' src={down}></img> */}
                </div>
                <div className='filter-item'>
                    {/* <div className='filter-item-title'>Status</div>
                    <img className='filter-icon' src={down}></img> */}
                    <Select
                        components={makeAnimated()}
                        styles={colourStyles}
                        noOptionsMessage={() => 'This is not a status'}
                        isMulti
                        autoFocus
                        theme={customTheme}
                        className='filter-item-title'
                        onChange={setStatus}
                        options={optionStatus}
                        placeholder='Select Status '
                        isSearchable
                    />
                </div>
                <div className='filter-item'>
                    {/* <div className='filter-item-title'>Data</div>
                    <img className='filter-icon' src={down}></img> */}
                    <Select
                        components={makeAnimated()}
                        styles={colourStyles}
                        noOptionsMessage={() => 'This is not a status'}
                        isMulti
                        autoFocus
                        theme={customTheme}
                        className='filter-item-title'
                        onChange={setStatus}
                        options={optionType}
                        placeholder='Select Data type'
                        isSearchable
                    />
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
                                <div className='status-text'>Unverified</div>
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
                        <div
                            className='button-section'
                            onClick={() => showModal()}
                        >
                            Take Action
                        </div>
                    </div>
                    <div className='card'>
                        <div className='card-top-section'>
                            <div className='status'>
                                <div
                                    className='status-color'
                                    style={{ backgroundColor: 'blueviolet' }}
                                ></div>
                                <div className='status-text'>In Action</div>
                            </div>
                            <div className='dollar'>$$</div>
                        </div>
                        <div className='media-container'>
                            <img className='media' src={Ldisaster}></img>
                        </div>
                        <div className='headline-section'>
                            <p className='time'>12:57 PM</p>
                            <h6 className='headline'>
                                Earthquake of 5.1 in Kinnaur district, 70 dead
                            </h6>
                        </div>
                        <button
                            className='button-section'
                            onClick={() => setModalVisible(true)}
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
                                <div className='status-text'>Priority</div>
                            </div>
                            <div className='dollar'>$$</div>
                        </div>
                        <div className='media-container'>
                            <img className='media' src={dis1}></img>
                        </div>
                        <div className='headline-section'>
                            <p className='time'>12:57 PM</p>
                            <h6 className='headline'>
                                Assam Floods toll rises to 30
                            </h6>
                        </div>
                        <button
                            className='button-section'
                            onClick={() => setModalVisible(true)}
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
                                <div className='status-text'>In Action</div>
                            </div>
                            <div className='dollar'>$$</div>
                        </div>
                        <div className='media-container'>
                            <img className='media' src={dis2}></img>
                        </div>
                        <div className='headline-section'>
                            <p className='time'>12:57 PM</p>
                            <h6 className='headline'>
                                Heavy Rainfall results in civilian immobility
                            </h6>
                        </div>
                        <button
                            className='button-section'
                            onClick={() => setModalVisible(true)}
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
                                <div className='status-text'>Discussion</div>
                            </div>
                            <div className='dollar'>$$</div>
                        </div>
                        <div className='media-container'>
                            <img className='media' src={dis3}></img>
                        </div>
                        <div className='headline-section'>
                            <p className='time'>12:57 PM</p>
                            <h6 className='headline'>
                                Flood-like situation in several districts in
                                Rajasthan
                            </h6>
                        </div>
                        <button
                            className='button-section'
                            onClick={() => setModalVisible(true)}
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
                            <img className='media' src={dis4}></img>
                        </div>
                        <div className='headline-section'>
                            <p className='time'>12:57 PM</p>
                            <h6 className='headline'>
                                Railway bridge in Himachal collapses amid floods
                            </h6>
                        </div>
                        <button
                            className='button-section'
                            onClick={() => setModalVisible(true)}
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
                                <div className='status-text'>Fake</div>
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
                        <button
                            className='button-section'
                            onClick={() => setModalVisible(true)}
                        >
                            Take Action
                        </button>
                    </div>
                    {/* <div
                        className={'item'}
                        style={{
                            height: Math.random() * 400 + 'px',
                        }}
                    >
                        1
                    </div>
                    <div
                        className={'item'}
                        style={{
                            height: Math.random() * 400 + 'px',
                        }}
                    >
                        2
                    </div>
                    <div
                        className={'item'}
                        style={{
                            height: Math.random() * 400 + 'px',
                        }}
                    >
                        3
                    </div>
                    <div
                        className={'item'}
                        style={{
                            height: Math.random() * 400 + 'px',
                        }}
                    >
                        4
                    </div>
                    <div
                        className={'item'}
                        style={{
                            height: Math.random() * 400 + 'px',
                        }}
                    >
                        1
                    </div>
                    <div
                        className={'item'}
                        style={{
                            height: Math.random() * 400 + 'px',
                        }}
                    >
                        2
                    </div>
                    <div
                        className={'item'}
                        style={{
                            height: Math.random() * 400 + 'px',
                        }}
                    >
                        3
                    </div>
                    <div
                        className={'item'}
                        style={{
                            height: Math.random() * 400 + 'px',
                        }}
                    >
                        4
                    </div> */}
                </MasonryGrid>
            </div>
            <Modal show={ModalVisible} handleClose={() => hideModal()}>
                <p>hellow ths is modal</p>
            </Modal>
        </>
    )
}

export default Incidents
