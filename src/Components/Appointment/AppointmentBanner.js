import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

import chair from "../../../../doctors_portal_client/src/assets/images/chair.png";

const AppointmentBanner = ({ date, setDate }) => {
  return (
    <div>
      <div className="flex justify-center items-center min-h-screen">
        <div className="hero-content flex-1">
          <img
            src={chair}
            className="max-w-lg rounded-lg shadow-2xl"
            alt="chair-dentist"
          />
        </div>
        <div className="flex-1">
          <DayPicker mode="single" selected={date} onSelect={setDate} />
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
