// This is a static page mocking an "About Us" section for our fake user data
export default function AboutMePage() {
    return (
      <div className="">
         <h3>About Me</h3>
         {/* add photo here */}
         <img src="../../../../src/assets/img/david.png" class="card-img" alt="..." />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          tenetur maiores, dolor iusto dolorum ullam, natus deleniti blanditiis
          impedit suscipit sed magnam alias in, repellat expedita hic explicabo
          architecto soluta. About us Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Velit voluptate exercitationem quaerat pariatur
          mollitia, excepturi, voluptatem eveniet a dolor nobis ex veniam totam
          nostrum temporibus ad omnis nam rerum eligendi.
        </p>
      </div>
    );
  }
  