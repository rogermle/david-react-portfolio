import { Link } from 'react-router-dom';

export default function ResumePage() {

  return (
    <div className="">
      <h3>Resume</h3>
      {/* <Link to={`../../../../src/assets/david-cartolano-resume.pdf`} className="badge bg-primary rounded-pill">
        Download my resume
      </Link> */}
      <a href="../../../../src/assets/david-cartolano-resume.pdf" download>Download my resume</a>
      <ul className="">
        <h5>Front-end Proficiencies</h5>
        <li className="">HTML</li>
        <li className="">CSS</li>
        <li className="">JavScript</li>
        <li className="">React</li>
        <li className="">Bootstrap</li>
        <li className="">Responsive Design</li>
      </ul>
      <ul className="">
        <h5>Back-end Proficiencies</h5>
        <li className="">APIs</li>
        <li className="">Node</li>
        <li className="">Express</li>
        <li className="">SQL</li>
      </ul>
    </div>

  );
}