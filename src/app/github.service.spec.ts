import { TestBed } from '@angular/core/testing';
import { LangStats } from "./models/lang-stats";

TestBed.configureTestingModule({
  imports: [HttpClientModule]
});

import { GithubService } from './github.service';
import {HttpClientModule} from "@angular/common/http";
import Any = jasmine.Any;

describe('GithubService', () => {
  let service: GithubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GithubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('get repo language stats should work', () =>  {

    let test = service.getReposLanguageStats().subscribe( (data: any) => {
      let langStats = data.map( (item: any) => {
        new LangStats(item.category, item.value)
      });
      let test = langStats
      console.log(test)
    })

  });



});
