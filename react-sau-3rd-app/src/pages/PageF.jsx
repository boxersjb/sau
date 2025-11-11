import React, { useState } from 'react';

// ตัวเลือกสำหรับเพศ
const genderOptions = ["ชาย", "หญิง", "LGBTQ+"];

// ตัวเลือกสำหรับจังหวัด
const provinceOptions = [
  "กรุงเทพ",
  "เชียงใหม่",
  "เชียงราย",
  "ภูเก็ต",
  "นครพนม"
];

// ค่าเริ่มต้นสำหรับฟอร์ม
const initialFormState = {
  fullName: '',
  age: '',
  gender: '',
  province: ''
};

// ค่าเริ่มต้นสำหรับข้อมูลที่จะแสดงผล
const initialDisplayState = {
  fullName: '-',
  age: '-',
  gender: '-',
  province: '-'
};

/**
 * Component PageF: ฟอร์มสำหรับรับข้อมูลชื่อ, อายุ, เพศ, และจังหวัด
 * พร้อมปุ่มสำหรับแสดงผลและล้างข้อมูล
 */
export default function PageF() {
  // State สำหรับเก็บข้อมูลในฟอร์ม
  const [formData, setFormData] = useState(initialFormState);
  
  // State สำหรับเก็บข้อมูลที่จะแสดงผล
  const [displayData, setDisplayData] = useState(initialDisplayState);

  /**
   * จัดการการเปลี่ยนแปลงค่าใน input, select
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  /**
   * จัดการการคลิกปุ่ม "แสดงข้อมูล" (Submit form)
   */
  const handleSubmit = (e) => {
    e.preventDefault(); // ป้องกันการโหลดหน้าใหม่
    // ตรวจสอบว่าเลือกจังหวัดหรือยัง
    if (formData.province === "") {
      // อาจจะแสดง alert หรือข้อความเตือน
      // ในที่นี้เราจะอนุญาตให้ส่งได้ แต่จังหวัดจะเป็นค่าว่าง
    }
    setDisplayData(formData);
  };

  /**
   * จัดการการคลิกปุ่ม "ล้างข้อมูล"
   */
  const handleClear = () => {
    setFormData(initialFormState); // รีเซ็ตฟอร์ม
    setDisplayData(initialDisplayState); // รีเซ็ตการแสดงผล
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-2xl p-6 md:p-8 bg-white rounded-2xl shadow-xl">
        
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          ฟอร์มข้อมูลส่วนตัว (PageF)
        </h1>

        {/* ส่วนของฟอร์ม */}
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* ชื่อ-สกุล */}
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
              ชื่อ-สกุล
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="กรุณากรอกชื่อและนามสกุล"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          {/* อายุ */}
          <div>
            <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">
              อายุ
            </label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              placeholder="กรุณากรอกอายุ"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              min="0"
              required
            />
          </div>

          {/* เพศ */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              เพศ
            </label>
            <div className="flex flex-wrap gap-4">
              {genderOptions.map((gender) => (
                <label key={gender} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="gender"
                    value={gender}
                    checked={formData.gender === gender}
                    onChange={handleChange}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                    required
                  />
                  <span className="text-gray-700">{gender}</span>
                </label>
              ))}
            </div>
          </div>

          {/* จังหวัด */}
          <div>
            <label htmlFor="province" className="block text-sm font-medium text-gray-700 mb-1">
              จังหวัด
            </label>
            <select
              id="province"
              name="province"
              value={formData.province}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            >
              <option value="">-- กรุณาเลือกจังหวัด --</option>
              {provinceOptions.map((province) => (
                <option key={province} value={province}>
                  {province}
                </option>
              ))}
            </select>
          </div>

          {/* ปุ่ม */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              type="submit"
              className="w-full sm:w-1/2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-200"
            >
              แสดงข้อมูล
            </button>
            <button
              type="button"
              onClick={handleClear}
              className="w-full sm:w-1/2 px-6 py-3 bg-gray-400 text-white font-semibold rounded-lg shadow-md hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 transition duration-200"
            >
              ล้างข้อมูล
            </button>
          </div>
        </form>

        {/* ส่วนแสดงผลข้อมูล */}
        <div className="mt-10 pt-6 border-t border-gray-200">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
            ข้อมูลที่แสดงผล
          </h2>
          <div className="bg-gray-50 p-6 rounded-lg shadow-inner space-y-4">
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-4 gap-y-2">
              <span className="font-medium text-gray-600 sm:col-span-1">ชื่อ-สกุล:</span>
              <span className="text-gray-900 font-semibold sm:col-span-2">{displayData.fullName}</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-4 gap-y-2">
              <span className="font-medium text-gray-600 sm:col-span-1">อายุ:</span>
              <span className="text-gray-900 font-semibold sm:col-span-2">{displayData.age}</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-4 gap-y-2">
              <span className="font-medium text-gray-600 sm:col-span-1">เพศ:</span>
              <span className="text-gray-900 font-semibold sm:col-span-2">{displayData.gender}</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-4 gap-y-2">
              <span className="font-medium text-gray-600 sm:col-span-1">จังหวัด:</span>
              <span className="text-gray-900 font-semibold sm:col-span-2">{displayData.province}</span>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
