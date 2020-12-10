import React from 'react';
import './styles/footer.css'
//import { Container,Row,Column,Link,Title,Text,Break } from './styles/footer';

export default function Footer ({children, ...restProps}) {
    return <div className="Container" {...restProps}>
         {children}
    </div>
}

Footer.Row = function FooterRow ({children, ...restProps }) {
    return <div className = "Row" {...restProps}>{children}</div>
}

Footer.Column = function FooterColumn ({children, ...restProps }) {
    return <div className="Column" {...restProps}>{children}</div>
}

Footer.Link= function FooterLink({children, ...restProps }) {
    return <a className="Link" {...restProps}>{children}</a>
}

Footer.Title = function FooterTitle ({children, ...restProps }) {
    return <p className="Title" {...restProps}>{children}</p>
}

Footer.Text = function FooterText ({children, ...restProps }) {
    return <p  className= "Text" {...restProps}>{children}</p>
}

Footer.Break = function FooterBreak({children, ...restProps }) {
    return <div className="Break" {...restProps}>{children}</div>
}