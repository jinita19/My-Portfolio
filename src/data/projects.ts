import type { Project } from '@/types/projectTypes';

export const projects: Project[] = [
  {
    slug: 'auto-fx',
    title: 'Auto FX',
    description: 'Helps with automate FX trades and manage currency balances',
    image: '/images/autofx.png',
    brief:
      'As a Senior Frontend Developer, I worked on a web-based AutoFX platform for the NatWest Group, empowering corporate clients to manage and automate foreign exchange transfers seamlessly. Focused on building an accessible, high-performance interface using React, Redux-Saga, and AG Grid—all tailored for a fast-moving financial trading environment.',
    techs: [
      'React',
      'Javascript',
      'Redux',
      'AG Grid',
      'Java',
      'Webpack',
      'Linter',
      'Jest',
      'React Testing Library',
      'Gitlab CI/CD',
      'Lighthouse',
    ],
    work: [
      'Improved accessibility by fixing 40% of the issues, including 80% of blockers—key fixes involved labeling, keyboard navigation, ARIA live regions and ARIA roles.',
      'Led the major feature for retrying with a new tenor and triggering dealer intervention with appropriate timers and user notifications.',
      'Designed and implemented a seamless workflow focused on performance, accessibility, and memory optimization.',
      'Wrote comprehensive test cases and contributed to a robust CI/CD pipeline to proactively catch security and code quality issues before merging.',
    ],
  },
  {
    slug: 'fx-options',
    title: 'FX Options',
    description:
      'A user-friendly tool for creating and pricing various FX option structures, including TARNs.',
    image: '/images/fxo.png',
    brief:
      'Worked as a Software Engineer on NatWest’s FX Options Structure Builder, a smart platform that helps corporate clients easily create and price complex FX option trades with real-time data and automated risk management. I improved features that made trading smoother and faster, helping users to book trade seamlessly.',
    techs: [
      'React',
      'Redux',
      'Javascript',
      'Typescript',
      'SCSS',
      'Jest',
      'React Testing Library',
      'Bitbucket',
      'Java',
      'Chrome DevTools',
      'Highcharts',
      'Storybook',
      'D3 Js',
      'AG Grid',
    ],
    work: [
      'Developed a premium currency preference system to reduce manual input, saving users time and effort.',
      'Proposed and implemented “Me/All” trade templates to simplify repeated workflows',
      'Integrated Highcharts with custom tooltips and candlestick features, improving visual clarity and user experience by 30%.',
      'Engineered the grid migration initiative involving 26 product types from D3.js to AG Grid for better maintainability and flexibility.',
      'Led a unique column-merging solution that reduced horizontal scrolling by 80% and significantly improved readability.',
      'Delivered the migration with seamless hierarchical views, robust copy-paste functionality, and created a versatile template grid, all enhancing usability and efficiency.',
      'Led team bonding through remote-friendly “off-tech” sprint events—planning fun games and virtual chitchats to keep team morale high.',
    ],
  },
  // {
  //   slug: "grid-migration",
  //   title: "Grid Migration",
  //   description: "A major migration of FX Options grid from D3 to AG Grid.",
  //   image: "/images/gridmig.png",
  //   brief: "Worked as a Software Engineer on a major grid migration, quickly adapting to AG Grid under tight deadlines. Delivered the migration on time with enhanced features like column merging, copy-paste support, and improved usability that reduced horizontal scrolling and made data easier to read.",
  //   techs: ["React", "D3 Js", "AG Grid"],
  //   work: [
  //     "Engineered the grid migration initiative involving 26 product types from D3.js to AG Grid for better maintainability and flexibility.",
  //     "Led a unique column-merging solution that reduced horizontal scrolling by 80% and significantly improved readability.",
  //     "Delivered the migration with seamless hierarchical views, robust copy-paste functionality, and created a versatile template grid, all enhancing usability and efficiency."
  //   ]
  // }
];
