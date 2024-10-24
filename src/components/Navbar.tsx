import {
  AlertCircle,
  AlignCenter,
  Anchor,
  Calendar,
  CheckSquare,
  Clipboard,
  CreditCard,
  FileText,
  Heart,
  HelpCircle,
  Home,
  MapPin,
  Menu,
  Phone,
  PhoneMissed,
  Smile,
  Star,
  Users,
} from 'lucide-react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button, buttonVariants } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { TbDental } from 'react-icons/tb';

const subMenuItemsAboutUs = [
  {
    title: 'Our Team',
    description:
      'Meet our experienced dentists and staff with their bios and qualifications.',
    icon: <Users className="size-5 shrink-0" />,
  },
  {
    title: 'Our Clinic',
    description:
      'Learn more about the history and mission of our dental clinic.',
    icon: <Home className="size-5 shrink-0" />,
  },
  {
    title: 'Testimonials',
    description:
      'Read success stories and reviews from our satisfied patients.',
    icon: <Star className="size-5 shrink-0" />,
  },
];

const subMenuItemsServices = [
  {
    title: 'General Dentistry',
    description:
      'Routine check-ups, cleanings, and fillings for maintaining oral health.',
    icon: <CheckSquare className="size-5 shrink-0" />,
  },
  {
    title: 'Cosmetic Dentistry',
    description: 'Enhance your smile with whitening, veneers, and more.',
    icon: <Smile className="size-5 shrink-0" />,
  },
  {
    title: 'Orthodontics',
    description:
      'Braces, Invisalign, and orthodontic care for a straighter smile.',
    icon: <AlignCenter className="size-5 shrink-0" />,
  },
  {
    title: 'Pediatric Dentistry',
    description:
      'Specialized dental care for children, including fluoride treatments.',
    icon: <Heart className="size-5 shrink-0" />,
  },
  {
    title: 'Dental Implants',
    description:
      'Permanent solutions for missing teeth with our dental implant services.',
    icon: <Anchor className="size-5 shrink-0" />,
  },
  {
    title: 'Emergency Dentistry',
    description: 'Immediate care for dental emergencies and urgent treatments.',
    icon: <AlertCircle className="size-5 shrink-0" />,
  },
];

const subMenuItemsAppointments = [
  {
    title: 'Book Online',
    description:
      'Schedule your next appointment easily with our online booking system.',
    icon: <Calendar className="size-5 shrink-0" />,
  },
  {
    title: 'Appointment Policies',
    description:
      'Learn about our policies on cancellations, rescheduling, and preparation.',
    icon: <FileText className="size-5 shrink-0" />,
  },
];

const subMenuItemsPatientInformation = [
  {
    title: 'New Patients',
    description:
      'Everything you need to know before your first visit, including forms.',
    icon: <Clipboard className="size-5 shrink-0" />,
  },
  {
    title: 'Insurance & Payment Plans',
    description:
      'Find out about accepted insurance and flexible payment options.',
    icon: <CreditCard className="size-5 shrink-0" />,
  },
  {
    title: 'FAQ',
    description:
      'Common questions and answers about dental care and our services.',
    icon: <HelpCircle className="size-5 shrink-0" />,
  },
];

const subMenuItemsContactUs = [
  {
    title: 'Location & Hours',
    description:
      'Get our clinic’s address, hours of operation, and directions.',
    icon: <MapPin className="size-5 shrink-0" />,
  },
  {
    title: 'Phone & Email',
    description: 'Reach us directly through phone or email for inquiries.',
    icon: <Phone className="size-5 shrink-0" />,
  },
  {
    title: 'Emergency Contact',
    description: 'Call our emergency line for urgent dental issues.',
    icon: <PhoneMissed className="size-5 shrink-0" />,
  },
];

