import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { db } from "../../api/firebase-config";
import { collection, getDocs } from "firebase/firestore";

import "./Education.css";

function Education() {
  const [courses, setCourses] = useState([]);
  const coursesCollectionRef = collection(db, "Courses");

  const years = {
    1: "2020 - 2021",
    2: "2021 - 2022",
    3: "2022 - 2023"
  };

  useEffect(() => {
    const getCourses = async () => {
      const data = await getDocs(coursesCollectionRef);
      setCourses(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getCourses();
  }, []);

  const groupByYear = () => {
    const grouped = {};
    for (const id in courses) {
      const course = courses[id];
      const year = course.year;
      const term = course.term;
      if (!grouped[year]) {
        grouped[year] = { fall: [], winter: [] };
      }
      grouped[year][term === "fall" ? "fall" : "winter"].push(course);
    }
    return grouped;
  };

  const groupedCourses = groupByYear();

  return (
    <div className="app-page">
      <div className="search-page">
        {Object.keys(groupedCourses).map((year) => (
          <div key={year}>
            <h3>{`Year ${year} (${years[year]})`}</h3>
            <Table striped hover className="courses-table">
              <thead>
                <tr>
                  <th style={{ width: '50%' }}>Fall Courses</th>
                  <th style={{ width: '50%' }}>Winter Courses</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <u1>
                      {groupedCourses[year].fall.map((course, index) => (
                        <button className="button courses fall" key={index}>{course.title}</button>
                      ))}
                    </u1>
                  </td>
                  <td>
                    <u1>
                      {groupedCourses[year].winter.map((course, index) => (
                        <button className="button courses winter" key={index}>{course.title}</button>
                      ))}
                    </u1>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;
