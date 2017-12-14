export interface Post {
    id: number;
    title: string;
    overview: string;
    poster_path: string;
    release_date: string;
    vote_average: number;
    revenue: number;
    runtime: number;


}

export function generateMockPost(): Post {
    return {
        id: 1,
        title: 'Movie Title',
        overview: 'Culpa irure culpa et ullamco proident proident id. Laboris aliquip laboris sunt in ex eiusmod consequat aliquip dolore consectetur minim sint ex eu.',
        poster_path: 'img/path.jpg',
        release_date: '1999-10-15',
        vote_average: 53.561825,
        revenue: 100853753,
        runtime: 139
    };
  }

