/* globals describe it expect */
// const { expect } = require('expect');
// const { it } = require('jest-circus');
// const { expect } = require('expect');
// const { beforeEach, it } = require('jest-circus');
const Port = require('../src/Port.js');

describe('Port', () => {
    let port;
    beforeEach(() => {
        port = new Port('Calais')
    });
    xit('is an object', () => {
        expect(port).toBeInstanceOf(Object);
    });
    xit('can be instantiated', () => {
        expect(new Port()).toBeInstanceOf(Object);
    });
    xit('has a name Calais', () =>{
        expect(port.name).toEqual('Calais');
    })
    });