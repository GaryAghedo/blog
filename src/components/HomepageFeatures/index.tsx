
import React, { type ReactNode, useEffect, useMemo, useState } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';


type Stat = { label: string; value: string; to: string; external?: boolean; };
type Card = {
  title: string;
  description: string;
  iconSrc: string;
  iconAlt: string;
  articlesTo: string;
  notesTo: string;
};

type QuickLink = { label: string; to: string; iconSrc: string };

type RightPanel = {
  now: {
    type: 'Article' | 'Note';
    tag: string;
    title: string;
    description: string;
    to: string;
    iconSrc: string;
  };
  upNext?: {
    type: 'Article' | 'Note';
    tag: string;
    title: string;
    description: string;
    to: string;
    iconSrc: string;
  };
  links: QuickLink[];
};


type Featured = {
  type: 'Article' | 'Note';
  tag: string;
  title: string;
  description: string;
  to: string;
  toLinkToArticle: string;
  toLinkToNotes: string;
  textForLinkToArticle: string;
  textForLinkToNotes: string;
  iconSrc: string;
};

type Slide = {
  featured: Featured;
  stats: Stat[];
  rightPanel: RightPanel;
};

const CARDS: Card[] = [
  {
    title: 'Rust & Systems Programming',
    description:
      'Rust, Web application, WebAssembly, performance optimization, and low-level programming tips.',
    iconSrc: '/img/icons/rust.svg',
    iconAlt: 'Rust icon',
    articlesTo: '/content/rust-and-systems-programming/articles',
    notesTo: '/content/rust-and-systems-programming/notes',
  },
  {
    title: 'Scala & Functional Applications',
    description:
      'scala, FP principles, and practical examples for building robust applications.',
    iconSrc: '/img/icons/scala.svg',
    iconAlt: 'Scala icon',
    articlesTo: '/content/scala-and-functional-applications/articles',
    notesTo: '/content/scala-and-functional-applications/notes',
  },
  {
    title: 'AI, LLM, Agents & Robotics',
    description:
      'AI/ML models, LLM integration, agent architectures, and robotics programming.',
    iconSrc: '/img/icons/ai.svg',
    iconAlt: 'AI icon',
    articlesTo: '/content/ai-llm-agents-and-robotics/articles',
    notesTo: '/content/ai-llm-agents-and-robotics/notes',
  },
  {
    title: 'Smithy & API Design',
    description:
      'Smithy modeling, REST/gRPC API design, schema evolution, versioning, and contract-first best practices.',
    iconSrc: '/img/icons/api.svg',
    iconAlt: 'JavaScript icon',
    articlesTo: '/content/smithy-and-api-design/articles',
    notesTo: '/content/smithy-and-api-design/notes',
  },
  {
    title: 'GO Programming',
    description:
      'Go language features, idiomatic patterns, concurrency, and building efficient applications.',
    iconSrc: '/img/icons/go.svg',
    iconAlt: 'Go icon',
    articlesTo: '/content/go-programming/articles',
    notesTo: '/content/go-programming/notes',

  },
  {
    title: 'Python programming',
    description:
      'Python language features, idiomatic patterns, data science, and automation.',
    iconSrc: '/img/icons/python.svg',
    iconAlt: 'Python icon',
    articlesTo: '/content/python-programming/articles',
    notesTo: '/content/python-programming/notes',
  },
  {
    title: 'Cloud and Deployment',
    description:
      'containers, deployment strategies, CI/CD, and infrastructure as code.',
    iconSrc: '/img/icons/cloud.svg',
    iconAlt: 'JavaScript icon',
    articlesTo: '/content/cloud-and-deployment/articles',
    notesTo: '/content/cloud-and-deployment/notes',
  },
  {
    title: 'Data, Databases & Streaming',
    description:
      'ETL, databases, event streaming, Kafka patterns, and real-time processing.',
    iconSrc: '/img/icons/data.svg',
    iconAlt: 'Data icon',
    articlesTo: '/content/data-databases-and-streaming/articles',
    notesTo: '/content/data-databases-and-streaming/notes',
  },
  {
    title: 'Miscellaneous',
    description:
      'GitHub, CI/CD, debugging, testing, and setup guides that save you time.',
    iconSrc: '/img/icons/rust-line.svg',
    iconAlt: 'JavaScript icon',
    articlesTo: '/content/miscellaneous/articles',
    notesTo: '/content/miscellaneous/notes',
  },
];


