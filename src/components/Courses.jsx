import { memo } from "react";
import SectionHeader from "./SectionHeader";
import { IoMdAlarm } from "react-icons/io";
import { IoBookSharp } from "react-icons/io5";

import { FaStar } from "react-icons/fa";

import { CoursesData } from "./Data";
const Courses = () => {
  return (
    <div className="Courses container">
      <SectionHeader
        title="Make Online education acessible"
        descreption="The Gradual accumulation of information about atomic and small-scale behaviour , The Gradual accumulation of information about atomic and small-scale behaviour, The Gradual accumulation of information about atomic and small-scale behaviour, The Gradual accumulation of information about atomic and small-scale behaviour... "
      />
      <div className="coursesContainer">
        {CoursesData.map((cours) => {
          return (
            <ul key={cours.id}>
              <li>
                <div className="image">
                  <span className="sale">Sale</span>
                  <img src={cours.img} alt="" />
                </div>
                <div className="content">
                  <div className="rate">
                    <p>{cours.departement}</p>
                    <span className="spanRate">
                      <FaStar />
                      {cours.rating}
                    </span>
                  </div>
                  <span className="title">{cours.title}</span>
                  <p className="desc">{cours.description}</p>
                  <p className="sales">{cours.sales} Sales</p>
                  <span className="price-discount">
                    <span className="price">{cours.price}</span>
                    <span className="discount">{cours.discount}</span>
                  </span>
                  <div className="duration-lessens">
                    <div className="duration">
                      <IoMdAlarm />
                      {cours.duration}
                    </div>
                    <div className="lessens">
                      <IoBookSharp />
                      {cours.lessons}
                    </div>
                  </div>
                  <span className="learn-more">Learn More</span>
                </div>
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default memo(Courses);
