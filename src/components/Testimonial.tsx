import { Avatar, AvatarImage } from '@/components/ui/avatar';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import testimonial1 from '@/assets/testimonial1.webp';
import testimonial2 from '@/assets/testimonial2.webp';
import testimonial3 from '@/assets/testimonial3.webp';
import testimonial4 from '@/assets/testimonial4.webp';
import testimonial5 from '@/assets/testimonial5.webp';
import testimonial6 from '@/assets/testimonial6.webp';

const testimonials = [
  {
    name: 'Emily Thompson',
    role: 'Teacher',
    avatar: testimonial1,
    content:
      'Dental.ie made my visit stress-free. The staff was so friendly and the dentist took great care of my teeth. I can’t recommend them enough!',
  },
  {
    name: 'Michael O’Connell',
    role: 'Business Owner',
    avatar: testimonial2,
    content:
      'I was nervous about my treatment, but the team at Dental.ie was amazing. They explained everything and made sure I was comfortable throughout the process.',
  },
  {
    name: 'Sarah Byrne',
    role: 'Accountant',
    avatar: testimonial3,
    content:
      'Fantastic experience! The clinic is clean, modern, and well-equipped. I received a thorough check-up and great advice on dental care.',
  },
  {
    name: 'David Murphy',
    role: 'Engineer',
    avatar: testimonial4,
    content:
      'From booking to the actual appointment, everything was smooth. The staff is professional and the clinic offers top-notch services. Highly recommend!',
  },
  {
    name: 'Laura Gallagher',
    role: 'Graphic Designer',
    avatar: testimonial5,
    content:
      'I’ve been to many dentists, but Dental.ie stands out for its friendly environment and excellent care. My family and I are all regulars now!',
  },
  {
    name: 'Mark Ryan',
    role: 'Chef',
    avatar: testimonial6,
    content:
      'I had a great experience at Dental.ie. The clinic has advanced equipment, and the dentist made sure I felt at ease. My teeth have never felt better!',
  },
];

const Testimonial = () => {
  return (
    <section className="py-20 px-5">
      <div className="">
        <Carousel className="w-full">
          <div className="mb-8 flex justify-between md:px-10 px-2 lg:mb-12">
            <h2 className="text-2xl font-semibold lg:text-5xl hidden md:block">
              Why Clients Love Us
            </h2>
            <h2 className="text-2xl font-semibold lg:text-5xl md:hidden">
              Why Clients <br /> Love Us
            </h2>
            <div className="flex items-center space-x-2">
              <CarouselPrevious className="static translate-y-0" />
              <CarouselNext className="static translate-y-0" />
            </div>
          </div>
          <CarouselContent>
            {testimonials.map((testimonial, idx) => (
              <CarouselItem
                key={idx}
                className="basis-full md:basis-1/2 lg:basis-1/3"
              >
                <div className="h-full p-1">
                  <div className="flex h-full flex-col justify-between rounded-lg border p-6">
                    <q className="leading-7 text-foreground/70">
                      {testimonial.content}
                    </q>
                    <div className="mt-6 flex gap-4 leading-5">
                      <Avatar className="size-9 rounded-full ring-1 ring-input">
                        <AvatarImage
                          src={testimonial.avatar}
                          alt={testimonial.name}
                        />
                      </Avatar>
                      <div className="text-sm">
                        <p className="font-medium">{testimonial.name}</p>
                        <p className="text-muted-foreground">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonial;
