import { useContract, useContractData } from '@thirdweb-dev/react'
import React from 'react'
import { render } from 'react-dom';
import Countdown from 'react-countdown';
import { type } from 'os';

type Props={
    hours: number;
    minutes: number;  
    seconds: number; 
    completed: boolean;
}

function CountdownTimer() {
    const {contract}=useContract(
        "0x0E117C29F5186a024A3DdC39Bd0095DA09268551");

    const { data :expiration, isLoading: isLoadingExpiration } = 
    useContractData(contract, "expiration");

    const renderer= ({ hours, minutes,  seconds, completed}:Props)=>{
        if (completed){
            return(
            <div>
                <h2 className='text-white text-xl text-cemter animate-bounce'>
                    Ticket Sales have now CLOSED for this DRAW
                </h2>

                <div className='flex space-x-6'>
                    <div className='flex-1'>
                        <div className='countdown animate-pulse'>{hours}</div>
                        <div className='countdown-label'>hours</div>
                    </div>

                    <div className='flex-1'>
                        <div className='countdown animate-pulse'>{minutes}</div>
                        <div className='countdown-label'>minutes</div>
                    </div>

                    <div className ='flex-1'>
                        <div className='countdown animate-pulse'>{seconds}</div>
                        <div className='countdown-label'>seconds</div>
                    </div>
                </div>
            </div>

            );
        }else {
            return(
            <div>
                <h3 className='text-white text-sm mb-2 italic'>
                    Time Remaining
                </h3>
                <div className='flex space-x-6'>
                    <div className='flex-1'>
                        <div className='countdown'>{hours}</div>
                        <div className='countdown-label'>hours</div>
                    </div>

                    <div className='flex-1'>
                        <div className='countdown'>{minutes}</div>
                        <div className='countdown-label'>minutes</div>
                    </div>

                    <div className ='flex-1'>
                        <div className='countdown'>{seconds}</div>
                        <div className='countdown-label'>seconds</div>
                    </div>
                </div>
            </div>)
        }


    }

  return (
    <div>
        <Countdown date={new Date(expiration*1000)} renderer = {renderer}/>
    </div>
  )
}

export default CountdownTimer