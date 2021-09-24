import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CandidateCommunicator from "../services/CandidateCommunicator";
import ReportCommunicator from "../services/ReportCommunicator";
import ErrorDisplay from "../components/ErrorDisplay";
import ImageGuaranteed from "../components/UI/ImageGuaranteed";
import { Envelope, Gift, Book } from "react-bootstrap-icons";
import { SESSION_EXPIRED } from "../shared/constants";
import ErrorBoundary from "../components/ErrorBoundary";

import style from "./Report.module.css";
import { Table } from "../components/Table";
import LoaderRipple from "../components/UI/LoaderRipple";

export default function Report(props) {
  let { id } = useParams(); // candidate id
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [reports, setReports] = useState([]);

  const [loadingCandidate, setLoadingCandidate] = useState(true);
  const [loadingReports, setLoadingReports] = useState(true);

  const [error, setError] = useState(false);

  const [showMore, setShowMore] = useState(false);
  const handleShowMore = () => setShowMore(!showMore);

  const { onSessionExpired } = props;
  useEffect(() => {
    CandidateCommunicator.getById(id)
      .then((data) => {
        console.log("selectedCandidate data: ", data);
        setSelectedCandidate(data);
      })
      .catch((error) => {
        console.log(error);
        if (error.message === SESSION_EXPIRED) onSessionExpired();
        setError(error.message);
      })
      .finally(() => {
        setLoadingCandidate(false);
      });
  }, []);

  useEffect(() => {
    ReportCommunicator.getAllForCandidate(id)
      .then((data) => {
        console.log("reports for candidate: ", data);
        setReports(data);
      })
      .catch((error) => {
        console.log(error);
        if (error.message === SESSION_EXPIRED) onSessionExpired();
        setError(error.message);
      })
      .finally(() => {
        setLoadingReports(false);
      });
  }, []);

  // if (true) {
  //   return (
  //     <p>{selectedCandidate}</p> // will trigger an error when rendering! TODO:
  //     //delete afterwards!
  //     // cannot render objects directly, only stringified ones
  //   );
  // }

  if (error) {
    return <ErrorDisplay message={error} />;
  }
  if (loadingCandidate || loadingReports) {
    return <LoaderRipple />;
  }
  if (!selectedCandidate || selectedCandidate.length === 0) {
    return <ErrorDisplay message="An unexpected error occurred." />;
  }
  return (
    <ErrorBoundary>
      <div style={{ position: "relative" }}>
        <div className={style.data}>
          <div style={{ position: "relative" }}>
            <img
              src="https://content.linkedin.com/content/dam/business/marketing-solutions/global/en_US/blog/mckinseybets810.jpg"
              alt="cover"
              className={style.cover}
            />
            <ImageGuaranteed
              preferredImg={selectedCandidate.avatar}
              placeholderImg="/Profile_avatar_placeholder_large.png"
              preferredImgAlt={selectedCandidate.name}
              className={style.avatar}
            />
          </div>
          <div className={style.cardInfo}>
            <div className={style.name}>{selectedCandidate.name}</div>
          </div>
          <div className={style.containerMax}>
            <div className={`${style.card} ${showMore ? style.cardMore : style.cardLess}`}>
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
            <div className={style.tableDiv}>
              {!selectedCandidate ||
              selectedCandidate.length === 0 ||
              reports.length === 0 ? (
                <ErrorDisplay message="No reports yet." />
              ) : (
                <Table reports={reports} />
              )}
            </div>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
}
