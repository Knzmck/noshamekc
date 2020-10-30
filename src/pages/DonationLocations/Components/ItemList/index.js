import React from 'react';
import styled from 'styled-components';

const Section = styled.section`

`
const periodItems = [
    "Tampons", "Pads & Liners", "Period Cups", "Bladder Control Pads", "Azo", "New Underwear", "Wipes"
]
const hygieneItems = [
    "Deodorant", "Body Spray", "Body Wash", "Soap", "Shampoo", "Conditioner", "Toothpaste", "Toothbrushes"
]
const survivalGear = [
    "Batteries", "Backpacks/bags", "OTC Pain Meds", "Hand/Toe Warmers", "Gloves", "Hats", "Winter Clothing"
]
const ItemList = () => {
    return (
        <Section className="container">
            <h4 className="mb-3">Donation Items Needed:</h4>
            <div className="row">
                <div className="col">
                   
                    {periodItems.map(periodItems =>
                        <li>{periodItems}</li>
                    )} 
                    
                </div>
                <div className="col">
                    {hygieneItems.map(hygieneItems =>
                        <li>{hygieneItems}</li>
                    )}
                </div>
                <div className="col">
                    {survivalGear.map(survivalGear =>
                        <li>{survivalGear}</li>
                    )}
                </div>
            </div>
        </Section>
    )
}
export default ItemList;