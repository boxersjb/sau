import React from "react";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.imgHeader}>
          <img src="./calc.png" alt="" />
        </div>
        <h1>เครื่องมือคำนวณออนไลน์</h1>
        <p>เลือกการคำนวณที่คุณต้องการจากรายการด้านล่าง</p>

        <div className={styles.colTb}>
          <Link to="/bmi">
            <div className={styles.tbItem}>
              <div className={styles.imgTb}>
                <img src="./bmi.png" alt="" />
              </div>
              <h2>BMI (ดัชนีมวลกาย)</h2>
              <p>คำนวณว่าน้ำหนักของคุณเหมาะสมกับส่วนสูงหรือไม่</p>
            </div>
          </Link>

          <Link to="/bmr">
            <div className={styles.tbItem}>
              <div className={styles.imgTb}>
                <img src="./bmr.png" alt="" />
              </div>
              <h2>BMR (อัตราการเผาผลาญ)</h2>
              <p>คำนวณพลังงานขั้นต่ำที่ร่างกายต้องการในแต่ละวัน</p>
            </div>
          </Link>

          <Link to="/car">
            <div className={styles.tbItem}>
              <div className={styles.imgTb}>
                <img src="./car.png" alt="" />
              </div>
              <h2>การผ่อนชำระรถยนต์</h2>
              <p>คำนวณยอดผ่อนต่อเดือนและดอกเบี้ยรถยนต์</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
