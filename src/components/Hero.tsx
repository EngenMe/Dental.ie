import { Button } from '@/components/ui/button';
import heroPicSm from '@/assets/heroPic-sm.webp';
import heroPicMd from '@/assets/heroPic-md.webp';
import heroPiclg from '@/assets/heroPic-lg.webp';

const Hero1 = () => {
  return (
    <section className="px-5 pt-20">
      <div className="grid items-center gap-8 lg:grid-cols-2">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <h1 className="my-6 text-pretty text-4xl font-bold lg:text-6xl">
            Your Smile, Our Priority
          </h1>
          <p className="mb-8 max-w-xl text-muted-foreground lg:text-xl">
            Comprehensive dental care for a healthier, brighter smile. Book your
            appointment today and experience expert care in a warm,
            family-friendly environment.
          </p>
          <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
            <Button className="w-full sm:w-auto">Book Appointment</Button>
          </div>
        </div>
        <img
          srcSet={`${heroPicSm} 640w, ${heroPicMd} 768w, ${heroPiclg} 1280w`}
          alt="Dentist holding a beige mouth model and a dental tool."
          className="max-h-96 w-full rounded-md object-cover"
        />
      </div>
    </section>
  );
};

export default Hero1;
