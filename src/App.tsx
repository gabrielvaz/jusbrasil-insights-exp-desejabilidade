import { Header } from './components/layout/Header';
import { JurisprudenceHeader } from './components/features/JurisprudenceHeader';
import { Tabs } from './components/ui/Tabs';
import { ContentBody } from './components/features/ContentBody';
import { DetailsBox } from './components/features/DetailsBox';
import { Timeline } from './components/features/Timeline';
import { ActionBanner } from './components/features/ActionBanner';
import { VariantsProvider } from './contexts/VariantsContext';
import { TopBar } from './components/layout/TopBar';

function App() {
  return (
    <VariantsProvider>
      <div className="min-h-screen bg-[#F9F9F9] text-gray-900 font-sans pt-16">
        <TopBar />
        <Header />

        <main className="max-w-[1280px] mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-8 flex flex-col bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <JurisprudenceHeader />

            <ActionBanner />

            <Tabs />
            <ContentBody />
          </div>

          {/* Right Column - Sidebar */}
          <aside className="lg:col-span-4 flex flex-col gap-6 sticky top-40">
            <DetailsBox />
            <Timeline />

            <div className="px-2 mt-2">
              <h3 className="text-xs font-bold text-gray-900 mb-2">De onde vêm as informações do Jusbrasil?</h3>
              <p className="text-[10px] text-gray-500 leading-relaxed">
                As informações exibidas neste documento foram coletadas dos Sistemas dos Tribunais e dos Diários Oficiais. Eventuais desidentificações e/ou exclusões de dados pessoais poderão ser realizadas como salvaguardas e em respeito aos direitos do titular dos dados.
              </p>
            </div>
          </aside>
        </main>
      </div>
    </VariantsProvider>
  );
}

export default App;
