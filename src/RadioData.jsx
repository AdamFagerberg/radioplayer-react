import { useState, useEffect } from "react";
import Stations from "./Stations";
import SearchComponent from "./SearchComponent";
import "react-loading-skeleton/dist/skeleton.css";
import { SkeletonTheme } from "react-loading-skeleton";
import SkeletonCard from "./SkeletonCard";

function RadioData() {
  const [radioData, setRadioData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.sr.se/api/v2/channels?format=json&size=100")
      .then((result) => result.json())
      .then((data) => {
        setRadioData(data.channels);
        setLoading(false);
      });
  }, []);

  function handleSearchTerm(e) {
    setSearchTerm(e.target.value);
  }

  const filteredData = radioData.filter((stations) =>
    stations.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <SearchComponent
          searchTerm={searchTerm}
          handleSearchTerm={handleSearchTerm}
        />

        {loading ? (
          <SkeletonCard />
        ) : (
          <Stations radioData={radioData} filteredData={filteredData} />
        )}
      </SkeletonTheme>
    </>
  );
}

export default RadioData;
