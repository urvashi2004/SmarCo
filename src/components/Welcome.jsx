import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import { BiLoader } from "react-icons/bi";
import { FaBullseye } from "react-icons/fa6";

import Loader from "./Loader";

const commonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center text-white border-[0.5px] border-gray-400";

const Input = ({placeholder, name, type, value, handleChange}) => (
    <input 
        placeholder={placeholder}
        type={type}
        step="0.0001"
        value={value}
        onChange={(e) => handleChange(e, name)}
        className="my-2 w-full rounded-sm p-2 outline-none bg-transparent border-none text-sm white-glassmorphism"
    />
)

const Welcome = () => {
    const connectWallet = () => {
    }

    const handleSubmit = () => {
    }

    const handleChange = (e, name) => {
    }

    
    return (
        <div className="flex w-full justify-center items-center">
            <div className="flex mf:flex-row flex-col items-start justify-between md:p-10">
                <div className="flex flex-1 justify-start flex-row gap-10 mf:mr-10">
                
                    <div>
                        <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
                            Send Crypto<br/>Across The World
                        </h1>
                        <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
                            Explore crypto world. <br/> Buy and sell crypto currency on SmarCo easily!
                        </p>
                        <button 
                            type="button" 
                            onClick={connectWallet} 
                            className="flex flex-row justify-center items-center my-5 bg-[#bbbbbb] p-3 rounded-full cursos-pointer hover:bg-[#444444]">
                                <p className="font-semibold text-base">Connect Wallet</p>
                        </button>

                        <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10 mb-10">
                            <div className={`rounded-tl-2xl ${commonStyles}`}>
                                Reliability
                            </div>
                            <div className={commonStyles}>
                                Security
                            </div>
                            <div className={`rounded-tr-2xl ${commonStyles}`}>
                                Ethereum
                            </div>
                            <div className={`rounded-bl-2xl ${commonStyles}`}>
                                Web 3.0
                            </div>
                            <div className={commonStyles}>
                                Low fees
                            </div>
                            <div className={`rounded-br-2xl ${commonStyles}`}>
                                Blockchain
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="flex flex-row justify-center items-center w-full mf:mt-0 mt-10">
                            <div className="eth-card white-glassmorphism w-full justify-end items-start flex-col rounded-xl h-35 sm:w-60 align-top">
                                <div className="flex justify-between flex-col w-full h-full">
                                    <div className="flex justify-between items-start w-full">
                                        <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                                            <SiEthereum fontSize={21} color="#fff"/>
                                        </div>
                                        <BsInfoCircle fontSize={17} color="#fff"/>
                                    </div>
                                    <div>
                                        <p className="text-white font-light text-sm">
                                            Address
                                        </p>
                                        <p className="text-white font-light font-semibold text-lg mt-1">
                                            Ethereum
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-5 sm:w-60 w-full flex flex-col justify-start items-center blue-glassmorphism">
                            <Input placeholder="Address To" name="addressTo" type="text" handleChange={() => {handleChange}}/>
                            <Input placeholder="Amount (ETH)" name="amount" type="number" handleChange={() => {handleChange}}/>
                            <Input placeholder="Keyword (Gif)" name="keyword" type="text" handleChange={() => {handleChange}}/>
                            <Input placeholder="Enter Message" name="message" type="text" handleChange={() => {handleChange}}/>
                            
                            <div className="h-[1px] w-full bg-gray-400 my-2"/>

                            {false ? (
                                <Loader/>
                            ) : (
                                <button
                                    type="button"
                                    onClick={handleSubmit}
                                    className="text-white w-full mt-2 border-[1px] p-2 border-[#aaaaaa] rounded-full cursor-pointer"
                                >
                                    Submit
                                </button>
                        
                            )}

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Welcome;