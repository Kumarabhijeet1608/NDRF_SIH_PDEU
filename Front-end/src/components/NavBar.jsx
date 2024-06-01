import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { ethers } from 'ethers'

const NavBar = (props) => {
    const [currentAccount, setCurrentAccount] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const checkIfWalletIsConnected = async () => {
        try {
            const { ethereum } = window

            if (!ethereum) {
                console.log('Make sure you have MetaMask!')

                setIsLoading(false)
                return
            } else {
                console.log('We have the ethereum object', ethereum)

                const accounts = await ethereum.request({
                    method: 'eth_accounts',
                })

                if (accounts.length !== 0) {
                    const account = accounts[0]
                    console.log('Found an authorized account:', account)
                    setCurrentAccount(account)
                } else {
                    console.log('No authorized account found')
                }
            }
        } catch (error) {
            console.log(error)
        }

        setIsLoading(false)
    }

    const connectWalletAction = async () => {
        try {
            const { ethereum } = window

            if (!ethereum) {
                alert('Get MetaMask!')
                return
            }
            const accounts = await ethereum.request({
                //request access to account
                method: 'eth_requestAccounts',
            })
            console.log('Connected', accounts[0]) //print the public address
            setCurrentAccount(accounts[0])
        } catch (error) {
            console.log(error)
        }
    }

    const checkNetwork = async () => {
        try {
            if (window.ethereum.networkVersion !== '4') {
                // alert('Please connect to Rinkeby!')
            }
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        setIsLoading(true)
        checkIfWalletIsConnected()
        checkNetwork()
    }, [])
    return (
        <Nav>
            {/* <Logo><p>DECENTRALIZED</p></Logo> */}
            <NavMenu>
                <a href='/'>DECENTRALIZED</a>
                <a href='/incidents'>INCIDENTS</a>
                <a href='/donation'>DONATION</a>
                <a href='/logistics'>LOGISTICS</a>
                <a href='https://thegreatfellow.github.io/disaster-sentiment-analysis/mood_python.html'>
                    SOCIAL DATA
                </a>
            </NavMenu>
            <Wallet>
                <div onClick={connectWalletAction}>Connect Wallet</div>
            </Wallet>
        </Nav>
    )
}

const Nav = styled.div`
    position: fixed;
    margin: 10px 70px;
    top: 0;
    left: 0;
    right: 0;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 300;
`

const NavMenu = styled.div`
    padding: 13px 15px;
    border: 3px solid black;
    background-color: #fff;
    border-radius: 35px;
    display: flex;
    align-items: center;
    gap: 24px;
    font-size: 18px;
    a {
        text-decoration: none;
        color: black;
        margin: 0 4px;
    }
`

const Wallet = styled.div`
    padding: 13px 19px;
    background-color: #00dce6;
    filter: drop-shadow(3px 3px 0px #000000);
    border: 3px solid black;
    border-radius: 35px;
    transition: filter 150ms ease-out;
    display: flex;
    align-items: center;
    gap: 24px;
    font-size: 19px;
    :hover {
        filter: drop-shadow(0px 0px 0px #000000);
    }
    div {
        text-decoration: none;
        color: black;
    }
`

export default NavBar
