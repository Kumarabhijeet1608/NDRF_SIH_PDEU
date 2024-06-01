import React, { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend)

export const data = {
    labels: [
        'Gratuitous Relief',
        'Agriculture',
        'Animal Husbandry',
        'fishery',
        'handicrafts/Handloom',
        'Housing',
    ],
    datasets: [
        {
            label: '# of Votes',
            data: [679960, 137100, 80000, 26600, 10200, 211600],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
        },
    ],
}

function loadScript(src) {
    return new Promise((resolve) => {
        const script = document.createElement('script')
        script.src = src
        script.onload = () => {
            resolve(true)
        }
        script.onerror = () => {
            resolve(false)
        }
        document.body.appendChild(script)
        // console.log(document.body)
        console.log(script.src)
    })
}

const __DEV__ = document.domain === 'localhost'

const Donations = (props) => {
    const [name, setName] = useState('Ankit')

    async function displayRazorpay() {
        const res = await loadScript(
            'https://checkout.razorpay.com/v1/checkout.js'
        )

        if (!res) {
            alert('Razorpay SDK failed to load. Are you online?')
            return
        }

        const data = await fetch('http://localhost:1337/razorpay', {
            method: 'POST',
        }).then((t) => t.json())

        console.log(data)

        const options = {
            key: 'rzp_test_PUcAy73J8TzAuO',
            currency: data.currency,
            amount: data.amount.toString(),
            order_id: data.id,
            name: 'Donation',
            description: 'Enter the amount to donate',
            image: './images/people_donated.gif',
            handler: function (response) {
                console.log(response.razorpay_payment_id)
                console.log(response.razorpay_order_id)
                console.log(response.razorpay_signature)
            },
            prefill: {
                name,
                email: '',
                phone_number: 'Enter your phone number',
            },
        }
        const paymentObject = new window.Razorpay(options)
        paymentObject.open()
    }

    return (
        <>
            <About>
                <div className='heading'>Charity is an Act of</div>
                <div className='heading-org'>Soft Heart</div>
                <p>
                    These donations are utilized to render immediate relief to
                    families of those killed or injured in natural calamities.
                </p>
                <Button>
                    {/* <a href="/donation"> */}
                    <button
                        class='button-56'
                        role='button'
                        onClick={displayRazorpay}
                    >
                        Donate Now
                    </button>
                    {/* </a> */}
                </Button>
            </About>
            <Image>
                <img src='/images/about.svg' alt='Loading..' />
            </Image>
            <BottomSection>
                <Card>
                    <div className='box'>
                        <img src='./images/people_donated.gif' alt='Donated' />
                    </div>
                    <div className='textbox'>
                        <h2>1200+</h2>
                        <p>People Donated</p>
                    </div>
                </Card>
                <Card>
                    <div className='box'>
                        <img src='./images/donation_received.gif' alt='Donated' />
                    </div>
                    <div className='textbox'>
                        <h2>$3 Cr+</h2>
                        <p>Donations recieved</p>
                    </div>
                </Card>
                <Card>
                    <div className='box'>
                        <img src='./images/disaster_event.gif' alt='Donated' />
                    </div>
                    <div className='textbox'>
                        <h2>30+</h2>
                        <p>Disaster events</p>
                    </div>
                </Card>
                <Card>
                    <div className='box'>
                        <img src='./images/families_benefited.gif' alt='Donated' />
                    </div>
                    <div className='textbox'>
                        <h2>600+</h2>
                        <p>Families benifited</p>
                    </div>
                </Card>
            </BottomSection>
            <Heading>
                <h1>Donation Statistics</h1>
            </Heading>
            <DonationStats>
                <Graph>
                    <Doughnut data={data} />
                </Graph>
            </DonationStats>
            <Floater>
                <h2>Help Disaster Victims</h2>
                <p>Rs 500 can feed a family for a week </p>
                <Button>
                    <a>
                        <button class='button-56' role='button' onClick={displayRazorpay}>
                            Donate Now
                        </button>
                    </a>
                </Button>
            </Floater>
            <Heading>
                <h1>Why Donate?</h1>
            </Heading>
            <DonationReason>
                <Wrap>
                    <div className='icon'><img src='./images/trace.gif' alt='Donated' /></div>
                    <div className='line'></div>
                    <div className='text'>
                        <h2>Traceability</h2>
                        <p>
                        Whole donation process is traced along the entire distribution chain
                        </p>
                    </div>
                </Wrap>
                <Wrap>
                    <div className='icon'><img src='./images/tax_benefits.gif' alt='Donated' /></div>
                    <div className='line'></div>
                    <div className='text'>
                        <h2>Tax Benefits</h2>
                        <p>
                        Donors will be entitled to a tax break when they give their money as a gift to a nonprofit organisation.
                        </p>
                    </div>
                </Wrap>
                <Wrap>
                    <div className='icon'><img src='./images/accountability.gif' alt='Donated' /></div>
                    <div className='line'></div>
                    <div className='text'>
                        <h2>Accountability</h2>
                        <p>
                        All the donations received from the donors are taken accountability for.
                        </p>
                    </div>
                </Wrap>
                <Wrap>
                    <div className='icon'><img src='./images/transparency.gif' alt='Donated' /></div>
                    <div className='line'></div>
                    <div className='text'>
                        <h2>Transparency </h2>
                        <p>
                        All the donation transactions are transparent
                        </p>
                    </div>
                </Wrap>
                <Wrap>
                    <div className='icon'><img src='./images/govt_controlled.gif' alt='Donated' /></div>
                    <div className='line'></div>
                    <div className='text'>
                        <h2>Government controlled</h2>
                        <p>
                        The entire donation process is monitored by the respective government  authority
                        </p>
                    </div>
                </Wrap>
                <Wrap>
                    <div className='icon'><img src='./images/helping_hand.gif' alt='Donated' /></div>
                    <div className='line'></div>
                    <div className='text'>
                        <h2>Helping Hand</h2>
                        <p>
                        Donations help pay for emergency relief. It can provide protective equipment to prevent the spread of a highly contagious and deadly disease.
                        </p>
                    </div>
                </Wrap>
            </DonationReason>
            <Heading>
                <h1 className='form-heading'>Donation Form</h1>
            </Heading>
            <Form>
                <body class='form-v10'>
                    <div class='page-content'>
                        <div class='form-v10-content'>
                            <form class='form-detail' method='post' id='myform'>
                                <div class='form-left'>
                                    <h2>General Infomation</h2>
                                    <div class='form-row'>
                                        <select name='title'>
                                            <option
                                                class='option'
                                                value='title'
                                            >
                                                Title
                                            </option>
                                            <option
                                                class='option'
                                                value='businessman'
                                            >
                                                Businessman
                                            </option>
                                            <option
                                                class='option'
                                                value='reporter'
                                            >
                                                Reporter
                                            </option>
                                            <option
                                                class='option'
                                                value='secretary'
                                            >
                                                Secretary
                                            </option>
                                        </select>
                                        <span class='select-btn'>
                                            <i class='zmdi zmdi-chevron-down'></i>
                                        </span>
                                    </div>
                                    <div class='form-group'>
                                        <div class='form-row form-row-1'>
                                            <input
                                                type='text'
                                                name='first_name'
                                                id='first_name'
                                                class='input-text'
                                                placeholder='First Name'
                                                required
                                            />
                                        </div>
                                        <div class='form-row form-row-2'>
                                            <input
                                                type='text'
                                                name='last_name'
                                                id='last_name'
                                                class='input-text'
                                                placeholder='Last Name'
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div class='form-row'>
                                        <select name='position'>
                                            <option value='position'>
                                                Position
                                            </option>
                                            <option value='director'>
                                                Director
                                            </option>
                                            <option value='manager'>
                                                Manager
                                            </option>
                                            <option value='employee'>
                                                Employee
                                            </option>
                                        </select>
                                        <span class='select-btn'>
                                            <i class='zmdi zmdi-chevron-down'></i>
                                        </span>
                                    </div>
                                    <div class='form-row'>
                                        <input
                                            type='text'
                                            name='company'
                                            class='company'
                                            id='company'
                                            placeholder='Company'
                                            required
                                        />
                                    </div>
                                    <div class='form-group'>
                                        <div class='form-row form-row-3'>
                                            <input
                                                type='text'
                                                name='business'
                                                class='business'
                                                id='business'
                                                placeholder='Business Arena'
                                                required
                                            />
                                        </div>
                                        <div class='form-row form-row-4'>
                                            <select name='employees'>
                                                <option value='employees'>
                                                    Employees
                                                </option>
                                                <option value='trainee'>
                                                    Trainee
                                                </option>
                                                <option value='colleague'>
                                                    Colleague
                                                </option>
                                                <option value='associate'>
                                                    Associate
                                                </option>
                                            </select>
                                            <span class='select-btn'>
                                                <i class='zmdi zmdi-chevron-down'></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class='form-right'>
                                    <h2>Contact Details</h2>
                                    <div class='form-row'>
                                        <input
                                            type='text'
                                            name='street'
                                            class='street'
                                            id='street'
                                            placeholder='Street + Nr'
                                            required
                                        />
                                    </div>
                                    <div class='form-row'>
                                        <input
                                            type='text'
                                            name='additional'
                                            class='additional'
                                            id='additional'
                                            placeholder='Additional Information'
                                            required
                                        />
                                    </div>
                                    <div class='form-group'>
                                        <div class='form-row form-row-1'>
                                            <input
                                                type='text'
                                                name='zip'
                                                class='zip'
                                                id='zip'
                                                placeholder='Zip Code'
                                                required
                                            />
                                        </div>
                                        <div class='form-row form-row-2'>
                                            <select name='place'>
                                                <option value='place'>
                                                    Place
                                                </option>
                                                <option value='Street'>
                                                    Street
                                                </option>
                                                <option value='District'>
                                                    District
                                                </option>
                                                <option value='City'>
                                                    City
                                                </option>
                                            </select>
                                            <span class='select-btn'>
                                                <i class='zmdi zmdi-chevron-down'></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div class='form-row'>
                                        <select name='country'>
                                            <option value='country'>
                                                Country
                                            </option>
                                            <option value='Vietnam'>
                                                Vietnam
                                            </option>
                                            <option value='Malaysia'>
                                                Malaysia
                                            </option>
                                            <option value='India'>India</option>
                                        </select>
                                        <span class='select-btn'>
                                            <i class='zmdi zmdi-chevron-down'></i>
                                        </span>
                                    </div>
                                    <div class='form-group'>
                                        <div class='form-row form-row-1'>
                                            <input
                                                type='text'
                                                name='code'
                                                class='code'
                                                id='code'
                                                placeholder='Code +'
                                                required
                                            />
                                        </div>
                                        <div class='form-row form-row-2'>
                                            <input
                                                type='text'
                                                name='phone'
                                                class='phone'
                                                id='phone'
                                                placeholder='Phone Number'
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div class='form-row'>
                                        <input
                                            type='text'
                                            name='your_email'
                                            id='your_email'
                                            class='input-text'
                                            required
                                            pattern='[^@]+@[^@]+.[a-zA-Z]{2,6}'
                                            placeholder='Your Email'
                                        />
                                    </div>
                                    <div class='form-checkbox'>
                                        <label class='container'>
                                            <p>
                                                I do accept the{' '}
                                                <a href='#' class='text'>
                                                    Terms and Conditions
                                                </a>{' '}
                                                of your site.
                                            </p>
                                            <input
                                                type='checkbox'
                                                name='checkbox'
                                            />
                                            <span class='checkmark'></span>
                                        </label>
                                    </div>
                                    <div class='form-row-last'>
                                        <input
                                            type='submit'
                                            name='register'
                                            class='register'
                                            value='Register Badge'
                                            onClick={displayRazorpay}
                                        />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </body>
            </Form>
        </>
    )
}

