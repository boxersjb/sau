import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Form.module.css';

const genderOptions = ['ชาย', 'หญิง']; // ย้ายออกนอก component

function BMR() {
  const [weightKG, setWeightKG] = useState('');
  const [heightCM, setHeightCM] = useState('');
  const [ageY, setAgeY] = useState('');
  const [showResult, setShowResult] = useState(0);

  const [formData, setFormData] = useState({ gender: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const submitCalc = (e) => {
    e.preventDefault();

    const w = parseFloat(weightKG);
    const h = parseFloat(heightCM);
    const a = parseFloat(ageY);

    // ตรวจค่าว่าง/ไม่ใช่ตัวเลข/ค่าติดลบหรือศูนย์
    if (!Number.isFinite(w) || !Number.isFinite(h) || !Number.isFinite(a) || w <= 0 || h <= 0 || a <= 0) {
      alert('กรุณากรอกน้ำหนัก ส่วนสูง และอายุ เป็นตัวเลขมากกว่า 0');
      return;
    }

    if (!formData.gender) {
      alert('กรุณาเลือกเพศ');
      return;
    }

    let result;
    if (formData.gender === 'ชาย') {
      result = 66 + (13.7 * w) + (5 * h) - (6.8 * a);
    } else {
      result = 665 + (9.6 * w) + (1.8 * h) - (4.7 * a);
    }

    setShowResult(result);
  };

  const resetForm = () => {
    setHeightCM('');
    setWeightKG('');
    setAgeY('');
    setShowResult(0);
    setFormData({ gender: '' });
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.mainContent}>
          <div className={styles.boxHeader}>
            <h1>BMR Calculator</h1>
            <p>คำนวณ BMR</p>
          </div>

          <div className={styles.boxImg}>
            <img src="./bmr.png" alt="" />
          </div>

          <form onSubmit={submitCalc}>
            <div className={styles.boxForm}>
              <div className={styles.lblSub}>
                <label>ป้อนน้ำหนัก (กิโลกรัม)</label>
              </div>
              <input
                value={weightKG}
                onChange={(e) => setWeightKG(e.target.value)}
                className={styles.ipText}
                type="number"
                min="1"
                step="0.1"
                inputMode="decimal"
              />
            </div>

            <div className={styles.boxForm}>
              <div className={styles.lblSub}>
                <label>ป้อนส่วนสูง (เซนติเมตร)</label>
              </div>
              <input
                value={heightCM}
                onChange={(e) => setHeightCM(e.target.value)}
                className={styles.ipText}
                type="number"
                min="1"
                step="0.1"
                inputMode="decimal"
              />
            </div>

            <div className={styles.boxForm}>
              <div className={styles.lblSub}>
                <label>ป้อนอายุ (ปี)</label>
              </div>
              <input
                value={ageY}
                onChange={(e) => setAgeY(e.target.value)}
                className={styles.ipText}
                type="number"
                min="1"
                step="1"
                inputMode="numeric"
              />
            </div>

            <div className={styles.boxForm}>
              <div className={styles.lblSub}>
                <label>เลือกเพศ</label>
              </div>
              <div className={styles.grpRadio}>
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

            <div className={styles.grpBtn}>
              <div className={styles.btnDuo}>
                <button type="submit" className={`${styles.btn} ${styles.btnSubmit}`}>คำนวณ BMR</button>
                <button type="button" onClick={resetForm} className={`${styles.btn} ${styles.btnResetBMR}`}>รีเซ็ท BMR</button>
              </div>

              <div className={styles.lblCalc}>
                <label>ค่า BMR ที่คำนวณได้: </label>
                <label className={styles.result}>{showResult.toFixed(2)}</label>
              </div>

              <Link to="/">
                <button type="button" className={`${styles.btn} ${styles.btnHome}`}>กลับหน้าหลัก</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default BMR;
