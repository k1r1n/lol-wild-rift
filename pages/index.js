import React from "react";
import Head from "next/head";
import Nav from "../components/nav";

const Home = () => (
  <div>
    <Head>
      <title>League of Leagues : Wild Rift</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Nav />

    <div className="hero">
      <h1 className="title">
        <img
          className="logo"
          src="https://vignette.wikia.nocookie.net/leagueoflegends/images/6/60/Wild_Rift_logo.png/revision/latest/scale-to-width-down/350?cb=20191016101147"
        />
      </h1>
      <div className="lane">
        <ul>
          <li>
            <img
              className="icon"
              src="https://vignette.wikia.nocookie.net/leagueoflegends/images/e/ef/Top_icon.png/revision/latest?cb=20181117143602"
            />
          </li>
          <li>
            <img
              className="icon"
              src="https://vignette.wikia.nocookie.net/leagueoflegends/images/9/98/Middle_icon.png/revision/latest?cb=20181117143644"
            />
          </li>
          <li>
            <img
              className="icon"
              src="https://vignette.wikia.nocookie.net/leagueoflegends/images/9/97/Bottom_icon.png/revision/latest?cb=20181117143632"
            />
          </li>
          <li>
            <img
              className="icon"
              src="https://vignette.wikia.nocookie.net/leagueoflegends/images/1/1b/Jungle_icon.png/revision/latest?cb=20181117143559"
            />
          </li>
          <li>
            <img
              className="icon"
              src="https://vignette.wikia.nocookie.net/leagueoflegends/images/e/e0/Support_icon.png/revision/latest?cb=20181117143601"
            />
          </li>
        </ul>
      </div>
      <div className="container">
        <div className="champion-list">
          <img
            className="champion"
            src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/b/b5/Ahri_0.jpg?version=a5cfa02bf9cb47ceda2776d27d0fccf9"
          />
          <img
            className="champion"
            src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/0/03/Alistar_0.jpg?version=8c3875631a695e0b2e40f59a96b84ad4"
          />
          <img
            className="champion"
            src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/d/dd/Annie_0.jpg?version=a55480c1944132b3e13b1a609e207bd5"
          />
          <img
            className="champion"
            src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/b/ba/Ashe_0.jpg?version=8acf8b1ac5c309aaa9fad93254ef730d"
          />
          <img
            className="champion"
            src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/a/ab/Blitzcrank_0.jpg?version=30cc80f7d5c4eaa1aea77d3558b52876"
          />
          <img
            className="champion"
            src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/f/f4/Braum_0.jpg?version=a5256fa496822d93fe4d87df7437ff53"
          />
          <img
            className="champion"
            src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/a/ae/Camille_0.jpg?version=fd7fb7c0881446e8aa6c477b5530cc65"
          />
          <img
            className="champion"
            src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/f/f8/Cassiopeia_0.jpg?version=77ab7c29b06cf556941096a61823f8fb"
          />
          <img
            className="champion"
            src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/2/2c/Darius_0.jpg?version=4b1d95127e9e88dae07071ebbfc54113"
          />
          <img
            className="champion"
            src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/9/98/Diana_0.jpg?version=2a598e06938f883347991b5c8c5a0803"
          />
          <img
            className="champion"
            src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/7/7e/DrMundo_0.jpg?version=da4b82eb54f53899460c357a2efa8fb4"
          />
          <img
            className="champion"
            src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/d/df/Draven_0.jpg?version=b8162e40d6e1c86e81bdece89d8c530e"
          />
          <img
            className="champion"
            src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/7/70/Ezreal_0.jpg?version=fe1294a0d06131abcd7a3129c6eb328d"
          />
          <img
            className="champion"
            src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/0/09/Fiora_0.jpg?version=d48416564ef1b8a01d54c5ff88fd19bf"
          />
          <img
            className="champion"
            src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/2/27/Fizz_0.jpg?version=d5403f656fcfbe631ff5a8740fb66163"
          />
          <img
            className="champion"
            src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/3/3e/Garen_0.jpg?version=1db5329cc09b6d62c557a2eef7c5581c"
          />
          <img
            className="champion"
            src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/c/ce/Gragas_0.jpg?version=79154a7fbe1860408c8a754132d9fe1a"
          />
          <img
            className="champion"
            src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/7/71/Janna_0.jpg?version=3b2b9e6ba13019e2bddc72dc6ce677c6"
          />
          <img
            className="champion"
            src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/a/ab/Jax_0.jpg?version=74b58eef841c83da7ac6a8c928d57248"
          />
          <img
            className="champion"
            src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/b/b5/Jhin_0.jpg?version=dd2e6a5f4672145288985c3597608df3"
          />
          <img
            className="champion"
            src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/6/66/Jinx_0.jpg?version=6818856bb3e8cef81537fa2799bdef1b"
          />
          <img
            className="champion"
            src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/e/e9/Lux_0.jpg?version=505a69a5bee0cc2484fe2d59e8bee2a0"
          />
          <img
            className="champion"
            src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/5/5e/Malphite_0.jpg?version=7dec9a62d1869e3338e91a6811c44266"
          />
          <img
            className="champion"
            src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/0/06/Masteryi_0.jpg?version=5f071e050d235795033bd41ff2c5fae3"
          />
          <img
            className="champion"
            src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/9/90/MissFortune_0.jpg?version=f3382916c6a3f325b37eb03592d57618"
          />
          <img
            className="champion"
            src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/6/6d/Nami_0.jpg?version=51653de3a7240eca88e070d0d3b079e6"
          />
          <img
            className="champion"
            src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/c/c7/Nasus_0.jpg?version=abd87271f8e14983366ee8eeea1bfde7"
          />
          <img
            className="champion"
            src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/d/df/Olaf_0.jpg?version=6c9170f6a7e7f3ada56f61c4f0a45b10"
          />
          <img
            className="champion"
            src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/7/7a/Orianna_0.jpg?version=3441a70faa14da5997e2eb31daaf713d"
          />
          <img
            className="champion"
            src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/a/af/Riven_0.jpg?version=81c63bd580224c4c1a07538efc37fed1"
          />
          <img
            className="champion"
            src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/9/9d/Shyvana_0.jpg?version=9c4730f6df8ad9f7ff58c70a2ccfd042"
          />
          <img
            className="champion"
            src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/c/c6/Soraka_0.jpg?version=837da2b2c47e37e750b618abb494efcd"
          />
          <img
            className="champion"
            src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/b/bd/Teemo_0.jpg?version=15368b83ae9dbb5acc6533d391e1d59d"
          />
          <img
            className="champion"
            src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/6/60/Tryndamere_0.jpg?version=95a99cdbcf8f4cfd5a6b79b26984fb17"
          />
          <img
            className="champion"
            src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/5/55/TwistedFate_0.jpg?version=1206e9806b5e862a3aed9cc1c63c1af0"
          />
          <img
            className="champion"
            src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/c/ca/Vayne_0.jpg?version=efcd9f2b2ee26fe2f787b362ba334169"
          />
          <img
            className="champion"
            src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/1/19/Vi_0.jpg?version=624b176f28697a43038032906c60f87c"
          />
          <img
            className="champion"
            src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/0/09/Yasuo_0.jpg?version=83fb8a75120f8ccf1a049c7635140c91"
          />
          <img
            className="champion"
            src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/0/00/XinZhao_0.jpg?version=94f9312d703b55f61d2d9132be36ff97"
          />
          <img
            className="champion"
            src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/c/ce/Zed_0.jpg?version=1d671d5f32e9fa7cf5e14e2c064edc54"
          />
          <img
            className="champion"
            src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/b/b7/Ziggs_0.jpg?version=3dee019b95ffe145c66be94293fa9375"
          />
        </div>
      </div>
    </div>

    <style jsx>{`
      .lane {
        display: flex;
        justify-content: center;
      }
      ul {
        margin-top: 0px;
        display: flex;
        align-items: center;
      }
      li {
        display: flex;
        padding: 0px 10px;
      }
      .logo {
        width: 300px;
      }
      .icon {
        width: 50px;
        padding: 5px;
      }
      .icon:hover {
        padding: 5px;
        border-radius: 3px;
        background: #003e58;
        cursor: pointer;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 10px;
        line-height: 1.15;
        font-size: 48px;
      }
      .container {
        display: flex;
        justify-content: center;
      }
      .title,
      .description {
        text-align: center;
      }
      .champion-list {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: stretch;
        align-content: stretch;
      }
      .champion {
        width: 150px;
        text-decoration: none;
        color: #434343;
        padding: 5px;
      }
      .champion:hover {
        padding: 5px;
        border-radius: 3px;
        background: #003e58;
        cursor: pointer;
      }
      .card h3 {
        margin: 0;
        color: #067df7;
        font-size: 18px;
      }
      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
        color: #333;
      }
      @media screen and (max-width: 600px) {
        .icon {
          width: 40px;
        }
        .logo {
          width: 70vw;
        }
        .champion {
          width: 200px;
        }
      }
      @media screen and (max-width: 380px) {
        .icon {
          padding: 5px;
          width: 30px;
        }
        .logo {
          width: 50vw;
        }
        .champion {
          width: 140px;
        }
      }
    `}</style>
  </div>
);

export default Home;