const Navbar = () => {
  return (
    <section className="p-5">
      <div>
        <nav className="hidden lg:flex">
          <div className="flex items-center justify-between w-full gap-6">
            <div className="flex items-center gap-2">
              <TbDental className="text-4xl" />
              <span className="text-xl font-bold">Dental.ie</span>
            </div>
            <div className="flex items-center gap-5">
              <a
                className={cn(
                  'text-muted-foreground',
                  navigationMenuTriggerStyle,
                  buttonVariants({
                    variant: 'ghost',
                  })
                )}
                href="#"
              >
                Home
              </a>
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenu>
                    <NavigationMenuItem className="text-muted-foreground">
                      <NavigationMenuTrigger>
                        <span>About Us</span>
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="w-80 p-3">
                          {subMenuItemsAboutUs.map((item, idx) => (
                            <li key={idx}>
                              <NavigationMenuLink
                                href="#"
                                key={idx}
                                className={cn(
                                  'flex select-none gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'
                                )}
                              >
                                {item.icon}
                                <div>
                                  <div className="text-sm font-semibold">
                                    {item.title}
                                  </div>
                                  <p className="text-sm leading-snug text-muted-foreground">
                                    {item.description}
                                  </p>
                                </div>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenu>
                  <NavigationMenu>
                    <NavigationMenuItem className="text-muted-foreground">
                      <NavigationMenuTrigger>
                        <span>Services</span>
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="w-80 p-3">
                          {subMenuItemsServices.map((item, idx) => (
                            <li key={idx}>
                              <NavigationMenuLink
                                href="#"
                                key={idx}
                                className={cn(
                                  'flex select-none gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'
                                )}
                              >
                                {item.icon}
                                <div>
                                  <div className="text-sm font-semibold">
                                    {item.title}
                                  </div>
                                  <p className="text-sm leading-snug text-muted-foreground">
                                    {item.description}
                                  </p>
                                </div>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenu>
                  <NavigationMenu>
                    <NavigationMenuItem className="text-muted-foreground">
                      <NavigationMenuTrigger>
                        <span>Appointments</span>
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="w-80 p-3">
                          {subMenuItemsAppointments.map((item, idx) => (
                            <li key={idx}>
                              <NavigationMenuLink
                                href="#"
                                key={idx}
                                className={cn(
                                  'flex select-none gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'
                                )}
                              >
                                {item.icon}
                                <div>
                                  <div className="text-sm font-semibold">
                                    {item.title}
                                  </div>
                                  <p className="text-sm leading-snug text-muted-foreground">
                                    {item.description}
                                  </p>
                                </div>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenu>
                  <NavigationMenu>
                    <NavigationMenuItem className="text-muted-foreground">
                      <NavigationMenuTrigger>
                        <span>Patient Information</span>
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="w-80 p-3">
                          {subMenuItemsPatientInformation.map((item, idx) => (
                            <li key={idx}>
                              <NavigationMenuLink
                                href="#"
                                key={idx}
                                className={cn(
                                  'flex select-none gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'
                                )}
                              >
                                {item.icon}
                                <div>
                                  <div className="text-sm font-semibold">
                                    {item.title}
                                  </div>
                                  <p className="text-sm leading-snug text-muted-foreground">
                                    {item.description}
                                  </p>
                                </div>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenu>
                  <NavigationMenu>
                    <NavigationMenuItem className="text-muted-foreground">
                      <NavigationMenuTrigger>
                        <span>Contact Us</span>
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="w-80 p-3">
                          {subMenuItemsContactUs.map((item, idx) => (
                            <li key={idx}>
                              <NavigationMenuLink
                                href="#"
                                key={idx}
                                className={cn(
                                  'flex select-none gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'
                                )}
                              >
                                {item.icon}
                                <div>
                                  <div className="text-sm font-semibold">
                                    {item.title}
                                  </div>
                                  <p className="text-sm leading-snug text-muted-foreground">
                                    {item.description}
                                  </p>
                                </div>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenu>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
            <Button className="h-14">
              Manage <br className="xl:hidden" />
              Appointment
            </Button>
          </div>
        </nav>
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <TbDental className="text-4xl" />
              <span className="text-xl font-bold">Dental.ie</span>
            </div>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant={'outline'} size={'icon'}>
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto">
                <SheetHeader>
                  <SheetDescription></SheetDescription>
                  <SheetTitle>
                    <div className="flex items-center gap-2">
                      <TbDental className="text-4xl" />
                      <span className="text-xl font-bold">Dental.ie</span>
                    </div>
                  </SheetTitle>
                </SheetHeader>
                <div className="my-8 flex flex-col gap-6">
                  <a href="#" className="font-semibold">
                    Home
                  </a>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="AboutUs" className="border-b-0">
                      <AccordionTrigger className="mb-4 py-0 font-semibold hover:no-underline">
                        About Us
                      </AccordionTrigger>
                      <AccordionContent className="mt-2">
                        {subMenuItemsAboutUs.map((item, idx) => (
                          <a
                            key={idx}
                            className={cn(
                              'flex select-none gap-4 rounded-md p-3 leading-none outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'
                            )}
                            href="#"
                          >
                            {item.icon}
                            <div>
                              <div className="text-sm font-semibold">
                                {item.title}
                              </div>
                              <p className="text-sm leading-snug text-muted-foreground">
                                {item.description}
                              </p>
                            </div>
                          </a>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="Services" className="border-b-0">
                      <AccordionTrigger className="mb-4 py-0 font-semibold hover:no-underline">
                        Services
                      </AccordionTrigger>
                      <AccordionContent className="mt-2">
                        {subMenuItemsServices.map((item, idx) => (
                          <a
                            key={idx}
                            className={cn(
                              'flex select-none gap-4 rounded-md p-3 leading-none outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'
                            )}
                            href="#"
                          >
                            {item.icon}
                            <div>
                              <div className="text-sm font-semibold">
                                {item.title}
                              </div>
                              <p className="text-sm leading-snug text-muted-foreground">
                                {item.description}
                              </p>
                            </div>
                          </a>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="Appointments" className="border-b-0">
                      <AccordionTrigger className="mb-4 py-0 font-semibold hover:no-underline">
                        Appointments
                      </AccordionTrigger>
                      <AccordionContent className="mt-2">
                        {subMenuItemsAppointments.map((item, idx) => (
                          <a
                            key={idx}
                            className={cn(
                              'flex select-none gap-4 rounded-md p-3 leading-none outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'
                            )}
                            href="#"
                          >
                            {item.icon}
                            <div>
                              <div className="text-sm font-semibold">
                                {item.title}
                              </div>
                              <p className="text-sm leading-snug text-muted-foreground">
                                {item.description}
                              </p>
                            </div>
                          </a>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem
                      value="Patient Information"
                      className="border-b-0"
                    >
                      <AccordionTrigger className="mb-4 py-0 font-semibold hover:no-underline">
                        Patient Information
                      </AccordionTrigger>
                      <AccordionContent className="mt-2">
                        {subMenuItemsPatientInformation.map((item, idx) => (
                          <a
                            key={idx}
                            className={cn(
                              'flex select-none gap-4 rounded-md p-3 leading-none outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'
                            )}
                            href="#"
                          >
                            {item.icon}
                            <div>
                              <div className="text-sm font-semibold">
                                {item.title}
                              </div>
                              <p className="text-sm leading-snug text-muted-foreground">
                                {item.description}
                              </p>
                            </div>
                          </a>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="ContactUs" className="border-b-0">
                      <AccordionTrigger className="mb-4 py-0 font-semibold hover:no-underline">
                        Contact Us
                      </AccordionTrigger>
                      <AccordionContent className="mt-2">
                        {subMenuItemsContactUs.map((item, idx) => (
                          <a
                            key={idx}
                            className={cn(
                              'flex select-none gap-4 rounded-md p-3 leading-none outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'
                            )}
                            href="#"
                          >
                            {item.icon}
                            <div>
                              <div className="text-sm font-semibold">
                                {item.title}
                              </div>
                              <p className="text-sm leading-snug text-muted-foreground">
                                {item.description}
                              </p>
                            </div>
                          </a>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
                <div className="border-t pt-4">
                  <div className="mt-2 flex flex-col">
                    <Button>Manage Appointment</Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
