import data from "../../data/index.json";

export default function Languages() {
  return (
    <section className="skills--section" id="mySkills">
      <div className="portfolio--container">
        <p className="section--title">My Skills</p>
        <h4 className="languages--section--heading">Languages</h4>
      </div>
      <div className="languages--section--container">
        {data?.languages.map((item, index) => (
          <div key={index} className="languages--section--card">
            <div className="languages--section--img">
              <img src={item.src} alt="Product Chain" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
