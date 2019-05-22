import Header from '../components/Header';
import SidePanel from '../components/SidePanel';
import Head from 'next/head';
import React from 'react';

const toggle = () => {
    document.querySelector('.SidePanel .wrapper').style.display = 'block';
}

const children = ({ children }) => (
  <div className="Main">
        <Head>
            <meta charset="UTF-8"/>
            <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.png" />
            <link rel="shortcut icon" type="image/png" href="/static/favicon.png"/>
            <link rel="apple-touch-icon" href="/static/favicon.png"/>
            <link rel="apple-touch-icon" sizes="76x76" href="/static/favicon.png"/>
            <link rel="apple-touch-icon" sizes="120x120" href="/static/favicon.png"/>
            <link rel="apple-touch-icon" sizes="152x152" href="/static/favicon.png"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
            <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"/>
            <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
            <link rel="stylesheet" href="/static/style.css"/>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
            <title>Computer Science - IGCSE</title>
        </Head>
        <Header/>
        <SidePanel/>
        <img onClick={toggle} src="/static/bars.png" className="btn toggler"/> { children }
    </div>
)

export default children;