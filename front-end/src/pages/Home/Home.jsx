import './home.css'
import Banner from '../../components/Banner/Banner';
import ComItem from '../../components/ComItem/ComItem';
import chatIcon from '../../assets/icon-chat.png'
import moneyIcon from '../../assets/icon-money.png'
import securityIcon from '../../assets/icon-security.png'


export function Home() {
    return (
        <main>
             <Banner content="Bank tree funny how money tree grows instead of money being devalued" />
             <section class="features">
             <h2 class="sr-only">Features</h2>
             <ComItem src={chatIcon} alt="Chat Icon" title="You are our #1 priority" content="Need to talk to a representative? You can get in touch through our
            24/7 chat or through a phone call in less than 5 minutes."></ComItem>
            <ComItem src={moneyIcon} alt="Money Icon" title="More savings means higher rates" content="The more you save with us, the higher your interest rate will be! "></ComItem>
            <ComItem src={securityIcon} alt="Security Icon" title="Security you can trust" content=" We use top of the line encryption to make sure your data and money is always safe. "></ComItem>


             </section>
        </main>

     );
    }
    
export default Home;