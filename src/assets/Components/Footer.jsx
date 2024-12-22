import React from 'react'

const Footer = () => {
  return (
    <div className='Footer w-full h-48 bg-black'>
      <div className="Logo-Container flex font-GretaSemi justify-center py-5  border-r-10 px-10">
        <img src="../../public/Images/dc-logo-75x75_footer.avif" alt="" />
      </div>
      <ul className="Link-Container text-white text-xl flex font-GretaSemi justify-center mb-1">
        <li className="hover:text-blue border-r-2 px-6">PRIVACY POLICY</li>
        <li className="hover:text-blue border-r-2 px-6">TERMS</li>
        <li className="hover:text-blue border-r-2 px-6">AD CHOICES</li>
        <li className="hover:text-blue border-r-2 px-6">ACCESIBILITY</li>
        <li className="hover:text-blue px-6">COOKIE SETTINGS</li>
      </ul>
      <h1 className="text-white text-xl flex font-GretaSemi justify-center ">© & ™ DC. ALL RIGHTS RESERVED</h1>
    </div>
  )
}

export default Footer
