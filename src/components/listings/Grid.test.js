import data from '../../data/courses.json';

const numItems = data.length;

test('Number of items should equal 12', () => {
    expect(numItems).toBe(12);
})

test('Number of items to be Greater than 12', () => {
    expect(numItems).toBeGreaterThanOrEqual(12);
})

const dataTest = data[0].title;
test('Checking there is a JS in the title', () => {
    expect(dataTest).toMatch(/JS/);
})

test('The title contains React', () => {
    expect(dataTest).toContain('React');
})
