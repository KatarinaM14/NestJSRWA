import { Test, TestingModule } from '@nestjs/testing';
import { VolunteeringController } from '../volunteering/volunteering.controller';

describe('VolunteeringController', () => {
  let controller: VolunteeringController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VolunteeringController],
    }).compile();

    controller = module.get<VolunteeringController>(VolunteeringController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
