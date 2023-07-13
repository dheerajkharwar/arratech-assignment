// import logo from './logo.svg';
import "./App.css";

function App() {
  return (
    <>
      <div class="header">
        <h2>Blog Name</h2>
      </div>

      <div class="row">
        <div class="leftcolumn">
          <div class="card">
            <h2>India's Age Concern</h2>
            <h5>India's Age Concern, Dec 7, 2017</h5>
            <div class="fakeimg h2">
              <img
                src="https://www.themintmagazine.com/wp-content/uploads/2022/09/pexels-neosiam-618116-300x186.jpg"
                alt="India's age concern"
              />
            </div>
            <p>
              One of India’s greatest assets is youth. Jayan Jose Thomas calls
              for changes in established thinking to harness its potential.
              India, like many South Asian countries, has a young population.
            </p>

            <div class="a2a_kit a2a_kit_size_32 a2a_default_style">
              <a
                class="btn btn-primary"
                target="_blank"
                href="https://www.addtoany.com/share?linkurl=https://www.themintmagazine.com/wp-content/uploads/2022/09/pexels-neosiam-618116-300x186.jpg&type=page&linkname=India's Age Concern&linknote="
              >
                Share
              </a>
            </div>
          </div>
          <div class="card">
            <h2>Ifs and Buts of Hydrogen</h2>
            <h5>Ifs and Buts of Hydrogen, Sep 2, 2017</h5>
            <div class="fakeimg h2">
              <img
                src="https://www.themintmagazine.com/wp-content/uploads/2022/03/pexels-pixabay-266896-300x225.jpg"
                alt="India's age concern"
              />
            </div>
            <p>
              Hydrogen may be useful, but how green can it really be? asks
              Roland Kupers. It has been used for centuries: from lifting the
              balloon that Jacques Charles floated over Paris
            </p>
          </div>
        </div>
        <div class="rightcolumn">
          <div class="card">
            <h2>About Me</h2>
            <div class="fakeimg h1">Image</div>
            <p>
              Some text about me in culpa qui officia deserunt mollit anim..
            </p>
          </div>
          <div class="card">
            <h3>Popular Post</h3>
            <div class="fakeimg">Image</div>
            <br></br>
            <div class="fakeimg">Image</div>
            <br></br>
            <div class="fakeimg">Image</div>
          </div>
          <div class="card">
            <h3>Follow Me</h3>
            <p>Some text..</p>
          </div>
        </div>
      </div>

      <div class="footer">
        <h2>Footer</h2>
      </div>
    </>
  );
}

export default App;
