import { ArrowRight, CircleCheck } from 'lucide-react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';

const Pricing = () => {
  const [isFirstTime, setIsFirstTime] = useState(false);
  return (
    <section className="py-32">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6">
        <h2 className="text-pretty text-4xl font-bold lg:text-6xl">Services</h2>
        <p className="text-muted-foreground px-2 text-center lg:text-xl">
          Explore Our Comprehensive Dental Services for a Healthier, Brighter
          Smile
        </p>
        <div className="flex items-center gap-3 text-lg">
          <Switch
            onCheckedChange={() => setIsFirstTime(!isFirstTime)}
            checked={isFirstTime}
            className="data-[state=unchecked]:bg-secondary-foreground"
          />
          Refer Customer Discount
        </div>
        <div className="flex flex-col items-stretch gap-6 lg:gap-20 lg:flex-row">
          <Card className="flex w-80 flex-col justify-between text-center">
            <CardHeader>
              <CardTitle>
                <p>Teeth Whitening</p>
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                Brighten your smile with safe, professional whitening.
              </p>
              <span className="text-4xl font-bold">
                {isFirstTime ? '€200' : '€220'}
              </span>
              <p className="text-muted-foreground">
                Save {isFirstTime ? '20%' : '12%'}
              </p>
            </CardHeader>
            <CardContent>
              <Separator className="mb-6" />
              <ul className="space-y-4">
                <li className="flex items-center gap-2">
                  <CircleCheck className="size-4" />
                  <span>One-hour treatment</span>
                </li>
                <li className="flex items-center gap-2">
                  <CircleCheck className="size-4" />
                  <span>Long-lasting results</span>
                </li>
                <li className="flex items-center gap-2">
                  <CircleCheck className="size-4" />
                  <span>Customized to your needs</span>
                </li>
                <li className="flex items-center gap-2">
                  <CircleCheck className="size-4" />
                  <span>Non-invasive and safe</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter className="mt-auto">
              <Button className="w-full">
                Manage Appointment
                <ArrowRight className="ml-2 size-4" />
              </Button>
            </CardFooter>
          </Card>
          <Card className="flex w-80 flex-col justify-between text-center">
            <CardHeader>
              <CardTitle>
                <p>Dental Implants</p>
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                Permanent, natural-looking solution for missing teeth.
              </p>
              <span className="text-4xl font-bold">
                {isFirstTime ? '€1600' : '€1700'}
              </span>
              <p className="text-muted-foreground">
                Save {isFirstTime ? '16%' : '10%'}
              </p>
            </CardHeader>
            <CardContent>
              <Separator className="mb-6" />
              <ul className="space-y-4">
                <li className="flex items-center gap-2">
                  <CircleCheck className="size-4" />
                  <span>Custom-matched to your teeth</span>
                </li>
                <li className="flex items-center gap-2">
                  <CircleCheck className="size-4" />
                  <span>Long-lasting durability</span>
                </li>
                <li className="flex items-center gap-2">
                  <CircleCheck className="size-4" />
                  <span>Improves chewing and speech</span>
                </li>
                <li className="flex items-center gap-2">
                  <CircleCheck className="size-4" />
                  <span>Minimally invasive procedure</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter className="mt-auto">
              <Button className="w-full">
                Manage Appointment
                <ArrowRight className="ml-2 size-4" />
              </Button>
            </CardFooter>
          </Card>
          <Card className="flex w-80 flex-col justify-between text-center">
            <CardHeader>
              <CardTitle>
                <p>Orthodontic Braces</p>
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                Straighten your teeth with modern braces or aligners.
              </p>
              <span className="text-4xl font-bold">
                {isFirstTime ? '€3000' : '€3200'}
              </span>
              <p className="text-muted-foreground">
                Save {isFirstTime ? '14%' : '9%'}
              </p>
            </CardHeader>
            <CardContent>
              <Separator className="mb-6" />
              <ul className="space-y-4">
                <li className="flex items-center gap-2">
                  <CircleCheck className="size-4" />
                  <span>Metal, ceramic, or clear aligners</span>
                </li>
                <li className="flex items-center gap-2">
                  <CircleCheck className="size-4" />
                  <span>Regular adjustments</span>
                </li>
                <li className="flex items-center gap-2">
                  <CircleCheck className="size-4" />
                  <span>Suitable for all ages</span>
                </li>
                <li className="flex items-center gap-2">
                  <CircleCheck className="size-4" />
                  <span>Payment plans available</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter className="mt-auto">
              <Button className="w-full">
                Manage Appointment
                <ArrowRight className="ml-2 size-4" />
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
