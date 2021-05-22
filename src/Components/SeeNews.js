import React, { useEffect, useState } from "react";
import axios from "axios";
import Cardss from "./Cardss";
import Navbars from "./Navbars";

function SeeNews(props) {
  const datas = props.match.params.data;
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const datass = () => {
      axios
        .get(
          "https://newsapi.org/v2/top-headlines?country=IN&category=" +
            `${datas}` +
            "&apiKey=97450cb174584d8491a7a70d699e715e"
        )
        .then((response) => {
          setLoading(false);
          setNews(response.data.articles);
        })
        .catch((err) => {
          console.log(err.response);
        });
    };
    datass();
  }, []);

  if (loading) {
    return (
      <div className="container">
        <div className="circle circle-red"></div>
        <div className="circle circle-blue"></div>
        <div className="circle circle-green"></div>
      </div>
    );
  } else {
    return (
      <div>
        <Navbars />
        <Cardss data={news} />
      </div>
    );
  }
}

export default SeeNews;
