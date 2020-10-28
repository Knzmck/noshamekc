import React from 'react';
import LocationCard from './Components/LocationCard/index';
import Header from './Components/Header/index';

const DonationLocations = () => {
    return (
        <div className="container">
            <Header /> 
            <div className="container mt-4">
                <LocationCard />
            </div>
        </div>
    )
}
export default DonationLocations;