const SLIDES: Slide[] = [
  {
    featured: {
      type: 'Note',
      tag: 'Go',
      title: 'Go concurrency patterns',
      description:
        'Goroutines, channelsggg, cancellation, worker pools, and fan-in/fan-out—practical patterns you’ll reuse.',
      to: '/content/go-programming/notes',
      toLinkToArticle: '/content/go-programming/articles',
      toLinkToNotes: '/content/go-programming/notes',
      textForLinkToArticle: 'More Go articles',
      textForLinkToNotes: 'Go Notes',
      iconSrc: '/img/icons/go.svg',
    },
    stats: [
      {
        value: 'Ownership & borrowing',
        label: 'Rust fundamentals',
        to: '/content/rust-and-systems-programming/articles/intro',
      },
      {
        value: 'Worker pools, cancellation',
        label: 'Go concurrency patterns',
        to: '/content/go-programming/notes',
      },
      {
        value: 'Schema-first APIs',
        label: 'API design with Smithy',
        to: '/content/smithy-and-api-design/articles',
      },
    ],
    rightPanel: {
      now: {
        type: 'Note',
        tag: 'Go',
        title: 'Go concurrency patterns',
        description:
          'Goroutines, channels, cancellation, worker pools, and fan-in/fan-out—practical patterns you’ll reuse.',
        to: '/content/go-programming/notes',
        iconSrc: '/img/icons/go.svg',
      },
      upNext: {
        type: 'Article' as const,
        tag: 'Go',
        title: 'Go: context cancellation patterns',
        description: 'Deadlines, timeouts, and graceful shutdown without leaks.',
        to: '/content/go-programming/articles',
        iconSrc: '/img/icons/go.svg',
      },
      links: [{ label: 'Browse Content', to: '/content/intro', iconSrc: '/img/icons/rust-line.svg' }],
    },
  },


  {
    featured: {
      type: 'Article',
      tag: 'Rust',
      title: 'Ownership & borrowing (mental model)',
      description: 'Borrowing rules that stick, with patterns you’ll reuse.',
      to: '/content/rust-and-systems-programming/articles/intro',
      toLinkToArticle: '/content/rust-and-systems-programming/articles',
      toLinkToNotes: '/content/rust-and-systems-programming/notes',
      textForLinkToArticle: 'More Rust articles',
      textForLinkToNotes: 'Rust Notes',
      iconSrc: '/img/icons/rust.svg',
    },
    stats: [
      {
        value: 'Lifetimes without pain',
        label: 'Rust patterns',
        to: '/content/rust-and-systems-programming/articles/intro',
      },
      {
        value: 'Worker pools',
        label: 'Go notes',
        to: '/content/go-programming/notes',
      },
      {
        value: 'Contracts & schemas',
        label: 'API design',
        to: '/content/smithy-and-api-design/articles',
      },
    ],
    rightPanel: {
      now: {
        type: 'Article',
        tag: 'Rust',
        title: 'Ownership & borrowing',
        description: 'A practical mental model that makes the borrow checker click.',
        to: '/content/rust-and-systems-programming/articles/intro',
        iconSrc: '/img/icons/rust.svg',
      },
      upNext: {
        type: 'Note' as const,
        tag: 'Rust',
        title: 'Borrow checker shortcuts',
        description: 'Common refactor moves that fix errors fast.',
        to: '/content/rust-and-systems-programming/notes',
        iconSrc: '/img/icons/rust.svg',
      },
      links: [{ label: 'Browse Content', to: '/content/intro', iconSrc: '/img/icons/rust-line.svg' }],
    },
  },
];



type NewItem = {
  type: 'Article' | 'Note';
  tag: string;
  title: string;
  description: string;
  to: string;
  coverSrc: string;
};

