const { expect } = require('chai');

// Start test block
describe('WavePortal', function () {
  before(async function () {
    this.wavePortal = await ethers.getContractFactory('WavePortal');
  });

  beforeEach(async function () {

  });

  // Test case
it('retrieve the signer', async function () {
const [owner] = await ethers.getSigners();    
});

it('Get Contract Factory Instance', async function () {   
    const wave = await ethers.getContractFactory("WavePortal");
});

  it('storing the message', async function () {
    
});

    it('verifying winner on the contract', async function () {
    
});


    it('get the total number of waves', async function () {
    
});

});
