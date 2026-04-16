import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  contentSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Rust & Systems programming',
      items: [
        { type: 'link', label: 'Articles', href: '/content/rust-and-systems-programming/articles' },
        { type: 'link', label: 'Notes', href: '/content/rust-and-systems-programming/notes' },
      ],
    },
    {
      type: 'category',
      label: 'Scala & Functional Applications',
      items: [
        { type: 'link', label: 'Articles', href: '/content/scala-and-functional-applications/articles' },
        { type: 'link', label: 'Notes', href: '/content/scala-and-functional-applications/notes' },
      ],
    },
    {
      type: 'category',
      label: 'AI, LLM, Agents & Robotics',
      items: [
        { type: 'link', label: 'Articles', href: '/content/ai-llm-agents-and-robotics/articles' },
        { type: 'link', label: 'Notes', href: '/content/ai-llm-agents-and-robotics/notes' },
      ],
    },
    {
      type: 'category',
      label: 'Smithy & API Design',
      items: [
        { type: 'link', label: 'Articles', href: '/content/smithy-and-api-design/articles' },
        { type: 'link', label: 'Notes', href: '/content/smithy-and-api-design/notes' },
      ],
    },
    {
      type: 'category',
      label: 'GO Programming',
      items: [
        { type: 'link', label: 'Articles', href: '/content/go-programming/articles' },
        { type: 'link', label: 'Notes', href: '/content/go-programming/notes' },
      ],
    },
    {
      type: 'category',
      label: 'Python programming',
      items: [
        { type: 'link', label: 'Articles', href: '/content/python-programming/articles' },
        { type: 'link', label: 'Notes', href: '/content/python-programming/notes' },
      ],
    },
    {
      type: 'category',
      label: 'Cloud and Deployment',
      items: [
        { type: 'link', label: 'Articles', href: '/content/cloud-and-deployment/articles' },
        { type: 'link', label: 'Notes', href: '/content/cloud-and-deployment/notes' },
      ],
    },
    {
      type: 'category',
      label: 'Data, Databases & Streaming',
      items: [
        { type: 'link', label: 'Articles', href: '/content/data-databases-and-streaming/articles' },
        { type: 'link', label: 'Notes', href: '/content/data-databases-and-streaming/notes' },
      ],
    },
    {
      type: 'category',
      label: 'Miscellaneous',
      items: [
        { type: 'link', label: 'Articles', href: '/content/miscellaneous/articles' },
        { type: 'link', label: 'Notes', href: '/content/miscellaneous/notes' },
      ],
    },
  ],
};

export default sidebars;