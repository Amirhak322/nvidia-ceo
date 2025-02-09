import { useState } from "react";
import nvidiaCEO from "./assets/gen-soo-hwang-nvidia.webp";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="card ">
        <img src={nvidiaCEO} className="card__pic" alt="card pic" />
        <div className="card__details">
          <h2 className="card__name">جن سون هوانگ</h2>
          <h3 className="card__job">مدیرعامل شرکت انویدیا</h3>
          <p className="card__explanation">
            کارآفرین سرمایه دار و مدیر اجرایی آمریکایی تایوانی تبار است، هم
            اکنون به عنوان مدیر عامل شرکت انویدیا فعالیت میکند
          </p>
          <button className="btn btn--blue">مشاهده بیشتر</button>
        </div>
      </div>
    </>
  );
}

export default App;
