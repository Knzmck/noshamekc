import React from 'react';
import styled from 'styled-components';
import NicSpringer from '../../../../assets/nicspringer1.jpg';

const Div = styled.div`
h2, h5 {
    display: flex;
    justify-content: center;
    padding-top: 20px;
    text-align: center;
    color: white;
}
.card {
    margin-top: 50px;
    margin-bottom: 50px;
    background-color:  #fa957ee0;
}
img {
    height: 225px;
    width: 200px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    border-radius: 90%;
}
p {
    color: white;
}
`
const Nic = () => {
    return (
        <Div>
            <section className="card">
                <h2 className="display-5"> A message from Nic Cain, founder of No Shame </h2>
                <img src ={NicSpringer} alt="Nic Springer"></img>
                <div className="card-body">
                    <p>"When I was 19, I struggled to find a stable home and provide for myself. Even with working 2 jobs and selling everything I owned I sometimes didn't have enough money to buy myself tampons or pads. I remember one time in particular that I had to resort to stealing tampons from my job’s stockroom. It was embarrassing and heartbreaking and it added unnecessary shame to my life. </p>

                    <p>Now I think about how many homeless people there are out there, as many as 550,000+ on any given night, and imagine the harsh reality they live with, struggling to survive. On top of homelessness and hunger and societal judgements, people who struggle with periods in the houseless community can't afford to take care of a natural body process to feel clean and comfortable.  It's just another thing of shame.</p>

                    <p>I know there are so many needs for our houseless community and organizations that fight tirelessly every day to provide and save lives. People not having available resources to have some kind of dignity with their menstrual health is a need too. I wish to be an advocate for helping our houseless women, non-binary, trans and all those who experience periods to have access to and be provided free period products.</p>

                    <p> There's no shame in having a period or being houseless. I hope that No Shame can shine a much needed light on the everyday struggles of being a houseless person, particularly a person with little to no access to basic healthcare rights and needs. We can and should do more.

                    Thank you for joining me and stay tuned for ways you can be involved in our mission."
                    </p>
                </div>
            </section>
        </Div>
    )
}
export default Nic;