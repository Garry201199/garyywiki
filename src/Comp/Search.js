import React, { useState } from "react";
import axios from "axios";
import "./TestCard.css";
import SearchIcon from "@mui/icons-material/Search";

const Search = () => {
  const [info, setInfo] = useState("");
  const [data, setData] = useState([]);
  const [updatedData, setUpdatedData] = useState([]);

  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log(info);
    if( info !== ''){ getInfo(info , getUrl(data))}
  };


  const getInfo = async (info) => {
    console.log("in get info " + info);
    var k = [];
    var url = `https://en.wikipedia.org/w/api.php?origin=*&action=query&list=search&srsearch=${info}&format=json`;

    await axios.get(url).then((res) => {
      k = res.data.query.search.map((i) => {
        return { pageLink: "", pageID: i.pageid, snippet: i.snippet,title: i.title,};
      });
      setData(k);
      
    });
    
    getUrl(data)
  };

  const getUrl = async (data) => {
    console.log("in get Url " + info);
    for (let j in data) {
      console.log(j);
      let page = data[j];
      let pid = page.pageID;
      var url2 = `https://en.wikipedia.org/w/api.php?origin=*&action=query&prop=info&pageids=${pid}&inprop=url&format=json`;

      await axios.get(url2).then((res) => {
        page.pageLink = res.data.query.pages[pid].fullurl;
        setUpdatedData(data);
        alert('in geturl ')
      });
    }
  };
  return (
    <div>
      <div className="bar">
        <input
          value={info || ""}
          onChange={(e) => setInfo(e.target.value)}
          className="searchbar"
          type="text"
          placeholder="Search"
        />
        <button className="button" type="submit" onClick={onFormSubmit}>
          <SearchIcon className="voice" fontSize="medium"></SearchIcon>
        </button>
      </div>

      {updatedData &&
        updatedData.map((k) => (
          <ul style={{ listStyleType: "none" }} key={k.pageID}>
            <li>
              {" "}
              <a href={k.pageLink}>
                {" "}
                <h3>{k.title}</h3>
              </a>{" "}
            </li>
            <li>
              {" "}
              <span>
                <a href={k.pageLink} style={{ wordWrap: "break-word" }}>
                  {" "}
                  <h3>{k.pageLink}</h3>
                </a>
              </span>
            </li>
            <li>
              <p
                style={{ wordWrap: "break-word" }}
                dangerouslySetInnerHTML={{ __html: k.snippet }}
              ></p>
            </li>
            <p>
              -------------------------------------------------------------------------------------
            </p>
          </ul>
        ))}
    </div>
  );
};

export default Search;
