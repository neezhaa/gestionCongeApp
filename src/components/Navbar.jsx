import { Link } from "react-router-dom"
import chevronDown from '../assets/chevron-down.svg'
import menu from '../assets/menu.svg'

function Navbar() {
  return (
        <div>
            <header className="relative z-50">
                <nav className="container mx-auto py-6">
                    <div className="flex items-center justify-between relative">
                        <div className="pl-6 text-xl font-bold">
                            <Link to="/" className="text-blue-600 lg:text-3xl">
                                Congease
                            </Link>
                        </div>
                        <button data-collapse-toggle="navigation-menu" type="button" className="pr-6 lg:hidden" aria-controls="navigation-menu" aria-expanded="false" aria-label="Navigation Menu">
                            <img src={menu} alt="menu icon" />
                        </button>
                        <div className="hidden absolute left-0 top-full mt-4 w-full bg-white pb-4 lg:static lg:mt-0 lg:flex flex-1 lg:items-center lg:justify-between lg:bg-transparent lg:pb-0">
                            <ul className="flex flex-col lg:px-6 lg:flex-row flex-1 lg:justify-center lg:items-center lg:space-y-0 lg:space-x-8">
                                <li className="flex items-center p-2 border-t border-gray-200 md:border-t-transparent md:p-0">
                                    <Link to="/how-it-works" className="text-black">Comment ça marche</Link>
                                </li>
                                <li className="flex items-center p-2 border-t border-gray-200 md:border-t-transparent md:p-0">
                                    <Link to="/features" className="text-black">Fonctionnalités</Link>
                                </li>
                                <li className="flex items-center p-2 border-t border-gray-200 md:border-t-transparent md:p-0">
                                    <div className="group relative">
                                        <button className="flex w-full cursor-pointer flex-row items-center gap-1 underline-offset-8 lg:justify-center ">
                                            <span>Ressources</span>
                                            <img src={chevronDown} className="transition-['rotate'] lg:group-hover:rotate-[180deg]" alt="chevron down" />
                                        </button>
                                        <div className="left-0 top-full z-50 hidden w-full text-black lg:absolute lg:w-[180px] lg:pt-2 lg:group-hover:block">
                                            <div className="mt-1 text-xs bg-white p-1 lg:rounded-lg lg:border lg:border-gray-200 lg:shadow-sm">
                                                <Link className="block cursor-pointer border-b border-solid px-3 py-1 hover:bg-[#1900410a] lg:py-2 lg:font-medium" to="/faq">FAQ</Link>
                                                <Link className="block cursor-pointer px-3 py-1 hover:bg-[#1900410a] lg:py-2 lg:font-medium" to="/about">À propos</Link>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="flex items-center p-2 border-t border-gray-200 md:border-t-transparent md:p-0">
                                    <Link to="/pricing" className="text-black">Tarifs</Link>
                                </li>
                            </ul>
                            <div className="flex flex-col mt-4 lg:flex-row items-center space-y-4 lg:mt-0 lg:space-y-0 lg:space-x-4 text-sm lg:text-base">
                                <Link to="/login" className="px-4 py-2 text-blue-700">Connexion</Link>
                                <Link to="/signup" className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">S&apos;inscrire</Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
  )
}

export default Navbar;