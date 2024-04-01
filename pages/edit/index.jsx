  import Head from "next/head";
import AppLayout from "@/components/AppLayout";
import EditAnime from "@/components/EditAnime";
import EditEpisodes from "@/components/EditEpisodes";
import EditOpenings from "@/components/EditOpenings";
import EditEndings from "@/components/EditEndings";
import SiglasList from "@/components/SiglasList";
import Tabs from "@/components/Tabs";
import { SiglasListProvider } from "@/context/SiglasContext";
import EditSeasions from "@/components/EditSeasions/index";
import { SeasionListProvider } from "@/context/Seasion";
import { useSiglas } from "@/hooks/useSiglas";

export default function Edit() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppLayout>
        <SiglasListProvider>
          <SiglasList />
          <Tabs>
            <EditAnime text="Anime" />
            <SeasionListProvider>
              <EditSeasions text="Temporadas" />
              <EditEpisodes text="Episodes" />
              <EditOpenings text="Openings" />
              <EditEndings text="Endings" />
            </SeasionListProvider>
            <ViewEdit text="all" />
          </Tabs>
        </SiglasListProvider>
      </AppLayout>
    </>
  );
}

const ViewEdit = () => {
  const { siglasPage } = useSiglas();

  return <h1>Hola {siglasPage}</h1>;

  // return (
  //   <ul>
  //     <Link href={"/edit/" + siglasPage}>Editar</Link>
  //     <Link href={"/" + siglasPage}>Ver</Link>
  //   </ul>
  // );
};
