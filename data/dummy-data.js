import Category from '../models/category';
import Movie from '../models/movie';

export const CATEGORIES = [
    new Category('cat1', 'Action', '#9eecff'),
    new Category('cat2', 'Drama', '#47fced'),
    new Category('cat3', 'Thriller', '#ffc7ff'),
    new Category('cat4', 'Sci-fi', '#41d95d')
];
export const MOVIES = [
    new Movie('m1', ['cat1','cat3'], 'Extraction', 120, 15),
    new Movie('m2', ['cat1'], 'Braven', 97, 15),
    new Movie('m3', ['cat1'], 'The Hunt', 105, 15),
    
    new Movie('m4', ['cat2'], 'What women want', 100, 0),
    new Movie('m5', ['cat2'], 'Mulan', 114, 7),
    new Movie('m6', ['cat2'], 'Another Round', 110, 0),
    
    new Movie('m7', ['cat1','cat3'], 'Run', 116, 15),
    new Movie('m8', ['cat3'], 'The Invisible Man', 131, 15),
    new Movie('m9', ['cat3'], 'Serenity', 101, 12),
    
    new Movie('m10', ['cat4'], 'Archive', 110, 12),
    new Movie('m11', ['cat4'], 'Underwater', 100, 15),
    new Movie('m12', ['cat4'], 'IO', 99, 15),
];