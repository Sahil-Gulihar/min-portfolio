
import BlurFade from "@/components/magicui/blur-fade";
import type { Metadata } from "next";

import { ProjectCard } from "@/components/project-card";



import { DATA } from "@/data/resume";
const BLUR_FADE_DELAY = 0.04;

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {

    default: "Sahil Gulihar | Projects",
    template: `All Projects by Sahil Gulihar`,
  },
  description: `Check out all the projects made by Sahil Gulihar`,
  openGraph: {
    title: `${DATA.name}`,
    description: "This is a Portfolio website for Sahil Gulihar",
    url: DATA.url,
    siteName: `${DATA.name}`,
    locale: "en_US",
    type: "website",
    images: ['https://i.imgur.com/GeM8sL6.png', 'https://i.imgur.com/9Bga867.png']
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
  verification: {
    google: "",
    yandex: "",
  },
};

function Projects() {
  return (
    <div>
        <section id="projects">
        <div className="w-full ">
          
        
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2 pb-8">
                
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Check out all of my projects
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I&apos;ve worked on a variety of projects, from simple
                  websites to complex web applications. Mostly CLI Tools and small utility work
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
          </div>
      </section>
    </div>
  )
}

export default Projects