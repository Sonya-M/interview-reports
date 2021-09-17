import React, { Fragment, useState, useEffect } from "react";
import AboutLogo from "../components/UI/AboutLogo";
import style from "./AboutUs.module.css";

const AboutUs = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  return (
    <div>
      <div className={loading ? style.logo : style.logoHide}>
        <AboutLogo />
      </div>
      <div className={loading ? style.container : style.containerUp}>
        <div className={style.brandName}>BigBangTeam</div>
        <div className={style.content}>
          <div className={style.aboutText}>
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
            est et expedita distinctio. Nam libero tempore, cum soluta nobis est
            eligendi optio cumque nihil impedit quo minus id quod maxime placeat
            facere possimus, omnis voluptas assumenda est, omnis dolor
            repellendus. Temporibus autem quibusdam et aut officiis debitis aut
            rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint
            et molestiae non recusandae. Itaque earum rerum hic tenetur a
            sapiente delectus, ut aut reiciendis voluptatibus maiores alias
            consequatur aut perferendis doloribus asperiores repellat."
          </div>
          <div className={style.cards}>
            <div className={style.cardContainer}>
              <div className={style.thecard}>
                <div className={style.thefront}>
                  <img
                    src="https://media-exp1.licdn.com/dms/image/C4D03AQFacTu2x4PUDg/profile-displayphoto-shrink_800_800/0/1624276145520?e=1637193600&v=beta&t=oxvlxmUFmjyqyrJ4O3YupJ-Ed3JwQC6oFjIYNotdreo"
                    className={style.avatar}
                  />
                </div>
                <div className={style.theback}>
                  <div className={style.candidateInfo}>
                    <div className={style.name}>Sonja Musicki</div>
                    <div className={style.email}>sonja.musicki@gmail.com</div>
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
                </div>
                <div className={style.theback}>
                  <div className={style.candidateInfo}>
                    <div className={style.name}>Nikola Draganic</div>
                    <div className={style.email}>draganic69@gmail.com</div>
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
                </div>
                <div className={style.theback}>
                  <div className={style.candidateInfo}>
                    <div className={style.name}>Dragana Bogicevic</div>
                    <div className={style.email}>dragana.bogicevic83@gmail.com</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={style.cardContainer}>
              <div className={style.thecard}>
                <div className={style.thefront}>
                  <img
                    src="https://i.imgur.com/p3oovOS.jpg"
                    className={style.avatar}
                  />
                </div>
                <div className={style.theback}>
                  <div className={style.candidateInfo}>
                    <div className={style.name}>Nikola Jankovic</div>
                    <div className={style.email}>dzoni6usb@gmail.com</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
