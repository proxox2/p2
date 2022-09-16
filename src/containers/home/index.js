import { useEffect ,useState} from 'react'
import sh1 from'../../assests/images/sh1.jpg'
import sh2 from'../../assests/images/sh2.jpg'
import sh3 from'../../assests/images/sh3.jpg'
import sh4 from'../../assests/images/sh4.jpg'
import Layout from '../../hoc/layout'


export default function Home(){
  const [data, setData] = useState([])

  useEffect(() => {

  }, [])
     return(
       <Layout headerTitle="Reebok Store " headerText="Welcome to the Reebok Store" 
       activPage="home">
                     <h1> 
                        Welcome to Reebok 
                     </h1><p>Reebok India Company is a Non-govt company, incorporated on 01 Mar, 1995. It's a private unlisted company and is classified as'unlimited company'.

Company's authorized capital stands at Rs 2300.0 lakhs and has 99.44039% paid-up capital which is Rs 2287.13 lakhs. Reebok India Company last annual general meet (AGM) happened on 08 Sep, 2017. The company last updated its financials on 31 Mar, 2017 as per Ministry of Corporate Affairs (MCA).</p>
                    <h3>Featured Items</h3>
                    <div className='row'>
                         <div className='col-3 mb-3'>
                          <img src={require ('../../assests/images/sh1.jpg')} height="150" className="w-100" alt="..."/>
                          </div>
                          <div className='col-3 mb-3'>
                         <img src= {sh1} height="150"   className='w-100' alt='....'/>
                         </div>

                         <div className='col-3 mb-3' >
                         <img src= {sh2} height="150" className='w-100' alt='....'/>
                         </div>
                         <div className='col-3 mb-3'>
                         <img src= {sh3} height="150" className='w-100' alt='....' />
                         </div>
                         <div className='col-3 mb-3'>
                         <img src= {sh4} height="150" className='w-100' alt='....'/>
                         </div>
                         <div className='col-3 mb-3'>
                         <img src= {sh1} height="150" className='w-100' alt='....'/>
                         </div>
                         <div className='col-3 mb-3'>
                         <img src= {sh2} height="150" className='w-100' alt='....'/>
                         </div>
                         <div className='col-3 mb-3'>
                         <img src= {sh3} height="150" className='w-100' alt='....'/>
                         </div>
                         <div className='col-3 mb-3'>
                         <img src= {sh2} height="150" className='w-100' alt='....'/>
                         </div>
                </div>

                </Layout>
        //or ve can we div instead of empty tag
    )
}
// export default Home; we acn export like this also

//we can add style like this but this is not right way
