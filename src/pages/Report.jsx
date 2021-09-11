import React, { Fragment, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CandidateCommunicator from "../services/CandidateCommunicator";
import ReportCommunicator from "../services/ReportCommunicator";
import ErrorDisplay from "../pages/ErrorDisplay"; // TODO: move to components!!!
import ImageGuaranteed from "../components/UI/ImageGuaranteed";
import { PLACEHOLDER_IMG } from "../shared/constants";

import style from "./Report.module.css";
import { Table } from "../components/Table";

export default function Report(props) {
  let { id } = useParams(); // candidate id
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

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

  if (!selectedCandidate || reports.length === 0) {
    return <ErrorDisplay message="No data available." />;
  }
  return (
    <Fragment>
      <div className={`container ${style.data}`}>
        <div className="row">
          <div className="col">
            {selectedCandidate.avatar ? (
              <ImageGuaranteed
                preferredImg={selectedCandidate.avatar}
                placeholderImg={PLACEHOLDER_IMG}
              />
            ) : (
              <img src={PLACEHOLDER_IMG} alt="No image available" />
            )}
          </div>
          <div className="col">
            <div className={style.cardInfo}>
              <p className={style.candidateInfo}>Name:</p>
              <span className={style.candidateData}>
                {selectedCandidate.name}
              </span>
            </div>
            <div className={style.cardInfo}>
              <p className={style.candidateInfo}>Email:</p>
              <span className={style.candidateData}>
                {selectedCandidate.email}
              </span>
            </div>
          </div>
          <div className="col">
            <div className={style.cardInfo}>
              <p className={style.candidateInfo}>Birthday:</p>
              <span className={style.candidateData}>
                {selectedCandidate.getBirthday()}
              </span>
            </div>
            <div className={style.cardInfo}>
              <p className={style.candidateInfo}>Education:</p>
              <div className={style.candidateData}>
                {selectedCandidate.education}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Table reports={reports} />
    </Fragment>
  );
}
