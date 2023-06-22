import React, {useState} from 'react';
import ImageSlider from '../../components/ImageSlider/ImageSlider';
import { SliderData } from '../../components/ImageSlider/SliderData';
import Services from '../../components/Services/Services';
import ProductSlider from '../../components/ProductSlider/ProductSlider';
import Benefits from '../../components/Benefits/Benefits';
import OwnerInfo from "../../components/OwnerInfo/OwnerInfo";
// import AppointmentAgenda from '../../components/AppointmentAgenda/AppointmentAgenda';

function Home() {
    const [currentProduct, setCurrentProduct] = useState({});

    return (
        <>
            <ImageSlider slides={SliderData} />
            <Services />
            <ProductSlider
                currentProduct={currentProduct}
                setCurrentProduct={setCurrentProduct}
            />
            <Benefits />
            <OwnerInfo />
            {/*<AppointmentAgenda /> */}
            </>
    );
}

export default Home;