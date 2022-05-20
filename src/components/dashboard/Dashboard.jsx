import React, {useEffect, useState} from "react";
import DashboardColumn from "../dashboardColumn/DashboardColumn";
import GetDashboard from "../../api/dashboard.api";
import PostService from "../../services/postService";
import magnifyingGlass from "../../assets/img/magnifying_glass.png";
import filter from "../../assets/img/filter.png";
import line from "../../assets/img/line.png";
import calendar from "../../assets/img/calendar.png";
import notebook from "../../assets/img/notebook.png";
import "./Dashboard.css";

const Dashboard = () => {
   const [columns, setColumns] = useState([]);
   const [posts, setPosts] = useState([]);

   useEffect(async () => {
       const newDashboard = await GetDashboard.get().then(result => result);
       setColumns(newDashboard);

       await PostService.getPosts(setPosts);

   }, [])

    const getDataNow = () => {
        let date = new Date(Date.now());
        let options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric'};
        let dateNow = date.toLocaleDateString('en-US', options);
        return dateNow;
    };

        return (
      <div className="dashboard">
          <div className="header">
              <div className="header__wrapper">
                  <h1 className="header__title">Weekly Sprint #4</h1>
                  <p className="header__welcome">Welcome to dashboard</p>
              </div>

              <div className="header__actions">
                  <div className="header__actions_inner">
                      <p className="header__actions_title">Date now</p>
                      <span className="header__actions_date">{getDataNow()}</span>
                  </div>
                  <div className="header__actions_icons">
                      <img src={magnifyingGlass} alt="magnifying_glass"/>
                      <img src={filter} alt="filter"/>
                      <img className="line" src={line} alt="line"/>
                      <img src={calendar} alt="calendar"/>
                      <img src={notebook} alt="notebook"/>
                  </div>
              </div>
          </div>

            <div className="dashboardColumn">
                  {columns.map(column => {
                      return (
                          <DashboardColumn
                              key={column.id}
                              title={column.title}
                              allColunms={columns}
                              posts={posts.filter(post => post.status === column.value)}
                              status={column.value}
                              setPosts={setPosts}
                          />
                      )
                })}
            </div>
      </div>
   )
}

export default Dashboard;
