import { filterExercises } from '../src/utils/exerciseFilters';

test('Filters muscle gain exercises', () => {
  const exercises = [
    { benefit: 'muscle gain' },
    { benefit: 'weight loss' }
  ];
  expect(filterExercises(exercises, 'muscle gain')).toHaveLength(1);
});
