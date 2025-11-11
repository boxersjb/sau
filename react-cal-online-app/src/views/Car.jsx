import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Form.module.css';

function Car() {
  const [carPrice, setCarPrice] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [downPayment, setDownPayment] = useState('');
  const [installmentMonths, setInstallmentMonths] = useState('24');
  const [showResult, setShowResult] = useState('0.00');
  const [userName, setUserName] = useState('');

  const handleDownChange = (e) => {
    setDownPayment(e.target.value);
  };

  const submitCalc = (e) => {
    e.preventDefault();

    const price = parseFloat(carPrice);
    const rate = parseFloat(interestRate) / 100;
    const down = parseFloat(downPayment) / 100;
    const months = parseFloat(installmentMonths);

    if (!price || !rate || !down || !months) {
      alert('กรุณากรอกข้อมูลให้ครบ');
      return;
    }

    // 1. ยอดจัดไฟแนนซ์
    const financeAmount = price - (price * down);

    // 2. ดอกเบี้ยทั้งหมด
    const totalInterest = financeAmount * rate * (months / 12);

    // 3. ยอดรวมทั้งหมดที่ต้องผ่อน
    const totalPayment = financeAmount + totalInterest;

    // 4. ค่างวดต่อเดือน
    const monthlyPayment = totalPayment / months;

    setShowResult(monthlyPayment.toFixed(2));
    //alert  `${financeAmount} ${totalInterest} ${totalPayment} ${monthlyPayment}`;
  };

  const resetForm = () => {
    setUserName('');
    setCarPrice('');
    setInterestRate('');
    setDownPayment('');
    setInstallmentMonths('');
    setShowResult('0.00');
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.mainContent}>
          <div className={styles.boxHeader}>
            <h1>Car Installment Calculator</h1>
            <p>คำนวณ Car Installment</p>
          </div>

          <div className={styles.boxImg}>
            <img src="./car.png" alt="" />
          </div>

          <div className={styles.boxForm}>
            <div className={styles.lblSub}>
              <label>ชื่อผู้คำนวณ</label>
            </div>
            <input
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className={styles.ipText}
              type="text"
            />
          </div>

          <div className={styles.boxForm}>
            <div className={styles.lblSub}>
              <label>ราคารถ (บาท)</label>
            </div>
            <input
              value={carPrice}
              onChange={(e) => setCarPrice(e.target.value)}
              className={styles.ipText}
              type="number"
              min="0"
            />
          </div>

          <div className={styles.boxForm}>
            <div className={styles.lblSub}>
              <label>ดอกเบี้ยต่อปี (%)</label>
            </div>
            <input
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
              className={styles.ipText}
              type="number"
              min="0"
              step="0.01"
            />
          </div>

          <div className={styles.boxForm}>
            <div className={styles.lblSub}>
              <label>เงินดาวน์ (%)</label>
            </div>
            <div className={styles.grpRadio}>
              {[15, 20, 25, 30, 35].map((per) => (
                <label key={per}>
                  <input
                    type="radio"
                    name="per"
                    value={per}
                    checked={downPayment === String(per)}
                    onChange={handleDownChange}
                  />
                  {per}%
                </label>
              ))}
            </div>
          </div>

          <div className={styles.boxForm}>
            <div className={styles.lblSub}>
              <label>ระยะเวลาผ่อนชำระ (เดือน)</label>
            </div>
            <select
              value={installmentMonths}
              onChange={(e) => setInstallmentMonths(e.target.value)}
              className={styles.ipText}
            >
              <option value="24">24 เดือน</option>
              <option value="36">36 เดือน</option>
              <option value="48">48 เดือน</option>
              <option value="60">60 เดือน</option>
              <option value="72">72 เดือน</option>
              <option value="84">84 เดือน</option>
            </select>
          </div>

          <div className={styles.grpBtn}>
            <div className={styles.btnDuo}>
              <button onClick={submitCalc} className={`${styles.btn} ${styles.btnSubmit}`}>
                คำนวณ
              </button>
              <button onClick={resetForm} className={`${styles.btn} ${styles.btnReset}`}>
                ล้างข้อมูล
              </button>
            </div>

            <div className={styles.lblCalc}>
              <label>ผ่อนชำระเดือนละ: </label>
              <label className={styles.result}>{showResult}</label>
            </div>

            <Link to="/">
              <button className={`${styles.btn} ${styles.btnHome}`}>กลับหน้าหลัก</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Car;
