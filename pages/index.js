import React, { Component } from 'react';
import head from 'next/head';
import Page from '../layouts/main';

class Home extends Component {
    render() {
        return(
            <div className="Home">
                <Page>
                    <div className="main-display">
                        <h2>Home</h2>
                        <strong>Begin by choosing any chapter</strong>
                        <br/>
                        <br/>
                        <img src="http://uniworld.edu.my/wp-content/uploads/2014/10/CIE-logo.jpg" width="140" />
                        
                        <p>This program was developed by me (Idrak) as a quick guide to IGCSE computer science, following all the basic chapters. I have my own notes which contains certain concepts which has been simplified for better understanding.</p>
                        <p>Most of the content was copied from the textbook, however the whole purpose of this is the accessebility and the ability to add extra images and links.</p>
                    </div>
                </Page>
            </div>
        );
    }
}

export default Home;