import React from 'react';
import Link from 'next/link';

const close = () => {
    document.querySelector('.wrapper').style.display = 'none';
}

const SidePanel = props => {
    return (
        <div className="SidePanel">
            <div class="wrapper">
                <nav id="sidebar">
                    <div class="sidebar-header">
                        <h3>Contents <img onClick={close} src="/static/cross.png" className="cross"/></h3>
                        <strong>Theory of computer science</strong>
                        <Link href="/binary">
                            <a>Binary systems and hexadecimal</a>
                        </Link>
                        <Link href="/comm">
                            <a>Communication and internet technologies</a>
                        </Link>
                        <Link href="/logicgates">
                            <a>Logic gates and circuits</a>
                        </Link>
                        <Link href="/os">
                            <a>Operating systems and computer architecture</a>
                        </Link>
                        <Link href="/devices">
                            <a>Input and output devices</a>
                        </Link>
                        <Link href="/memory">
                            <a>Memory and data storage</a>
                        </Link>
                        <Link href="/languages">
                            <a>High and low-level languages</a>
                        </Link>
                        <Link href="/security">
                            <a>Security and ethics</a>
                        </Link>
                        <br/>
                        <hr/>
                        <br/>
                        <strong>Programming and problem solving</strong>
                        <Link href="/problem-solving">
                            <a>Problem-solving and design</a>
                        </Link>
                        <Link href="/pseudocode">
                            <a>Pseudocode and flowcharts</a>
                        </Link>
                        <Link href="/programming">
                            <a>Programming concepts (whoo whoo!)</a>
                        </Link>
                        <Link href="/data-structures">
                            <a>Data structures: arrays and using pre-release material</a>
                        </Link>
                        <Link href="/databases">
                            <a>Databases</a>
                        </Link>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default SidePanel;