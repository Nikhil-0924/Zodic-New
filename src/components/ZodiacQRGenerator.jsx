const zodiacData = {
    "Mesha": { adayam: 2, vyayam: 14, rajapujyam: 5, avamanam: 7 },
    "Vrushabha": { adayam: 11, vyayam: 2, rajapujyam: 1, avamanam: 3 },
    "Mithuna": { adayam: 10, vyayam: 5, rajapujyam: 2, avamanam: 4 },
    "Karkataka": { adayam: 8, vyayam: 2, rajapujyam: 7, avamanam: 3 },
    "Simha": { adayam: 11, vyayam: 11, rajapujyam: 3, avamanam: 6 },
    "Kanya": { adayam: 14, vyayam: 2, rajapujyam: 4, avamanam: 6 },
    "Tula": { adayam: 11, vyayam: 5, rajapujyam: 2, avamanam: 2 },
    "Vrushika": { adayam: 2, vyayam: 14, rajapujyam: 5, avamanam: 2 },
    "Dhanus": { adayam: 5, vyayam: 5, rajapujyam: 1, avamanam: 5 },
    "Makara": { adayam: 8, vyayam: 14, rajapujyam: 4, avamanam: 5 },
    "Kumbha": { adayam: 8, vyayam: 14, rajapujyam: 7, avamanam: 5 },
    "Meena": { adayam: 5, vyayam: 5, rajapujyam: 3, avamanam: 1 }
  };
  
  export default function ZodiacQRGenerator() {
    const [selectedZodiac, setSelectedZodiac] = useState("Mesha");
  
    const handleSelectChange = (event) => {
      setSelectedZodiac(event.target.value);
    };
  
    return (
      <div className="flex flex-col items-center p-6">
        <h1 className="text-xl font-bold mb-4">Zodiac QR Code Generator</h1>
        <Select onChange={handleSelectChange} className="mb-4">
          {Object.keys(zodiacData).map((zodiac) => (
            <option key={zodiac} value={zodiac}>{zodiac}</option>
          ))}
        </Select>
        <Card className="mb-4 p-4 w-80">
          <CardContent>
            <h2 className="text-lg font-semibold">{selectedZodiac}</h2>
            <p>Adayam: {zodiacData[selectedZodiac].adayam}</p>
            <p>Vyayam: {zodiacData[selectedZodiac].vyayam}</p>
            <p>Rajapujyam: {zodiacData[selectedZodiac].rajapujyam}</p>
            <p>Avamanam: {zodiacData[selectedZodiac].avamanam}</p>
          </CardContent>
        </Card>
        <QRCode value={JSON.stringify({ zodiac: selectedZodiac, ...zodiacData[selectedZodiac] })} size={200} />
        <Button className="mt-4" onClick={() => window.print()}>Print QR Code</Button>
      </div>
    );
  }