const NEW_ITEMS: NewItem[] = [
  {
    type: 'Article',
    tag: 'Rust',
    title: 'Ownership & borrowing (mental model)',
    description: 'Borrowing rules that stick, with patterns you’ll reuse.',
    to: '/content/rust-and-systems-programming/articles/intro',
    coverSrc: '/img/icons/rust.svg',
  },
  {
    type: 'Note',
    tag: 'Go',
    title: 'Worker pools + cancellation',
    description: 'Bound concurrency, cancel cleanly, avoid leaks.',
    to: '/content/go-programming/notes',
    coverSrc: '/img/icons/go.svg',
  },
  {
    type: 'Article',
    tag: 'API',
    title: 'Schema-first APIs with Smithy',
    description: 'Model once, generate clients/servers, evolve safely.',
    to: '/content/smithy-and-api-design/articles',
    coverSrc: '/img/icons/api.svg',
  },
];

const NEW_ITEMS_RIGHT: NewItem[] = [
  {
    type: 'Article',
    tag: 'Scala',
    title: 'Typeclasses in practice',
    description: 'Small patterns that scale across your codebase.',
    to: '/content/scala-and-functional-applications/articles',
    coverSrc: '/img/icons/rust.svg',
  },
  {
    type: 'Note',
    tag: 'Python',
    title: 'Project layout + tooling',
    description: 'pyproject, ruff, formatting, tests, and automation.',
    to: '/content/python-programming/notes',
    coverSrc: '/img/icons/go.svg',
  },
  {
    type: 'Article',
    tag: 'Cloud',
    title: 'Kubernetes deployment basics',
    description: 'Deployments, services, probes, and rollout strategy.',
    to: '/content/cloud-and-deployment/articles',
    coverSrc: '/img/icons/api.svg',
  },
];





