import LeftMenu from "../components/leftMenu";
import { getRecentlyPlayed, getMoodsPlaylist } from "../services/usersService";
import { React, useState, useEffect } from "react";
import Cards from "../components/cards";

const Home = () => {
  const [styles, setStyles] = useState([]);
  const [recentlyPlayed, setrecentlyPlayed] = useState([]);

  const [load, setLoad] = useState(0);
  useEffect(() => {
    getMoodsPlaylist().then((res) => {
      setStyles(res.categories.items);
    });

    getRecentlyPlayed().then((res2) => {
      setrecentlyPlayed(res2.items);
    });
  }, [load]);

  return (
    <div className="bg-dark h-screen">
      <div className="flex overflow-y-scroll" style={{ height: "88vh" }}>
        <LeftMenu />
        <div className=" ml-56 w-full h-full">
          <div className="flex items-center space-between text-white">
            <div className="flex items-center space-between w-12 my-8 px-2">
              <i className="fa-solid fa-chevron-left mx-4"></i>

              <i className="fa-solid fa-chevron-right mx-4"></i>
            </div>
          </div>
          <h2 className="pl-2 text-2xl font-semibold text-white tracking-wider hover:underline mx-4">
            Moods
          </h2>
          <div className="w-full flex flex-wrap    ">
            {styles &&
              styles.map((data) => {
                return <Cards img={data.icons[0].url} name={data.name} />;
              })}
          </div>
          {recentlyPlayed.length > 1 && (
            <h2 className="pl-2 text-2xl font-semibold text-white tracking-wider hover:underline mx-4">
              Recently played
            </h2>
          )}
          <div className="w-full flex flex-wrap    ">
            {recentlyPlayed &&
              recentlyPlayed.map((data2) => {
                console.log(data2);

                let imgUrl = data2.track.album.images[0].url
                  ? data2.track.album.images[0].url
                  : "";
                return imgUrl.length > 1 ? (
                  <Cards
                    img={data2.track.album.images[0].url}
                    name={data2.track.name}
                  />
                ) : null;
              })}
          </div>
        </div>
      </div>
      <div className="bg-light w-screen" style={{ height: "12vh" }}>
        <script src="https://sdk.scdn.co/spotify-player.js"></script>
      </div>
    </div>
  );
};
export default Home;
