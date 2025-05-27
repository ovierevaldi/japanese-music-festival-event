import './App.css'
import displayImg from './assets/wibu bawang.jpg'
import bg1 from './assets/bg 1.png'
import bg2 from './assets/bg 2 1.png'
import wa from './assets/wa.png'
import email from './assets/email.jpg'

function App() {

  return (
    <>
      <div className="bg-cover bg-center h-screen font-bold" style={{ backgroundImage: `url(${bg1})`}}>
        <p className='text-8xl text-center py-8'>Harmony of Japan</p>

        <div className='text-center font-bold'>
          <p className='text-5xl py-4'>Countdown Event:</p>
          <p className='text-7xl py-4'>00:00:00</p>
        </div>

        <div className='flex gap-x-10 mx-auto py-8' style={{ maxWidth: '1200px'}}>
          <img src={displayImg} style={{ width: '550px'}}/>
          <div>
            <p className='text-5xl mb-4'>Harmony of Japan</p>
            <p className='text-3xl mb-4'>A Music Celebration</p>
            <p className='text-xl'>
              Step into a world where ancient rhythms and futuristic beats collide. Harmony of Japan is a two-day music festival in the heart of Tokyo that celebrates the full spectrum of Japanese sound—from centuries-old traditions to cutting-edge modern pop. Whether you're a lover of taiko drums, anime soundtracks, or viral J-Pop anthems, this event offers an immersive cultural experience like no other.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-cover bg-center h-screen font-bold" style={{ backgroundImage: `url(${bg2})`, position: 'relative'}}>
          <div>
            <p className='text-6xl text-center py-8'>Date & Location</p>
            <p className='text-4xl text-center py-4'>Friday, 25-Jun-2012</p>
            <p className='text-4xl text-center py-4'>
              742 Evergreen Terrace, Springfield,
              <br />
              IL 62704, USA
            </p>

            <div className='flex gap-x-12 w-full justify-center py-8'>
              <a href='https://maps.app.goo.gl/ERq9iNNRvsxxAJZs7' target='_blank'  className='bg-[#003AFA] py-4 px-8 rounded-lg cursor-pointer hover:bg-[#0026C4] transition duration-300'>
                <p className='text-2xl'>View On GMaps <i className="fa-solid fa-location-dot"></i></p>
              </a>

              <a 
                href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Japan%20Music%20Festival&dates=20250614T190000/20250614T230000&details=Join%20us%20for%20a%20night%20of%20Japanese%20music%20and%20culture!&location=742%20Evergreen%20Terrace,%20IL%2062704"
                 className='bg-[#003AFA] p-4 rounded-lg py-4 px-8 cursor-pointer hover:bg-[#0026C4] transition duration-300'>
                <p className='text-2xl'>Save To Calendar <i className="fa-solid fa-calendar-days"></i></p>
              </a>
            </div>
          </div>
          
          <br />

          <div>
            <p className='text-6xl text-center mb-12'>Contact Us</p>

           <div className='flex gap-x-16 w-full justify-center'>
             <a href='https://wa.me/6285155435604' target='_blank'>
                <img src={wa} alt="" style={{ width: '100px', margin: 'auto'}} className='pb-4 hover:scale-110 cursor-pointer'/>
                <p className='text-xl'>+62 851 5543 5604</p>
              </a>

              <a href="mailto:example@gmail.com" target='_blank'>
                <img src={email} alt="" style={{ width: '100px', margin: 'auto'}} className='pb-4 hover:scale-110 cursor-pointer'/>
                <p className='text-xl'>EXAMPLE@GMAIL.COM</p>
              </a>
           </div>
          </div>

          <footer className='flex justify-between text-xl bg-[#000] py-4 opacity-[85%] px-8' style={{ position: 'absolute', bottom: 0, width: '100%'}}>
            <p className='font-normal'>© 2023 Harmony of Japan. All rights reserved.</p>
            <p className='font-normal'>CC 2025</p>
          </footer>
      </div>
    </>
  )
}

export default App
