import React from 'react'
import Footer from './../components/Footer.jsx'
import taskimg from './../assets/task.png'
import { Link, redirect } from 'react-router-dom'
import { useState } from 'react'
import { supabase } from './../libs/supabaseClient.js'

function AddTask() {
    const [title, setTitle] = useState('')
    const [detail, setDetail] = useState('')
    const [isCompleted, setIsCompleted] = useState(false)
    const [imageFile, setImageFile] = useState(null)
    const [imgPreview, setImagePreview] = useState('')

    const handleImageSelect = (e) => {
        const file = e.target.files[0]
        if (!file) return
        setImageFile(file)
        setImagePreview(URL.createObjectURL(file))
    }

    const btnSubmit = async (e) => {
        e.preventDefault()

        let imageUrl = ''
        //อัปโหลดรูป กรณีเลือกรูป ไปที่ task_bk
        if (imageFile) {
            //เปลี่ยนชื่อไฟล์ของรูปเพื่อไม่ให้ซ้า
            let newImageFile = `${Date.now()}_${imageFile.name}`

            //อัปโหลดไปยัง storage ที่ supabase
            const { data, error } = await supabase.storage
                .from('BK_TASK')
                .upload(newImageFile, imageFile)

            if (error) {
                alert("เกิดข้อผิดพลาดในการอัปโหลดรูป กรุณาลองใหม่อีกครั้ง!!!")
                return;
            } else {
                //ไปเอาที่อยู่ของรูปที่ storage ที่ supabase มากำหนดให้กับตัวแปร imageUrl
                const { data } = supabase.storage
                    .from('BK_TASK')
                    .getPublicUrl(newImageFile)

                imageUrl = data.publicUrl
            }
        }

        const { data, error } = await supabase
            .from('TB_TASK')
            .insert(
                {
                    task_title: title,
                    task_detail: detail,
                    task_img_url: imageUrl,
                    task_is_completed: isCompleted == 'true' ? true : false
                }
            )

        if (error) {
            alert("เกิดข้อผิดพลาดในการเพิ่มข้อมูลงาน กรุณาลองใหม่อีกครั้ง!!!")
            console.log("Error inserting task:", error)
        } else {
            alert("เพิ่มข้อมูลงานเรียบร้อยแล้ว")
            window.location.href = '/showalltask'
        }
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
                        -- เพิ่มข้อมูลงาน --
                    </h1>

                    <form className='w-full mt-10' onSubmit={btnSubmit}>
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
                                บันทึกเพิ่มงานใหม่
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

export default AddTask