import React, { Component } from 'react';
import Link from 'next/link';

class Header extends Component {
    state = {
        titles: [
            {text:'Binary systems and hexadecimal', link: '/binary'},
            {text:'Communication and internet technologies', link: '/comm'},
            {text:'Logic gates and circuits', link:'/logicgates'},
            {text:'Operating systems and computer architecture', link:'/os'},
            {text:'Input and output devices', link:'/devices'},
            {text:'Memory and data storage', link:'/memory'},
            {text:'High and low-level languages', link:'/languages'},
            {text:'Security and ethics', link:'/security'},
            {text:'Problem-solving and design', link:'/problem-solving'},
            {text:'Pseudocode and flowcharts', link:'/pseudocode'},
            {text:'Programming concepts (whoo whoo!)', link:'/programming'},
            {text:'Data structures: arrays and using pre-release material', link:'data-structures'},
            {text:'Databases', link: '/databases'}
        ],
        filteredTitles: [
            
        ]
    }
    searchFilter = e => {
        if (e.target.value.length == 0) {
            document.querySelector('.dropdown').style.display = 'none';
        }else {
            document.querySelector('.dropdown').style.display = 'block';
            var filtered = this.state.titles.filter(item => {
                // change current item to lowercase
                const lc = item.text.toLowerCase();
                        // change search term to lowercase
                const filter = e.target.value.toLowerCase();
                return lc.includes(filter);
            });
            
            this.setState({filteredTitles:filtered});
        }
    }
    render () {
        return (
            <div className="Header">
                <nav className="navbar fixed-top navbar-light bg-light">
                    <a href="/" className="navbar-brand"><img src="http://clipart-library.com/images/pTq6AraT9.png" width="30"/> Computer Science</a>
                    <form>
                        <input onChange={this.searchFilter} type="text" placeholder="Find chapters"/><button className="btn btn-primary">Search</button>
                        <div className="dropdown">
                            <ul>
                            {this.state.filteredTitles.map(title => {
                                return <li><Link href={title.link}><a>{title.text}</a></Link></li>
                            })}
                            </ul>
                        </div>
                    </form>
                </nav>
            </div>
        );
    }   
}

export default Header;