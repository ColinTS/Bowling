/*jshint esversion: 6*/
const chai = require('chai');
const expect = chai.expect;

const bowling = require('../bowling.js');

describe('bowling function', () => {
  it('should be a function', () => {
    expect(bowling).to.be.a('function');
  });

  it('should return a correct total score with no spares or strikes', () => {
    expect(bowling([{pinCount1: 4, pinCount2: 5},
      {pinCount1: 4, pinCount2: 5},
      {pinCount1: 4, pinCount2: 5},
      {pinCount1: 4, pinCount2: 5},
      {pinCount1: 4, pinCount2: 5},
      {pinCount1: 4, pinCount2: 5},
      {pinCount1: 4, pinCount2: 5},
      {pinCount1: 4, pinCount2: 5},
      {pinCount1: 4, pinCount2: 5},
      {pinCount1: 4, pinCount2: 5}])).to.equal(90);
  });

  it('should return a correct total score with spares and strikes', () => {
    expect(bowling([{pinCount1: 10},
      {pinCount1: 4, pinCount2: 5},
      {pinCount1: 4, pinCount2: 5},
      {pinCount1: 5, pinCount2: 5},
      {pinCount1: 4, pinCount2: 5},
      {pinCount1: 4, pinCount2: 5},
      {pinCount1: 4, pinCount2: 5},
      {pinCount1: 4, pinCount2: 5},
      {pinCount1: 4, pinCount2: 5},
      {pinCount1: 4, pinCount2: 5}])).to.equal(105);
  });

  it('should return a correct total score with spare as 10th frame', () => {
    expect(bowling([{pinCount1: 10},
      {pinCount1: 4, pinCount2: 5},
      {pinCount1: 4, pinCount2: 5},
      {pinCount1: 5, pinCount2: 5},
      {pinCount1: 4, pinCount2: 5},
      {pinCount1: 4, pinCount2: 5},
      {pinCount1: 4, pinCount2: 5},
      {pinCount1: 4, pinCount2: 5},
      {pinCount1: 4, pinCount2: 5},
      {pinCount1: 5, pinCount2: 5},
      {pinCount1: 5}])).to.equal(111); /*bonus roll for spare*/
  });

  it('should return a correct total score with strike as 10th frame', () => {
    expect(bowling([{pinCount1: 10},
      {pinCount1: 4, pinCount2: 5},
      {pinCount1: 4, pinCount2: 5},
      {pinCount1: 5, pinCount2: 5},
      {pinCount1: 4, pinCount2: 5},
      {pinCount1: 4, pinCount2: 5},
      {pinCount1: 4, pinCount2: 5},
      {pinCount1: 4, pinCount2: 5},
      {pinCount1: 4, pinCount2: 5},
      {pinCount1: 10},
      {pinCount1: 5, pinCount2: 4}])).to.equal(115); /*bonus roll for spare*/
  });








});