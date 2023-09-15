import React, { useState } from "react";
import {
  CalendarIcon,
  HomeIcon,
  LogoutIcon,
  MovieBoxIcon,
  MoviesIcon,
  TvseriesIcon,
} from "../asset/icon";
import { useParams } from "react-router-dom";

const MovieDetail = ({ movies }) => {
  const [sideNavIndex, setSideNavIndex] = useState(1);
  const params = useParams();
  const movieId = params?.movieId;
  const movie = movies?.filter((movie) => movie.id === JSON.parse(movieId));

  const sideNav = [
    {
      title: "Home",
      icon: HomeIcon,
    },
    {
      title: "Movies",
      icon: MoviesIcon,
    },
    {
      title: "TV Series",
      icon: TvseriesIcon,
    },
    {
      title: "Upcoming",
      icon: CalendarIcon,
    },
  ];

  return (
    <div className="w-full h-full bg-white fixed top-0 flex items-start justify-center">
      <div className="w-full h-screen ">
        <div className="w-[200px] h-full border-[1px] rounded-r-[45px] shadow py-12 ">
          <div className="flex gap-5 items-center px-5">
            <img src={MovieBoxIcon} alt="movie box" />
            <p className="text-[#000] font-bold ">MovieBox</p>
          </div>
          <div className="h-72 flex flex-col justify-evenly mt-12 gap-y-2 text-[#666666] ">
            {sideNav.map(({ icon, title }, index) => (
              <div
                onClick={() => setSideNavIndex(index)}
                className={
                  sideNavIndex !== index
                    ? `flex gap-4 items-center p-5 `
                    : `flex gap-4 items-center p-5  bg-[#BE123C1A] border-r-[6px] border-[#BE123C] text-[#BE123C] `
                }
                key={title}
              >
                <img src={icon} alt={title} />
                <p className="font-bold">{title}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center py-6 ">
            <div className="w-full h-[210px] flex flex-col items-center border-[1px] bg-[#be123d0a] border-[#BE123C] mx-5 rounded-[20px] p-4 ">
              <p className="font-semibold text-[#333333CC] text-center ">
                Play movie quizes and earn free tickets
              </p>
              <p className="text-[13px] text-center ">
                50k people are playing now
              </p>
              <button className="bg-[#be123d45] hover:bg-[#be123d56] text-red-900 font-semibold text-[13px] rounded-full my-5 px-3 py-1 ">
                Start playing
              </button>
            </div>
          </div>
          <div className="flex items-center justify-start pl-6 gap-3">
            <img src={LogoutIcon} alt="logout" />
            <p className="text-[#000] font-bold text-center ">Logout</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
