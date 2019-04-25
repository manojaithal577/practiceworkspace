import { Component, OnInit } from '@angular/core';
import { GraphData } from '../shared/interface/graphInterface';
import { RepositoryService } from '../shared/services/repository.service';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.css']
})
export class TrainerComponent implements OnInit {

  graphData: GraphData[];
  graph : GraphData[];

  constructor(private repo: RepositoryService) { }

  ngOnInit() {
    this.repo.getData('results')
    .subscribe((res: GraphData[]) => {
      console.log("Trainer", res);
      this.graphData = res;
    })
  }

}
