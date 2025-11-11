import React, { use } from 'react'
import Footer from './../components/Footer.jsx'
import taskimg from './../assets/task.png'
import { data, Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { supabase } from './../libs/supabaseClient.js'

function UpdateTask() {
    const { id } = useParams()

    const [title, setTitle] = useState('')
    const [detail, setDetail] = useState('')
    const [isCompleted, setIsCompleted] = useState(false)
    const [imageFile, setImageFile] = useState(null)
    const [imgPreview, setImagePreview] = useState('')

    useEffect(() => {
        const fetchTask = async () => {
            const { data, error } = await supabase
                .from('TB_TASK')
                .select('*')
                .eq('task_id', id)
                .single()
        }
    },[])


    const handleImageSelect = (e) => {
        const file = e.target.files[0]
        if (!file) return
        setImageFile(file)
        setImagePreview(URL.createObjectURL(file))
    }



    return (
        <>
            <div>
                <div className="w-8/12 border-gray-300 shadow-md rounded p-5
                      mx-auto mt-20 flex flex-col items-center">

                    <img src={taskimg} alt="Task" className="w-30 mb-4" />

                    <h1 className="text-2xl font-bold text-gray-800 text-center">
                        Task Application
                        <br />
                        -- แก้ไขข้อมูลงาน --
                    </h1>

                    <form className='w-full mt-10'>
                        <div>
                            <label>ชื่องาน</label>
                            <input value={title} onChange={(e) => { setTitle(e.target.value) }} placeholder='ป้อนชื่องานที่ต้องทำ'
                                type="text" className='w-full border border-gray-400 p-2 rounded' />
                        </div>

                        <div className='mt-5'>
                            <label>รายละเอียดงาน</label>
                            <input value={detail} onChange={(e) => { setDetail(e.target.value) }} placeholder='ป้อนรายละเอียดงานที่ต้องทำ'
                                type="text" className='w-full border border-gray-400 p-2 rounded' />
                        </div>

                        <div className='mt-8'>
                            <label>เลือกรูปงาน</label>
                            <input onChange={handleImageSelect} type="file" id="imageSelect" className='hidden' accept="image/*" />
                            <label htmlFor="imageSelect"
                                className='w-full bg-blue-500  hover:bg-blue-700
                              text-white p-2 rounded cursor-pointer ml-5 '>
                                เลือกรูปงาน
                            </label>
                            {
                                imgPreview && (
                                    <div className='mt-5'>
                                        <img src={imgPreview} alt="Preview" className='w-40 h-40 object-cover rounded' />
                                    </div>
                                )}
                        </div>

                        <div className='mt-8'>
                            <label htmlFor="">สถานะงาน</label>
                            <select value={isCompleted == 'false' ? '0' : '1'} onChange={(e) => { setIsCompleted(e.target.value == '1' ? 'true' : 'false') }} name="" id="" className='w-full border border-gray-400 p-2 rounded mt-5'>
                                <option value="1">Success</option>
                                <option value="0">Wait...</option>
                            </select>
                        </div>

                        <div className='mt-8'>
                            <button type='submit' className='w-full bg-blue-500 hover:bg-blue-700 p-2
                               text-white rounded cursor-pointer'>
                                บันทึกแก้ไขงานเก่า
                            </button>
                        </div>

                        <div className='mt-8 text-center'>
                            <Link to="/showalltask" className='text-blue-500 hover:text-blue-700' >
                                กลับไปหน้าแสดงงานทั้งหมด
                            </Link>
                        </div>
                    </form>
                </div>

                <Footer />
            </div>
        </>
    )
}

export default UpdateTask