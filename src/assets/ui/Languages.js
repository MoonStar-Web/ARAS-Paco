import React, { useEffect,useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import cookies from 'js-cookie';
import classNames from 'classnames';
import { languages } from '../utils/data';
import { AiFillCloseCircle } from 'react-icons/ai'




const GlobeIcon = ({ width = 24, height = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="currentColor"
    className="bi bi-globe"
    viewBox="0 0 16 16"
  >
    <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z" />
  </svg>
)

export default function MultiLang() {


const ulVariants = {
    hidden: {
        opacity:0
    },
    visible: {
        opacity: 1,
        transition: {
            delay: 0.1,
        },
    },
};
  const [isOpen, setIsOpen] = useState(false);
  const currentLanguageCode = cookies.get('i18next') || 'tr'
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode)
  const { t } = useTranslation();


  useEffect(() => {
    console.log('Ayar sayfası öğeleri')
    document.body.dir = currentLanguage.dir || 'ltr'
  }, [currentLanguage, t])

  return (
    <div className="container">
      <div className="language-select">
        <div className="relative inline-block text-left language-select-root">
          <div
          
          className="dropdown">

          <button
          onClick={() => setIsOpen(true)} 
          animate={isOpen ? 'visible':'hidden'} 
          className="hover:bg-accent btn-link dropdown-toggle inline-flex w-full justify-center gap-x-1.5 rounded-md text-white px-3 py-2 text-sm font-semibold shadow-sm" 
          type="button" 
          id="dropdownMenuButton1" 
          data-dropdown-toggle="dropdown"
          aria-expanded="false" 
          >
            <div
            className=''
            ><GlobeIcon />
            </div> 
            </button>
            <motion.ul 
            variants={ulVariants}
            initial='hidden' 
            animate={isOpen ? 'visible' : 'hidden'} 
            duration={500}
            className={`${isOpen ? 'right-0' : 'hidden'} fixed  py-0  right-0 mt-6 w-32 origin-top-right rounded-xl bg-black/75 shadow-lg  ring-opacity-5 focus:outline-none overflow-hidden`}
            aria-labelledby="dropdownMenuButton1" 
            >
            <li>
        {/* close icon*/}
        <motion.div 
        onClick={()=> setIsOpen(false)} 
        duration={700}
        className='flex dropdown-item-text ml-1 items-center mx-1  py-2   text-white '>
         <span  className='mr-2 ml-2 text-center text-sm '>{t('diller')} </span>  
        <AiFillCloseCircle 
        className='w-6 h-6 hover:text-accent ' />
            </motion.div>
          </li>
              {languages.map(({ code, name, country_code }) => (
                <li 
                className='py-0 px-3 mb-3'
                id="dropdown-item"
                key={country_code}
                >
                  <a
                    href="/"
                    className={classNames('dropdown-item ', {
                      disabled: currentLanguageCode === code,
                    })}
                    onClick={() => {
                      i18next.changeLanguage(code)
                    }}
                  >
                    <span
                      className={`flag-icon flag-icon-${country_code} mx-2`}
                      style={{
                        opacity: currentLanguageCode === code ? 1 : 0.5,  
                      }}
                    ></span>
                    <span 
                    className='text-gray-300  hover:text-gray-500 font-semibold'
                    style={{
                      opacity: currentLanguageCode === code ? 1 : 0.5,  
                    }}
                    >
                    {name}
                    </span>
                  </a>
                </li>
              ))}
            </motion.ul>
          </div>
        </div>
      </div>
    </div>
  )
}