import { Cpu, HeartHandshake, Microscope } from 'lucide-react';
import { Button } from './ui/button';
import aboutUsMd from '@/assets/AboutUs-md.webp';
import aboutUsLg from '@/assets/AboutUs-lg.webp';
import aboutUsSm from '@/assets/AboutUs-sm.webp';
import bookAppointmentMd from '@/assets/BookAppointment-md.webp';
import bookAppointmentLg from '@/assets/BookAppointment-lg.webp';
import bookAppointmentSm from '@/assets/BookAppointment-sm.webp';

const About = () => {
  return (
    <section>
      <div className="flex flex-col px-5 text-center gap-28">
        <div className="flex flex-col gap-7 lg:items-center">
          <h1 className="text-4xl font-semibold lg:text-7xl">
            Your Smile, Our Commitment
          </h1>
          <p className="max-w-xl text-lg lg:max-w-7xl">
            At Dental.ie, we provide comprehensive dental care with a focus on
            comfort, safety, and advanced techniques. Our team of expert
            dentists and staff work together to bring you the best in oral
            healthcare.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <img
            srcSet={`${aboutUsSm} 640w, ${aboutUsMd} 768w, ${aboutUsLg} 1280w`}
            alt="Dental clinic with a chair and prepared equipment."
            className="max-h-96 w-full rounded-md object-cover"
          />
          <div className="flex flex-col justify-between gap-10 lg:p-10 md:p-2 rounded-2xl bg-muted p-10">
            <p className="text-lg text-muted-foreground lg:text-3xl">
              OUR MISSION
            </p>
            <p className="text-lg font-medium">
              We are dedicated to helping our patients achieve and maintain a
              healthy, beautiful smile. By providing personalized care, we
              ensure that each patient leaves our clinic feeling confident and
              cared for.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-6 md:gap-20">
          <div className="flex flex-col gap-5">
            <h2 className="mb-2.5 text-3xl font-semibold md:text-5xl">
              Why Choose Us?
            </h2>
            <p className="text-muted-foreground">
              We combine years of experience with the latest dental technology
              to provide a safe, comfortable, and welcoming environment for all
              patients.
            </p>
          </div>
          <div className="grid gap-10 md:grid-cols-3 pt-10">
            <div className="flex flex-col items-center">
              <div className="flex size-12 items-center justify-center rounded-2xl bg-accent">
                <Microscope className="size-5" />
              </div>
              <h3 className="mb-3 mt-2 text-lg font-semibold">
                Experienced Dentists
              </h3>
              <p className="text-muted-foreground">
                Our team consists of highly trained professionals with years of
                experience in cosmetic, restorative, and preventive dentistry.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex size-12 items-center justify-center rounded-2xl bg-accent">
                <HeartHandshake className="size-5" />
              </div>
              <h3 className="mb-3 mt-2 text-lg font-semibold">
                Patient-Centered Care
              </h3>
              <p className="text-muted-foreground">
                We take the time to listen to your needs and concerns, providing
                personalized treatment plans that suit your dental health goals.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex size-12 items-center justify-center rounded-2xl bg-accent">
                <Cpu className="size-5" />
              </div>
              <h3 className="mb-3 mt-2 text-lg font-semibold">
                Advanced Technology
              </h3>
              <p className="text-muted-foreground">
                We use the latest in dental technology to offer safe, effective,
                and minimally invasive treatments for all our patients.
              </p>
            </div>
          </div>
        </div>
        <div className="grid gap-10 md:grid-cols-2 pt-10">
          <div>
            <p className="mb-10 text-sm font-medium text-muted-foreground">
              MANAGE APPOINTMENT
            </p>
            <h2 className="mb-2.5 text-3xl font-semibold md:text-5xl">
              Book Now and Get a Discount for Your Next Session!
            </h2>
            <Button className="mt-10">Manage Appointment</Button>
            <p className="text-muted-foreground pt-10 hidden md:block">
              Schedule your first appointment today and enjoy a special discount
              on your next visit! We're committed to making your dental care
              affordable and accessible.
            </p>
          </div>
          <div>
            <img
              srcSet={`${bookAppointmentSm} 640w, ${bookAppointmentMd} 768w, ${bookAppointmentLg} 1280w`}
              alt="Dental clinic with a chair and prepared equipment."
              className="max-h-96 w-full rounded-md object-cover"
            />
            <p className="text-muted-foreground pt-10 md:hidden">
              Schedule your first appointment today and enjoy a special discount
              on your next visit! We're committed to making your dental care
              affordable and accessible.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
