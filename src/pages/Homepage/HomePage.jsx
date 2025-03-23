import Navbar from '../../components/NavBar'
import Carousel from '../../components/Carousel'
import CategoriesCard from '../../components/Categories'
import Footer from '../../components/Footer'
import ProductComponent from '../../components/ProductComponent'
import Partners from '../../components/Partners'
import Image from '../../components/Image'

const HomePage = () => {
    return (

        <div>

            <Navbar/>

            <Carousel/>


            <CategoriesCard/>


            <Image/>
            
            <ProductComponent/>

            <Image/>

            <Partners/>
            
            <Footer/>
        </div>
    )
}

export default HomePage