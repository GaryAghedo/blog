import React from 'react';
import TOCItems from '@theme/TOCItems';
import type {Props} from '@theme/TOC';
import {useDoc} from '@docusaurus/plugin-content-docs/client';
import Link from '@docusaurus/Link';

import RustIcon from '@site/static/img/icons/rust.svg';
import ScalaIcon from '@site/static/img/icons/scala.svg';
import AiIcon from '@site/static/img/icons/ai.svg';
import GoIcon from '@site/static/img/icons/go.svg';
import PythonIcon from '@site/static/img/icons/python.svg';

type FeaturedItem = {
  type: 'Article' | 'Note';
  title: string;
  description?: string;
  to: string;
  tag: string;
  Icon: React.ComponentType<React.ComponentProps<'svg'>>;
};

const featured: FeaturedItem[] = [
  {
    type: 'Article',
    title: 'Rust ownership, borrowing, and lifetimes',
    description: 'A practical mental model and common patterns without fighting the compiler.',
    to: '/content/rust-and-systems-programming/articles/intro',
    tag: 'Rust',
    Icon: RustIcon,
  },
  {
    type: 'Note',
    title: 'Go concurrency patterns',
    description: 'Goroutines, channels, cancellation, worker pools, fan-in/fan-out.',
    to: '/content/go-programming/notes',
    tag: 'Go',
    Icon: GoIcon,
  },
  {
    type: 'Article',
    title: 'Scala FP building blocks',
    description: 'Immutability, ADTs, typeclasses, and effect basics.',
    to: '/content/scala-and-functional-applications/articles',
    tag: 'Scala',
    Icon: ScalaIcon,
  },
  {
    type: 'Note',
    title: 'Python tooling + project layout',
    description: 'Virtual envs, pyproject.toml, linting, formatting, tests.',
    to: '/content/python-programming/notes',
    tag: 'Python',
    Icon: PythonIcon,
  },
];

function FeaturedSidebar() {
  return (
    <div style={{display: 'grid', gap: 12}}>
      <div style={{fontWeight: 900, fontSize: 14}}>Featured</div>

      {featured.map((item) => (
        <Link
          key={item.to}
          to={item.to}
          style={{
            textDecoration: 'none',
            color: 'inherit',
            border: '1px solid var(--ifm-color-emphasis-200)',
            borderRadius: 12,
            padding: 12,
            background: 'var(--ifm-card-background-color)',
            boxShadow: '0 10px 24px rgba(0,0,0,0.06)',
            display: 'block',
          }}
        >
          <div style={{display: 'flex', gap: 10, alignItems: 'flex-start'}}>
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: 12,
                display: 'grid',
                placeItems: 'center',
                background: 'rgba(56, 139, 253, 0.10)',
                border: '1px solid rgba(56, 139, 253, 0.18)',
                flex: '0 0 auto',
              }}
            >
              <item.Icon width={22} height={22} />
            </div>

            <div style={{minWidth: 0}}>
              <div style={{display: 'flex', gap: 8, flexWrap: 'wrap'}}>
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 900,
                    padding: '4px 8px',
                    borderRadius: 999,
                    border: '1px solid var(--ifm-color-emphasis-200)',
                    background: 'var(--ifm-color-emphasis-100)',
                    lineHeight: 1.2,
                  }}
                >
                  {item.type}
                </span>

                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 900,
                    padding: '4px 8px',
                    borderRadius: 999,
                    border: '1px solid var(--ifm-color-emphasis-200)',
                    background: 'var(--ifm-color-emphasis-100)',
                    lineHeight: 1.2,
                    opacity: 0.9,
                  }}
                >
                  {item.tag}
                </span>
              </div>

              <div style={{fontWeight: 900, marginTop: 8, lineHeight: 1.25}}>
                {item.title}
              </div>

              {item.description ? (
                <div style={{marginTop: 6, fontSize: 12, opacity: 0.9, lineHeight: 1.5}}>
                  {item.description}
                </div>
              ) : null}

              <div style={{marginTop: 10, fontWeight: 900, fontSize: 12}}>Read →</div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default function TOC({toc, className, ...props}: Props): JSX.Element {
  // This gives you the current doc metadata safely (no window hacks).
  const doc = useDoc();

  // Update this to match your Content page doc id exactly.
  // For your file content-docs/intro.mdx, the id is usually "intro".
  const isContentPage = doc?.metadata?.id === 'intro';

  return (
    <div className={className}>
      {isContentPage ? (
        <FeaturedSidebar />
      ) : (
        <TOCItems toc={toc} {...props} />
      )}
    </div>
  );
}
