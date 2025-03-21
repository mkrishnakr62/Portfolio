

export const metadata = {
    title: "Certifications",
    description:
      "Explore my certifications to showcase my technical capability and to ensure my expertise to endulge on real world projects",
    keywords:
      "Krishna , Krishna Mohan , Krishna Mohanaravanan , Krishna2k04 , developer portfolio ,trending portfolio, axolotron , dnyx, software engineer , web developer , portfolio , fullstack portfolio , nandha college of technology , nandha , cse , dev , developer , mongodb , express, nodejs , reactjs , nextjs, genrio , Krishna , cb , website , web, dev , engineer , techie , nct , fresher , 2025 , erode ",
    url: process.env.NEXT_PUBLIC_CLIENT_URL,
    canonical: process.env.NEXT_PUBLIC_CLIENT_URL,
    authors: [
      { name: "Krishna Mohan", url: process.env.NEXT_PUBLIC_CLIENT_URL }
    ],
    openGraph: {
      title: "Certifications",
      description:
       "Explore my certifications to showcase my technical capability and to ensure my expertise to endulge on real world projects",
      url: process.env.NEXT_PUBLIC_CLIENT_URL,
      siteName: "Krishna Mohan - Portfolio",
      images: [
        {
          url: "https://res.cloudinary.com/ded1o1e26/image/upload/v1726405493/profile_ioufgc.png",
          width: 1200,
          height: 640,
          alt: "Krishna Mohan | Software Engineer | Web Developer | Portfolio",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    
    viewport: "width=device-width, initial-scale=1.0",
    robots: "index, follow",
  };

export default function Layout({children}) {
    return (
        <section>
            {children}
        </section>
    );
}