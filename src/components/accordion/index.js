import React, {useContext, useState, createContext} from 'react'
import './styles/accordion.css'
//import {Container, Frame, Title, Item, Inner, Header, Body } from './styles/accordion'


const ToggleContext = createContext ();


export default function Accordion ({children, ...restProps}) {
    return (
        <div className="Container" {...restProps } >
            <div className="Inner">{children}</div>
        </div>
    )
}

Accordion.Title = function AccordionTitle ({children, ...restProps}) {
    return <h1 className="Title" {...restProps}>{children}</h1>
}

Accordion.Frame = function AccordionFrame ({children, ...restProps}) {
    return <div className="Frame" {...restProps}>{children}</div>
}

Accordion.Item = function AccordionItem ({children, ...restProps}) {
    const [toggleShow, setToggleShow] = useState(false);

    return <ToggleContext.Provider value ={{toggleShow, setToggleShow}}>
       <div className="Item" {...restProps}>{children}</div>
        </ToggleContext.Provider>
};

Accordion.Header = function AccordionHeader ({children, ...restProps}) {
    const {toggleShow, setToggleShow} = useContext(ToggleContext)

    return <div className="Header" onClick = {() => setToggleShow((toggleShow) => !toggleShow) }
     {...restProps}
     >

         {children}
         { /*<pre>{JSON.stringify(toggleShow,null,2)}</pre>*/}
         {toggleShow ? (
           <img src ="/images/icons/close-slim.png" alt ="Close" />
         ) : (
           <img src = "/images/icons/add.png" alt="Open" />
         )
         }
         </div>
}

Accordion.Body = function AccordionBody ({children, ...restProps}) {
    const {toggleShow} = useContext(ToggleContext);
    return toggleShow ? <div className="Body" {...restProps}>{children}</div> : null }
