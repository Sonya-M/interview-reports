import React, { Fragment, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CandidateCommunicator from "../services/CandidateCommunicator";
import ReportCommunicator from "../services/ReportCommunicator";
import ErrorDisplay from "../components/ErrorDisplay"; 
import ImageGuaranteed from "../components/UI/ImageGuaranteed";
import { Envelope, Gift, Book } from "react-bootstrap-icons";

import style from "./Report.module.css";
import { Table } from "../components/Table";

export default function Report(props) {
  let { id } = useParams(); // candidate id
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [reports, setReports] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [showMore, setShowMore] = useState(false);
  const handleShowMore = () => setShowMore(!showMore);

  useEffect(() => {
    CandidateCommunicator.getById(id)
      .then((data) => {
        console.log("selectedCandidate data: ", data);
        setSelectedCandidate(data);
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  useEffect(() => {
    ReportCommunicator.getAllForCandidate(id)
      .then((data) => {
        console.log("reports for candidate: ", data);
        setReports(data);
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p>Loading</p>; // TODO: add spinner
  }

  if (error) {
    return <ErrorDisplay message="Sorry, failed to load data" />;
  }

  if (
    !selectedCandidate ||
    selectedCandidate.length === 0 ||
    reports.length === 0
  ) {
    return <ErrorDisplay message="No data available." />;
  }
  return (
    <Fragment>
      <div className={style.data}>
        <img
          src="https://content.linkedin.com/content/dam/business/marketing-solutions/global/en_US/blog/mckinseybets810.jpg"
          alt="cover"
          className={style.cover}
        />
        <div>
          <div className={style.cardInfo}>
            <div className={style.name}>{selectedCandidate.name}</div>
          </div>
          <ImageGuaranteed
            preferredImg={selectedCandidate.avatar}
            placeholderImg="/Profile_avatar_placeholder_large.png"
            preferredImgAlt={selectedCandidate.name}
            className={style.avatar}
          />
          <div className={style.containerMax}>
            <div className={showMore ? style.cardMore : style.card}>
              <span className={style.about}>About</span>
              <p className={style.candidateInfo}>
                Email
                <span className={style.candidateData}>
                  <Envelope /> {selectedCandidate.email}
                </span>
              </p>

              <p className={style.candidateInfo}>
                Birthday
                <span className={style.candidateData}>
                  <Gift /> {selectedCandidate.getBirthday()}
                </span>
              </p>

              <p className={style.candidateInfo}>
                Education
                <span className={style.candidateData}>
                  <Book /> {selectedCandidate.education}
                </span>
              </p>

              {console.log(showMore)}
            </div>
            <button className={style.seeMore} onClick={handleShowMore}>
              {!showMore ? "Show more" : "Show  less "}
            </button>
            <Table reports={reports} />
          </div>
        </div>
      </div>
    </Fragment>
  );
}
