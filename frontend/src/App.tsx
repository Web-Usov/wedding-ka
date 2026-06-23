import { Hero } from './sections/Hero';
import { Invitation } from './sections/Invitation';
import { DressCode } from './sections/DressCode';
import { Details } from './sections/Details';
import { Timing } from './sections/Timing';
import { Location } from './sections/Location';
import { Rsvp } from './sections/Rsvp';
import { PhotoUpload } from './sections/PhotoUpload';
import { MusicPlayer } from './components/ui/MusicPlayer';

function App() {
  return (
    <>
      <main className="w-full">
        <Hero />
        <Invitation />
        <DressCode />
        <Details />
        <Timing />
        <Location />
        <Rsvp />
        <PhotoUpload />
      </main>
      <MusicPlayer />
    </>
  );
}

export default App;
