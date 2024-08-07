import Image from 'next/image';
import Link from 'next/link';

import {
  ArrowRightIcon,
  CreditCard,
  LayoutDashboard,
  Lock,
  Sparkle,
} from 'lucide-react';

import { PricingTable } from '@kit/billing-gateway/marketing';
import { Button } from '@kit/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@kit/ui/card';
import { Heading } from '@kit/ui/heading';
import { Trans } from '@kit/ui/trans';
import { cn } from '@kit/ui/utils';

import billingConfig from '~/config/billing.config';
import pathsConfig from '~/config/paths.config';
import { withI18n } from '~/lib/i18n/with-i18n';

function Home() {
  return (
    <div className={'mt-4 flex flex-col space-y-24 py-14'}>
      <div className={'container mx-auto flex flex-col space-y-20'}>
        <div
          className={
            'flex flex-col items-center md:flex-row' +
            ' mx-auto flex-1 justify-center animate-in fade-in' +
            ' duration-1000 zoom-in-90 slide-in-from-top-36'
          }
        >
          <div
            className={
              'flex w-full flex-1 flex-col items-center space-y-6 xl:space-y-8 2xl:space-y-10'
            }
          >
            {/*
            <Pill new>
              <span>The leading SaaS Starter Kit for ambitious developers</span>
            </Pill>
            */}

            <div className={'flex flex-col items-center space-y-8'}>
              <HeroTitle>
                <span>Daily AI-powered debriefing</span>
                
                <span>to make your life easier.</span>

              </HeroTitle>

              <div className={'flex max-w-2xl flex-col space-y-1'}>
                <Heading
                  level={3}
                  className={'p-0 text-center font-sans text-base font-normal'}
                >
                  Consolidate all of your workday meetings<br />
                  
                  into one actionable summary
                  
                </Heading>
              </div>
            </div>

            <MainCallToActionButton />
          </div>
        </div>

        <div
          className={
            'mx-auto flex max-w-[100rem] justify-center py-8 animate-in fade-in ' +
            ' delay-300 duration-1000 zoom-in-95 slide-in-from-top-32 fill-mode-both'
          }
        >
          <Image
            priority
            className={
              'delay-250 rounded-2xl border border-gray-200 duration-1000 ease-out animate-in fade-in zoom-in-50 fill-mode-both dark:border-primary/10'
            }
            width={3558}
            height={2222}
            src={`/images/dashboard.webp`}
            alt={`App Image`}
          />
        </div>
      </div>
             
      <ThreeFeaturesSection />
      
      {/*
      <div className={'container mx-auto'}>
        <div
          className={'flex flex-col space-y-16 xl:space-y-32 2xl:space-y-36'}
        >
          <FeatureShowcaseContainer>
            <FeatureContainer className={'w-full max-w-5xl'}>
              <div className={'flex flex-col space-y-4'}>
                <IconContainer>
                  <LayoutDashboard className={'h-5'} />

                  <span>SaaS Starter Kit</span>
                </IconContainer>

                <div className={'flex flex-col'}>
                  <h3
                    className={
                      'text-3xl font-normal tracking-tighter xl:text-5xl'
                    }
                  >
                    <b className={'font-semibold dark:text-white'}>
                      The ultimate SaaS Starter Kit
                    </b>
                    .{' '}
                    <GradientSecondaryText
                      className={
                        'from-foreground/70 to-foreground/80 font-medium'
                      }
                    >
                      Unleash your creativity and build your SaaS faster than
                      ever with Makerkit.
                    </GradientSecondaryText>
                  </h3>
                </div>
              </div>
            </FeatureContainer>

            <FeatureContainer
              className={
                'grid w-full grid-cols-1 gap-6 space-y-0 lg:grid-cols-3'
              }
            >
              <FeatureCard
                className={
                  'relative col-span-2 overflow-hidden bg-violet-500 text-white lg:h-96'
                }
                title={'Beautiful Dashboard'}
                description={`Makerkit provides a beautiful dashboard to manage your SaaS business.`}
              >
                <Image
                  className="absolute right-0 top-0 hidden h-full w-full rounded-tl-2xl border border-border lg:top-36 lg:flex lg:h-auto lg:w-10/12"
                  src={'/images/dashboard-header.webp'}
                  width={'2061'}
                  height={'800'}
                  alt={'Dashboard Header'}
                />
              </FeatureCard>

              <FeatureCard
                className={
                  'relative col-span-2 w-full overflow-hidden lg:col-span-1'
                }
                title={'Authentication'}
                description={`Makerkit provides a variety of providers to allow your users to sign in.`}
              >
                <Image
                  className="absolute left-16 top-32 hidden h-auto w-8/12 rounded-l-2xl lg:flex"
                  src={'/images/sign-in.webp'}
                  width={'1760'}
                  height={'1680'}
                  alt={'Sign In'}
                />
              </FeatureCard>

              <FeatureCard
                className={
                  'relative col-span-2 overflow-hidden lg:col-span-1 lg:h-96'
                }
                title={'Multi Tenancy'}
                description={`Multi tenant memberships for your SaaS business.`}
              >
                <Image
                  className="absolute right-0 top-0 hidden h-full w-full rounded-tl-2xl border lg:top-28 lg:flex lg:h-auto lg:w-8/12"
                  src={'/images/multi-tenancy.webp'}
                  width={'2061'}
                  height={'800'}
                  alt={'Multi Tenancy'}
                />
              </FeatureCard>

              <FeatureCard
                className={'relative col-span-2 overflow-hidden lg:h-96'}
                title={'Billing'}
                description={`Makerkit supports multiple payment gateways to charge your customers.`}
              >
                <Image
                  className="absolute right-0 top-0 hidden h-full w-full rounded-tl-2xl border border-border lg:top-36 lg:flex lg:h-auto lg:w-11/12"
                  src={'/images/billing.webp'}
                  width={'2061'}
                  height={'800'}
                  alt={'Billing'}
                />
              </FeatureCard>
            </FeatureContainer>
          </FeatureShowcaseContainer>
        </div>
      </div>
      */}


      <div className={'container mx-auto border-black rounded-3xl p-2 ring-2 ring-gray-100 dark:ring-primary/10 bg-violet-500'}>
        <h2 className="font-normal tracking-tighter xl:text-4xl mb-4 text-center">
          <b className="font-semibold dark:text-white">
            <span className="text-white">How It Works</span>
          </b>
        </h2>      
        <FeatureContainer className="grid w-full grid-cols-1 gap-3 space-y-0 lg:grid-cols-3 py-0">
          {[
            {
              title: "Step 1: Authorize AI Assistant",
              description: "Authorize our AI to automatically join your virtual meetings (Zoom, Teams, etc.)",
            },
            {
              title: "Step 2: Receive Daily Summary",
              description: "Receive your end-of-day summary via email (you pick the time of delivery)",
            },
            {
              title: "Step 3: Boost Productivity",
              description: "Close out your work day faster than ever before!",
            },
          ].map((card, index) => (
            <FeatureCard
              key={index}
              className="relative w-full overflow-hidden lg:h-96 bg-white"
              title={card.title}
              description={card.description}
            >
              <Image
                className="absolute left-16 top-32 hidden h-auto w-8/12 rounded-l-2xl lg:flex"
                src="/images/sign-in.webp"
                width={1760}
                height={1680}
                alt={`Step ${index + 1}`}
              />
            </FeatureCard>
          ))}
        </FeatureContainer>
      </div>




      <div className={'container mx-auto'}>
        <div
          className={
            'flex flex-col items-center justify-center space-y-16 py-16'
          }
        >
          <div className={'flex flex-col items-center space-y-4 text-center'}>
            <Pill>Get started for free. No credit card required.</Pill>

            <div className={'flex flex-col'}>
              <Heading level={2} className={'tracking-tighter'}>
                Fair pricing for all types of businesses
              </Heading>

              <Heading
                level={3}
                className={
                  'font-sans font-normal tracking-tight text-muted-foreground'
                }
              >
                Get started on our free plan and upgrade when you are ready.
              </Heading>
            </div>
          </div>

          <div className={'w-full'}>
            <PricingTable
              config={billingConfig}
              paths={{
                signUp: pathsConfig.auth.signUp,
                return: pathsConfig.app.home,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default withI18n(Home);

function HeroTitle({ children }: React.PropsWithChildren) {
  return (
    <h1
      className={
        'hero-title flex flex-col space-y-1 text-center font-sans text-4xl font-semibold tracking-tighter dark:text-white sm:text-6xl lg:max-w-5xl lg:text-7xl xl:text-[5.125rem]'
      }
    >
      {children}
    </h1>
  );
}

function Pill(
  props: React.PropsWithChildren<{
    new?: boolean;
  }>,
) {
  return (
    <h2
      className={
        'space-x-2.5 rounded-full border border-gray-100 px-2 py-2.5 text-center text-sm font-medium text-transparent dark:border-primary/10'
      }
    >
      {props.new && (
        <span
          className={
            'rounded-2xl bg-primary px-2.5 py-1.5 text-sm font-semibold text-primary-foreground'
          }
        >
          New
        </span>
      )}
      <GradientSecondaryText>{props.children}</GradientSecondaryText>
    </h2>
  );
}

function FeatureShowcaseContainer(props: React.PropsWithChildren) {
  return (
    <div className={'flex flex-col justify-between space-y-8'}>
      {props.children}
    </div>
  );
}

function FeatureContainer(
  props: React.PropsWithChildren<{
    className?: string;
    reverse?: boolean;
  }>,
) {
  return (
    <div
      className={cn(
        'flex w-full flex-col space-y-6 py-4',
        {
          'order-2 mt-8 lg:order-none lg:mt-0': props.reverse,
        },
        props.className,
      )}
    >
      {props.children}
    </div>
  );
}

function MainCallToActionButton() {
  return (
    <div className={'flex space-x-4'}>
      <Button
        className={'h-12 rounded-xl px-4 text-base font-semibold hover:shadow-2xl transition-all dark:shadow-primary/30'}
        asChild
      >
        <Link href={'/auth/sign-up'}>
          <span className={'flex items-center space-x-0.5'}>
            <span>
              <Trans i18nKey={'common:getStarted'} />
            </span>

            <ArrowRightIcon
              className={
                'h-4 animate-in fade-in slide-in-from-left-8' +
                ' delay-1000 duration-1000 zoom-in fill-mode-both'
              }
            />
          </span>
        </Link>
      </Button>

      {/*
      <Button
        variant={'link'}
        className={'h-12 rounded-xl px-4 text-base font-semibold'}
        asChild
      >
        <Link href={'/contact'}>
          <Trans i18nKey={'common:contactUs'} />
        </Link>
      </Button>
      */}
    </div>
  );
}

function IconContainer(
  props: React.PropsWithChildren<{
    className?: string;
  }>,
) {
  return (
    <div className={'flex'}>
      <div
        className={cn(
          'flex items-center justify-center space-x-4 rounded-lg p-3 font-semibold',
          props.className,
        )}
      >
        {props.children}
      </div>
    </div>
  );
}

function FeatureCard(
  props: React.PropsWithChildren<{
    title: string;
    description: string;
    className?: string;
  }>,
) {
  return (
    <div
      className={cn(
        props.className,
        'rounded-3xl p-2 ring-2 ring-gray-100 dark:ring-primary/10',
      )}
    >
      <CardHeader>
        <CardTitle className={'text-xl font-semibold'}>{props.title}</CardTitle>

        <CardDescription
          className={
            'max-w-xs text-sm font-semibold tracking-tight text-current'
          }
        >
          {props.description}
        </CardDescription>
      </CardHeader>

      <CardContent>{props.children}</CardContent>
    </div>
  );
}

function GradientSecondaryText(
  props: React.PropsWithChildren<{
    className?: string;
  }>,
) {
  return (
    <span
      className={cn(
        'bg-gradient-to-r from-foreground/60 to-foreground bg-clip-text text-transparent',
        props.className,
      )}
    >
      {props.children}
    </span>
  );
}

function ThreeFeaturesSection(
  props: React.PropsWithChildren<{
    className?: string;
  }>,
) {
  return (
    <section className={cn(props.className, "container mx-auto px-4 py-16")}>
      <FeatureRow
        title="Streamlined Information"
        description="Our end-of-day summary consolidates all key points, decisions, and tasks, from all of your meetings, reducing cognitive load."
        imagePosition="right"
      />
      <FeatureRow
        title="Unified Task Tracking"
        description="Your end-of-day summary lists all action items discussed across all of your meetings, neatly categorized and prioritized, ensuring nothing is missed."
        imagePosition="left"
      />
      <FeatureRow
        title="Enhanced Accountability"
        description="Your end-of-day summary includes commitment tracking, improving accountability and follow-up."
        imagePosition="right"
      />
      {props.children}
    </section>
  );
}

function FeatureRow(
  props: React.PropsWithChildren<{
    title: string;
    description: string;
    imagePosition?: 'left' | 'right';
    className?: string;
  }>,
) {
  return (
    <div className={cn(
      props.className,
      `flex flex-col ${props.imagePosition === 'left' ? 'md:flex-row-reverse' : 'md:flex-row'} items-center justify-between my-16`
    )}>
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <h2 className="text-3xl font-normal tracking-tighter xl:text-5xl mb-4">
          <b className="font-semibold dark:text-white">
            <span className="text-violet-500">{props.title.split(' ')[0]}</span>{' '}
            {props.title.split(' ').slice(1).join(' ')}
          </b>
        </h2>
        <Heading
          level={3}
          className="font-sans font-normal tracking-tight text-muted-foreground"
        >
          {props.description}
        </Heading>
      </div>
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="w-64 h-64 bg-gray-300"></div>
      </div>
      {props.children}
    </div>
  );
}