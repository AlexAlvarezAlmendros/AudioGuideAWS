import Head from 'next/head'
import Image  from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter();
  
  switch (router.query.lang){ 
    case '1': //Spain
      return (
        <div className={styles.container}>
          <Head>
            <title>Espacio Trafalgar</title>
            <meta name="description" content="La AudioGuia de EspacioTrafalgar" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"></meta>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <div className={styles.main}>
            <div className={styles.header_div}>
              <Image alt="" className={styles.logo} width={230} height={129} src="/LogoWhite.png"/>
              <p className={styles.infotext}>Selecciona el piso en el que te encuentras</p>
            </div>
            <div className={styles.main_div} >
              <a className={styles.menua} href="/galery?floor=1&lang=1" ><Image alt="" width={400} height={115} src="/topbtn.png"/></a>
              <a className={styles.menua} href="/galery?floor=2&lang=1" ><Image alt="" width={400} height={115} src="/centerbtn.png"/></a>
              <a className={styles.menua} href="/galery?floor=3&lang=1" ><Image alt="" width={400} height={115} src="/botombtn.png"/></a>
                
            </div>
            <h1 className={styles.Info}>Selecciona tu lenguaje preferido:</h1>
            <div className={styles.languajeSelector}>
              <a className={styles.langa} href="?lang=1" ><Image alt=""  width={40} height={40} src="/spain.png"/></a>
            <a className={styles.langa} href="?lang=2" ><Image alt=""  width={40} height={40} src="/catalonia.png"/></a>
            <a className={styles.langa} href="?lang=3" ><Image alt=""  width={40} height={40} src="/france.png"/></a>
            <a className={styles.langa} href="?lang=4" ><Image alt=""  width={40} height={40} src="/italy.png"/></a>
            <a className={styles.langa} href="?lang=5" ><Image alt=""  width={40} height={40} src="/britain.png"/></a>
            </div>
          </div>
        </div>
      )
      break;
    case '2': //Catalonia
      return (
        <div className={styles.container}>
          <Head>
            <title>Espacio Trafalgar</title>
            <meta name="description" content="AudioGuia de EspaiTrafalgar" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"></meta>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <div className={styles.main}>
            <div className={styles.header_div}>
              <Image alt="" className={styles.logo} width={230} height={129} src="/LogoWhite.png"/>
              <p className={styles.infotext}>Selecciona el pis en el que et trobes</p>
            </div>
            <div className={styles.main_div} >
              <a className={styles.menua} href="/galery?floor=1&lang=2" ><Image alt="" width={400} height={115} src="/topbtn.png"/></a>
              <a className={styles.menua} href="/galery?floor=2&lang=2" ><Image alt="" width={400} height={115} src="/centerbtn.png"/></a>
              <a className={styles.menua} href="/galery?floor=3&lang=2" ><Image alt="" width={400} height={115} src="/botombtn.png"/></a>
                
            </div>
            <h1 className={styles.Info} >Selecciona el teu idioma preferit:</h1>
            <div className={styles.languajeSelector}>
              <a className={styles.langa} href="?lang=1" ><Image alt=""  width={40} height={40} src="/spain.png"/></a>
            <a className={styles.langa} href="?lang=2" ><Image alt=""  width={40} height={40} src="/catalonia.png"/></a>
            <a className={styles.langa} href="?lang=3" ><Image alt=""  width={40} height={40} src="/france.png"/></a>
            <a className={styles.langa} href="?lang=4" ><Image alt=""  width={40} height={40} src="/italy.png"/></a>
            <a className={styles.langa} href="?lang=5" ><Image alt=""  width={40} height={40} src="/britain.png"/></a>
            </div>
          </div>
        </div>
      )
      break;
    case '3': //France
      return (
        <div className={styles.container}>
          <Head>
            <title>Espacio Trafalgar</title>
            <meta name="description" content="Audioguide d'Espacio Trafalgar" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"></meta>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <div className={styles.main}>
            <div className={styles.header_div}>
              <Image alt="" className={styles.logo} width={230} height={129} src="/LogoWhite.png"/>
              <p className={styles.infotext}>Sélectionnez l&apos'étage où vous vous trouvez</p>
            </div>
            <div className={styles.main_div} >
              <a className={styles.menua} href="/galery?floor=1&lang=3" ><Image alt="" width={400} height={115} src="/topbtn.png"/></a>
              <a className={styles.menua} href="/galery?floor=2&lang=3" ><Image alt="" width={400} height={115} src="/centerbtn.png"/></a>
              <a className={styles.menua} href="/galery?floor=3&lang=3" ><Image alt="" width={400} height={115} src="/botombtn.png"/></a>
                
            </div>
            <h1 className={styles.Info} >Sélectionnez votre langue préférée:</h1>
            <div className={styles.languajeSelector}>
              <a className={styles.langa} href="?lang=1" ><Image alt=""  width={40} height={40} src="/spain.png"/></a>
            <a className={styles.langa} href="?lang=2" ><Image alt=""  width={40} height={40} src="/catalonia.png"/></a>
            <a className={styles.langa} href="?lang=3" ><Image alt=""  width={40} height={40} src="/france.png"/></a>
            <a className={styles.langa} href="?lang=4" ><Image alt=""  width={40} height={40} src="/italy.png"/></a>
            <a className={styles.langa} href="?lang=5" ><Image alt=""  width={40} height={40} src="/britain.png"/></a>
            </div>
          </div>
        </div>
      )
      break;
    case '4': //Italy
      return (
        <div className={styles.container}>
          <Head>
            <title>Espacio Trafalgar</title>
            <meta name="description" content="Audioguida da Espacio Trafalgar
            " />
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"></meta>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <div className={styles.main}>
            <div className={styles.header_div}>
              <Image alt="" className={styles.logo} width={230} height={129} src="/LogoWhite.png"/>
              <p className={styles.infotext}>Seleziona il piano in cui ti trovi</p>
            </div>
            <div className={styles.main_div} >
              <a className={styles.menua} href="/galery?floor=1&lang=4" ><Image alt="" width={400} height={115} src="/topbtn.png"/></a>
              <a className={styles.menua} href="/galery?floor=2&lang=4" ><Image alt="" width={400} height={115} src="/centerbtn.png"/></a>
              <a className={styles.menua} href="/galery?floor=3&lang=4" ><Image alt="" width={400} height={115} src="/botombtn.png"/></a>
                
            </div>
            <h1 className={styles.Info} >Seleziona la tua lingua preferita:</h1>
            <div className={styles.languajeSelector}>
              <a className={styles.langa} href="?lang=1" ><Image alt=""  width={40} height={40} src="/spain.png"/></a>
            <a className={styles.langa} href="?lang=2" ><Image alt=""  width={40} height={40} src="/catalonia.png"/></a>
            <a className={styles.langa} href="?lang=3" ><Image alt=""  width={40} height={40} src="/france.png"/></a>
            <a className={styles.langa} href="?lang=4" ><Image alt=""  width={40} height={40} src="/italy.png"/></a>
            <a className={styles.langa} href="?lang=5" ><Image alt=""  width={40} height={40} src="/britain.png"/></a>
            </div>
          </div>
        </div>
      )
      break;
    case '5': //Britain
    return (
      <div className={styles.container}>
        <Head>
          <title>Espacio Trafalgar</title>
          <meta name="description" content="Audio Guide from Espacio Trafalgar" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"></meta>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className={styles.main}>
          <div className={styles.header_div}>
            <Image alt="" className={styles.logo} width={230} height={129} src="/LogoWhite.png"/>
            <p className={styles.infotext}>Select the floor where you are</p>
          </div>
          <div className={styles.main_div} >
            <a className={styles.menua} href="/galery?floor=1&lang=5" ><Image alt="" width={400} height={115} src="/topbtn.png"/></a>
              <a className={styles.menua} href="/galery?floor=2&lang=5" ><Image alt="" width={400} height={115} src="/centerbtn.png"/></a>
              <a className={styles.menua} href="/galery?floor=3&lang=5" ><Image alt="" width={400} height={115} src="/botombtn.png"/></a>
              
          </div>
          <h1 className={styles.Info} >Select your preferred languaje:</h1>
          <div className={styles.languajeSelector}>
            <a className={styles.langa} href="?lang=1" ><Image alt=""  width={40} height={40} src="/spain.png"/></a>
            <a className={styles.langa} href="?lang=2" ><Image alt=""  width={40} height={40} src="/catalonia.png"/></a>
            <a className={styles.langa} href="?lang=3" ><Image alt=""  width={40} height={40} src="/france.png"/></a>
            <a className={styles.langa} href="?lang=4" ><Image alt=""  width={40} height={40} src="/italy.png"/></a>
            <a className={styles.langa} href="?lang=5" ><Image alt=""  width={40} height={40} src="/britain.png"/></a>
          </div>
        </div>
      </div>
    )
      break;
    default: //Default (Eng)
      return (
        <div className={styles.container}>
          <Head>
            <title>Espacio Trafalgar</title>
            <meta name="description" content="Audio Guide from Espacio Trafalgar" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"></meta>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <div className={styles.main}>
            <div className={styles.header_div}>
              <Image alt="" className={styles.logo} width={230} height={129} src="/LogoWhite.png"/>
              <p className={styles.infotext}>Select the floor where you are</p>
            </div>
            <div className={styles.main_div} >
              <a className={styles.menua} href="/galery?floor=1&lang=5" ><Image alt="" width={400} height={115} src="/topbtn.png"/></a>
              <a className={styles.menua} href="/galery?floor=2&lang=5" ><Image alt="" width={400} height={115} src="/centerbtn.png"/></a>
              <a className={styles.menua} href="/galery?floor=3&lang=5" ><Image alt="" width={400} height={115} src="/botombtn.png"/></a>
                
            </div>
            <h1 className={styles.Info} >Select your preferred languaje:</h1>
            <div className={styles.languajeSelector}>

            <a className={styles.langa} href="?lang=1" ><Image alt=""  width={40} height={40} src="/spain.png"/></a>
            <a className={styles.langa} href="?lang=2" ><Image alt=""  width={40} height={40} src="/catalonia.png"/></a>
            <a className={styles.langa} href="?lang=3" ><Image alt=""  width={40} height={40} src="/france.png"/></a>
            <a className={styles.langa} href="?lang=4" ><Image alt=""  width={40} height={40} src="/italy.png"/></a>
            <a className={styles.langa} href="?lang=5" ><Image alt=""  width={40} height={40} src="/britain.png"/></a>
            </div>
          </div>
        </div>
      )
      break;
      }
}
