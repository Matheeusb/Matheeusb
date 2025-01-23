import { Post } from '../types/Post';

export const posts: Post[] = [
  {
    id: 'code-review',
    title: {
      'pt-BR': 'Como ter um processo de code review maduro e efetivo?!',
      'en-US': 'How to Have a Mature and Effective Code Review Process?!',
    },
    slug: 'code-review',
    date: '2023-08-28',
    readTime: 3,
    excerpt: {
      'pt-BR': 'O code review é uma das mais importantes etapas (se não a mais) dentro do processo de desenvolvimento de software. O processo de revisão de código ajuda a identificar bugs e anti patterns ...',
      'en-US': 'Code review is one of the most important stages (if not the most) within the software development process. The code review process helps identify bugs and anti-patterns ...',
    },
    content: {
      'pt-BR': '',
      'en-US': '',
    },
    coverImage: 'https://miro.medium.com/v2/resize:fit:4800/format:webp/1*caUKFeEGtxz_Xe2uCyV4UQ.jpeg',
    tags: ['Code Review', 'Software Engineering'],
  },
  {
    id: 'flutter-widgets-adaptive',
    title: {
      'pt-BR': 'Flutter: Widgets Adaptive',
      'en-US': 'Flutter: Adaptive Widgets',
    },
    slug: 'flutter-widgets-adaptive',
    date: '2023-08-30',
    readTime: 3,
    excerpt: {
      'pt-BR': 'No Flutter 3.13, temos a adição de um novo Widget com o construtor adaptive(): AlertDialog! Esse widget se junta a alguns outros que possuem esse construtor, como por exemplo ...',
      'en-US': 'In Flutter 3.13, a new Widget with the `adaptive()` constructor was introduced: `AlertDialog`! This widget joins others that have this constructor, such as ...',
    },
    content: {
      'pt-BR': '',
      'en-US': '',
    },
    coverImage: 'https://miro.medium.com/v2/resize:fit:1200/format:webp/1*Br_JYpEiWLW0u4D--_bdQQ.gif',
    tags: ['Flutter', 'Mobile Software Engineering', 'Cross-Platform'],
  },
  {
    id: 'mobile-estimates',
    title: {
      'pt-BR': 'O que levar em consideração na hora de estimar uma demanda mobile?',
      'en-US': 'What to take into consideration when estimating mobile demand?',
    },
    slug: 'mobile-estimates',
    date: '2023-10-10',
    readTime: 5,
    excerpt: {
      'pt-BR': '"Qual é a estimativa para essa demanda?" Com certeza essa é uma das frases que os desenvolvedores menos gostam, porém faz parte do nosso dia a dia dar previsibilidade para negócio ...',
      'en-US': '"What\'s the estimate for this demand?" This is certainly one of the phrases that developers like least, but it\'s part of our daily routine to provide business predictability ...',
    },
    content: {
      'pt-BR': '',
      'en-US': '',
    },
    coverImage: 'https://miro.medium.com/v2/resize:fit:4800/format:webp/1*ve9lW-nXsUhqRPCX42b-vw.jpeg',
    tags: ['Android', 'iOS', 'Mobile Software Engineering', 'Cross-Platform'],
  },
  {
    id: 'conventional-comments',
    title: {
      'pt-BR': 'Conventional Comments: uma abordagem eficaz para comunicação entre desenvolvedores',
      'en-US': 'Conventional Comments: an effective approach to communication between developers',
    },
    slug: 'conventional-comments',
    date: '2023-10-18',
    readTime: 2,
    excerpt: {
      'pt-BR': '"Se você é um desenvolvedor de software, provavelmente já deve ter ouvido falar em conventional commits. Caso não tenha ouvido falar ainda, não perca tempo, acesse aqui! ...',
      'en-US': 'If you are a software developer, you have probably heard about conventional commits. If you haven\'t heard about it yet, don\'t waste time, check it out here!',
    },
    content: {
      'pt-BR': '',
      'en-US': '',
    },
    coverImage: 'https://miro.medium.com/v2/resize:fit:4800/format:webp/1*4249ZKIygGvcJSzfmpb87w.png',
    tags: ['Software Engineering', 'Clean Code', 'Best Practices'],
  },
  {
    id: 'data-provider',
    title: {
      'pt-BR': 'Aumentando a cobertura e reduzindo código de testes com o DataProvider',
      'en-US': 'Increasing test coverage and reducing test code with the DataProvider',
    },
    slug: 'data-provider',
    date: '2024-03-19',
    readTime: 3,
    excerpt: {
      'pt-BR': 'Escrever testes automatizados é crucial para garantir a qualidade de software. No entanto, criar testes para cada cenário possível pode ser trabalhoso e demorado. É aí que o ...',
      'en-US': 'Writing automated tests is crucial to ensure software quality. However, creating tests for every possible scenario can be laborious and time-consuming. That\'s where the ...',
    },
    content: {
      'pt-BR': '',
      'en-US': '',
    },
    coverImage: 'https://miro.medium.com/v2/resize:fit:4800/format:webp/1*ItiAsOr4ara3bpqxSoegDw.jpeg',
    tags: ['Software Engineering', 'Test Automation', 'Java'],
  },
  {
    id: 'appium-mobile-actions',
    title: {
      'pt-BR': 'Por que utilizar a Appium Mobile Actions em seus testes automatizados?',
      'en-US': 'Why use Appium Mobile Actions in your automated tests?',
    },
    slug: 'appium-mobile-actions',
    date: '2024-07-11',
    readTime: 4,
    excerpt: {
      'pt-BR': 'Primeiramente, gostaria de trazer um pouco de contexto e motivações! Pensando na combinação de linguagem de programação Java e no framework de testes mobile Appium ...',
      'en-US': 'First of all, I would like to bring a little context and motivation! Thinking about the combination of Java programming language and the Appium mobile testing framework ...',
    },
    content: {
      'pt-BR': '',
      'en-US': '',
    },
    coverImage: 'https://miro.medium.com/v2/resize:fit:4800/format:webp/1*mBeLMMHNXx5ItvKxiRnjnw.jpeg',
    tags: ['Appium', 'Android', 'iOS', 'Test Automation', 'Java'],
  },
  {
    id: 'xpath-functions',
    title: {
      'pt-BR': 'Funções que transformam seus Xpaths em ferramentas poderosas',
      'en-US': 'Functions that turn your Xpaths into powerful tools',
    },
    slug: 'xpath-functions',
    date: '2024-12-13',
    readTime: 3,
    excerpt: {
      'pt-BR': 'No universo dos testes automatizados, a escolha de locators confiáveis é fundamental para garantir a estabilidade e a eficiência dos scripts. Entre diversas opções, o uso de Xpaths ...',
      'en-US': 'In the world of automated testing, choosing reliable locators is fundamental to ensure script stability and efficiency. Among various options, using Xpaths ...',
    },
    content: {
      'pt-BR': '',
      'en-US': '',
    },
    coverImage: 'https://miro.medium.com/v2/resize:fit:4800/format:webp/1*77ncadfG_eD3ZJ6nDRs7Yg.png',
    tags: ['XPath', 'Test Automation'],
  }
];

export async function getAllPosts(): Promise<Post[]> {
  const postsWithContent = await Promise.all(
    posts.map(async (post) => {
      try {
        const [ptContent, enContent] = await Promise.all([
          import(`../content/posts/pt-BR/${post.slug}.md?raw`),
          import(`../content/posts/en-US/${post.slug}.md?raw`)
        ]);

        return {
          ...post,
          content: {
            'pt-BR': ptContent.default,
            'en-US': enContent.default,
          }
        };
      } catch (error) {
        console.error(`Error loading post content for ${post.slug}:`, error);
        return post;
      }
    })
  );

  return postsWithContent.sort((post1, post2) =>
    new Date(post2.date).getTime() - new Date(post1.date).getTime()
  );
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const post = posts.find(post => post.slug === slug);

  if (!post) {
    return null;
  }

  try {
    const [ptContent, enContent] = await Promise.all([
      import(`../content/posts/pt-BR/${slug}.md?raw`),
      import(`../content/posts/en-US/${slug}.md?raw`)
    ]);

    return {
      ...post,
      content: {
        'pt-BR': ptContent.default,
        'en-US': enContent.default,
      }
    };
  } catch (error) {
    console.error(`Error loading post content for ${slug}:`, error);
    return null;
  }
}