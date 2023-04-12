import { TestBed } from "@angular/core/testing";

import { SmugglerService } from "./smuggler.service";

describe("PlayerService", () => {
  let service: SmugglerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SmugglerService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
