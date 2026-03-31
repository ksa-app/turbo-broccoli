import "./VisaCard.css";

export default function VisaCard() {
  return (
    <div className="visa-card">
      <div className="visa-header">
        <div className="left">
          <h2>VISA</h2>
        </div>
        <div className="right">
          Ministry of Foreign Affairs
          <br />
          Kingdom of Saudi Arabia
        </div>
      </div>

      <div className="visa-body">
        <div className="photo">
          <img src="photo.jpg" alt="Photo" />
        </div>

        <div className="info">
          <div className="row">
            <div className="label">Visa No.</div>
            <div className="value">6163672829</div>
          </div>
          <div className="row">
            <div className="label">Religion</div>
            <div className="value">Islam</div>
          </div>
          <div className="row">
            <div className="label">Passport Expiry</div>
            <div className="value">13/10/2035</div>
          </div>
          <div className="row">
            <div className="label">Nationality</div>
            <div className="value">Bangladesh</div>
          </div>
          <div className="row">
            <div className="label">Date of Birth</div>
            <div className="value">10/10/2002</div>
          </div>
          <div className="row">
            <div className="label">Sex</div>
            <div className="value">Male</div>
          </div>
        </div>
      </div>

      <div className="mrz">
        &lt;BGDHAQUE&lt;&lt;MD NAZMUL &lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;
        <br />
        A20526247BGD15052000103092033&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;02
      </div>

      <div className="status">Valid</div>
    </div>
  );
}
