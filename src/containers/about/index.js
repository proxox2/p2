
import sh1 from'../../assests/images/sh1.jpg'
import sh2 from'../../assests/images/sh2.jpg'
import sh3 from'../../assests/images/sh3.jpg'
import Layout from '../../hoc/layout'

export default function About(){
     return(
      <Layout headerTitle="About Reebok "
       headerText="Reebok International Limited is an American fitness footwear.."
      activPage="about" >
                     
      
                     <h1>
                        About us
                     </h1>
                    
                    <p>Reebok International Limited is an American fitness footwear and clothing manufacturer that is a part of Authentic Brands Group. It was established in England in 1958 as a companion company to J.W. Foster and Sons, a sporting goods company which had been founded in 1895 in Bolton, Lancashire. From 1958 until 1986, the brand featured the flag of Great Britain in its logo to signify the origins of the company.[3] The company</p>

                    
                    <h3>Team Members</h3>
                    <div className='row'>
                         <div className='col-4 mb-4'>
                         <img src= {sh1} height="200" className='w-100' alt='....'/>
                         </div>
                         <div className='col-4 mb-4' >
                         <img src= {sh2} height="200" className='w-100' alt='....'/>
                         </div>
                         <div className='col-4 mb-3'>
                         <img src= {sh3} height="200 " className='w-100' alt='....'/>
                         </div>
    
                </div>

             
                
              
                {/* <h1>
                     Website content </h1> 
                    <p>Loreum ipsum dolar smith test data...</p>
                    */}

        </Layout>
        //or ve can we div instead of empty tag
    )
}
// export default Home; we acn export like this also

//we can add style like this but this is not right way
