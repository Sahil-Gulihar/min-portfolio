import BlurFade from "@/components/magicui/blur-fade"
import { AppCard } from "@/components/app-card"
import { DATA } from "@/data/resume"
import type { Metadata } from "next"

const BLUR_FADE_DELAY = 0.04

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: "Sahil Gulihar | Apps",
    template: `All Apps by Sahil Gulihar`,
  },
  description: `Check out all the mobile apps made by Sahil Gulihar`,
  openGraph: {
    title: `${DATA.name}`,
    description: "Mobile apps by Sahil Gulihar",
    url: DATA.url,
    siteName: `${DATA.name}`,
    locale: "en_US",
    type: "website",
    images: ["https://i.imgur.com/GeM8sL6.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: `${DATA.name}`,
    card: "summary_large_image",
  },
}

function Apps() {
  return (
    <div>
      <section id="apps">
        <div className="w-full">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2 pb-8">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Apps I&apos;ve built
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Mobile and native apps shipped to real users — from App Store
                  releases to personal experiments.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 max-w-[800px] mx-auto">
            {DATA.apps.map((app, id) => (
              <BlurFade key={app.title} delay={BLUR_FADE_DELAY * 12 + id * 0.05}>
                <AppCard
                  href={app.href}
                  title={app.title}
                  description={app.description}
                  dates={app.dates}
                  tags={app.technologies}
                  image={app.image}
                  video={app.video}
                  platform={app.platform}
                  links={app.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Apps
