import React, { useState } from "react";

const zodiacData = {
  "Mesham": { adayam: 2, vyayam: 14, rajapujyam: 5, avamanam: 7 },
  "Vrishabham": { adayam: 11, vyayam: 5, rajapujyam: 1, avamanam: 3 },
  "Mithunam": { adayam: 10, vyayam: 6, rajapujyam: 2, avamanam: 3 },
  "Karkatakam": { adayam: 8, vyayam: 2, rajapujyam: 7, avamanam: 6 },
  "Simham": { adayam: 11, vyayam: 11, rajapujyam: 3, avamanam: 6 },
  "Kanya": { adayam: 14, vyayam: 2, rajapujyam: 6, avamanam: 6 },
  "Tula": { adayam: 11, vyayam: 5, rajapujyam: 2, avamanam: 2 },
  "Vrischikam": { adayam: 2, vyayam: 14, rajapujyam: 5, avamanam: 2 },
  "Dhanus": { adayam: 5, vyayam: 5, rajapujyam: 5, avamanam: 5 },
  "Makaram": { adayam: 8, vyayam: 14, rajapujyam: 4, avamanam: 5 },
  "Kumbham": { adayam: 8, vyayam: 14, rajapujyam: 7, avamanam: 5 },
  "Meenam": { adayam: 5, vyayam: 5, rajapujyam: 3, avamanam: 1 }
};

const ZodiacApp = () => {
  const [selectedZodiac, setSelectedZodiac] = useState("Meenam");

  return (
    <div className="p-4 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Select Your Zodiac Sign</h1>
      <div className="flex gap-2 flex-wrap justify-center mb-4">
        {Object.keys(zodiacData).map((zodiac) => (
          <button
            key={zodiac}
            onClick={() => setSelectedZodiac(zodiac)}
            className={`px-4 py-2 rounded-lg border ${
              selectedZodiac === zodiac ? "border-black font-bold" : "border-gray-400"
            }`}
          >
            {zodiac}
          </button>
        ))}
      </div>
      <div className="border p-4 rounded-lg shadow-lg w-64 text-center">
        <h2 className="text-xl font-semibold mb-2">{selectedZodiac}</h2>
        <p>Adayam: {zodiacData[selectedZodiac].adayam}</p>
        <p>Vyayam: {zodiacData[selectedZodiac].vyayam}</p>
        <p>Rajapujyam: {zodiacData[selectedZodiac].rajapujyam}</p>
        <p>Avamanam: {zodiacData[selectedZodiac].avamanam}</p>
      </div>
    </div>
  );
};

export default ZodiacApp;
