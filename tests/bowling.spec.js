/*jshint esversion: 6*/
const chai = require('chai');
const expect = chai.expect;

const bowling = require('../bowling.js');

describe('bowling function', () => {
  it('should be a function', () => {
    expect(bowling).to.be.a('function');
  });

  it('should return a score equal to the sum of the pins if less than 10 pins are knocked down', () => {
    expect(bowling([{pinCount1: 5, pinCount2: 3}])).to.equal(8);
  });

  it('should return a spare score', () => {
    expect(bowling([{pinCount1: 5, pinCount2: 5},
      {pinCount1: 5, pinCount2: 3}])).to.equal(23);
  });

  it('should return a strike score', () => {
    expect(bowling([{pinCount1: 10},{pinCount1: 5, pinCount2: 3}])).to.equal(26);
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





});