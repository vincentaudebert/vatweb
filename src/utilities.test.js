import { getFromSlug } from './utilities';

describe('Utilities', () => {
  const SLUG_TO_FIND = 'slug-2';
  const FOUND_ITEM = {
    prop: 'Cool',
    name: SLUG_TO_FIND,
  };

  const collection = [
    {
      prop: 'Nice',
      name: 'slug-1',
    },
    FOUND_ITEM,
    {
      prop: 'Sweet',
      name: 'slug-3',
    },
  ];

  it('getFromSlug item found', () => {
    expect(getFromSlug(collection, SLUG_TO_FIND)).toEqual(FOUND_ITEM);
  });

  it('getFromSlug item not found', () => {
    expect(getFromSlug(collection, 'unknown')).toBeFalsy();
  });
});