const About = styled.div`
    display: flex;
    justify-content: center;
    align-items: left;
    flex-direction: column;
    position: absolute;
    margin-top: 100px;
    margin-left: 20px;
    width: 490px;
    height: 225px;
    left: 88px;
    top: 185px;
    font-family: 'Poppins', sans-serif;

    line-height: 75px;
    color: #2d2828;

    .heading {
        text-align: left;
        font-weight: 700;
        font-size: 72px;
    }
    .heading-org {
        color: #ffae17;
        font-weight: 800;
        font-size: 72px;
    }

    p {
        margin-top: 25px;
        margin-bottom: 20px;
        position: relative;
        text-align: left;
        width: 460px;
        height: auto;
        font-family: 'Noto Sans', sans-serif;
        font-weight: 600;
        font-size: 20px;
        line-height: 24px;
        color: grey;
    }
`

const Button = styled.div`
    .button-56 {
        margin-top: 20px;
        align-items: center;
        background-color: #fdc04d;
        border: 2px solid #111;
        border-radius: 8px;
        box-sizing: border-box;
        color: #111;
        cursor: pointer;
        display: flex;
        font-family: Inter, sans-serif;
        font-size: 16px;
        height: 48px;
        justify-content: center;
        line-height: 24px;
        max-width: 100%;
        padding: 0 25px;
        position: relative;
        text-align: center;
        font-size: 18px;
        font-family: 'Noto Sans', sans-serif;
        text-decoration: none;
        user-select: none;
        font-weight: bolder;
        -webkit-user-select: none;
        touch-action: manipulation;
    }

    .button-56:after {
        background-color: #111;
        border-radius: 8px;
        content: '';
        display: block;
        height: 48px;
        left: 0;
        width: 100%;
        position: absolute;
        top: -2px;
        transform: translate(8px, 8px);
        transition: transform 0.2s ease-out;
        z-index: -1;
    }

    .button-56:hover:after {
        transform: translate(0, 0);
    }

    .button-56:active {
        background-color: #ffdeda;
        outline: 0;
    }

    .button-56:hover {
        outline: 0;
    }

    @media (min-width: 768px) {
        .button-56 {
            padding: 0 40px;
        }
    }

    a {
        color: black;
        text-decoration: none;
    }
`

