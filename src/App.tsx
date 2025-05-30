import './App.css'
import displayImg from './assets/wibu bawang.jpg'
import bg1 from './assets/bg 1.png'
import bg2 from './assets/bg 2 1.png'
import wa from './assets/wa.png'
import email from './assets/email.jpg'
import { useEffect, useState } from 'react'

type TimerProp = {
  days: number,
  hours: number,
  minutes: number,
  seconds: number
};

function App() {
  const dateFormat: Intl.DateTimeFormatOptions = {
    weekday: 'long',     // "Monday"
    year: 'numeric',     // "2025"
    month: 'long',       // "May"
    day: 'numeric',      // "27"
    hour: 'numeric',     // "3"
    minute: '2-digit',   // "45"
    hour12: true         // "PM"
  };

  const eventTitle = 'Harmony of Japan';
  const eventStart = new Date('June 5, 2025 10:00:00');
  const eventEnd = new Date('June 5, 2025 17:00:00');
  const eventMessage = 'Join us for a night of Japanese music and culture!';
  const eventLocation = '742 Evergreen Terrace, Springfield, IL 62704, USA';

  const formatGoogleDate = (localDate: Date) => {
    return localDate.toISOString().replace(/[-:]/g, "").split('.')[0] + "Z";
  }
 
  const calculateDifference = (): TimerProp => {
    const difference = eventStart.getTime() - new Date().getTime();

    if(difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    }
  }

  const [currentTimer, setCurrentTimer] = useState<TimerProp>(calculateDifference());

  useEffect(() => {
    const timer = setInterval(() => {
      const updatedTimer = calculateDifference();

      if(updatedTimer.days === 0 && updatedTimer.hours === 0 && updatedTimer.minutes === 0 && updatedTimer.seconds === 0) {
        clearInterval(timer);
      };

      setCurrentTimer(calculateDifference())
    }, 1000);

    return () => clearInterval(timer);
  }, [])

  return (
    <>
    <div className="bg-cover bg-center lg:h-screen font-bold" style={{ backgroundImage: `url(${bg1})`}}>
      <p className='text-5xl md:text-6xl lg:text-8xl text-center py-4 md:py-8'>{eventTitle}</p>

      <div className='text-center font-bold'>
        <p className='text-2xl md:text-3xl lg:text-5xl py-2 md:py-4'>Countdown Event:</p>
        <p className='text-4xl md:text-5xl lg:text-7xl py-2 md:py-4'>{currentTimer.days} Day(s) { currentTimer.hours}: {currentTimer.minutes}:{currentTimer.seconds}</p>
      </div>

      <div className='flex flex-col lg:flex-row gap-x-10 mx-auto py-8' style={{ maxWidth: '1200px'}}>
        <img src={displayImg} className='p-2 w-[350px] lg:w-[550px] mx-auto'/>
        <div className='text-center'>
          <p className='text-2xl md:text-4xl lg:text-5xl mb-2 md:mb-4'>Harmony of Japan</p>
          <p className='text-xl md:text-2xl lg:text-3xl mb-2 md:mb-4'>A Music Celebration</p>
          <p className='text-sm md:text-base lg:text-xl px-4 md:px-0'>
            Step into a world where ancient rhythms and futuristic beats collide. Harmony of Japan is a two-day music festival in the heart of Tokyo that celebrates the full spectrum of Japanese sound—from centuries-old traditions to cutting-edge modern pop. Whether you're a lover of taiko drums, anime soundtracks, or viral J-Pop anthems, this event offers an immersive cultural experience like no other.
          </p>
        </div>
      </div>
    </div>

    <div className="bg-cover bg-center h-screen font-bold" style={{ backgroundImage: `url(${bg2})`, position: 'relative'}}>
        <div>
          <p className='text-3xl md:text-5xl lg:text-6xl text-center py-8'>Date & Location</p>
          <p className='text-xl md:text-3xl lg:text-4xl text-center py-2 md:py-4 px-4'> {new Intl.DateTimeFormat('en-US', dateFormat).format(eventStart)}</p>
          <p className='text-xl md:text-3xl lg:text-4xl text-center py-2 md:py-4 px-4'>
            742 Evergreen Terrace, Springfield,
            <br />
            IL 62704, USA
          </p>

          <div className='flex gap-x-6 md:gap-x-10 lg:gap-x-12 w-full justify-center py-8 text-sm md:text-xl lg:text-2xl'>
            <a href='https://maps.app.goo.gl/ERq9iNNRvsxxAJZs7' target='_blank'  
              className='bg-[#003AFA] py-4 px-4 md:px-8 rounded-lg cursor-pointer hover:bg-[#0026C4] transition duration-300'>
              <p >View On GMaps <i className="fa-solid fa-location-dot"></i></p>
            </a>

            <a 
              href={`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${eventTitle}&dates=${formatGoogleDate(eventStart)}%2F${formatGoogleDate(eventEnd)}&details=${eventMessage}!&location=${eventLocation}`}
                className='bg-[#003AFA] p-4 rounded-lg py-4 px-4 md:px-8 cursor-pointer hover:bg-[#0026C4] transition duration-300'>
              <p>Save To Calendar <i className="fa-solid fa-calendar-days"></i></p>
            </a>
          </div>
        </div>
        
        <br />

        <div>
          <p className='text-3xl md:text-3xl lg:text-6xl text-center mb-8 md:mb-10 lg:mb-12'>Contact Us</p>

          <div className='flex gap-x-8 md:gap-x-16 w-full justify-center text-sm md:text-base lg:text-xl'>
            <a href='https://wa.me/6285155435604' target='_blank'>
              <img src={wa} alt="" style={{ margin: 'auto'}} className='pb-4 hover:scale-110 cursor-pointer w-[75px] md:w-[100px]'/>
              <p>+62 851 5543 5604</p>
            </a>

            <a href="mailto:example@gmail.com" target='_blank'>
              <img src={email} alt="" style={{ margin: 'auto'}} className='pb-4 hover:scale-110 cursor-pointer w-[75px] md:w-[100px]'/>
              <p>EXAMPLE@GMAIL.COM</p>
            </a>
          </div>
        </div>

        <footer className='md:flex md:justify-between text-sm md:text-base lg:text-xl bg-[#000] py-4 opacity-[85%] px-8' style={{ position: 'absolute', bottom: 0, width: '100%'}}>
          <p className='font-normal mb-2 md:mb-0'>© 2023 Harmony of Japan. All rights reserved.</p>
          <p className='font-normal text-center md:text-left'>CC 2025</p>
        </footer>
    </div>
    </>
  )
}

export default App
