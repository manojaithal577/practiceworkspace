import { Component, OnInit } from '@angular/core';
import { GraphData } from '../shared/interface/graphInterface';
import { RepositoryService } from '../shared/services/repository.service';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.css']
})
export class OwnerComponent implements OnInit {

  graphData: GraphData[];
  graph : GraphData[];

  constructor(private repo: RepositoryService) { }

  ngOnInit() {
    this.repo.getData('results')
    .subscribe((res: GraphData[]) => {
      console.log("Owner", res);
      this.graphData = res;
    })
  }
  

}
