import './home.css'
import Banner from '../../components/Banner'
import bankTree from '../../assets/bank-tree.jpeg'



export function Home() {
    return (
        <main>
             <Banner src={bankTree} alt="Bank tree" content="Bank tree funny how money tree grows instead of money being devalued" />

        </main>
    )