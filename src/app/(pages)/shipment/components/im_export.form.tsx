import React, { useState } from "react";

const ImportExportForm = () => {
  const [day, setDay] = useState("");
  const [day1, setDay1] = useState("");
  const handleDay = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDay(event.target.value);
  };

  const handleDay1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDay1(event.target.value);
  };
  return (
    <div className="flex items-center">
      <div>
        <div className="w-1/4">
          <input
            className="border-dotted border-b-2 m-w-full py-1 outline-none"
            value={day}
            onChange={handleDay}
          />
        </div>
        <input
          className="border-dotted border-b-2 m-w-full py-1 outline-none"
          value={day1}
          onChange={handleDay1}
        />
      </div>
      <div className="w-full">
        <h2 className="text-center font-bold">
          CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM
        </h2>
        <h5 className="text-center font-bold">Độc lập - Tự do - Hạnh phúc</h5>
      </div>
    </div>
  );
};

export default ImportExportForm;
