
import {Link} from 'react-router-dom'



const CheckoutSuccess = () => {
   return (
<div className="bg-gray-100 h-screen">
    <div className="bg-white p-6 md:mx-auto">
    <div className='bg-white p-6 md: mx-auto'>
                <div className='text-center'>
                <h3 className='text-2xl text-grey-900 font-[600] text-center mb-4'></h3>
                <p className='text-gray-600 my-2'>
                Thankyou for completing your secure online payment.
                    </p>
                    <p>Have a great day!</p>
                    <div className='py-10 text-center'>
                        <Link to="/home" className='px-12 bg-buttonBgColor text-white font-[600] py-3'>Go back to Home</Link>
                    </div>
                </div>
                </div>
    </div>
</div>
   )       
    
};

export default CheckoutSuccess;


