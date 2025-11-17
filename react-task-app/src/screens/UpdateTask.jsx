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
    const [isComplete, setIsComplete] = useState(false)
    const [imageFile, setImageFile] = useState(null)
    const [imagePreview, setImagePreview] = useState('')

    useEffect(() => {
        const fetchTask = async () => {
            const { data, error } = await supabase.from('TB_TASK').select('*').eq('task_id', id).single()

            if (error) {
                alert('เกิดข้อผิดพลาดในการดึงข้อมูลงาน กรุณาลองใหม่อีกครั้ง!!!')
                return;
            } else {
                setTitle(data.task_title)
                setDetail(data.task_detail)
                setIsComplete(data.task_is_completed)
                setImagePreview(data.task_img_url)
            }
        }
        fetchTask()    
    }, [])

    const handleImageSelect = (e) => {
        const file = e.target.files[0]

        if (file) {
            setImageFile(file)
            setImagePreview(URL.createObjectURL(file))
        }
    }

    const handleUpdateClick = async (e) => {
        e.preventDefault()
        if (title.trim() === '' || detail.trim() === '') {
            alert('กรุณากรอกข้อมูลให้ครบถ้วน!!!')
            return;
        }

        let imageUrl = ''

        if (imageFile) {
            const imageName = imagePreview.split('/').pop()
            await supabase.storage.from('BK_TASK').remove([imageName])

            let newImageFile = `${Date.now()}_${imageFile.name}`

            const { error } = await supabase.storage
                .from('BK_TASK')
                .upload(newImageFile, imageFile)

            if (error) {
                alert("เกิดข้อผิดพลาดในการอัปโหลดรูป กรุณาลองใหม่อีกครั้ง!!!")
                return;
            } else {
                const { data } = supabase.storage
                    .from('BK_TASK')
                    .getPublicUrl(newImageFile)

                imageUrl = data.publicUrl
            }
        }

        const { error } = await supabase
            .from('TB_TASK')
            .update({
                task_title: title,
                task_detail: detail,
                task_is_completed: isComplete,
                task_img_url: imageUrl
            })
            .eq('task_id', id)

        if (error) {
            alert('เกิดข้อผิดพลาดในการบันทึกแก้ไขข้อมูล กรุณาลองใหม่อีกครั้ง!!!')
            return
        } else {
            alert('บันทึกแก้ไขข้อมูลเรียบร้อยแล้ว!!!')
            window.location.href = '/showalltask'
        }
    }

    return (
        <div>
            <div className="w-8/12 border-gray-300 shadow-md rounded p-5 
                      mx-auto mt-20 flex flex-col items-center">

                <img src={taskimg} alt="Task" className="w-30 mb-4" />

                <h1 className="text-2xl font-bold text-gray-800 text-center">
                    Task Application
                    <br />
                    -- แก้ไขข้อมูลงาน --
                </h1>

                <form onSubmit={handleUpdateClick} className='w-full mt-10'>
                    <div>
                        <label>ชื่องาน</label>
                        <input value={title} onChange={(e) => { setTitle(e.target.value) }}
                            placeholder='ป้อนชื่องานที่ต้องทำ'
                            type="text" className='w-full border border-gray-400 p-2 rounded' />
                    </div>

                    <div className='mt-5'>
                        <label>รายละเอียดงาน</label>
                        <input value={detail} onChange={(e) => { setDetail(e.target.value) }}
                            placeholder='ป้อนรายละเอียดงานที่ต้องทำ'
                            type="text" className='w-full border border-gray-400 p-2 rounded' />
                    </div>

                    <div className='mt-8'>
                        <label>เลือกรูปงาน</label>
                        <input type="file" onChange={handleImageSelect}
                            id="imageSelect" className='hidden' accept="image/*" />
                        <label htmlFor="imageSelect"
                            className='w-full bg-blue-500  hover:bg-blue-700 
                              text-white p-2 rounded cursor-pointer ml-5 '>
                            เลือกรูปงาน
                        </label>
                        <div className='mt-5'>
                            {
                                imagePreview &&
                                <img src={imagePreview} alt="Preview" className="w-30 mt-2" />
                            }
                        </div>
                    </div>

                    <div className='mt-5'>
                        <label>สถานะงาน</label>
                        <select value={isComplete == false ? '0' : '1'}
                            onChange={(e) => { setIsComplete(e.target.value == '1' ? true : false) }}
                            className='w-full p-2 border border-gray-400 rounded'>
                            <option value="1">✅ เสร็จแล้ว</option>
                            <option value="0">❌ยังไม่เสร็จ</option>
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
    )
}

export default UpdateTask