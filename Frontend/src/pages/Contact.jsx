import React from 'react'

export default function Contact() {
  return (
    <section>
    <div className='px-4 mx-auto max-w-screen-md'>
      <h2 className='heading text-center'> Contact Us</h2>
      <p className='mb-8 lg:mb-16 font-light text-center text__para'>Got a technical issue? Want to send feedback about a beta feature? Let 
        us know.
      </p>
      <form action="#" className='space-y-8'>
        <div>
          <label htmlFor="email" className='text-textColor font-semibold  text-[16px] leading-7 mb-2'>
            Your Email

          </label>
          <input type="email" id="email" placeholder='example@gmail.com' className=' w-full px-4 py-3 border border-solid border-[#0066ff61] focus:outline-none focus:border-primaryColor leading-7 text-[16px] text-headingColor placeholder:text-textColor cursor-pointer rounded-lg' />
        </div>

      
    <div>
          <label htmlFor="subject" className='text-textColor font-semibold  text-[16px] leading-7 mb-2'>
           Subject

          </label>
          <input type="text" id="subject" placeholder='Let us know how we can help you' className=' w-full px-4 py-3 border border-solid border-[#0066ff61] focus:outline-none focus:border-primaryColor leading-7 text-[16px] text-headingColor placeholder:text-textColor cursor-pointer rounded-lg' />
        </div>

        <div className='sm:col-span-2'>
          <label htmlFor="message" className='text-textColor font-semibold  text-[16px] leading-7 mb-2'>
          Your message

          </label>
         
          <textarea
        rows="6"  
          type="text" id="message" placeholder='Leave a comment....' className=' w-full px-4 py-3 border border-solid border-[#0066ff61] focus:outline-none focus:border-primaryColor leading-7 text-[16px] text-headingColor placeholder:text-textColor cursor-pointer rounded-lg' />
       
        </div>
        <button   type='submit' className='btn rounded sm:w-fit'> Submit</button>

        </form>

    </div>

  </section>
  )
}

