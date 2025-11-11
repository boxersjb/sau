import React from 'react'
import { FcVoicePresentation, FcSupport, FcCollaboration,FcBriefcase } from "react-icons/fc";
import { useState } from 'react'

function PageG() {
    const [fullName, setFullname] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [province, setProvince] = useState('');
    const [showProfile, setShowProfile] = useState('???');

    const resultProfile = () => {
        let profile =  `name: ${fullName} age: ${age} gender: ${gender} province: ${province}`
        setShowProfile(profile)
    }


    return (
        <>
            <div className="w-8/12 mx-auto border rounded border-blue-400 p-5 mt-20
    shadow-xl flex flex-col">

                <FcVoicePresentation />
                <label htmlFor="">ป้อนชื่อ-สกุล</label>
                <input type="text" name="" id="" className='border rounded p-2' onChange={(e) => {setFullname(e.target.value)}} />

                <FcSupport />
                <label htmlFor="">อายุ</label>
                <input type="text" name="" id="" className='border rounded p-2' onChange={(e) => {setAge(e.target.value)}} />

                <FcCollaboration  />
                <label htmlFor="">เลือกเพศ</label>
                <div className="sexPerson">
                    <input type="radio" name="sex" id="" value="male"  onChange={(e) => {setGender(e.target.value)}}/> ชาย
                    <input type="radio" name="sex" id="" value="female" onChange={(e) => {setGender(e.target.value)}} /> หญิง
                    <input type="radio" name="sex" id="" value="ohter" onChange={(e) => {setGender(e.target.value)}}/> LGBTQ+
                </div>

                <FcBriefcase  />
                <label htmlFor="">Enter Province</label>
                <select name="province" id="province" className='boarder rounded' onChange={(e) => {setProvince(e.target.value)}}>
                    <option value="">----Enter----</option>
                    <option value="กทม">กทม.</option>
                    <option value="ตจว">ตจว.</option>
                </select>

                <button onClick={resultProfile} className='bg-green-400 hover:bg-green-400 text-white font-bold py-2 px-4 rounded mt-5 cursor-pointer'>View</button>
                <h1 className='text-center text-red-400 mt-5 font-bold text-2xl'>{showProfile}</h1>
            </div>
        </>
    )
}

export default PageG