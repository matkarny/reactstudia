import React from 'react';
import Header from './components/Header';
import Text from './components/Text';
import Section from './components/Section';
import SecondSection from './components/SecondSection';
import Footer from './components/Footer';
import Button from './components/Button';
import Image from "./components/Image";
import Logo from './logo.svg'
import Post from "./components/Post";
const App = () => 
<div>
 <Header />
 <Section />
 <SecondSection />
 <Post text={"Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla imperdiet sit amet magna. Vestibulum dapibus, mauris nec malesuada fames ac turpis velit, rhoncus eu, luctus et interdum adipiscing wisi. Aliquam erat ac ipsum. Integer aliquam purus. Quisque lorem tortor fringilla sed, vestibulum id, eleifend justo vel bibendum sapien massa ac turpis faucibus orci luctus non, consectetuer lobortis quis, varius in, purus. Integer ultrices posuere cubilia Curae, Nulla ipsum dolor lacus, suscipit adipiscing. Cum sociis natoque penatibus et ultrices volutpat. Nullam wisi ultricies a, gravida vitae, dapibus risus ante sodales lectus blandit eu, tempor diam pede cursus vitae, ultricies eu, faucibus quis, porttitor eros cursus lectus, pellentesque eget, bibendum a, gravida ullamcorper quam. Nullam viverra consectetuer. Quisque cursus et, porttitor risus. Aliquam sem. In hendrerit nulla quam nunc, accumsan congue. Lorem ipsum primis in nibh vel risus. Sed vel lectus. Ut sagittis, ipsum dolor quam."} image={"https://contenthub-static.grammarly.com/blog/wp-content/uploads/2016/08/FAUX-PAS-760x400.jpg"} name={"Przykładowy tytuł"}/>
 <Post text={"Dużo tekstu o biedronce która podbija świat"} image={"https://s.mamotoja.pl/media/cache/450x450/media/shop/201012/460_01_6381.jpg"} name={"Biedronka rusza na podbój świata"}/>
 <Post text={"Dużo tekstu o tym jak biedronka się kończy"} image={"https://i1.kwejk.pl/k/obrazki/2011/09/2ad164cfe7501567db25374c0b8268ca.jpg"} name={"Koniec biedronki"}/>
 <Footer />
 <Image sorc={Logo}/>
</div>
export default App;