export default function HomepageFeatures(): ReactNode {
  const [slideIndex, setSlideIndex] = useState(0);
  const slide = SLIDES[slideIndex];

  useEffect(() => {
    const id = window.setInterval(() => {
      setSlideIndex((i) => (i + 1) % SLIDES.length);
    }, 4000); // Slowed down slightly for a smoother reading experience
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className={styles.wrap}>
      <div className={clsx('container', styles.container)}>
        
        {/* HERO SECTION - Now open and borderless */}
        <div className={clsx(styles.hero, styles.slideFade)}>
          <div className={styles.heroText}>
            <div className={styles.featured}>
              <div className={styles.featuredHeader}>
                <div className={styles.featuredEyebrow}>Featured</div>
                <div className={styles.featuredPills}>
                  <span className={styles.pill}>{slide.featured.type}</span>
                  <span className={styles.pillMuted}>{slide.featured.tag}</span>
                </div>
              </div>
              <div className={styles.featuredBody}>
                <div className={styles.featuredIcon} aria-hidden="true">
                  <img
                    className={styles.featuredIconImg}
                    src={useBaseUrl(slide.featured.iconSrc)}
                    alt=""
                  />
                </div>
                <div className={styles.featuredContent}>
                  <Heading as="h1" className={styles.featuredTitle}>
                    {slide.featured.title}
                  </Heading>
                  <p className={styles.featuredDesc}>{slide.featured.description}</p>
                  <div className={styles.featuredActions}>
                    <Link
                      className={clsx('button button--primary', styles.ctaPrimary)}
                      to={slide.featured.to}>
                      Read now →
                    </Link>
                    <Link className={styles.ctaText} to={slide.featured.toLinkToArticle}>
                      {slide.featured.textForLinkToArticle}
                    </Link>
                    <Link className={styles.ctaText} to={slide.featured.toLinkToNotes}>
                      {slide.featured.textForLinkToNotes}
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.stats}>
              {slide.stats.map((s) => (
                <Link
                  key={s.to}
                  to={s.to}
                  className={styles.statLink}
                  {...(s.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  <div className={styles.stat}>
                    <div className={styles.statValue}>{s.value}</div>
                    <div className={styles.statLabel}>{s.label}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* RIGHT PANEL - Simplified, no fake browser header */}
          <div className={styles.heroPanel} aria-label="Featured navigation">
            <div className={styles.panelBody}>
              <div className={styles.panelSection}>
                <div className={styles.panelSectionTitle}>Up Next</div>
                <Link to={slide.rightPanel.now.to} className={styles.panelCard}>
                  <div className={styles.panelCardTop}>
                    <div className={styles.panelCardIconWrap}>
                        <img
                        className={styles.panelCardIcon}
                        src={useBaseUrl(slide.rightPanel.now.iconSrc)}
                        alt=""
                        aria-hidden="true"
                        />
                    </div>
                    <div className={styles.panelPills}>
                      <span className={styles.panelPill}>{slide.rightPanel.now.type}</span>
                      <span className={styles.panelPillMuted}>{slide.rightPanel.now.tag}</span>
                    </div>
                  </div>
                  <div className={styles.panelCardTitle}>{slide.rightPanel.now.title}</div>
                  <div className={styles.panelCardDesc}>{slide.rightPanel.now.description}</div>
                  <div className={styles.panelCardCta}>Open →</div>
                </Link>
              </div>

              <div className={styles.panelSection}>
                <div className={styles.panelSectionTitle}>Explore</div>
                <div className={styles.panelLinks}>
                  {slide.rightPanel.links.map((l) => (
                    <Link
                      key={l.to}
                      to={l.to}
                      className={styles.panelLink}
                      {...(l.to.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    >
                      <img className={styles.panelLinkIcon} src={useBaseUrl(l.iconSrc)} alt="" aria-hidden="true" />
                      <span>{l.label}</span>
                      <span className={styles.panelArrow}>→</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CARDS SECTION */}
        <div className={styles.sectionHeader}>
          <Heading as="h2" className={styles.sectionTitle}>
            What you’ll find here
          </Heading>
          <p className={styles.sectionSubtitle}>
            Practical articles and notes across systems, backend, data, AI, agents, streaming, Rust, Go, Scala, Python, cloud and more.
          </p>
        </div>

        <div className={styles.grid}>
          {CARDS.map((c) => (
            <div key={c.title} className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.cardIcon} aria-hidden="true">
                    <img className={styles.cardIconImg} src={useBaseUrl(c.iconSrc)} alt={c.iconAlt} />
                </div>
                <Heading as="h3" className={styles.cardTitle}>
                    {c.title}
                </Heading>
              </div>
              <p className={styles.cardDesc}>{c.description}</p>
              
              {/* Changed from blocky buttons to elegant text links */}
              <div className={styles.cardActions}>
                <Link className={styles.cardTextLink} to={c.articlesTo}>
                  Articles <span className={styles.arrow}>→</span>
                </Link>
                <Link className={styles.cardTextLink} to={c.notesTo}>
                  Notes <span className={styles.arrow}>→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* NEW / RECENT SECTION */}
        <div className={styles.newsSection}>
          <div className={styles.newsCenter}>
            <Heading as="h2" className={styles.newsPanelTitle}>
              New articles & notes
            </Heading>
          </div>

          <div className={styles.newsPanel}>
            <div className={styles.newsCol}>
              <div className={styles.newsFeed}>
                {NEW_ITEMS.map((item) => (
                  <Link key={item.to} to={item.to} className={styles.newsRow}>
                    <div className={styles.newsMedia} aria-hidden="true">
                      <img
                        className={styles.newsMediaImg}
                        src={useBaseUrl(item.coverSrc)}
                        alt=""
                        loading="lazy"
                      />
                    </div>
                    <div className={styles.newsMain}>
                      <div className={styles.newsTop}>
                        <span className={styles.newsBadge}>{item.type}</span>
                        <span className={styles.newsTag}>{item.tag}</span>
                      </div>
                      <div className={styles.newsTitle}>{item.title}</div>
                      <div className={styles.newsMeta}>{item.description}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className={styles.newsCol}>
              <div className={styles.newsFeed}>
                {NEW_ITEMS_RIGHT.map((item) => (
                  <Link key={item.to} to={item.to} className={styles.newsRow}>
                    <div className={styles.newsMedia} aria-hidden="true">
                      <img
                        className={styles.newsMediaImg}
                        src={useBaseUrl(item.coverSrc)}
                        alt=""
                        loading="lazy"
                      />
                    </div>
                    <div className={styles.newsMain}>
                      <div className={styles.newsTop}>
                        <span className={styles.newsBadge}>{item.type}</span>
                        <span className={styles.newsTag}>{item.tag}</span>
                      </div>
                      <div className={styles.newsTitle}>{item.title}</div>
                      <div className={styles.newsMeta}>{item.description}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}