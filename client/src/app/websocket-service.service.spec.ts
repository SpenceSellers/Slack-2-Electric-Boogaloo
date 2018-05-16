import { TestBed, inject } from '@angular/core/testing';

import { WebsocketService} from './websocket-service.service';

describe('WebsocketServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WebsocketService]
    });
  });

  it('should be created', inject([WebsocketService], (service: WebsocketService) => {
    expect(service).toBeTruthy();
  }));
});
