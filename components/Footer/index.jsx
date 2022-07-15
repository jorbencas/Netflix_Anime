import { useEffect, useState } from "react";
import styles from "./Footer.module.css";
import { Link } from "next/link";
import Image from "next/image";

const Footer = () => {
  const [animes, setAnimes] = useState(null);
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("/api/hello")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });

    // Communication.getMethod(1, "Anime&aq=lastanimes&as=0_9&od=id")
    //   .then((res) => {
    //     setAnimes(res);
    //   })
    //   .catch(() => {
    //     console.log("error");
    //   });
    return () => {
      setAnimes(null);
    };
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;

  return (
    // <footer>
    //   <div className="footer-list">
    //     {animes !== null
    //       ? animes.map((anime, key) => {
    //           return (
    //             <Link
    //               className="element_container"
    //               href={"/AnimeDetails/" + anime.id + "/" + anime.kind}
    //               key={key}
    //             >
    //               <div className="element_text">
    //                 <p>{anime.titulo}</p>
    //               </div>
    //             </Link>
    //           );
    //         })
    //       : null}
    //   </div>

    //   <div className="footer-logo">
    //     <Link className="logo" href="/">
    //       2017 - {new Date().getFullYear()}
    //     </Link>
    //     {/* <iframe width="300px" height="360px" scrolling="yes" frameborder="0" src="http://www.dailymotion.com/badge/user/kirito-kirigaya3?type=carousel"></iframe>
    //             <ul className='contador'>

    //             </ul> */}
    //     <div className="sidenav">
    //       <a className="element" href="https://twitter.com/kirito123kazut2">
    //         <span>
    //           <i className="fa fa-twitter"></i>
    //         </span>
    //         <p>Twitter</p>
    //       </a>
    //       <a
    //         className="element"
    //         href="https://www.facebook.com/profile.php?id=100004654665874&fref=ts"
    //       >
    //         <span>
    //           <i className="fa fa-facebook"></i>
    //         </span>
    //         <p>Facebook</p>
    //       </a>
    //       <a className="element" href="https://plus.google.com/u/0/">
    //         <span>
    //           <i className="fa fa-google-plus"></i>
    //         </span>
    //         <p>Google Plus</p>
    //       </a>
    //       <a
    //         className="element"
    //         href="https://www.youtube.com/channel/UCRyM2yRz4eOKi3c66MOfx-Q"
    //       >
    //         <span>
    //           <i className="fa fa-youtube"></i>
    //         </span>
    //         <p>Youtube</p>
    //       </a>
    //     </div>
    //   </div>
    // </footer>
    <footer className={styles.footer}>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by <h1>{data.name}</h1>{" "}
        <span className={styles.footer_logo}>
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </span>
      </a>
    </footer>
  );
};

export default Footer;
