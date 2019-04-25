import { Component, OnInit, Input } from '@angular/core';
import { GraphData } from '../shared/interface/graphInterface';
import { RepositoryService } from '../shared/services/repository.service';
import { GraphPlotService } from '../shared/services/graph-plot.service';
import { NgxSpinnerService } from 'ngx-spinner';
// import { img } from '../../assets/img/giphy.gif';
 

@Component({
  selector: 'app-graphs',
  templateUrl: './graphs.component.html',
  styleUrls: ['./graphs.component.css']
})
export class GraphsComponent implements OnInit {
  @Input() graphData: GraphData[];

  // graphData: GraphData[];
  month = [];
  price = [];
  chart = [];
  loading: Boolean;

  constructor(private repo: RepositoryService,
              private graph:GraphPlotService,
              private spinner: NgxSpinnerService) { 

  }

  ngOnInit() {
    /** spinner starts on init */
    this.loading = true;
    setTimeout(()=>{
      console.log("data",this.graphData);
      this.graphData.forEach(y => {
        this.month.push(y.month);
        this.price.push(y.price);
      });
      this.chart = this.graph.getGraph(this.month,this.price);
      /** spinner ends after 4 seconds */
      this.loading = false;
    },4000)
    

    // this.repo.getData('results')
    //   .subscribe((res: GraphData[]) => {
    //     // console.log("Results",res);
    //     res.forEach(y => {
    //       this.month.push(y.month);
    //       this.price.push(y.price);
    //     });

    //     this.chart = this.graph.getGraph(this.month,this.price)
    //     // console.log("Graph",this.chart);

    //   })
  }

}
