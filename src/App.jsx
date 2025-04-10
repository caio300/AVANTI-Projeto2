import ellipse1 from './assets/ellipse1.svg'
import ellipse2 from './assets/ellipse2.svg'
import memphis from './assets/memphis.svg'
import iconGit from '../public/iconGitHub.svg'
import logoGit from '../public/logoGitHub.svg'
import iconSearch from './assets/iconSearch.svg'
import ErrorMessage from './components/ErrorMessage'


function App() {
  const message = 'Nenhum perfil foi encontrado com ese nome de usuário.Tente novamente'
  return (
    <>
      <div className='relative w-full h-screen overflow-hidden flex justify-center items-center'>
        <img src={ellipse1} alt="Efeito visual"  className="absolute top-0 left-0 w-[674px] pointer-events-none select-none"/>
        <img src={memphis} alt="Efeito visual"  className="absolute top-24 left-96 translate-x-[-50%] w-[239px] h-[225px] pointer-events-none select-none"/>
        <img src={ellipse2} alt="Efeito visual"  className="absolute top-0 right-0 w-[674px] pointer-events-none select-none"/>

        <div className="relative z-10 bg-black h-[537px] w-[1156px]">
          <div className='flex justify-center gap-3 mt-10'>
            <img src={iconGit} alt="Icons Git Hub" />
            <h1 className="text-6xl text-center text-white font-semibold font-nunito">Perfil</h1>
            <img src={logoGit} alt="Icons Git Hub" />
          </div>
          
          <div className='flex justify-center mt-7'>
            <div className='relative flex justify-center w-[503px] h-[62px] rounded-lg overflow-hidden'>
              <input
                type="text"
                placeholder="Digite um usuário do Github"
                className="flex-1 px-4 bg-white outline-none max-w-[503px] rounded-lg font-semibold text-black text-xl placeholder:text-black placeholder:text-xl"
              />
              <button className="absolute right-0 bg-blue-600 hover:bg-blue-700 w-[62px] h-[62px] flex items-center justify-center rounded-lg">
                <img src={iconSearch} alt="Buscar" className="w-6 h-6"/>
              </button>
            </div>
          </div>

          <div className='flex justify-center'>
            <ErrorMessage message={message}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
