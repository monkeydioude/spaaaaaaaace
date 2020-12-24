import * as chai from 'chai';
import { MPSec } from "./Speed"
import { Meter } from "./Distance"
import { Second } from ".//Time"

const expect = chai.expect;
describe('NO SPEED LIMIT', () => {

  it('should give time from distance' , () => {
    expect(
      new MPSec(15)
        .getTime(new Meter(150))
      ).to.equal(+new Second(10));
  });

});