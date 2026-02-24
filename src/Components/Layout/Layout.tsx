import React, { type ReactNode } from 'react'
import {Link} from "react-router-dom"
import "./LayoutStyle.css"
import logoSkraut1 from "/src/assets/logoskraut1.png"
import logoSkraut2 from "/src/assets/logoskraut2.png"
import dogLogo from "/src/assets/dogLogo.png"

export default function Layout({children} :{children: ReactNode}){
  return (
    <div className='Layout'>
        <header className='header'>
            <nav>
                <Link className="link1" to="/">Um okkur</Link>
                <img className='logoSkraut1'src={logoSkraut1} />
                <img className="dogLogo" src={dogLogo}/>
                <img className='logoSkraut2'src={logoSkraut2} />
                <Link className="link2" to="/submit">
                Skrifaðu Undir</Link>
            </nav>
        </header>
        <main className='mainLayout'>{children}</main>
        <footer className='mainFooter'>
        <p>Contact info:</p>
        <p>+354 373425</p>
        </footer>
    </div>
  )
}

