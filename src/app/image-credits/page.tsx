import type { Metadata } from "next";
import styles from "../page-shell.module.css";
import { Button } from "@/components";
import { buildMetadata } from "@/lib/seo";
import { ROUTES } from "@/lib/site-data";

// Image credits — attribution for third-party photographs used as editorial
// backgrounds. CC BY licences require attribution; CC0 / public-domain images
// are credited here as a courtesy. Each row: what/where it's used, author,
// licence (linked), and the Wikimedia Commons source. Not indexed.
export const metadata: Metadata = buildMetadata({
  title: "Image Credits | Teravora",
  description:
    "Attribution for the third-party photographs used on the Teravora website.",
  path: "/image-credits",
  index: false,
});

type Credit = {
  where: string;
  title: string;
  author: string;
  license: string;
  licenseUrl: string;
  source: string;
};

// Photographs sourced from Wikimedia Commons. "cropped" notes where an image
// was recomposed to fit its slot; no other alteration was made.
const CREDITS: Credit[] = [
  {
    where: "Careers — hero",
    title: "Hyatt Regency Embarcadero atrium (cropped)",
    author: "Dale Cruse",
    license: "CC BY 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by/2.0/",
    source: "https://commons.wikimedia.org/wiki/File:Hyatt_Regency_Embarcadero_(28105319069).jpg",
  },
  {
    where: "Carbon & Climate — hero",
    title: "Wind energy, Gujarat",
    author: "Raj Odedra",
    license: "CC BY 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by/3.0/",
    source: "https://commons.wikimedia.org/wiki/File:Production_of_Wind_Energy_._._Raju_Odedra_Mo_._07698787895_-_panoramio.jpg",
  },
  {
    where: "Carbon & Climate — editorial band",
    title: "Sunset near Neyveli, Tamil Nadu (cropped)",
    author: "rajaraman sundaram",
    license: "CC BY 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by/3.0/",
    source: "https://commons.wikimedia.org/wiki/File:SUNSET_NEAR_NEYVELI,TAMILNADU_-_panoramio.jpg",
  },
  {
    where: "Environmental & Social Due Diligence — hero",
    title: "Tehri Dam on the Bhagirathi, Garhwal",
    author: "Lingaraj G. J.",
    license: "CC BY 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by/2.0/",
    source: "https://commons.wikimedia.org/wiki/File:Tehri_Dam_on_the_Bhagirathi,_Garhwal,_India.jpg",
  },
  {
    where: "ESDD — triptych, Emissions & energy (cropped)",
    title: "Chimney of a sugar factory, Vizianagaram",
    author: "Saiphani02",
    license: "CC BY 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by/4.0/",
    source: "https://commons.wikimedia.org/wiki/File:Chimney_of_a_sugar_factory_in_Vizianagaram.jpg",
  },
  {
    where: "ESDD — triptych, Land, water & waste (cropped)",
    title: "Aerated treatment lagoon, AV Nackawic pulp mill",
    author: "Quintin Soloviev",
    license: "CC BY 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by/4.0/",
    source: "https://commons.wikimedia.org/wiki/File:Aerated_treatment_lagoon_at_the_AV_Nackawic_pulp_mill.jpg",
  },
  {
    where: "ESDD — triptych, People & communities (cropped)",
    title: "Sona Brickfield, North 24 Parganas",
    author: "Biswarup Ganguly",
    license: "CC BY 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by/3.0/",
    source: "https://commons.wikimedia.org/wiki/File:Sona_Brickfield_-_Berachampa-Baduria_Road_-_North_24_Parganas_2015-04-11_7168.JPG",
  },
  {
    where: "ESG & Climate Strategy Advisory — hero",
    title: "Mumbai festive night",
    author: "Vidur Malhotra",
    license: "Public domain",
    licenseUrl: "https://creativecommons.org/publicdomain/mark/1.0/",
    source: "https://commons.wikimedia.org/wiki/File:Mumbai_Festive_Night.jpg",
  },
  {
    where: "Advisory — triptych, Energy & emissions (cropped)",
    title: "Railway electrical substation, Vizianagaram",
    author: "Saiphani02",
    license: "CC BY 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by/4.0/",
    source: "https://commons.wikimedia.org/wiki/File:Electrical_substation_of_railways_in_Vizianagaram.jpg",
  },
  {
    where: "Advisory — triptych, Resources & operations (cropped)",
    title: "Tea-factory operator at the machinery",
    author: "shankar s.",
    license: "CC BY 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by/2.0/",
    source: "https://commons.wikimedia.org/wiki/File:The_operator_turns_away_briefly_as_the_machinery_does_it%27s_stuff_(28683802791).jpg",
  },
  {
    where: "Advisory — triptych, People & governance (cropped)",
    title: "Empty boardroom",
    author: "Benjamin Child",
    license: "CC0",
    licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
    source: "https://commons.wikimedia.org/wiki/File:Benjamin_Child_2015_(Unsplash).jpg",
  },
  {
    where: "Technical & Environmental Services — hero",
    title: "Haryana thermal power plant",
    author: "Vikramdeep Sidhu",
    license: "CC BY 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by/2.0/",
    source: "https://commons.wikimedia.org/wiki/File:Haryana_Thermal_Power_Plant_India_2012.jpg",
  },
  {
    where: "Technical — editorial band",
    title: "Kelenföld power plant control hall (cropped)",
    author: "AndreasS",
    license: "CC BY 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by/2.0/",
    source: "https://commons.wikimedia.org/wiki/File:Power_Plant_Kelenf%C3%B6ld_(8496163544).jpg",
  },
  {
    where: "Sustainable Finance & Carbon Markets — hero",
    title: "Mumbai skyline at sunset",
    author: "Vyacheslav Argenberg",
    license: "CC BY 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by/4.0/",
    source: "https://commons.wikimedia.org/wiki/File:Mumbai,_India,_Bombay,_Mumbai_skyline_at_sunset.jpg",
  },
  {
    where: "Sustainable Finance — editorial band (cropped)",
    title: "Transmission lines at sunset",
    author: "Kkiefuik",
    license: "CC BY 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by/4.0/",
    source: "https://commons.wikimedia.org/wiki/File:Transmission_Lines_at_Sunset.jpg",
  },
  {
    where: "Capacity Building & Training — hero",
    title: "Auditorium, Kyiv (Wikimania 2024)",
    author: "Balise42",
    license: "CC BY 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by/4.0/",
    source: "https://commons.wikimedia.org/wiki/File:Kyiv_auditorium_at_Wikimania_2024.jpg",
  },
  {
    where: "Training — editorial band (cropped)",
    title: "Solar-farm maintenance, Topaz Solar Farm",
    author: "Sarah Swenty / USFWS",
    license: "CC BY 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by/2.0/",
    source: "https://commons.wikimedia.org/wiki/File:Topaz_Solar_Farm,_maintenance_of_a_huge_solar_farm_with_5_million_solar_panels_(1712).jpg",
  },
  {
    where: "Solutions hub — hero (cropped)",
    title: "Bird's-eye view of Visakhapatnam Port",
    author: "Pinakpani",
    license: "CC BY 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by/4.0/",
    source: "https://commons.wikimedia.org/wiki/File:Bird%27s_eye_view_of_Visakhapatnam_Port_from_Ross_hill_in_Visakhaptnam_02.jpg",
  },
];

export default function ImageCredits() {
  return (
    <main id="main-content" className={styles.main}>
      <div className={styles.container}>
        <header className={styles.hero}>
          <h1>Image Credits</h1>
          <p className={styles.lede}>
            Several editorial background photographs on this site are used under
            open licences from Wikimedia Commons. We credit each below, with a
            link to its licence and source. Where a photograph was cropped to fit
            its placement, that is noted; no other alteration was made.
          </p>
        </header>

        <section className={styles.section}>
          <div className={styles.prose}>
            <ul>
              {CREDITS.map((c) => (
                <li key={c.where + c.title}>
                  <strong>{c.where}:</strong> &ldquo;{c.title}&rdquo; by{" "}
                  {c.author} &mdash;{" "}
                  <a href={c.licenseUrl} rel="license noopener" target="_blank">
                    {c.license}
                  </a>{" "}
                  &middot;{" "}
                  <a href={c.source} rel="noopener" target="_blank">
                    source
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.ctaRow}>
            <Button as="a" href={ROUTES.home} variant="secondary">
              Back to home
            </Button>
          </div>
        </section>
      </div>
    </main>
  );
}
