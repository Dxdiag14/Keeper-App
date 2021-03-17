import React from 'react'

function Footer(){
    const name = 'HJ Miranda'
    const date = new Date().getFullYear()

    return <footer>
    <p>In copyrights of {name} {date}</p>
    </footer>
}

export default Footer