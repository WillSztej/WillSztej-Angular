import { Component, ViewChild } from "@angular/core";
import { IntlService } from "@progress/kendo-angular-intl";
import { LegendLabelsContentArgs } from "@progress/kendo-angular-charts";
import { GithubService } from "../github.service";
import { LangStats } from "../models/lang-stats";

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent {


  // public pieData: any[] = []


  public pieData: any[] = [
    { category: "Python", value: 0.0344 },
    { category: "Java", value: 0.2257 },
    { category: "HTML", value: 0.0214 },
    { category: "CSS", value: 0.6893 },
    { category: "TypeScript", value: 0.0206 },
    { category: "JavaScript", value: 0.0085 }
  ];


  public padding = 35
  public autoFit = true

  constructor(private intl: IntlService, private githubService: GithubService) {
    githubService.getReposLanguageStats().subscribe( (data: any) =>
      { this.pieData = data.map( (item: any) => {
        new LangStats(item.category, item.value)
      }); } )
    this.labelContent = this.labelContent.bind(this);
  }

  public labelContent(args: LegendLabelsContentArgs): string {
    return `${args.dataItem.category}: ${this.intl.formatNumber(
      args.dataItem.value,
      "p2"
    )}`;
  }

}
