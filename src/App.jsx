import React, { useState } from 'react';
import Navbar from "./Navbar";
import Home from './Home';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Footer from './Footer';
import { Redirect, Route, Switch } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyle } from './theme';


const styledApp = styled.div``;

const App = () => {

    const [theme, setTheme] = useState("light");

    const themeToggler = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light');
    }

    return (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <GlobalStyle />
            <styledApp>
                <>
                    <Navbar theme={theme} themeToggler={themeToggler} />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/portfolio" component={Portfolio} />
                        <Route exact path="/contact" component={Contact} />
                        <Redirect to="/" />
                    </Switch>
                    <About />
                    <Portfolio />
                    <Contact />
                    <Footer />
                </>
            </styledApp>
        </ThemeProvider>
    );
};

export default App;