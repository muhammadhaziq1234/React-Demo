/* eslint-disable array-callback-return */
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { capatilize } from "../../utils/capatilize";
// import { Helmet } from "react-helmet";
import "./style.scss";
import { useSearchParams } from 'react-router-dom'

const BreadCrumbComponent = ({ list = [] }) => {
  let [, setSearchParams] = useSearchParams();

  return (
    <>
    <nav aria-label="breadcrumb">
    <ol className="breadcrumb">
    <li className="breadcrumb-item disabled"><Link to="/" onClick={()=>setSearchParams({})}>Home</Link></li>
        {list?.map((item, index) => {
          if (item?.title === "") return;
          if (item?.title?.includes("-")) {
            item.title = item.title.replaceAll("-", " ");
          }

          return (
            <li  key={index} className={`breadcrumb-item ${index === list?.length - 1 ? "active" : "disabled"}`}  aria-current="page">
              <Link to={{ to: item?.to || "/" }} onClick={()=>setSearchParams({})}>
          {item?.title
                ?.split(" ")
                ?.map((word) => capatilize(word))
                .join(" ")}
              {/* <Helmet>
                <title>{`MO- ${capatilize(item?.title)}`}</title>
              </Helmet> */}
              </Link>
              </li>
          );
        })}
      </ol>
      </nav>
    </>
  );
};

export default BreadCrumbComponent;

BreadCrumbComponent.propTypes = {
  list: PropTypes.array,
};