const Image = styled.div`
    position: relative;
    left: 675px;
    top: 140px;
    width: 632px;
    height: auto;
    img {
        height: auto;
        width: 90%;
        margin-left: 30px;
    }
`

const BottomSection = styled.div`
    position: relative;
    top: 100px;
    height: 170px;
    margin: 30px 32px;
    margin-bottom: 150px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 1rem;
    padding: 2px 12px;
`

const Card = styled.div`
    display: flex;
    align-items: center;
    width: 25%;
    height: inherit;
    background-color: #d9d9d9;
    border-radius: 10px;
    padding: 23px 12px;

    .box {
        height: 100px;
        width: 100px;
        /* border: 1px solid black; */
        display: inline-flex;
    }

    img {
        border-radius: 30px;
        /* opacity: 0.8; */
        /* filter: invert(100%); */
    }

    .textbox {
        flex-direction: column;
        height: 100px;
        width: 180px;
        margin-left: 14px;
    }

    h2 {
        font-family: 'Poppins', sans-serif;
        letter-spacing: 2px;
        font-weight: bolder;
        margin: 14px 0px;
    }

    p {
        font-family: 'Noto Sans', sans-serif;
        font-weight: 600;
        line-height: 24px;
        color: grey;
        margin: 0px 0px;
    }
`

