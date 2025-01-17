import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../movieSlice";
import { Link, useLocation } from "react-router-dom";

// Header Component
const Header = ({ searchTerm, setSearchTerm }) => {
  const activeTab = useSelector((state) => state.movies.activeTab);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(setActiveTab(location.pathname.split?.("/")[1] || "popular"));
    setSearchTerm("");
  }, [location]);

  return (
    <header
      style={{
        justifyContent: "space-between",
        alignItems: "center",
        color: "#fff",
        paddingLeft: "5rem",
        paddingRight: "5rem",
        background: "#33393F",
      }}
      className=" d-flex"
    >
      <h1 style={{ fontSize: "24px" }}>MovieDb</h1>

      <div className="d-flex gap-2 align-items-center">
        {/* tabs */}
        <Link
          className={`p-4  ${
            activeTab === "popular" ? "activeTab" : "text-light tab"
          } text-decoration-none`}
          to="/popular"
        >
          Popular
        </Link>
        <Link
          className={` p-4  ${
            activeTab === "upcoming" ? "activeTab" : "text-light tab"
          } text-decoration-none`}
          to="/upcoming"
        >
          Upcoming
        </Link>
        <Link
          className={`p-4  ${
            activeTab === "topRated" ? "activeTab" : "text-light tab"
          } text-decoration-none`}
          to="/topRated"
        >
          Top Rated
        </Link>
        {/* Movie searchBar */}
        <input
          type="text"
          placeholder="Movie Name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            padding: "5px 10px",
            //   marginRight: '10px',
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        <div
          style={{
            borderRadius: "5px",
            background: "grey",
            padding: "5px 10px",
          }}
        >
          Search
        </div>
      </div>
    </header>
  );
};

export default Header;
