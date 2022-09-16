import './style.scss';
import Header from '../../components/header'
import Footer from '../../components/footer'
import Sidebar from '../../components/sidebar';

export default function Layout({children,headerTitle,activePage,headerText}){
     return(
       
        <div className='layout-wrapper'>
            <Header  headerText={headerText} headerTitle={headerTitle}
           activePage={activePage} />
           
               <section className='container'>
                <div className='row'>
                   
               
                <div className='col-9 pe-5'>
                   
            {/* here will be our content */}
                 {children}
                 </div>
                  <div className='col-3 px-3'>
                 <Sidebar />
                </div>
                
                </div>
              
                {/* <h1>
                     Website content </h1> 
                    <p>Loreum ipsum dolar smith test data...</p>
                    */}

                    </section> 
                  
            <Footer />
        </div>
        //or ve can we div instead of empty tag
    )
}
// export default Home; we acn export like this also

//we can add style like this but this is not right way
