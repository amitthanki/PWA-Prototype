export interface Post {
    id: number;
    title: {
        rendered: string;
    };
    handle: string;
    desc: string;
    date: string;
}

export function generateMockPost(): Post {
    return {
        id: 1,
        title: {
            rendered: 'Heres a title'
        },
        handle: 'blog-post',
        desc: 'Culpa irure culpa et ullamco proident proident id. Laboris aliquip laboris sunt in ex eiusmod consequat aliquip dolore consectetur minim sint ex eu. Adipisicing amet nulla Lorem pariatur elit irure. Aliquip occaecat reprehenderit dolor est nulla irure.',
        date: '2017-12-07T08:00:14',
    };
  }

