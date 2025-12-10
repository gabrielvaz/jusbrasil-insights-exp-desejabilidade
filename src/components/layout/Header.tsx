import { Search, Menu, User } from 'lucide-react';


export function Header() {
    return (
        <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
            <div className="max-w-[1280px] mx-auto px-4 h-16 flex items-center justify-between gap-4">
                {/* Logo Section */}
                <div className="flex items-center gap-6">
                    <a href="#" className="flex items-center gap-2">
                        {/* Simple text logo wrapper for prototype */}
                        <div className="flex items-center gap-1 font-bold text-xl tracking-tight">
                            <span className="text-gray-800">Jusbrasil</span>
                        </div>
                    </a>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
                        <a href="#" className="hover:text-[#2e8b57] transition-colors">Para você</a>
                        <a href="#" className="hover:text-[#2e8b57] transition-colors">Consulta processual</a>
                        <a href="#" className="text-[#2e8b57] bg-green-50 px-3 py-1.5 rounded-full">Jurisprudência</a>
                        <a href="#" className="hover:text-[#2e8b57] transition-colors">Doutrina</a>
                        <a href="#" className="hidden lg:block hover:text-[#2e8b57] transition-colors">Artigos</a>
                    </nav>
                </div>

                {/* Search Bar */}
                <div className="flex-1 max-w-xl hidden md:block">
                    <div className="relative group">
                        <input
                            type="text"
                            placeholder="Pesquisar no Jusbrasil"
                            className="w-full bg-gray-100 border-none rounded-full py-2 pl-10 pr-4 text-sm text-gray-800 placeholder:text-gray-500 focus:ring-1 focus:ring-gray-300 focus:bg-white transition-all"
                        />
                        <Search className="absolute left-3.5 top-2.5 w-4 h-4 text-gray-500" />
                    </div>
                </div>

                {/* User/Mobile Actions */}
                <div className="flex items-center gap-3">
                    <button className="md:hidden p-2 text-gray-600">
                        <Search className="w-5 h-5" />
                    </button>

                    <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-1.5 rounded-full transition-colors">
                        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden border border-gray-300">
                            <User className="w-5 h-5 text-gray-500" />
                        </div>
                    </div>
                    <button className="md:hidden p-2 text-gray-600">
                        <Menu className="w-5 h-5" />
                    </button>
                </div>
            </div>

            {/* Secondary Nav Line (Optional, for context if needed, but keeping simple for now) */}
        </header>
    );
}
