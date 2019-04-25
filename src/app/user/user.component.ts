import { Component, OnInit } from '@angular/core';
import { GraphData } from '../shared/interface/graphInterface';
import { RepositoryService } from '../shared/services/repository.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  graphData: GraphData[];
  graph : GraphData[];

  constructor(private repo: RepositoryService) { }

  ngOnInit() {
    this.repo.getData('results')
    .subscribe((res: GraphData[]) => {
      console.log("User", res);
      this.graphData = res;
    })
  }

}
