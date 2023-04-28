import React from 'react'
import { images } from '../../../assets'
export default function Founder() {
  return (
    <div className='my-4'>
        <div className='flex flex-col justify-center items-center'>
            <h2 className='lg:h1 md:h2 sm:h3 h4 px-3'>Brief Profile Of The Founder</h2>
            
            <div className='flex flex-col lg:flex-row justify-center items-center'> 
                <div className='p-6'>
                    <img src={images.avatar} alt='' className='w-60 h-60 object-cover mask mask-squircle bg-primary p-7'/>
                </div>
                <div className='py-10 px-7 leading-8 space-y-5 lg:w-[50%]'>
                    <p>
                    Mr. Tamiru Demeke who is currently PhD Candidate at Martin-Luther University, Halle (Saale), Germany has two Master degrees in Economics (International Trade and Finance) and Project Management as well as a bachelor degree in Economics from Addis Ababa University, Addis Ababa, Ethiopia. He also took a lot of training every time especially in Health Economics particularly in Health Financing, Monitoring and Evaluation and both quantitative and qualitative research methods. He has over above 34 years work experience. During these years, he worked in the Banking industry for 17 years (Nov. 1987-June 2005), in Non-Government Organizations such as HAPCO and UNICEF for four and half years (June 2005-Dec. 2009) and as freelance consultant for 13 years from Jan. 2010 to Jan. 2022. During his tenure as employee and freelance consultant, he was engaged in financial areas, health economics, project management, monitoring and evaluation as well as research areas and he was successful in all his activities. He also provided training for both government and non-government organization employees on project planning, project management, monitoring and evaluation, to mention few. For his good performances he was awarded various prizes and recommendation letters from all organizations.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}
