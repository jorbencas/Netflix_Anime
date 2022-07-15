import EditAnime from "@/components/Edit/EditAnime.jsx";
import Steeps from "@/components/Steeps/Steeps.jsx";
import { useRouter } from "next/router";
import ToolbarEdit from "@/components/Edit/ToolBarEdit.jsx";
import styles from "./edit.module.css";
import Head from "next/head";
import AppLayout from "@/components/AppLayout";
import { ThemeProvider } from "@/context/ThemeContext.jsx";

const Edit = () => {
  const href = useRouter();
  const { siglas } = href.query;
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />s
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider>
        <AppLayout>
          {typeof siglas !== "undefined" ? <ToolbarEdit /> : <Steeps />}
          <div id="anime" className="tabcontent" style={{ display: "block" }}>
            <EditAnime />
          </div>
        </AppLayout>
      </ThemeProvider>
    </>
  );
};
export default Edit;
