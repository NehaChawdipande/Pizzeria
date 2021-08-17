import React,{Component} from 'react';
import './Home.css';

export default class Home extends Component{
    render(){
        return(
            <div id="content">
                
                <h2>Our Story</h2>
                <hr/>
                <p id="story">We belive in good. We launched Fresh Pan Pizza Best Excuse Awards on our Facebook fan page. Fans were given situations where they had to come up with wacky and fun excuses. The person with the best excuse won the Best Excuse Badge and won Pizzeria's vouchers. Their enthusiastic response proved that Pizzeria's Fresh Pan Pizza is the Tastiest Pan Pizza Ever!</p>
            <p id="story">Ever since we launched the Tastiest Pan Pizza, ever, people have not been able to resist the softest cheesiest, crunchiest, butteriest Pizzeria's Fresh Pan Pizza. They have been leaving the stage in the middle of a performance and even finding excuses to be disqualified in a football match. </p>
            <p id="story">We launched Fresh Pan Pizza Best Excuse Awards on our Facebook fan page. Fans were given situations where they had to come up with wacky and fun excuses. The person with the best excuse won the Best Excuse Badge and won Pizzeria's vouchers. Their enthusiastic response proved that Pizzeria's Fresh Pan Pizza is the Tastiest Pan Pizza Ever!</p>
            <br/>
           <table>
               <tr className="mycard">
                   <td id="infotext">
                        <img className="img" alt="ingredients" src="./ingredients.jpg"/>
                   </td>
                   <td >
                        <h4>Ingredients</h4>
                        <p>We're ruthless about goodness. We have no qualms about tearing up a day-old lettuce leaf (straight from the farm), or steaming a baby (carrot). Cut, Cut, Chop, Chop, Steam, Steam, Stir, Stir. While they're still young and fresh - that's our motto. It makes the kitchen a better place.</p>
                   </td>
               </tr>
                <br/> 
                <tr className="mycard">
                    <td>
                        <h4>Our Chefs</h4>
                        <p>They make sauces sing and salads dance. They create magic with skill, knowledge, passion, and stirring spoons (among other things). They make goodness so good, it doesn't know what to do with itself. We do though. We send it to you.</p>               
                    </td>
                    <td>
                        <img className="img" id="chef" src="./chef2.jpg" alt="chef"></img>
                    </td>
                </tr>
                <br/>
                <tr className="mycard">
                    <td><img  className="img" alt="45mins" src="./45min.jpg"></img></td>
                    <td><h4>Right on Time!</h4><p>Free pizza if not delivered within 45 minutes!</p><p> Careful! its still hot!</p></td>
                </tr>
            </table>

            
            
            </div> 
        )
    }
}
