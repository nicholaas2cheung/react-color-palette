import React from 'react';
import './styles/PageStyles.css';

function Page({ children }) {
    return <section className="page">{children}</section>;
}

export default Page;
