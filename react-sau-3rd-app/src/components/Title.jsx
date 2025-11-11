import React from 'react'

function Title(props) {
    const { showAct, showT, sColor } = props
    return (
        <>
            <div className="text-center text-3xl text-blue-800">
                {showT}
                <span style={{border:"2px solid black"}} className={`${sColor} rounded-2xl`}>
                    {showAct}
                </span>
                <hr className='w-4/5 mx-auto' />
            </div>
        </>
    )
}

export default Title