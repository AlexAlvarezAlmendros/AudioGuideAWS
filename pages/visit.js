import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import React, { useState, useEffect } from 'react';
import Script from 'next/script'
import { useRouter } from 'next/router'
let index = 0;
let url = " ";

export default function Visit({ spninfo, catinfo, frinfo, itinfo, enginfo}) {
  const [count, setCount] = React.useState(0);
  const router = useRouter();
  function play() {
    console.log("DEBUG: count: " + count);
    var audio = document.getElementById("audioSrc");
    audio.load();
  }

  function searchForCustomCount(){
    let queryString = window.location.search;
    let urlParams = new URLSearchParams(queryString);
    let tmpcount = urlParams.get('count');
    if(tmpcount >= 0){
      setCount(parseInt(tmpcount));
      console.log("DEBUG: CUSTOM COUNT = " + count);
    }
  }

  function nextPage(){
    
    let queryString = window.location.search;
    let urlParams = new URLSearchParams(queryString);
    let tmpfloor = urlParams.get('floor');
    let tmplang = urlParams.get('lang');
    let tmpcount = parseInt(urlParams.get('count'));
    window.location.replace(document.location.origin + "/visit?floor=" + tmpfloor + "&lang=" + tmplang + "&count=" + (tmpcount + 1));
  }

  function previousPage(){
    
    let queryString = window.location.search;
    let urlParams = new URLSearchParams(queryString);
    let tmpfloor = urlParams.get('floor');
    let tmplang = urlParams.get('lang');
    let tmpcount = parseInt(urlParams.get('count'));
    window.location.replace(document.location.origin + "/visit?floor=" + tmpfloor + "&lang=" + tmplang + "&count=" + (tmpcount - 1));
  }
  
  function redirect(floor, lang) {
    if(floor != "home"){
      window.location.replace(document.location.origin + "/visit?floor=" + floor + "&lang=" + lang + "&count=0");
    }else{
      window.location.replace(document.location.origin + "?lang=" + lang);
    }
  }
  console.log("LANG: " + router.query.lang);
  console.log("FLOOR: " + router.query.floor);
  switch (router.query.lang) {
    case '1':
      switch (router.query.floor) {
        case '1':
          return (
            <>
              <div onLoad={() => {play(); searchForCustomCount();}} className={styles.container}>
                <Head>
                  <title>Espacio Trafalgar</title>
                  <meta name="description" content="Audio Guide from Espacio Trafalgar" />
                  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"></meta>
                  <link rel="icon" href="/favicon.ico" />
                </Head>
                <div className={styles.main}>
                  <div className={styles.header_div_visit}>
                    <img className={styles.artimage} src={"images/".concat(spninfo.ES.Floor1[count].image)} />
                  </div>
                  <audio id='audioSrc' className={styles.audiocontrols} controls="controls" controlsList="nodownload"><source src={"https://cdn.shopify.com/s/files/1/0462/4485/5961/files/".concat(spninfo.ES.Floor1[count].audio)} type="audio/mpeg" />Your browser does not support the audio tag.</audio>
                  <h1 id="desctitle" className={styles.shortDescTitlte}> {spninfo.ES.Floor1[count].title} </h1>
                  <p id="desc" className={styles.shortDesc}> {spninfo.ES.Floor1[count].shortDesc} </p>
                  <div className={styles.navbuttonscontainer}>
                    <button className={styles.navbutton} onClick={() => { if (count > 0) previousPage(); play() }}>PREVIOUS</button>
                    <button className={styles.navbutton} onClick={() => { if (count < parseInt(spninfo.ES.Info.Floor1Size) - 1){ nextPage(); play();} else{redirect("2","1");}}}>NEXT</button>
                  </div>
                </div>

              </div>
            </>
          )

        case '2':
          return (
            <>
              
              <div onLoad={() => {play(); searchForCustomCount();}} className={styles.container}>
                <Head>
                  <title>Espacio Trafalgar</title>
                  <meta name="description" content="Audio Guide from Espacio Trafalgar" />
                  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"></meta>
                  <link rel="icon" href="/favicon.ico" />
                </Head>
                <div className={styles.main}>
                  <div className={styles.header_div_visit}>
                    <img className={styles.artimage} src={"images/".concat(spninfo.ES.Floor2[count].image)} />
                  </div>
                  <audio id='audioSrc' className={styles.audiocontrols} controls="controls" controlsList="nodownload"><source src={"https://cdn.shopify.com/s/files/1/0462/4485/5961/files/".concat(spninfo.ES.Floor2[count].audio)} type="audio/mpeg" />Your browser does not support the audio tag.</audio>
                  <h1 id="desctitle" className={styles.shortDescTitlte}> {spninfo.ES.Floor2[count].title} </h1>
                  <p id="desc" className={styles.shortDesc}> {spninfo.ES.Floor2[count].shortDesc} </p>
                  <div className={styles.navbuttonscontainer}>
                    <button className={styles.navbutton} onClick={() => { if (count > 0) previousPage(); play() }}>PREVIOUS</button>
                    <button className={styles.navbutton} onClick={() => { if (count < parseInt(spninfo.ES.Info.Floor2Size) - 1) { nextPage(); play();}else{redirect("3","1");} }}>NEXT</button>
                  </div>
                </div>
              </div>
            </>
          )

        case '3':
          return (
            <>
              
              <div onLoad={() => {play(); searchForCustomCount();}} className={styles.container}>
                <Head>
                  <title>Espacio Trafalgar</title>
                  <meta name="description" content="Audio Guide from Espacio Trafalgar" />
                  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"></meta>
                  <link rel="icon" href="/favicon.ico" />
                </Head>
                <div className={styles.main}>
                  <div className={styles.header_div_visit}>
                  <img className={styles.artimage} src={"images/".concat(spninfo.ES.Floor3[count].image)} />
                  </div>
                  <audio id='audioSrc' className={styles.audiocontrols} controls="controls" controlsList="nodownload"><source src={"https://cdn.shopify.com/s/files/1/0462/4485/5961/files/".concat(spninfo.ES.Floor3[count].audio)} type="audio/mpeg" />Your browser does not support the audio tag.</audio>
                  <h1 id="desctitle" className={styles.shortDescTitlte}> {spninfo.ES.Floor3[count].title} </h1>
                  <p id="desc" className={styles.shortDesc}> {spninfo.ES.Floor3[count].shortDesc} </p>
                  <div className={styles.navbuttonscontainer}>
                    <button className={styles.navbutton} onClick={() => { if (count > 0) previousPage(); play() }}>PREVIOUS</button>
                    <button className={styles.navbutton} onClick={() => { if (count < parseInt(spninfo.ES.Info.Floor3Size) - 1) { nextPage(); play();}else{redirect("home","1");} }}>NEXT</button>
                  </div>
                </div>
              </div>
            </>
          )
      }
    case '2':
      switch (router.query.floor) {
        case '1':
          return (
            <>
              
              <div onLoad={() => {play(); searchForCustomCount();}} className={styles.container}>
                <Head>
                  <title>Espacio Trafalgar</title>
                  <meta name="description" content="Audio Guide from Espacio Trafalgar" />
                  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"></meta>
                  <link rel="icon" href="/favicon.ico" />
                </Head>
                <div className={styles.main}>
                  <div className={styles.header_div_visit}>
                    <img className={styles.artimage} src={"images/".concat(catinfo.ES.Floor1[count].image)} />
                  </div>
                  <audio id='audioSrc' className={styles.audiocontrols} controls="controls" controlsList="nodownload"><source src={"https://cdn.shopify.com/s/files/1/0462/4485/5961/files/".concat(catinfo.ES.Floor1[count].audio)} type="audio/mpeg" />Your browser does not support the audio tag.</audio>
                  <h1 id="desctitle" className={styles.shortDescTitlte}> {catinfo.ES.Floor1[count].title} </h1>
                  <p id="desc" className={styles.shortDesc}> {catinfo.ES.Floor1[count].shortDesc} </p>
                  <div className={styles.navbuttonscontainer}>
                    <button className={styles.navbutton} onClick={() => { if (count > 0) previousPage(); play() }}>PREVIOUS</button>
                    <button className={styles.navbutton} onClick={() => { if (count < parseInt(catinfo.ES.Info.Floor1Size) - 1) { nextPage(); play();}else{redirect("2","2");} }}>NEXT</button>
                  </div>
                </div>
              </div>
            </>
          )

        case '2':
          return (
            <>
              
              <div onLoad={() => {play(); searchForCustomCount();}} className={styles.container}>
                <Head>
                  <title>Espacio Trafalgar</title>
                  <meta name="description" content="Audio Guide from Espacio Trafalgar" />
                  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"></meta>
                  <link rel="icon" href="/favicon.ico" />
                </Head>
                <div className={styles.main}>
                  <div className={styles.header_div_visit}>
                    <img className={styles.artimage} src={"images/".concat(catinfo.ES.Floor2[count].image)} />
                  </div>
                  <audio id='audioSrc' className={styles.audiocontrols} controls="controls" controlsList="nodownload"><source src={"https://cdn.shopify.com/s/files/1/0462/4485/5961/files/".concat(catinfo.ES.Floor2[count].audio)} type="audio/mpeg" />Your browser does not support the audio tag.</audio>
                  <h1 id="desctitle" className={styles.shortDescTitlte}> {catinfo.ES.Floor2[count].title} </h1>
                  <p id="desc" className={styles.shortDesc}> {catinfo.ES.Floor2[count].shortDesc} </p>
                  <div className={styles.navbuttonscontainer}>
                    <button className={styles.navbutton} onClick={() => { if (count > 0) previousPage(); play() }}>PREVIOUS</button>
                    <button className={styles.navbutton} onClick={() => { if (count < parseInt(catinfo.ES.Info.Floor2Size) - 1) { nextPage(); play();}else{redirect("3","2");} }}>NEXT</button>
                  </div>
                </div>
              </div>
            </>
          )

        case '3':
          return (
            <>
              
              <div onLoad={() => {play(); searchForCustomCount();}} className={styles.container}>
                <Head>
                  <title>Espacio Trafalgar</title>
                  <meta name="description" content="Audio Guide from Espacio Trafalgar" />
                  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"></meta>
                  <link rel="icon" href="/favicon.ico" />
                </Head>
                <div className={styles.main}>
                  <div className={styles.header_div_visit}>
                    <img className={styles.artimage} src={"images/".concat(catinfo.ES.Floor3[count].image)} />
                  </div>
                  <audio id='audioSrc' className={styles.audiocontrols} controls="controls" controlsList="nodownload"><source src={"https://cdn.shopify.com/s/files/1/0462/4485/5961/files/".concat(catinfo.ES.Floor3[count].audio)} type="audio/mpeg" />Your browser does not support the audio tag.</audio>
                  <h1 id="desctitle" className={styles.shortDescTitlte}> {catinfo.ES.Floor3[count].title} </h1>
                  <p id="desc" className={styles.shortDesc}> {catinfo.ES.Floor3[count].shortDesc} </p>
                  <div className={styles.navbuttonscontainer}>
                    <button className={styles.navbutton} onClick={() => { if (count > 0) previousPage(); play() }}>PREVIOUS</button>
                    <button className={styles.navbutton} onClick={() => { if (count < parseInt(catinfo.ES.Info.Floor3Size) - 1) { nextPage(); play();}else{redirect("home","2");} }}>NEXT</button>
                  </div>
                </div>
              </div>
            </>
          )
      }
    case '3':
      switch (router.query.floor) {
        case '1':
          return (
            <>
              
              <div onLoad={() => {play(); searchForCustomCount();}} className={styles.container}>
                <Head>
                  <title>Espacio Trafalgar</title>
                  <meta name="description" content="Audio Guide from Espacio Trafalgar" />
                  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"></meta>
                  <link rel="icon" href="/favicon.ico" />
                </Head>
                <div className={styles.main}>
                  <div className={styles.header_div_visit}>
                    <img className={styles.artimage} src={"images/".concat(frinfo.ES.Floor1[count].image)} />
                  </div>
                  <audio id='audioSrc' className={styles.audiocontrols} controls="controls" controlsList="nodownload"><source src={"https://cdn.shopify.com/s/files/1/0462/4485/5961/files/".concat(frinfo.ES.Floor1[count].audio)} type="audio/mpeg" />Your browser does not support the audio tag.</audio>
                  <h1 id="desctitle" className={styles.shortDescTitlte}> {frinfo.ES.Floor1[count].title} </h1>
                  <p id="desc" className={styles.shortDesc}> {frinfo.ES.Floor1[count].shortDesc} </p>
                  <div className={styles.navbuttonscontainer}>
                    <button className={styles.navbutton} onClick={() => { if (count > 0) previousPage(); play() }}>PREVIOUS</button>
                    <button className={styles.navbutton} onClick={() => { if (count < parseInt(frinfo.ES.Info.Floor1Size) - 1) { nextPage(); play();}else{redirect("2","3");} }}>NEXT</button>
                  </div>
                </div>
              </div>
            </>
          )

        case '2':
          return (
            <>
              
              <div onLoad={() => {play(); searchForCustomCount();}} className={styles.container}>
                <Head>
                  <title>Espacio Trafalgar</title>
                  <meta name="description" content="Audio Guide from Espacio Trafalgar" />
                  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"></meta>
                  <link rel="icon" href="/favicon.ico" />
                </Head>
                <div className={styles.main}>
                  <div className={styles.header_div_visit}>
                    <img className={styles.artimage} src={"images/".concat(frinfo.ES.Floor2[count].image)} />
                  </div>
                  <audio id='audioSrc' className={styles.audiocontrols} controls="controls" controlsList="nodownload"><source src={"https://cdn.shopify.com/s/files/1/0462/4485/5961/files/".concat(frinfo.ES.Floor2[count].audio)} type="audio/mpeg" />Your browser does not support the audio tag.</audio>
                  <h1 id="desctitle" className={styles.shortDescTitlte}> {frinfo.ES.Floor2[count].title} </h1>
                  <p id="desc" className={styles.shortDesc}> {frinfo.ES.Floor2[count].shortDesc} </p>
                  <div className={styles.navbuttonscontainer}>
                    <button className={styles.navbutton} onClick={() => { if (count > 0) previousPage(); play() }}>PREVIOUS</button>
                    <button className={styles.navbutton} onClick={() => { if (count < parseInt(frinfo.ES.Info.Floor2Size) - 1) { nextPage(); play();}else{redirect("3","3");} }}>NEXT</button>
                  </div>
                </div>
              </div>
            </>
          )

        case '3':
          return (
            <>
              
              <div onLoad={() => {play(); searchForCustomCount();}} className={styles.container}>
                <Head>
                  <title>Espacio Trafalgar</title>
                  <meta name="description" content="Audio Guide from Espacio Trafalgar" />
                  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"></meta>
                  <link rel="icon" href="/favicon.ico" />
                </Head>
                <div className={styles.main}>
                  <div className={styles.header_div_visit}>
                    <img className={styles.artimage} src={"images/".concat(frinfo.ES.Floor3[count].image)} />
                  </div>
                  <audio id='audioSrc' className={styles.audiocontrols} controls="controls" controlsList="nodownload"><source src={"https://cdn.shopify.com/s/files/1/0462/4485/5961/files/".concat(frinfo.ES.Floor3[count].audio)} type="audio/mpeg" />Your browser does not support the audio tag.</audio>
                  <h1 id="desctitle" className={styles.shortDescTitlte}> {frinfo.ES.Floor3[count].title} </h1>
                  <p id="desc" className={styles.shortDesc}> {frinfo.ES.Floor3[count].shortDesc} </p>
                  <div className={styles.navbuttonscontainer}>
                    <button className={styles.navbutton} onClick={() => { if (count > 0) previousPage(); play() }}>PREVIOUS</button>
                    <button className={styles.navbutton} onClick={() => { if (count < parseInt(frinfo.ES.Info.Floor3Size) - 1) { nextPage(); play();}else{redirect("home","3");} }}>NEXT</button>
                  </div>
                </div>
              </div>
            </>
          )
      }
    case '4':
      switch (router.query.floor) {
        case '1':
          return (
            <>
              
              <div onLoad={() => {play(); searchForCustomCount();}} className={styles.container}>
                <Head>
                  <title>Espacio Trafalgar</title>
                  <meta name="description" content="Audio Guide from Espacio Trafalgar" />
                  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"></meta>
                  <link rel="icon" href="/favicon.ico" />
                </Head>
                <div className={styles.main}>
                  <div className={styles.header_div_visit}>
                    <img className={styles.artimage} src={"images/".concat(itinfo.ES.Floor1[count].image)} />
                  </div>
                  <audio id='audioSrc' className={styles.audiocontrols} controls="controls" controlsList="nodownload"><source src={"https://cdn.shopify.com/s/files/1/0462/4485/5961/files/".concat(itinfo.ES.Floor1[count].audio)} type="audio/mpeg" />Your browser does not support the audio tag.</audio>
                  <h1 id="desctitle" className={styles.shortDescTitlte}> {itinfo.ES.Floor1[count].title} </h1>
                  <p id="desc" className={styles.shortDesc}> {itinfo.ES.Floor1[count].shortDesc} </p>
                  <div className={styles.navbuttonscontainer}>
                    <button className={styles.navbutton} onClick={() => { if (count > 0) previousPage(); play() }}>PREVIOUS</button>
                    <button className={styles.navbutton} onClick={() => { if (count < parseInt(itinfo.ES.Info.Floor1Size) - 1) { nextPage(); play();}else{redirect("2","4");} }}>NEXT</button>
                  </div>
                </div>
              </div>
            </>
          )

        case '2':
          return (
            <>
              
              <div onLoad={() => {play(); searchForCustomCount();}} className={styles.container}>
                <Head>
                  <title>Espacio Trafalgar</title>
                  <meta name="description" content="Audio Guide from Espacio Trafalgar" />
                  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"></meta>
                  <link rel="icon" href="/favicon.ico" />
                </Head>
                <div className={styles.main}>
                  <div className={styles.header_div_visit}>
                    <img className={styles.artimage} src={"images/".concat(itinfo.ES.Floor2[count].image)} />
                  </div>
                  <audio id='audioSrc' className={styles.audiocontrols} controls="controls" controlsList="nodownload"><source src={"https://cdn.shopify.com/s/files/1/0462/4485/5961/files/".concat(itinfo.ES.Floor2[count].audio)} type="audio/mpeg" />Your browser does not support the audio tag.</audio>
                  <h1 id="desctitle" className={styles.shortDescTitlte}> {itinfo.ES.Floor2[count].title} </h1>
                  <p id="desc" className={styles.shortDesc}> {itinfo.ES.Floor2[count].shortDesc} </p>
                  <div className={styles.navbuttonscontainer}>
                    <button className={styles.navbutton} onClick={() => { if (count > 0) previousPage(); play() }}>PREVIOUS</button>
                    <button className={styles.navbutton} onClick={() => { if (count < parseInt(itinfo.ES.Info.Floor2Size) - 1) { nextPage(); play();}else{redirect("3","4");} }}>NEXT</button>
                  </div>
                </div>
              </div>
            </>
          )

        case '3':
          return (
            <>
              
              <div onLoad={() => {play(); searchForCustomCount();}} className={styles.container}>
                <Head>
                  <title>Espacio Trafalgar</title>
                  <meta name="description" content="Audio Guide from Espacio Trafalgar" />
                  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"></meta>
                  <link rel="icon" href="/favicon.ico" />
                </Head>
                <div className={styles.main}>
                  <div className={styles.header_div_visit}>
                    <img className={styles.artimage} src={"images/".concat(itinfo.ES.Floor3[count].image)} />
                  </div>
                  <audio id='audioSrc' className={styles.audiocontrols} controls="controls" controlsList="nodownload"><source src={"https://cdn.shopify.com/s/files/1/0462/4485/5961/files/".concat(itinfo.ES.Floor3[count].audio)} type="audio/mpeg" />Your browser does not support the audio tag.</audio>
                  <h1 id="desctitle" className={styles.shortDescTitlte}> {itinfo.ES.Floor3[count].title} </h1>
                  <p id="desc" className={styles.shortDesc}> {itinfo.ES.Floor3[count].shortDesc} </p>
                  <div className={styles.navbuttonscontainer}>
                    <button className={styles.navbutton} onClick={() => { if (count > 0) previousPage(); play() }}>PREVIOUS</button>
                    <button className={styles.navbutton} onClick={() => { if (count < parseInt(itinfo.ES.Info.Floor3Size) - 1) { nextPage(); play();}else{redirect("home","4");} }}>NEXT</button>
                  </div>
                </div>
              </div>
            </>
          )
      }
    case '5':
      switch (router.query.floor) {
        case '1':
          return (
              <div onLoad={() => {play(); searchForCustomCount();}} className={styles.container}>
                <Head>
                  <title>Espacio Trafalgar</title>
                  <meta name="description" content="Audio Guide from Espacio Trafalgar" />
                  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"></meta>
                  <link rel="icon" href="/favicon.ico" />
                </Head>
                <div className={styles.main}>
                  <div className={styles.header_div_visit}>
                    <img className={styles.artimage} src={"images/".concat(enginfo.ES.Floor1[count].image)} />
                  </div>
                  <audio id='audioSrc' className={styles.audiocontrols} controls="controls" controlsList="nodownload"><source src={"https://cdn.shopify.com/s/files/1/0462/4485/5961/files/".concat(enginfo.ES.Floor1[count].audio)} type="audio/mpeg" />Your browser does not support the audio tag.</audio>
                  <h1 id="desctitle" className={styles.shortDescTitlte}> {enginfo.ES.Floor1[count].title} </h1>
                  <p id="desc" className={styles.shortDesc}> {enginfo.ES.Floor1[count].shortDesc} </p>
                  <div className={styles.navbuttonscontainer}>
                    <button className={styles.navbutton} onClick={() => { if (count > 0) previousPage(); play() }}>PREVIOUS</button>
                    <button className={styles.navbutton} onClick={() => { if (count < parseInt(enginfo.ES.Info.Floor1Size) - 1) { nextPage(); play();}else{redirect("2","5");}; }}>NEXT</button>
                  </div>
                </div>
              </div>
          )

        case '2':
          return (
            <>
              
              <div onLoad={() => {play(); searchForCustomCount();}} className={styles.container}>
                <Head>
                  <title>Espacio Trafalgar</title>
                  <meta name="description" content="Audio Guide from Espacio Trafalgar" />
                  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"></meta>
                  <link rel="icon" href="/favicon.ico" />
                </Head>
                <div className={styles.main}>
                  <div className={styles.header_div_visit}>
                    <img className={styles.artimage} src={"images/".concat(enginfo.ES.Floor2[count].image)} />
                  </div>
                  <audio id='audioSrc' className={styles.audiocontrols} controls="controls" controlsList="nodownload"><source src={"https://cdn.shopify.com/s/files/1/0462/4485/5961/files/".concat(enginfo.ES.Floor2[count].audio)} type="audio/mpeg" />Your browser does not support the audio tag.</audio>
                  <h1 id="desctitle" className={styles.shortDescTitlte}> {enginfo.ES.Floor2[count].title} </h1>
                  <p id="desc" className={styles.shortDesc}> {enginfo.ES.Floor2[count].shortDesc} </p>
                  <div className={styles.navbuttonscontainer}>
                    <button className={styles.navbutton} onClick={() => { if (count > 0) previousPage(); play() }}>PREVIOUS</button>
                    <button className={styles.navbutton} onClick={() => { if (count < parseInt(enginfo.ES.Info.Floor2Size) - 1) { nextPage(); play();}else{redirect("3","5");} }}>NEXT</button>
                  </div>
                </div>
              </div>
            </>
          )

        case '3':
          return (
            <>
              
              <div onLoad={() => {play(); searchForCustomCount();}} className={styles.container}>
                <Head>
                  <title>Espacio Trafalgar</title>
                  <meta name="description" content="Audio Guide from Espacio Trafalgar" />
                  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"></meta>
                  <link rel="icon" href="/favicon.ico" />
                </Head>
                <div className={styles.main}>
                  <div className={styles.header_div_visit}>
                    <img className={styles.artimage} src={"images/".concat(enginfo.ES.Floor3[count].image)} />
                  </div>
                  <audio id='audioSrc' className={styles.audiocontrols} controls="controls" controlsList="nodownload"><source id='Src' src={"https://cdn.shopify.com/s/files/1/0462/4485/5961/files/".concat(enginfo.ES.Floor3[count].audio)} type="audio/mpeg" />Your browser does not support the audio tag.</audio>
                  <h1 id="desctitle" className={styles.shortDescTitlte}> {enginfo.ES.Floor3[count].title} </h1>
                  <p id="desc" className={styles.shortDesc}> {enginfo.ES.Floor3[count].shortDesc} </p>
                  <div className={styles.navbuttonscontainer}>
                    <button className={styles.navbutton} onClick={() => { if (count > 0) previousPage(); play() }}>PREVIOUS</button>
                    <button className={styles.navbutton} onClick={() => { if (count < parseInt(enginfo.ES.Info.Floor3Size) - 1) { nextPage(); play();}else{redirect("home","5");}; }}>NEXT</button>
                  </div>
                </div>
              </div>
            </>
          )
      }
  }
}

export async function getStaticProps() {
  const spninfo =  await fetch('https://cdn.shopify.com/s/files/1/0462/4485/5961/files/spnContent.json').then(res => res.json());
  const catinfo =  await fetch('https://cdn.shopify.com/s/files/1/0462/4485/5961/files/catContent.json').then(res => res.json());
  const frinfo =  await fetch('https://cdn.shopify.com/s/files/1/0462/4485/5961/files/frContent.json').then(res => res.json());
  const itinfo = await fetch('https://cdn.shopify.com/s/files/1/0462/4485/5961/files/itContent.json').then(res => res.json());
  const enginfo = await fetch('https://cdn.shopify.com/s/files/1/0462/4485/5961/files/engContent.json').then(res => res.json());
  return {
    props: {
      spninfo,
      catinfo,
      frinfo,
      itinfo,
      enginfo
    }
  }
}