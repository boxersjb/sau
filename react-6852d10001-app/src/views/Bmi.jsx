import React, { use } from 'react'
import { Link } from 'react-router-dom'
import styles from './Form.module.css'
import { useState } from 'react'

function Bmi() {
  const [weightKG, setWeightKG] = useState('');
  const [heightCM, setHeightCM] = useState('');
  const [showResult, setShowResult] = useState('0.00');


  const submitCalc = (e) => {
    if (weightKG == '' || heightCM == '') {
      alert('Input Weight or Height!!')
      return;
    }
    let result = weightKG / ((heightCM / 100) ** 2);
    setShowResult(result.toFixed(2));
  }
  const resetForm = () => {
    setHeightCM('');
    setWeightKG('');
    setShowResult('0.00')
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.mainContent}>
          <div className={styles.boxHeader}>
            <h1>BMI Calculator</h1>
            <p>คำนวณ BMI</p>
          </div>

          <div className={styles.boxImg}>
            <img src="./bmi.png" alt="" />
          </div>

          <div className={styles.boxForm}>
            <div className={styles.lblSub}>
              <label htmlFor="">ป้อนน้ำหนัก (กิโลกรัม)</label>
            </div>
            <input value={weightKG} onChange={(e) => { setWeightKG(e.target.value) }} className={styles.ipText} type="text" placeholder="เช่น 65" />
          </div>

          <div className={styles.boxForm}>
            <div className={styles.lblSub}>
              <label htmlFor="">ป้อนส่วนสูง (เซนติเมตร)</label>
            </div>
            <input value={heightCM} onChange={(e) => { setHeightCM(e.target.value) }} className={styles.ipText} type="text" placeholder="เช่น 170" />
          </div>

          <div className={styles.grpBtn}>
            <button onClick={submitCalc} className={`${styles.btn} ${styles.btnSubmit}`}>คำนวณ BMI</button>
            <button onClick={resetForm} className={`${styles.btn} ${styles.btnReset}`}>รีเซ็ท</button>

            <div className={styles.lblCalc}>
              <label htmlFor="">ค่า BMI ที่คำนวณได้: </label>
              <label className={styles.result} htmlFor="">
                {showResult}
              </label>
            </div>

            <Link to="/"><button className={`${styles.btn} ${styles.btnHome}`}>กลับหน้าหลัก</button></Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Bmi