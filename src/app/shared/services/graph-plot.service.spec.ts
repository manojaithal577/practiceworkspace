import { TestBed } from '@angular/core/testing';

import { GraphPlotService } from './graph-plot.service';

describe('GraphPlotService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GraphPlotService = TestBed.get(GraphPlotService);
    expect(service).toBeTruthy();
  });
});
