import { Injectable } from '@angular/core';

@Injectable()
export class Population{
  state: string;
  unacknowledged_alarm: number;

  acknowledged_alarm: number;

  unacknowledged_alert: number;

  acknowledged_alert: number;
  
}

const populationData: Population[] = [{
    state: 'area1',
     unacknowledged_alarm: 19.956,
    acknowledged_alarm : 14.472,
    unacknowledged_alert: 28.597,
    acknowledged_alert : 20.362,
  }, {
    state: 'area2',
    unacknowledged_alarm : 25.607,
    acknowledged_alarm : 3.727,
    unacknowledged_alert: 24.67,
    acknowledged_alert : 5.462,
  }, {
    state: 'area3',
    unacknowledged_alarm : 13.493,
    acknowledged_alarm: 5.802,
    unacknowledged_alert: 12.971,
    acknowledged_alert : 12.61,
  }, {
    state: 'area4',
     unacknowledged_alarm: 9.575,
     acknowledged_alarm:.024,
     unacknowledged_alert: 9.105,
     acknowledged_alert: 12.501,
  }, {
    state: 'area5',
    unacknowledged_alarm : 17.306,
    acknowledged_alarm: 1.927,
    unacknowledged_alert: 16.632,
    acknowledged_alert : 2.391,
  }, {
    state: 'area6',
    unacknowledged_alarm : 6.679,
    acknowledged_alarm: 5.133,
    unacknowledged_alert: 6.333,
    acknowledged_alert: 8.318,
  }, {
    state: 'area7',
    unacknowledged_alarm: 5.816,
    acknowledged_alarm: 3.864,
    unacknowledged_alert: 5.519,
    acknowledged_alert: 5.459,
  }]
  
  @Injectable()
  export class Service {
    getPopulationData(): Population[] {
      return populationData;
    }
  }



