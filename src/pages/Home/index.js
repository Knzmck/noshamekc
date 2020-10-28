import React from 'react';
import './styles.css';
import Desktop from './Components/Desktop/index';
import Mobile from './Components/Mobile/index';

const Home = () => {
    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 620;
    React.useEffect(() => {
      window.addEventListener("resize", () => setWidth(window.innerWidth));
    }, []);
return width < breakpoint ? <Mobile /> : <Desktop />;
}
export default Home;