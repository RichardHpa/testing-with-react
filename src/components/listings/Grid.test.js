import data from '../../data/courses.json';

// Numbers
const numItems = data.length;

test('Number of items should equal 12', () => {
    expect(numItems).toBe(12);
})

test('Number of items to be Greater than 12', () => {
    expect(numItems).toBeGreaterThanOrEqual(12);
})


//Strings
const dataTest = data[0].title;

test('Checking there is a JS in the title', () => {
    expect(dataTest).toMatch(/JS/);
})

test('The title contains React', () => {
    expect(dataTest).toContain('React');
})


 //Arrays
 const arrayData = ['React Native', 'MeteorJS'];

 test('Check if the list of courses mention React Native and MetorJS', () => {
     expect(['React Native', 'MeteorJS', 'React']).toEqual(expect.arrayContaining(arrayData));
 })

//Objects
test('Check the first course to have a property of title', () => {
    expect(data[0]).toHaveProperty('title');
})

test('Check the first course has 31,266 views', () => {
    expect(data[0]).toHaveProperty('views', '31,266');
})
