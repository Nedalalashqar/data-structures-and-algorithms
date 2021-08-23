'use strict';

const AnimalShelter = require('../AnimalShelter');

describe('Testing Animal Shelter', () => {
    it('Testing enqueue cat ', () => {
        let animalShel = new AnimalShelter();
        let nameAnimal = {};
        let animals1New = { type: 'cat', nameAnimal: 'caty1' };
        let animals2New = { type: 'cat', nameAnimal: 'caty2' };
        animalShel.enqueue(animals1New);
        animalShel.enqueue(animals2New);
        expect(animalShel.idx.storage.val).toEqual('caty2');
    });
    it('Testing empty cat', () => {
        let animalShel = new AnimalShelter();
        expect(animalShel.dequeue('cat')).toEqual('its gonna be a cat place hold empty');
    });
    it('Testing empty dog', () => {
        let animalShel = new AnimalShelter();
        expect(animalShel.dequeue('dog')).toEqual('its gonna be a dog place hold empty');
    });
    it('Dequeue another type from empty', () => {
        let animalShel = new AnimalShelter();
        expect(animalShel.dequeue('newanimal')).toEqual(null);
    });
    it('Testing new animal', () => {
        let animalShel = new AnimalShelter();
        let animalsNew = { type: 'new', nameAnimal: 'NewAnimal' };
        animalShel.enqueue(animalsNew);
    });
    it('Testing empty cat', () => {
        let animalShel = new AnimalShelter();
        expect(animalShel.dequeue('prefCat')).toEqual(null);
    });
});
