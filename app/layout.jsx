import '@styles/globals.css';
import '@components/Navbar';
import Navbar from '@components/Navbar';
export const metadata = {
    title: 'Marvel App',
    description: 'Prueba para puesto frontEnd',
}
const RootLayout = ({ children}) => {
  return (
    <html lang="es">
        <body>
            <div className="main">
            </div>
            <main className='app'>
                <Navbar />
                {children}
            </main>
        </body>
    </html>
  )
}

export default RootLayout