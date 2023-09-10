import React, { useState, useEffect } from "react";
import { db } from "../../api/firebase-config";
import { collection, getDocs } from "firebase/firestore";
import PageCard from "../../components/PageCard/PageCard";

import profile from '../../images/profile.png'
import "./Home.css";

function Home() {

  const [pages, setPages] = useState([]);
  const pageCollectionRef = collection(db, "Pages");

  useEffect(() => {
    const getPages = async () => {
      const data = await getDocs(pageCollectionRef);
      setPages(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPages();
  }, []);
  console.log(pages);

  pages.sort((a, b) => a.index - b.index);

  return (
    <div className="app-page">
      <div className="content">
        <h2>Recommended</h2>
        <div className="content-videos">
        {pages.map((page) => {
          return (
            <div>
              <PageCard
                title={page.title}
                subtitle={page.subtitle}
                to={page.route}
                thumbnail={page.thumbnail}
                channel="Bella Huang"
                profile={profile}
              />
            </div>
          );
        })}
        </div>
      </div>
    </div>
  );
}

export default Home;
