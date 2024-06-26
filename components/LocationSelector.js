"use client";
import { useState } from 'react'
import {useContext} from 'react'
import {UberContext} from '../context/uberContext'


const style = {
    wrapper: `pt-2`,
    searchHeader: `w-full font-bold text-left flex items-center text-3xl p-4 overflow-hidden`,
    inputBoxes: `flex flex-col mb-4 relative`,
    inputBox: `h-10 mx-4 border-2 bg-[#eeeeee] flex items-center my-1 py-1 px-2`,
    focusedInputBox: `border-black`,
    svgContainer: `mx-3`,
    input: `my-2 rounded-2 p-2 outline-none border-none bg-transparent  h-full w-full`,
    verticalLine: `w-0 h-[2rem] border-black border absolute z-10 left-[2.3rem] top-[2rem]`,
}

const LocationSelector = () => {
    const [inFocus, setinFocus] = useState('from');
    const { pickup, setPickup, dropoff, setDropoff } = useContext(UberContext);

    console.log({ pickup: pickup, dropoff: dropoff })


    return (
        <div className={style.wrapper}>
            <div className={style.searchHeader}>
                {inFocus === 'from' ? '¿Dónde te ubicas?' : '¿A dónde quieres ir?'}
            </div>
            <div className={style.inputBoxes}>
                <div className={`${style.inputBox}${inFocus === 'from' && style.focusedInputBox
                    }`}>
                    <div className={style.svgContainer}>
                        <svg viewBox='0 0 24 24' width='1em' height='1em'>
                            <path
                                fillRule='evenodd'
                                clipRule='evenodd'
                                d='M12 14a2 2 0 100-4 2 2 0 000 4zm5-2a5 5 0 11-10 0 5 5 0 0110 0<'
                            />
                        </svg>
                    </div>
                    <input className={style.input} placeholder="Ingrese el lugar de recogida" value={pickup}
                        onChange={e => setPickup(e.target.value)}
                        onFocus={() => setinFocus('from')} />
                </div>
                <div className={style.verticalLine} />
                <div className={`${style.inputBox}${inFocus === 'to' && style.focusedInputBox
                    }`}>
                    <div className={style.svgContainer}>
                        <svg viewBox='0 0 24 24' width='1em' height='1em'>
                            <path
                                fillRule='evenodd'
                                clipRule='evenodd'
                                d='M14 10h-4v4h4v-4zM7 7v10h10V7H7z'
                            />
                        </svg>
                    </div>
                    <input className={style.input}
                        placeholder="Ingres el lugar de su destino"
                        value={dropoff}
                        onChange={e => setDropoff(e.target.value)}
                        onFocus={() => setinFocus('to')} />
                </div>

            </div>
        </div>
    )

}


export default LocationSelector