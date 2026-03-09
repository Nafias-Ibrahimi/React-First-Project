import React from 'react'
import './CSS/header.css'

function PageLayout({header , content ,footer}) {

  return (
    <div>
        <header>{header}</header>
        <main>{content}</main>
        <footer>{footer}</footer>
            </div>
  );
}
function App(){
 <PageLayout 
 header={<h1>header</h1>}
 content={<p>Body</p>}
 footer={<small>footer</small>}>


 </PageLayout>
}

export default Header