const Heading = styled.div`
    margin-top: 80px;
    // margin-bottom: 50px;
    text-align: center;
    font-weight: bold;
    font-family: 'Poppins', sans-serif;
    font-weight: bold;

    .form-heading {
        margin-bottom: 10px;
        font-size: 3.6rem;
    }
`
const DonationStats = styled.div`
    width: 100%;
    display: flex;
    align-self: center;
    justify-content: center;
    gap: 2rem;
    padding: 23px 12px;
`

const Graph = styled.div`
    // height: ;
    width: 32%;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 23px;
    // background: #d9d9d9;
`
const Floater = styled.div`
    position: relative;
    display: flex;
    width: 90%;
    height: 100px;
    margin: auto;
    margin-top: 40px;
    background: #d9d9d9;
    border-radius: 82px;
    z-index: 1;

    h2 {
        position: relative;
        display: inline-flex;
        font-size: 1.5rem;
        left: 90px;
        top: 20px;
        font-family: 'Poppins', sans-serif;
        font-weight: 700;
    }

    p {
        position: absolute;
        display: inline-flex;
        left: 90px;
        top: 50px;
        padding-top: 3px;
        font-family: 'Noto Sans', sans-serif;
        font-weight: 300;
    }

    Button {
        /* position: relative; */
        left: 600px;
    }
`

