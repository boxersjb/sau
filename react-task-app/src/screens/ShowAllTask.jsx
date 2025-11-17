import React from 'react'
import Footer from '../components/Footer'
import task from '../assets/task.png'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { supabase } from '../libs/supabaseClient.js'

function ShowAllTask() {

    const [tasks, setTasks] = useState([])

    useEffect(() => {
        try {
            const fetchTasks = async () => {
                const { data, error } = await supabase
                    .from('TB_TASK')
                    .select("*")
                    .order('task_update_at', { ascending: false })
                if (error) {
                    alert("เกิดข้อผิดพลาดในการดึงข้อมูลงาน กรุณาลองใหม่อีกครั้ง!!!")
                    throw error
                } else {
                    setTasks(data)
                }
            }

            fetchTasks()
        } catch (error) {
            alert("เกิดข้อผิดพลาดในการดึงข้อมูลงาน กรุณาลองใหม่อีกครั้ง!!!")
            console.log("Error fetching tasks:", error)
        }
    }, [])

    const handleDeleteClick = async (id, imageUrl) => {
        if (confirm('ต้องการลบข้อมูลใช่หรือไม่?') == true) {
            if (imageUrl != '') {
                const imageName = imageUrl.split('/').pop()
                await supabase.storage.from('BK_TASK').remove([imageName])
            }

            const { data, error } = await supabase.from('TB_TASK').delete().eq('task_id', id)

            if (error) {
                alert("เกิดข้อผิดพลาดในการลบข้อมูลงาน กรุณาลองใหม่อีกครั้ง!!!")
                return
            } else {
                alert("ลบข้อมูลงานเรียบร้อยแล้ว")
                setTasks(tasks.filter(task => task.task_id !== id))
            }
        }
    }

    return (
        <>
            <div className="w-8/12 border-gray-300 shadow-md rounded p-5
                      mx-auto mt-20 flex flex-col items-center">

                <img src={task} alt="Task" className="w-30 mb-4" />

                <h1 className="text-2xl font-bold text-gray-800 text-center">
                    Task Application
                    <br />
                    -- ข้อมูลงานทั้งหมด --
                </h1>

                <div className="w-full flex justify-end mt-4 mb-7">
                    <Link to="/addtask" className="bg-blue-500 hover:bg-blue-600
                                           cursor-pointer p-3 text-white rounded">
                        เพิ่มงานใหม่
                    </Link>
                </div>

                <div className="w-full">
                    <table className="w-full border border-gray-700 text-sm">
                        <thead className="bg-gray-200">
                            <tr>
                                <th className="p-2 border border-gray-700">รูป</th>
                                <th className="p-2 border border-gray-700">ชื่องาน</th>
                                <th className="p-2 border border-gray-700">รายละเอียดงาน</th>
                                <th className="p-2 border border-gray-700">สถานะงาน</th>
                                <th className="p-2 border border-gray-700">วันที่สร้างงาน</th>
                                <th className="p-2 border border-gray-700">วันที่อัพเดทงาน</th>
                                <th className="p-2 border border-gray-700">จัดการ</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                tasks.map((task) => (
                                    <tr key={task.task_id}>
                                        <td className="p-2 border border-gray-700">
                                            {
                                                task.image_url === null || task.image_url === ''
                                                    ? <img className='w-20 mx-auto'
                                                        src={task} alt="รูปงาน" />
                                                    : <img className='w-20 mx-auto'
                                                        src={task.task_img_url} alt="รูปงาน" />
                                            }
                                        </td>
                                        <td className="p-2 border border-gray-700">{task.task_title}</td>
                                        <td className="p-2 border border-gray-700">{task.task_detail}</td>
                                        <td className="p-2 border border-gray-700 text-center">
                                            {
                                                task.task_is_completed == true
                                                    ? <span className='text-green-500'>✅งานเสร็จแล้ว</span>
                                                    : <span className='text-red-500'>❌งานยังไม่เสร็จ</span>
                                            }
                                        </td>
                                        <td className="p-2 border border-gray-700 text-center">
                                            {new Date(task.task_created_at).toLocaleDateString('th-TH', {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric'
                                            })}
                                        </td>
                                        <td className="p-2 border border-gray-700 text-center">
                                            {new Date(task.task_update_at).toLocaleDateString('th-TH', {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric'
                                            })}
                                        </td>
                                        <td className="p-2 border border-gray-700 text-center">
                                            <Link to={'/updatetask/' + task.task_id} className='text-green-400 mr-2'>แก้ไข</Link>
                                            <button onClick={() => handleDeleteClick(task.task_id, task.task_img_url)} className='text-red-400 ml-2 cursor-pointer'> ลบ</button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default ShowAllTask