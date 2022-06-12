import { useState, useEffect } from "react";

const Steeps = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    setData([
      {
        id: 1,
        name: "Steeps",
        class: "anime",
        translate: "list_anime",
      },
      {
        id: 2,
        name: "Steeps",
        class: "episodes",
        translate: "anime_detail_list_episode",
      },
      {
        id: 3,
        name: "Steeps",
        class: "openings",
        translate: "anime_detail_list_openings",
      },
      {
        id: 4,
        name: "Steeps",
        class: "endings",
        translate: "anime_detail_list_endings",
      },
      {
        id: 5,
        name: "Steeps",
        class: "all",
        translate: "end",
      },
    ]);
  }, []);

  return (
    <section className="steps">
      {data.map((item, i) => {
        return (
          <div
            key={i}
            className={
              i == 0 ? " active content" + item.class : "content" + item.class
            }
          >
            <article className="step">
              <div className=""></div>
              <span className="">{item.id}</span>
              <div className=""></div>
            </article>
            <p>{item.translate}</p>
          </div>
        );
      })}
    </section>
  );
};
export default Steeps;