const DonationReason = styled.div`
    margin: 12px 23px;
    padding: 12px 83px;
    display: grid;
    grid-gap: 50px;
    gap: 50px;
    grid-template-rows: repeat(2, minmax(0, 3fr));
    grid-template-columns: repeat(2, minmax(0, 3fr));

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
`

const Wrap = styled.div`
    padding: 40px 25px;
    border-radius: 10px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0/ 73%) 0px 16px 10px -10px;
    cursor: pointer;
    /* overflow: hidden; */
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
    border: 3px solid rgba(249, 249, 249, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    /* border: 1px solid black; */
    background-color: #dadada;

    .icon {
        height: 100px !important;
        width: 100px !important;
        inset: 0px;
        display: inline-flex;
        object-fit: cover;
        opacity: 1;
        /* transition: opacity 500ms ease-in-out 0s; */
        z-index: 1;
        top: 70px;
        /* left: 100px; */
    
    img {
        border-radius: 20px;
        /* opacity: 0.8; */
        /* filter: invert(100%); */
    }
    }

    .line {
        border-right: 2.5px solid black;
        height: 100px;
        padding: 2px 10px;
    }

    .text {
        padding: 2px 10px;

        h2 {
            font-size: 1.5rem;
            font-weight: 600;
            line-height: 30px;
            font-family: 'Noto Sans', sans-serif;
        }

        p {
            font-family: 'Poppins', sans-serif;
            font-weight: 500;
        }
    }

    &:hover {
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
            rgb(0 0 0/ 73%) 0px 16px 10px -10px;
        transform: scale(1.05);
        border-color: rgba(249, 249, 294, 0.8);
    }
`

