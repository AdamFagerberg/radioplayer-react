function Stations({ filteredData }) {
  return (
    <>
      {filteredData.map((station) => {
        return (
          <div
            key={station.id}
            className="stationCard"
            style={{ background: "#" + station.color }}
          >
            <img className="stationImg" src={station.image} />
            <div className="textContainer">
              <h1 className="stationHead">{station.name}</h1>
              <p className="stationP">{station.tagline}</p>
              <audio
                className="stationAudio"
                controls
                src={station.liveaudio.url}
              ></audio>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Stations;
