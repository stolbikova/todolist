import {describe, it} from 'mocha';
import {dataUtils} from 'utils';
import {expect} from 'chai';

class BindTestClass {
  constructor (testValue) {
    this.value = testValue;
  }

  method () {
    return this.value;
  }

  getCallback () {
    return this.method;
  }
}

describe('Utils: dataUtils.bind', () => {
  it('should bind all methods to object', () => {
    const testValue = 10;
    const obj = new BindTestClass(testValue);

    dataUtils.bind(obj, ['method']);

    expect(obj.getCallback()()).to.eql(testValue);
  });
});