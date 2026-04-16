import React, { useMemo, useState } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import BlogSidebar from '@theme/BlogSidebar';
import Link from '@docusaurus/Link';
import { useLocation } from '@docusaurus/router';

type SidebarLink = { label: string; to: string };
type SidebarSection = { label: string; items: SidebarLink[] };

const CONTENT_MENU: SidebarSection[] = [
  { label: 'Content', items: [{ label: 'Intro', to: '/content/intro' }] },
  {
    label: 'Rust & Systems programming',
    items: [
      { label: 'Articles', to: '/content/rust-and-systems-programming/articles' },
      { label: 'Notes', to: '/content/rust-and-systems-programming/notes' },
    ],
  },
  {
    label: 'Scala & Functional Applications',
    items: [
      { label: 'Articles', to: '/content/scala-and-functional-applications/articles' },
      { label: 'Notes', to: '/content/scala-and-functional-applications/notes' },
    ],
  },
  {
    label: 'AI, LLM, Agents & Robotics',
    items: [
      { label: 'Articles', to: '/content/ai-llm-agents-and-robotics/articles' },
      { label: 'Notes', to: '/content/ai-llm-agents-and-robotics/notes' },
    ],
  },
  {
    label: 'Smithy & API Design',
    items: [
      { label: 'Articles', to: '/content/smithy-and-api-design/articles' },
      { label: 'Notes', to: '/content/smithy-and-api-design/notes' },
    ],
  },
  {
    label: 'GO Programming',
    items: [
      { label: 'Articles', to: '/content/go-programming/articles' },
      { label: 'Notes', to: '/content/go-programming/notes' },
    ],
  },
  {
    label: 'Python programming',
    items: [
      { label: 'Articles', to: '/content/python-programming/articles' },
      { label: 'Notes', to: '/content/python-programming/notes' },
    ],
  },
  {
    label: 'Cloud and Deployment',
    items: [
      { label: 'Articles', to: '/content/cloud-and-deployment/articles' },
      { label: 'Notes', to: '/content/cloud-and-deployment/notes' },
    ],
  },
  {
    label: 'Data, Databases & Streaming',
    items: [
      { label: 'Articles', to: '/content/data-databases-and-streaming/articles' },
      { label: 'Notes', to: '/content/data-databases-and-streaming/notes' },
    ],
  },
  {
    label: 'Miscellaneous',
    items: [
      { label: 'Articles', to: '/content/miscellaneous/articles' },
      { label: 'Notes', to: '/content/miscellaneous/notes' },
    ],
  },
];

function normalizePathname(pathname: string) {
  return pathname.replace(/\/$/, '') || '/';
}

function GlobalSidebar() {
  const { pathname } = useLocation();
  const current = normalizePathname(pathname);

  // Pick the “active” section based on current URL (so the correct one is open by default)
  const initialOpen = useMemo(() => {
    for (const section of CONTENT_MENU) {
      for (const item of section.items) {
        const p = item.to.replace(/\/$/, '');
        if (current === p || current.startsWith(p + '/')) return section.label;
      }
    }
    return 'Content';
  }, [current]);

  const [openSection, setOpenSection] = useState<string>(initialOpen);

  return (
    <aside className="col col--3">
      <nav
        className="menu thin-scrollbar"
        style={{
          position: 'sticky',
          top: 'calc(var(--ifm-navbar-height) + 1rem)',
          maxHeight: 'calc(100vh - var(--ifm-navbar-height) - 1rem)',
          overflowY: 'auto',
        }}>
        <ul className="menu__list">
          {CONTENT_MENU.map((section) => {
            const isOpen = openSection === section.label;

            return (
              <li className="menu__list-item" key={section.label}>
                {/* This wrapper class matches Docusaurus sidebar spacing */}
                <div className="menu__list-item-collapsible">
                  {/* Use menu__link + caret styling, but it acts like a toggle */}
                  <button
                    type="button"
                    className={clsx(
                      'menu__link',
                      'menu__link--sublist',
                      'menu__link--sublist-caret'
                    )}
                    aria-expanded={isOpen}
                    onClick={() =>
                      setOpenSection((prev) => (prev === section.label ? '' : section.label))
                    }
                    style={{
                      width: '100%',
                      textAlign: 'left',
                      border: 'none',
                      background: 'transparent',
                      cursor: 'pointer',
                    }}>
                    {section.label}
                  </button>
                </div>

                {isOpen ? (
                  <ul className="menu__list">
                    {section.items.map((item) => {
                      const itemPath = item.to.replace(/\/$/, '');
                      const isActive =
                        current === itemPath || current.startsWith(itemPath + '/');

                      return (
                        <li className="menu__list-item" key={item.to}>
                          <Link
                            className={clsx('menu__link', {
                              'menu__link--active': isActive,
                            })}
                            to={item.to}>
                            {item.label}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                ) : null}
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}

export default function BlogLayout(props: any) {
  const { sidebar, toc, children, ...layoutProps } = props;

  // Right side: TOC on post pages, "Recent posts" on list pages
  const hasRightSidebar = Boolean(toc) || Boolean(sidebar?.items?.length);

  // --- Breadcrumb Logic ---
  const { pathname } = useLocation();
  const current = normalizePathname(pathname);
  
  let activeSection = 'Content';
  let activeItem = 'Articles'; 

  // Dynamically find the correct category strings based on the URL
  for (const section of CONTENT_MENU) {
    for (const item of section.items) {
      const p = item.to.replace(/\/$/, '');
      if (current === p || current.startsWith(p + '/')) {
        activeSection = section.label;
        activeItem = item.label;
      }
    }
  }

  return (
    <Layout {...layoutProps}>
      <div className="container margin-vert--lg">
        <div className="row">
          
          {/* LEFT: Your Custom Global Sidebar */}
          <GlobalSidebar />

          {/* CENTER: The Main Content */}
          <main
            className={clsx('col', {
              'col--6': hasRightSidebar, // 6/12 columns = 50% width center
              'col--9': !hasRightSidebar,
            })}
            itemScope
            itemType="http://schema.org/Blog"
          >
            {/* --- NEW BREADCRUMB TRAIL --- */}
            <nav aria-label="breadcrumbs" className="theme-doc-breadcrumbs margin-bottom--lg">
              <ul className="breadcrumbs">
                
                {/* Home Icon */}
                <li className="breadcrumbs__item">
                  <Link href="/content/intro" className="breadcrumbs__link">
                    <svg viewBox="0 0 24 24" style={{ width: '1.2em', height: '1.2em', verticalAlign: 'middle' }}>
                      <path fill="currentColor" d="M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z" />
                    </svg>
                  </Link>
                </li>
                
                {/* Category String (e.g., "Rust & Systems programming") */}
                <li className="breadcrumbs__item">
                  <span className="breadcrumbs__link">{activeSection}</span>
                </li>
                
                {/* Active Pill (e.g., "Articles") */}
                <li className="breadcrumbs__item breadcrumbs__item--active">
                  <span className="breadcrumbs__link">{activeItem}</span>
                </li>

              </ul>
            </nav>
            {children}
          </main>

          {/* RIGHT: TOC or Recent Posts */}
          {toc ? (
            <div className="col col--3">
              {toc}
            </div>
          ) : sidebar?.items?.length ? (
            /* 👇 REMOVED the extra <aside className="col col--3"> wrapper here */
            <BlogSidebar sidebar={sidebar} />
          ) : null}

        </div>
      </div>
    </Layout>
  );
}