import React from "react";
import style from "./Developers.module.css";
import { Envelope, Book } from "react-bootstrap-icons";

const Developers = () => {
  return (
    <div className={style.cards}>
      <div className={style.cardContainer}>
        <div className={style.thecard}>
          <div className={style.thefront}>
            <img
              src="https://media-exp1.licdn.com/dms/image/C4D03AQFacTu2x4PUDg/profile-displayphoto-shrink_800_800/0/1624276145520?e=1637193600&v=beta&t=oxvlxmUFmjyqyrJ4O3YupJ-Ed3JwQC6oFjIYNotdreo"
              className={style.avatar}
            />
            <div className={style.frontname}>Sonja Musicki</div>
          </div>
          <div className={style.theback}>
            <div className={style.candidateInfo}>
              <h5 className={style.name}>Sonja Musicki</h5>
              <div className={style.backinfo}>
                  <Envelope /> E-mail: <br/>
                  sonja.musicki@gmail.com <br/>
                  <Book/> Education: <br/>
                  Belgrade Institute of <br/> Technology
                  </div>
              <button type="button" className="btn btn-primary">
                <a
                  href="https://www.linkedin.com/in/sonja-musicki-novi-sad/"
                  target="_blank"
                >
                  Visit profile
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={style.cardContainer}>
        <div className={style.thecard}>
          <div className={style.thefront}>
            <img
              src="https://media-exp1.licdn.com/dms/image/D5635AQHdsXJRVrhLjw/profile-framedphoto-shrink_800_800/0/1628612576417?e=1631984400&v=beta&t=gzTB8htglSjTjnntObrMbhbzyWlnD6Ybw2zeArFO6GA"
              className={style.avatar}
            />
            <div className={style.frontname}>Nikola Draganic</div>
          </div>
          <div className={style.theback}>
            <div className={style.candidateInfo}>
              <h5 className={style.name}>Nikola Draganic</h5>
              <div className={style.backinfo}>
                  <Envelope /> E-mail: <br/>
                  draganic69@gmail.com <br/>
                  <Book/> Education: <br/>
                  Belgrade Institute of <br/> Technology
                  </div>
              <button type="button" className="btn btn-primary">
                <a
                  href="https://www.linkedin.com/in/draganic69/"
                  target="_blank"
                >
                  Visit profile
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={style.cardContainer}>
        <div className={style.thecard}>
          <div className={style.thefront}>
            <img
              src="https://media-exp1.licdn.com/dms/image/C5603AQEBhYg2VHuuJw/profile-displayphoto-shrink_800_800/0/1520870684400?e=1637193600&v=beta&t=0-1geCM8IMLAZB-al6QzzXQjnLt9eJYPsgMwzv_5-r8"
              className={style.avatar}
            />
            <div className={style.frontname}>Dragana Bogicevic</div>
          </div>
          <div className={style.theback}>
            <div className={style.candidateInfo}>
              <h5 className={style.name}>Dragana Bogicevic</h5>
              <div className={style.backinfo}>
                  <Envelope /> E-mail: <br/>
                  dragana.bogicevic83@gmail.com <br/>
                  <Book/> Education: <br/>
                  Belgrade Institute of <br/> Technology
                  </div>
              <button type="button" className="btn btn-primary">
                <a
                  href="https://www.linkedin.com/in/dragana-bogicevic/"
                  target="_blank"
                >
                  Visit profile
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={style.cardContainer}>
        <div className={style.thecard}>
          <div className={style.thefront}>
            <img
              src="https://i.imgur.com/8ITHVGN.jpg"
              className={style.avatar}
            />
            <div className={style.frontname}>Nikola Jankovic</div>
          </div>
          <div className={style.theback}>
            <div className={style.candidateInfo}>
              <h5 className={style.name}>Nikola Jankovic</h5>
              <div className={style.backinfo}>
                  <Envelope /> E-mail: <br/>
                  dzoni6usb@gmail.com <br/>
                  <Book/> Education: <br/>
                  Belgrade Institute of <br/> Technology
                  </div>
              <button type="button" className="btn btn-primary">
                <a
                  href="https://www.linkedin.com/in/nikola-jankovic-bbb7a9220/"
                  target="_blank"
                >
                  Visit profile
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Developers;
