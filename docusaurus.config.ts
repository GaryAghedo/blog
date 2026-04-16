import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';


const config: Config = {
  title: 'Codeneto',
  tagline: 'Practical programming, software development, AI, robotics, and cloud deployment insights.',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://www.codeneto.com',
  baseUrl: '/',
  organizationName: 'GaryAghedo',
  projectName: 'Codeneto',

  onBrokenLinks: 'throw',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          path: 'content-docs',
          routeBasePath: 'content', 
          exclude: ['**/articles/**', '**/notes/**', '**/snippets/**'],
      
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],


  plugins: [
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'rust',
        path: 'content/rust-and-systems-programming/articles',
        routeBasePath: 'content/rust-and-systems-programming/articles', 
        blogTitle: 'Rust & Systems Programming',
        authorsMapPath: 'authors.yml',
        blogDescription: 'Rust, WebAssembly, performance, and systems notes.',
        showReadingTime: true,
        postsPerPage: 10,

      },
    ],
    [
      '@docusaurus/plugin-content-blog',
    {
      id: 'scala',
      path: 'content/scala-and-functional-applications/articles',
      routeBasePath: 'content/scala-and-functional-applications/articles',
      blogTitle: 'Scala & Functional Applications',
      authorsMapPath: 'authors.yml',
      blogDescription: 'Scala, FP principles, and practical application patterns.',
      showReadingTime: true,
      postsPerPage: 10,
    },
   ],
   [
      '@docusaurus/plugin-content-blog',
    {
      id: 'ai-llm-agents-and-robotics',
      path: 'content/ai-llm-agents-and-robotics/articles',
      routeBasePath: 'content/ai-llm-agents-and-robotics/articles',
      blogTitle: 'AI, LLM, Agents, and Robotics',
      authorsMapPath: 'authors.yml',
      blogDescription: 'AI, LLM, Agents, and Robotics insights and updates.',
      showReadingTime: true,
      postsPerPage: 10,
    },
   ],
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'ai-llm-agents-and-robotics-notes',
        path: 'content/ai-llm-agents-and-robotics/notes',
        routeBasePath: 'content/ai-llm-agents-and-robotics/notes', 
        blogTitle: 'AI, LLM, Agents, and Robotics Notes',
        blogDescription: 'My technical notes and snippets.',
        showReadingTime: true,
        postsPerPage: 10,
        sortPosts: 'ascending',
      },
    ],
  
   [
      '@docusaurus/plugin-content-blog',
    {
      id: 'smithy-and-api-design',
      path: 'content/smithy-and-api-design/articles',
      routeBasePath: 'content/smithy-and-api-design/articles',
      blogTitle: 'Smithy & API Design',
      authorsMapPath: 'authors.yml',
      blogDescription: 'API design, Smithy tips, and best practices.',
      showReadingTime: true,
      postsPerPage: 10,
    }
   ],
   [
      '@docusaurus/plugin-content-blog',
    {
      id: 'go-programming',
      path: 'content/go-programming/articles',
      routeBasePath: 'content/go-programming/articles',
      blogTitle: 'GO Programming',
      authorsMapPath: 'authors.yml',
      blogDescription: 'Go programming tips, tricks, and best practices.',
      showReadingTime: true,
      postsPerPage: 10, 
    }
    ],
    [
      '@docusaurus/plugin-content-blog',
    {
      id: 'python-programming',
      path: 'content/python-programming/articles',
      routeBasePath: 'content/python-programming/articles',
      blogTitle: 'Python Programming',
      authorsMapPath: 'authors.yml',
      blogDescription: 'Python programming tips, tricks, and best practices.',
      showReadingTime: true,
      postsPerPage: 10,
    }
    ],
    [
      '@docusaurus/plugin-content-blog',
    {
      id: 'cloud-and-deployment',
      path: 'content/cloud-and-deployment/articles',
      routeBasePath: 'content/cloud-and-deployment/articles',
      blogTitle: 'Cloud and Deployment',
      authorsMapPath: 'authors.yml',
      blogDescription: 'Cloud computing, deployment strategies, and best practices.',
      showReadingTime: true,
      postsPerPage: 10,
    }
    ],
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'cloud-and-deployment-notes',
        path: 'content/cloud-and-deployment/notes',
        routeBasePath: 'content/cloud-and-deployment/notes', 
        blogTitle: 'Cloud and Deployment Notes',
        blogDescription: 'Cloud and Deployment notes and snippets.',
        showReadingTime: true,
        postsPerPage: 10, 
        sortPosts: 'ascending', 
      },
    ],
    [
      '@docusaurus/plugin-content-blog',
    {
      id: 'data-databases-and-streaming',
      path: 'content/data-databases-and-streaming/articles',
      routeBasePath: 'content/data-databases-and-streaming/articles',
      blogTitle: 'Data, Databases & Streaming',
      authorsMapPath: 'authors.yml',
      blogDescription: 'Data processing, databases, streaming technologies, and best practices.',
      showReadingTime: true,
      postsPerPage: 10,
    }
    ],
    [
      '@docusaurus/plugin-content-blog',
    {
      id: 'miscellaneous',
      path: 'content/miscellaneous/articles',
      routeBasePath: 'content/miscellaneous/articles',
      blogTitle: 'Miscellaneous',
      authorsMapPath: 'authors.yml',
      blogDescription: 'Various programming topics and best practices.',
      showReadingTime: true,
      postsPerPage: 10,
    }
    ],
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'rust-notes', 
        path: 'content/rust-and-systems-programming/notes',
        routeBasePath: 'content/rust-and-systems-programming/notes', 
        blogTitle: 'Rust & Systems Programming Notes',
        blogDescription: 'My technical notes and snippets.',
        showReadingTime: true,
        postsPerPage: 10, 
        sortPosts: 'ascending', 
      },
    ]
    
  ],






  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      logo: {
        src: 'img/codeneto-light.png',
        srcDark: 'img/codeneto-dark.png',
      },
      items: [
        {
          to: '/',
          label: 'Homepage',
          position: 'left',
        },
        { to: '/about-me', label: 'About me', position: 'right' },
        { to: '/hire-me', label: 'Hire me', position: 'right' },
        { to: 'https://www.youtube.com/@codeneto', label: 'Youtube', position: 'right' },
        {
          href: 'https://github.com/GaryAghedo',
          label: 'My GitHub',
          position: 'right',
        },
        { type: 'search', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'X',
              href: 'https://x.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