const Form = styled.div`
    body {
        margin: 0;
    }
    .page-content {
        width: 100%;
        margin: 0 auto;
        background: white;
        display: flex;
        display: -webkit-flex;
        justify-content: center;
        -o-justify-content: center;
        -ms-justify-content: center;
        -moz-justify-content: center;
        -webkit-justify-content: center;
        align-items: center;
        -o-align-items: center;
        -ms-align-items: center;
        -moz-align-items: center;
        -webkit-align-items: center;
        background-image: -moz-linear-gradient(
            136deg,
            rgb(253, 192, 77) 0%,
            rgb(45, 52, 54) 100%
        );
        background-image: -webkit-linear-gradient(
            136deg,
            rgb(253, 192, 77) 0%,
            rgb(45, 52, 54) 100%
        );
        background-image: -ms-linear-gradient(
            136deg,
            rgb(253, 192, 77) 0%,
            rgb(45, 52, 54) 100%
        );
    }
    .form-v10-content {
        background: #fff;
        width: 1000px;
        border-radius: 10px;
        -o-border-radius: 10px;
        -ms-border-radius: 10px;
        -moz-border-radius: 10px;
        -webkit-border-radius: 10px;
        box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);
        -o-box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);
        -ms-box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);
        -moz-box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);
        -webkit-box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);
        margin: 95px 0;
        position: relative;
        font-family: 'Montserrat', sans-serif;
    }
    .form-v10-content .form-detail {
        position: relative;
        width: 100%;
        display: flex;
        display: -webkit-flex;
    }
    .form-v10-content .form-detail h2 {
        font-weight: 500;
        font-size: 25px;
        margin-bottom: 34px;
        padding: 33px 50px 0px 60px;
    }
    .form-v10-content .form-detail .form-left {
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
        width: 100%;
    }
    .form-v10-content .form-detail .form-left h2 {
        color: #2271dd;
    }
    .form-v10-content .form-detail .form-right {
        width: 100%;
        background: #4835d4;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
    }
    .form-v10-content .form-detail .form-right h2 {
        color: #fff;
    }
    .form-v10-content .form-detail .form-group {
        display: flex;
        display: -webkit-flex;
    }
    .form-v10-content .form-detail .form-row {
        position: relative;
        margin-bottom: 24px;
        padding-left: 60px;
        padding-right: 50px;
    }
    .form-v10-content .form-detail .form-left .form-group .form-row.form-row-1 {
        width: 50%;
        padding: 0 12px 0 60px;
    }
    .form-v10-content .form-detail .form-left .form-group .form-row.form-row-2 {
        width: 50%;
        padding: 0 50px 0 12px;
    }
    .form-v10-content .form-detail .form-left .form-group .form-row.form-row-3 {
        width: 73%;
        padding: 0 12px 0 60px;
    }
    .form-v10-content .form-detail .form-left .form-group .form-row.form-row-4 {
        width: 50%;
        padding: 0 50px 0 12px;
    }
    .form-v10-content
        .form-detail
        .form-right
        .form-group
        .form-row.form-row-1 {
        width: 50%;
        padding: 0 12px 0 60px;
    }
    .form-v10-content
        .form-detail
        .form-right
        .form-group
        .form-row.form-row-2 {
        width: 100%;
        padding: 0 50px 0 12px;
    }
    .form-v10-content .form-detail select,
    .form-v10-content .form-detail input {
        width: 100%;
        padding: 11.5px 15px 15px 15px;
        border: 1px solid transparent;
        background: transparent;
        appearance: unset;
        -moz-appearance: unset;
        -webkit-appearance: unset;
        -o-appearance: unset;
        -ms-appearance: unset;
        outline: none;
        -moz-outline: none;
        -webkit-outline: none;
        -o-outline: none;
        -ms-outline: none;
        font-family: 'Montserrat', sans-serif;
        font-size: 16px;
        box-sizing: border-box;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        -o-box-sizing: border-box;
        -ms-box-sizing: border-box;
    }
    .form-v10-content .form-detail select {
        background: 0 0;
        position: relative;
        z-index: 9;
        cursor: pointer;
    }
    .form-v10-content .form-detail .form-left select {
        color: #666;
    }
    .form-v10-content .form-detail .form-right select {
        color: #f2f2f2;
    }
    .form-v10-content .form-detail .select-btn {
        z-index: 0;
        position: absolute;
        top: 30%;
        right: 11.5%;
        font-size: 18px;
    }
    .form-v10-content .form-detail .form-left .select-btn {
        color: #666;
    }
    .form-v10-content .form-detail .form-right .select-btn {
        color: #f2f2f2;
    }
    .form-v10-content
        .form-detail
        .form-group
        .form-row.form-row-4
        .select-btn {
        top: 20%;
        right: 26%;
    }
    .form-v10-content
        .form-detail
        .form-right
        .form-group
        .form-row.form-row-2
        .select-btn {
        top: 20%;
        right: 19%;
    }
    .form-v10-content .form-detail .form-left input {
        color: #000;
    }
    .form-v10-content .form-detail .form-right input {
        color: #fff;
    }
    .form-v10-content .form-detail .form-left input,
    .form-v10-content .form-detail .form-left select {
        border-bottom: 1px solid #ccc;
    }
    .form-v10-content .form-detail .form-left input:focus,
    .form-v10-content .form-detail .form-left select:focus {
        border-bottom: 1px solid #999;
    }
    .form-v10-content .form-detail .form-right input,
    .form-v10-content .form-detail .form-right select {
        border-bottom: 1px solid;
        border-bottom-color: rgba(255, 255, 255, 0.3);
    }
    .form-v10-content .form-detail .form-right input:focus,
    .form-v10-content .form-detail .form-right select:focus {
        border-bottom: 1px solid #ccc;
    }
    .form-v10-content .form-detail .form-right select option {
        background: #4835d4;
    }
    .form-v10-content .form-detail .form-checkbox {
        margin-top: 37px;
        padding: 0 50px 0 60px;
        position: relative;
    }
    .form-v10-content .form-detail .form-checkbox input {
        position: absolute;
        opacity: 0;
    }
    .form-v10-content .form-detail .form-checkbox .checkmark {
        position: absolute;
        top: 1px;
        left: 60px;
        height: 15px;
        width: 15px;
        border: 1px solid #e5e5e5;
        cursor: pointer;
    }
    .form-v10-content .form-detail .form-checkbox .checkmark::after {
        content: '';
        position: absolute;
        left: 5px;
        top: 1px;
        width: 3px;
        height: 8px;
        border: 1px solid #fff;
        border-width: 0 2px 2px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        -o-transform: rotate(45deg);
        -moz-transform: rotate(45deg);
        transform: rotate(45deg);
        display: none;
    }
    .form-v10-content
        .form-detail
        .form-checkbox
        input:checked
        ~ .checkmark::after {
        display: block;
    }
    .form-v10-content .form-detail .form-checkbox p {
        margin-left: 34px;
        color: #e5e5e5;
        font-size: 14px;
        font-weight: 400;
    }
    .form-v10-content .form-detail .form-checkbox .text {
        font-weight: 400;
        color: #fff;
        text-decoration: underline;
    }
    .form-v10-content .form-detail .form-right .form-row-last {
        padding-left: 60px;
        margin: 44px 0 10px;
    }
    .form-v10-content .form-detail .form-right .register {
        background: #fff;
        border-radius: 25px;
        -o-border-radius: 25px;
        -ms-border-radius: 25px;
        -moz-border-radius: 25px;
        -webkit-border-radius: 25px;
        box-shadow: 0px 6px 17px 0px rgba(0, 0, 0, 0.15);
        -o-box-shadow: 0px 6px 17px 0px rgba(0, 0, 0, 0.15);
        -ms-box-shadow: 0px 6px 17px 0px rgba(0, 0, 0, 0.15);
        -moz-box-shadow: 0px 6px 17px 0px rgba(0, 0, 0, 0.15);
        -webkit-box-shadow: 0px 6px 17px 0px rgba(0, 0, 0, 0.15);
        width: 180px;
        border: none;
        margin: 6px 0 50px 0px;
        cursor: pointer;
        color: #333;
        font-weight: 700;
        font-size: 15px;
    }
    .form-v10-content .form-detail .form-right .register:hover {
        background: #ccc;
    }
    .form-v10-content .form-detail .form-right .form-row-last input {
        padding: 12.5px;
    }
    .form-v10-content .form-detail .form-left input::-webkit-input-placeholder {
        /* Chrome/Opera/Safari */
        color: #666;
        font-size: 16px;
    }
    .form-v10-content .form-detail .form-left input::-moz-placeholder {
        /* Firefox 19+ */
        color: #666;
        font-size: 16px;
    }
    .form-v10-content .form-detail .form-left input:-ms-input-placeholder {
        /* IE 10+ */
        color: #666;
        font-size: 16px;
    }
    .form-v10-content .form-detail .form-left input:-moz-placeholder {
        /* Firefox 18- */
        color: #666;
        font-size: 16px;
    }
    .form-v10-content
        .form-detail
        .form-right
        input::-webkit-input-placeholder {
        /* Chrome/Opera/Safari */
        color: #f2f2f2;
        font-size: 16px;
    }
    .form-v10-content .form-detail .form-right input::-moz-placeholder {
        /* Firefox 19+ */
        color: #f2f2f2;
        font-size: 16px;
    }
    .form-v10-content .form-detail .form-right input:-ms-input-placeholder {
        /* IE 10+ */
        color: #f2f2f2;
        font-size: 16px;
    }
    .form-v10-content .form-detail .form-right input:-moz-placeholder {
        /* Firefox 18- */
        color: #f2f2f2;
        font-size: 16px;
    }

    /* Responsive */
    @media screen and (max-width: 1199px) {
        .form-v10-content {
            margin: 95px 20px;
        }
    }
    @media screen and (max-width: 991px) and (min-width: 768px) {
        .form-v10-content .form-detail .form-group {
            flex-direction: column;
            -o-flex-direction: column;
            -ms-flex-direction: column;
            -moz-flex-direction: column;
            -webkit-flex-direction: column;
        }
        .form-v10-content
            .form-detail
            .form-left
            .form-group
            .form-row.form-row-1,
        .form-v10-content
            .form-detail
            .form-left
            .form-group
            .form-row.form-row-2,
        .form-v10-content
            .form-detail
            .form-left
            .form-group
            .form-row.form-row-3,
        .form-v10-content
            .form-detail
            .form-left
            .form-group
            .form-row.form-row-4,
        .form-v10-content
            .form-detail
            .form-right
            .form-group
            .form-row.form-row-1,
        .form-v10-content
            .form-detail
            .form-right
            .form-group
            .form-row.form-row-2 {
            width: auto;
            padding: 0 50px 0 60px;
        }
        .form-v10-content .form-detail .select-btn,
        .form-v10-content
            .form-detail
            .form-left
            .form-group
            .form-row.form-row-4
            .select-btn,
        .form-v10-content
            .form-detail
            .form-right
            .form-group
            .form-row.form-row-2
            .select-btn {
            right: 15%;
        }
    }
    @media screen and (max-width: 767px) {
        .form-v10-content .form-detail {
            flex-direction: column;
            -o-flex-direction: column;
            -ms-flex-direction: column;
            -moz-flex-direction: column;
            -webkit-flex-direction: column;
        }
        .form-v10-content .form-detail .form-right {
            border-top-right-radius: 0px;
            border-bottom-left-radius: 10px;
        }
        .form-v10-content .form-detail .form-left {
            padding-bottom: 50px;
        }
    }
    @media screen and (max-width: 575px) {
        .form-v10-content .form-detail .form-group {
            flex-direction: column;
            -o-flex-direction: column;
            -ms-flex-direction: column;
            -moz-flex-direction: column;
            -webkit-flex-direction: column;
        }
        .form-v10-content .form-detail .form-row,
        .form-v10-content
            .form-detail
            .form-left
            .form-group
            .form-row.form-row-1,
        .form-v10-content
            .form-detail
            .form-left
            .form-group
            .form-row.form-row-2,
        .form-v10-content
            .form-detail
            .form-left
            .form-group
            .form-row.form-row-3,
        .form-v10-content
            .form-detail
            .form-left
            .form-group
            .form-row.form-row-4,
        .form-v10-content
            .form-detail
            .form-right
            .form-group
            .form-row.form-row-1,
        .form-v10-content
            .form-detail
            .form-right
            .form-group
            .form-row.form-row-2 {
            width: auto;
            padding: 0 30px;
        }
        .form-v10-content .form-detail .select-btn,
        .form-v10-content
            .form-detail
            .form-left
            .form-group
            .form-row.form-row-4
            .select-btn,
        .form-v10-content
            .form-detail
            .form-right
            .form-group
            .form-row.form-row-2
            .select-btn {
            right: 15%;
        }
        .form-v10-content .form-detail h2 {
            padding: 33px 30px 0px 30px;
        }
        .form-v10-content .form-detail .form-checkbox {
            padding: 0 30px;
        }
        .form-v10-content .form-detail .form-checkbox .checkmark {
            left: 30px;
        }
        .form-v10-content .form-detail .form-right .form-row-last {
            padding-left: 0;
            text-align: center;
            margin: 44px 0 30px;
        }
    }
`

export default Donations
