import { ActorModule } from './actor.module';

describe('ActorModule', () => {
  let actorModule: ActorModule;

  beforeEach(() => {
    actorModule = new ActorModule();
  });

  it('should create an instance', () => {
    expect(actorModule).toBeTruthy();
  });
});
