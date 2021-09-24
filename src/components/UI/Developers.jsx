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
              src="https://i.imgur.com/pY4BnLI.png"
              className={style.avatar}
              alt="Sonja Musicki"
            />
            <div className={style.frontname}>Sonja Musicki</div>
          </div>
          <div className={style.theback}>
            <div className={style.candidateInfo}>
              <h5 className={style.name}>Sonja Musicki</h5>
              <div className={style.backinfo}>
                <Envelope /> E-mail: <br />
                sonja.musicki@gmail.com <br />
                <Book /> Education: <br />
                Belgrade Institute of <br /> Technology
              </div>
              <button type="button" className="btn btn-primary">
                <a
                  href="https://www.linkedin.com/in/sonja-musicki-novi-sad/"
                  target="_blank"
                  rel="noreferrer"
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
              src="https://i.imgur.com/urRG7mO.png"
              className={style.avatar}
              alt="Dragana Bogicevic"
            />
            <div className={style.frontname}>Dragana Bogicevic</div>
          </div>
          <div className={style.theback}>
            <div className={style.candidateInfo}>
              <h5 className={style.name}>Dragana Bogicevic</h5>
              <div className={style.backinfo}>
                <Envelope /> E-mail: <br />
                dragana.bogicevic83@gmail.com <br />
                <Book /> Education: <br />
                Belgrade Institute of <br /> Technology
              </div>
              <button type="button" className="btn btn-primary">
                <a
                  href="https://www.linkedin.com/in/dragana-bogicevic/"
                  target="_blank"
                  rel="noreferrer"
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
              src="https://i.imgur.com/NmCq6od.png"
              className={style.avatar}
              alt="Nikola Jankovic"
            />
            <div className={style.frontname}>Nikola Jankovic</div>
          </div>
          <div className={style.theback}>
            <div className={style.candidateInfo}>
              <h5 className={style.name}>Nikola Jankovic</h5>
              <div className={style.backinfo}>
                <Envelope /> E-mail: <br />
                dzoni6usb@gmail.com <br />
                <Book /> Education: <br />
                Belgrade Institute of <br /> Technology
              </div>
              <button type="button" className="btn btn-primary">
                <a
                  href="https://www.linkedin.com/in/nikola-jankovic-bbb7a9220/"
                  target="_blank"
                  rel="noreferrer"
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
              src="https://i.imgur.com/pECrTC9.png"
              className={style.avatar}
              alt="Nikola Draganic"
            />
            <div className={style.frontname}>Nikola Draganic</div>
          </div>
          <div className={style.theback}>
            <div className={style.candidateInfo}>
              <h5 className={style.name}>Nikola Draganic</h5>
              <div className={style.backinfo}>
                <Envelope /> E-mail: <br />
                draganic69@gmail.com <br />
                <Book /> Education: <br />
                Belgrade Institute of <br /> Technology
              </div>
              <button type="button" className="btn btn-primary">
                <a
                  href="https://www.linkedin.com/in/draganic69/"
                  target="_blank"
                  rel="noreferrer"
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
